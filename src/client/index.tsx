/**
 * Browser half of test-plugin-a-02: a Nyan-style context-length progress bar.
 *
 * The component registers into the official `shell.overlay` slot declared by
 * @deepseek-ai/dsh-client-ui-layout. That slot is a root-scope floating layer,
 * so the component reads the current session through the global `useSessions`
 * seat and subscribes to the official `contextPressure` projection through
 * `ctx.sessions.binding(id)?.session.projections.faceOf('contextPressure')`.
 */
import { useCallback, useSyncExternalStore } from 'react'
import type { Context } from '@deepseek-ai/cordis'
import type { PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
// Type-only: pulls the `shell.overlay` SlotMap row and the `useSessions` global seat.
import type {} from '@deepseek-ai/dsh-client-ui-layout/client'
import type {} from '@deepseek-ai/dsh-client-runtime/client'
import type { ContextPressureProjection } from '@deepseek-ai/dsh-token-meter/client'

/** Composed props of a `shell.overlay` list entry (root scope, no owner props). */
type OverlayProps = PropsRuntime<'shell.overlay'>

/** Compact token count: 517 / 12.3K / 1.2M (one decimal below three digits). */
function formatTokens(n: number): string {
  const scaled = (v: number): string =>
    v >= 100 ? String(Math.round(v)) : String(Math.round(v * 10) / 10)
  if (n < 1_000) return String(n)
  if (n < 999_500) return `${scaled(n / 1_000)}K`
  return `${scaled(n / 1_000_000)}M`
}

/** Derived context occupancy from the official projection; null until both sides are known. */
function contextOccupancy(
  pressure: ContextPressureProjection | undefined,
): { percent: number; usedTokens: number; contextWindow: number } | null {
  const usedTokens = pressure?.projectedTokens ?? pressure?.pressureTokens
  if (usedTokens === undefined || pressure?.contextWindow === undefined || pressure.contextWindow <= 0) return null
  return {
    percent: Math.min(100, Math.round(usedTokens / pressure.contextWindow * 100)),
    usedTokens,
    contextWindow: pressure.contextWindow,
  }
}

/** Required cordis services: the slot registry and the sessions service. */
export const inject = ['slots', 'sessions']

/**
 * Plugin body: wait for the official `shell.overlay` declaration, then register
 * the bottom-right context progress bar into it.
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
          right: 12,
          bottom: 12,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          minWidth: 180,
          padding: '6px 10px',
          borderRadius: 10,
          boxSizing: 'border-box',
          background: 'rgba(18, 20, 28, 0.82)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.28)',
          backdropFilter: 'blur(6px)',
          color: 'rgba(255, 255, 255, 0.92)',
          fontFamily: 'inherit',
          fontSize: 11,
          lineHeight: 1.3,
          userSelect: 'none',
          pointerEvents: 'auto',
        }}
      >
        <style>{`
          @keyframes a02-context-rainbow {
            from { background-position: 0% 0; }
            to { background-position: 200% 0; }
          }
          @keyframes a02-context-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          @media (prefers-reduced-motion: reduce) {
            .a02-context-fill { animation: none !important; }
            .a02-context-cat { animation: none !important; }
          }
        `}</style>
        <span
          className="a02-context-cat"
          aria-hidden
          style={{
            fontSize: 18,
            animation: 'a02-context-bounce 0.9s steps(2) infinite',
          }}
        >
          🐱
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
            <span>上下文</span>
            <span style={{ fontVariantNumeric: 'tabular-nums' }}>{context.percent}%</span>
          </div>
          <div
            style={{
              height: 6,
              margin: '3px 0',
              borderRadius: 999,
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.12)',
            }}
          >
            <div
              className="a02-context-fill"
              style={{
                width: `${context.percent}%`,
                height: '100%',
                borderRadius: 'inherit',
                background: 'linear-gradient(90deg, #ff0040, #ff8000, #ffe600, #33cc33, #00ccff, #5555ff, #aa00ff, #ff0040)',
                backgroundSize: '200% 100%',
                animation: 'a02-context-rainbow 1.2s linear infinite',
              }}
            />
          </div>
          <div style={{ color: 'rgba(255, 255, 255, 0.66)', fontVariantNumeric: 'tabular-nums' }}>
            ~{formatTokens(context.usedTokens)} / {formatTokens(context.contextWindow)}
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
