var module = { exports: {} }; var exports = module.exports;
window.__ModuleLoader__.load({ id: "test-plugin-a-02", factory: (require) => {
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function formatTokens(n) {
  const scaled = (v) => v >= 100 ? String(Math.round(v)) : String(Math.round(v * 10) / 10);
  if (n < 1e3) return String(n);
  if (n < 1e6) return `${scaled(n / 1e3)}K`;
  return `${scaled(n / 1e6)}M`;
}
function contextOccupancy(pressure) {
  const usedTokens = pressure?.projectedTokens ?? pressure?.pressureTokens;
  if (usedTokens === void 0 || pressure?.contextWindow === void 0) return null;
  return {
    percent: Math.min(100, Math.round(usedTokens / pressure.contextWindow * 100)),
    usedTokens,
    contextWindow: pressure.contextWindow
  };
}
var inject = ["slots", "sessions"];
function apply(ctx) {
  const ContextProgress = ({ useSessions }) => {
    const currentId = useSessions((s) => s.current);
    const pressure = (0, import_react.useSyncExternalStore)(
      (0, import_react.useCallback)((onStoreChange) => {
        if (currentId === void 0) return () => {
        };
        const face = ctx.sessions.binding(currentId)?.session.projections.faceOf("contextPressure");
        return face === void 0 ? () => {
        } : face.subscribe(onStoreChange);
      }, [ctx, currentId]),
      (0, import_react.useCallback)(() => {
        if (currentId === void 0) return void 0;
        const face = ctx.sessions.binding(currentId)?.session.projections.faceOf("contextPressure");
        return face?.getSnapshot();
      }, [ctx, currentId])
    );
    const context = contextOccupancy(pressure);
    if (context === null) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        role: "status",
        "aria-label": `\u4E0A\u4E0B\u6587\u5DF2\u7528 ${context.percent}%`,
        style: {
          position: "absolute",
          right: 12,
          bottom: 12,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: 8,
          minWidth: 180,
          padding: "6px 10px",
          borderRadius: 10,
          boxSizing: "border-box",
          background: "rgba(18, 20, 28, 0.82)",
          border: "1px solid rgba(255, 255, 255, 0.14)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.28)",
          backdropFilter: "blur(6px)",
          color: "rgba(255, 255, 255, 0.92)",
          fontFamily: "inherit",
          fontSize: 11,
          lineHeight: 1.3,
          userSelect: "none",
          pointerEvents: "auto"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes dsh-context-rainbow {
            from { background-position: 0% 0; }
            to { background-position: 200% 0; }
          }
          @keyframes dsh-context-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          @media (prefers-reduced-motion: reduce) {
            .dsh-context-fill { animation: none !important; }
            .dsh-context-cat { animation: none !important; }
          }
        ` }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              className: "dsh-context-cat",
              role: "img",
              "aria-hidden": true,
              style: {
                fontSize: 18,
                animation: "dsh-context-bounce 0.9s steps(2) infinite"
              },
              children: "\u{1F431}"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", gap: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u4E0A\u4E0B\u6587" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { fontVariantNumeric: "tabular-nums" }, children: [
                context.percent,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                style: {
                  height: 6,
                  margin: "3px 0",
                  borderRadius: 999,
                  overflow: "hidden",
                  background: "rgba(255, 255, 255, 0.12)"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    className: "dsh-context-fill",
                    style: {
                      width: `${context.percent}%`,
                      height: "100%",
                      borderRadius: "inherit",
                      background: "linear-gradient(90deg, #ff0040, #ff8000, #ffe600, #33cc33, #00ccff, #5555ff, #aa00ff, #ff0040)",
                      backgroundSize: "200% 100%",
                      animation: "dsh-context-rainbow 1.2s linear infinite"
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { color: "rgba(255, 255, 255, 0.66)", fontVariantNumeric: "tabular-nums" }, children: [
              "~",
              formatTokens(context.usedTokens),
              " / ",
              formatTokens(context.contextWindow)
            ] })
          ] })
        ]
      }
    );
  };
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "context-progress"
  }, ContextProgress));
}
return module.exports; } });
