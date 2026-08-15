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
 * Nyan cat sprite at the leading edge. It is deliberately non-interactive
 * (`pointer-events: none`) so it never blocks the underlying dsh UI.
 */
import { useCallback, useSyncExternalStore } from 'react'
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

/** Required cordis services: the slot registry and the sessions service. */
export const inject = ['slots', 'sessions']

/**
 * Plugin body: wait for the official `shell.overlay` declaration, then register
 * the bottom-right Nyan context progress bar into it.
 * @param ctx - client root context.
 */
export function apply(ctx: Context): void {
  const ContextProgress = ({ useSessions }: OverlayProps): JSX.Element | null => {
    const currentId = useSessions(s => s.current)

    // Root-scope slots do not receive the session `useProjection` seat, so we
    // subscribe to the current session's projection face directly. We also
    // subscribe to the sessions list/provide-info feeds so a binding that is
    // materialized after the first render can re-arm this subscription.
    const pressure = useSyncExternalStore(
      useCallback((onStoreChange: () => void) => {
        const unsubscribe: Array<() => void> = []
        if (currentId !== undefined) {
          const face = ctx.sessions.binding(currentId)?.session.projections.faceOf('contextPressure')
          if (face !== undefined) unsubscribe.push(face.subscribe(onStoreChange))
        }
        unsubscribe.push(ctx.sessions.list.subscribe(onStoreChange))
        unsubscribe.push(ctx.sessions.currentProvideInfo.subscribe(onStoreChange))
        return () => { for (const off of unsubscribe) off() }
      }, [ctx, currentId]),
      useCallback(() => {
        if (currentId === undefined) return undefined
        const face = ctx.sessions.binding(currentId)?.session.projections.faceOf('contextPressure')
        return face?.getSnapshot() as ContextPressureProjection | undefined
      }, [ctx, currentId]),
    )

    const context = contextOccupancy(pressure)
    if (context === null) return null

    return (
      <div
        role="progressbar"
        aria-label={`上下文已用 ${context.percent}%`}
        aria-valuenow={context.percent}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          position: 'absolute',
          right: 8,
          bottom: 6,
          width: 200,
          height: 20,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
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
                border: '1px solid transparent',
                borderRadius: 7,
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.12)',
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
