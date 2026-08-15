/**
 * Browser half of test-plugin-a-02: a JetBrains Nyan-Progress-Bar style
 * context-length progress bar.
 *
 * The component registers into the official `shell.overlay` slot declared by
 * @deepseek-ai/dsh-client-ui-layout. That slot is a root-scope floating layer,
 * so the component reads the current session through the global `useSessions`
 * seat and subscribes to the official `contextPressure` projection through
 * `ctx.sessions.binding(id)?.session.projections.faceOf('contextPressure')`.
 *
 * The visual follows the original IntelliJ NyanProgressBar determinate look:
 * a thin rounded track, a vertical 7-color rainbow fill, and the plugin's own
 * Nyan cat sprite at the leading edge. The bar is a tiny non-blocking strip;
 * only the 200x20px bar itself is hoverable so a native tooltip can show the
 * current percentage.
 */
import {
  useCallback,
  useRef,
  useState,
  useSyncExternalStore,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import type { Context } from '@deepseek-ai/cordis'
import type { PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
// Type-only: pulls the `shell.overlay` SlotMap row and the `useSessions` global seat.
import type {} from '@deepseek-ai/dsh-client-ui-layout/client'
import type {} from '@deepseek-ai/dsh-client-runtime/client'
import type { ContextPressureProjection } from '@deepseek-ai/dsh-token-meter/client'
import catRight from './assets/rsz_cat.png'

/** Composed props of a `shell.overlay` list entry (root scope, no owner props). */
type OverlayProps = PropsRuntime<'shell.overlay'>

/** Derived context occupancy from the official projection; null until both sides are known. */
function contextOccupancy(
  pressure: ContextPressureProjection | undefined,
): { percent: number } | null {
  const usedTokens = pressure?.projectedTokens ?? pressure?.pressureTokens
  if (usedTokens === undefined || pressure?.contextWindow === undefined || pressure.contextWindow <= 0) return null
  return {
    percent: Math.min(100, Math.round(usedTokens / pressure.contextWindow * 100)),
  }
}

/** Fixed size of the progress strip. */
const BAR_WIDTH = 200
const BAR_HEIGHT = 20
const DEFAULT_RIGHT = 8
const DEFAULT_BOTTOM = 6
const POS_STORAGE_KEY = 'a02-context-progress-pos'

interface BarPosition {
  left: number
  top: number
}

function loadPosition(): BarPosition | null {
  try {
    const raw = localStorage.getItem(POS_STORAGE_KEY)
    if (raw === null) return null
    const parsed = JSON.parse(raw) as { left?: unknown; top?: unknown }
    if (typeof parsed.left === 'number' && typeof parsed.top === 'number') {
      return { left: parsed.left, top: parsed.top }
    }
  } catch {
    // Ignore unreadable/corrupt storage and fall back to the default corner.
  }
  return null
}

function savePosition(position: BarPosition): void {
  try {
    localStorage.setItem(POS_STORAGE_KEY, JSON.stringify(position))
  } catch {
    // Storage may be unavailable in some embedding contexts; dragging still works.
  }
}

/** Required cordis services: the slot registry and the sessions service. */
export const inject = ['slots', 'sessions']

/**
 * Plugin body: wait for the official `shell.overlay` declaration, then register
 * the bottom-right Nyan context progress bar into it.
 * @param ctx - client root context.
 */
export function apply(ctx: Context): void {
  const ContextProgress = (_props: OverlayProps): JSX.Element | null => {
    // Official useProjection reads the projection face off
    // `sessions.currentProvideInfo.projections`. Root-scope slots don't receive
    // that seat, so we bind the same source manually: subscribe to the current
    // provide bundle (session switches + roster changes) and to the projection
    // face it exposes.
    const sessionInfo = useSyncExternalStore(
      useCallback((onStoreChange: () => void) => ctx.sessions.currentProvideInfo.subscribe(onStoreChange), [ctx]),
      useCallback(() => ctx.sessions.currentProvideInfo.getSnapshot(), [ctx]),
    )
    const pressure = useSyncExternalStore(
      useCallback((onStoreChange: () => void) => {
        const unsubscribe: Array<() => void> = []
        const face = sessionInfo?.projections?.faceOf('contextPressure')
        if (face !== undefined) unsubscribe.push(face.subscribe(onStoreChange))
        unsubscribe.push(ctx.sessions.currentProvideInfo.subscribe(onStoreChange))
        return () => { for (const off of unsubscribe) off() }
      }, [ctx, sessionInfo]),
      useCallback(() => (
        sessionInfo?.projections?.faceOf('contextPressure').getSnapshot() as ContextPressureProjection | undefined
      ), [sessionInfo]),
    )

    const [position, setPosition] = useState<BarPosition | null>(loadPosition)
    const [dragging, setDragging] = useState(false)
    const positionRef = useRef<BarPosition | null>(position)
    positionRef.current = position
    const dragStartRef = useRef<{ startX: number; startY: number; left: number; top: number } | null>(null)

    const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>): void => {
      if (e.button !== 0) return
      const left = positionRef.current?.left ?? window.innerWidth - BAR_WIDTH - DEFAULT_RIGHT
      const top = positionRef.current?.top ?? window.innerHeight - BAR_HEIGHT - DEFAULT_BOTTOM
      dragStartRef.current = { startX: e.clientX, startY: e.clientY, left, top }
      setDragging(true)
      e.currentTarget.setPointerCapture(e.pointerId)
      e.preventDefault()
    }
    const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>): void => {
      const drag = dragStartRef.current
      if (drag === null) return
      const nextLeft = Math.min(Math.max(0, drag.left + e.clientX - drag.startX), window.innerWidth - BAR_WIDTH)
      const nextTop = Math.min(Math.max(0, drag.top + e.clientY - drag.startY), window.innerHeight - BAR_HEIGHT)
      const next = { left: nextLeft, top: nextTop }
      positionRef.current = next
      setPosition(next)
    }
    const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>): void => {
      if (dragStartRef.current === null) return
      dragStartRef.current = null
      setDragging(false)
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId)
      }
      if (positionRef.current !== null) savePosition(positionRef.current)
    }

    const context = contextOccupancy(pressure)
    if (context === null) return null

    return (
      <div
        role="progressbar"
        aria-label={`Context ${context.percent}%`}
        aria-valuenow={context.percent}
        aria-valuemin={0}
        aria-valuemax={100}
        title={`Context ${context.percent}%`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          position: 'absolute',
          left: position?.left,
          top: position?.top,
          right: position === null ? DEFAULT_RIGHT : undefined,
          bottom: position === null ? DEFAULT_BOTTOM : undefined,
          width: BAR_WIDTH,
          height: BAR_HEIGHT,
          zIndex: 1,
          pointerEvents: 'auto',
          cursor: dragging ? 'grabbing' : 'grab',
          touchAction: 'none',
          userSelect: 'none',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
          {/* Nyan cat rides at the leading edge of the fill, sticking above the bar. */}
          <img
            src={catRight}
            alt=""
            width={32}
            height={32}
            style={{
              position: 'absolute',
              left: `calc(${context.percent}% - 10px)`,
              top: -6,
              zIndex: 2,
              imageRendering: 'pixelated',
              pointerEvents: 'none',
            }}
          />
          {/* Rounded track, no dark card around it. */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              boxSizing: 'border-box',
              border: '1px solid rgba(255, 255, 255, 0.45)',
              borderRadius: 8,
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                border: '1px solid rgba(120, 120, 120, 0.9)',
                borderRadius: 7,
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.28)',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${context.percent}%`,
                  background: 'linear-gradient(180deg, #ff0000 0%, #ffc800 14.3%, #ffff00 28.6%, #00ff00 42.9%, #00ffff 57.1%, #0000ff 71.4%, #5a009d 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'context-progress',
  }, ContextProgress))
}
