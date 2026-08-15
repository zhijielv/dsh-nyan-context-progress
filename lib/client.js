window.__ModuleLoader__.load({ id: "test-plugin-a-02", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
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

// src/client/assets/rsz_cat.png
var rsz_cat_default = "data:image/png;base64,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";

// src/client/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function contextOccupancy(pressure) {
  const usedTokens = pressure?.projectedTokens ?? pressure?.pressureTokens;
  if (usedTokens === void 0 || pressure?.contextWindow === void 0 || pressure.contextWindow <= 0) return null;
  return {
    percent: Math.min(100, Math.round(usedTokens / pressure.contextWindow * 100))
  };
}
var BAR_WIDTH = 200;
var BAR_HEIGHT = 20;
var DEFAULT_RIGHT = 8;
var DEFAULT_BOTTOM = 6;
var POS_STORAGE_KEY = "a02-context-progress-pos";
function loadPosition() {
  try {
    const raw = localStorage.getItem(POS_STORAGE_KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.left === "number" && typeof parsed.top === "number") {
      return { left: parsed.left, top: parsed.top };
    }
  } catch {
  }
  return null;
}
function savePosition(position) {
  try {
    localStorage.setItem(POS_STORAGE_KEY, JSON.stringify(position));
  } catch {
  }
}
var inject = ["slots", "sessions"];
function apply(ctx) {
  const ContextProgress = (_props) => {
    const sessionInfo = (0, import_react.useSyncExternalStore)(
      (0, import_react.useCallback)((onStoreChange) => ctx.sessions.currentProvideInfo.subscribe(onStoreChange), [ctx]),
      (0, import_react.useCallback)(() => ctx.sessions.currentProvideInfo.getSnapshot(), [ctx])
    );
    const pressure = (0, import_react.useSyncExternalStore)(
      (0, import_react.useCallback)((onStoreChange) => {
        const unsubscribe = [];
        const face = sessionInfo?.projections?.faceOf("contextPressure");
        if (face !== void 0) unsubscribe.push(face.subscribe(onStoreChange));
        unsubscribe.push(ctx.sessions.currentProvideInfo.subscribe(onStoreChange));
        return () => {
          for (const off of unsubscribe) off();
        };
      }, [ctx, sessionInfo]),
      (0, import_react.useCallback)(() => sessionInfo?.projections?.faceOf("contextPressure").getSnapshot(), [sessionInfo])
    );
    const [position, setPosition] = (0, import_react.useState)(loadPosition);
    const [dragging, setDragging] = (0, import_react.useState)(false);
    const positionRef = (0, import_react.useRef)(position);
    positionRef.current = position;
    const dragStartRef = (0, import_react.useRef)(null);
    const onPointerDown = (e) => {
      if (e.button !== 0) return;
      const left = positionRef.current?.left ?? window.innerWidth - BAR_WIDTH - DEFAULT_RIGHT;
      const top = positionRef.current?.top ?? window.innerHeight - BAR_HEIGHT - DEFAULT_BOTTOM;
      dragStartRef.current = { startX: e.clientX, startY: e.clientY, left, top };
      setDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
      e.preventDefault();
    };
    const onPointerMove = (e) => {
      const drag = dragStartRef.current;
      if (drag === null) return;
      const nextLeft = Math.min(Math.max(0, drag.left + e.clientX - drag.startX), window.innerWidth - BAR_WIDTH);
      const nextTop = Math.min(Math.max(0, drag.top + e.clientY - drag.startY), window.innerHeight - BAR_HEIGHT);
      const next = { left: nextLeft, top: nextTop };
      positionRef.current = next;
      setPosition(next);
    };
    const onPointerUp = (e) => {
      if (dragStartRef.current === null) return;
      dragStartRef.current = null;
      setDragging(false);
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
      if (positionRef.current !== null) savePosition(positionRef.current);
    };
    const context = contextOccupancy(pressure);
    if (context === null) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        role: "progressbar",
        "aria-label": `Context ${context.percent}%`,
        "aria-valuenow": context.percent,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        title: `Context ${context.percent}%`,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onPointerCancel: onPointerUp,
        style: {
          position: "absolute",
          left: position?.left,
          top: position?.top,
          right: position === null ? DEFAULT_RIGHT : void 0,
          bottom: position === null ? DEFAULT_BOTTOM : void 0,
          width: BAR_WIDTH,
          height: BAR_HEIGHT,
          zIndex: 1,
          pointerEvents: "auto",
          cursor: dragging ? "grabbing" : "grab",
          touchAction: "none",
          userSelect: "none"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "relative", width: "100%", height: "100%", pointerEvents: "none" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
            @keyframes a02-nyan-run {
              from { left: 0; }
              to { left: calc(100% - 32px); }
            }
            @media (prefers-reduced-motion: reduce) {
              #a02-nyan-cat { animation: none !important; left: 0 !important; }
            }
          ` }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 0, top: -6, width: "100%", height: 32, zIndex: 2, pointerEvents: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "img",
            {
              id: "a02-nyan-cat",
              src: rsz_cat_default,
              alt: "",
              width: 32,
              height: 32,
              style: {
                position: "absolute",
                left: 0,
                top: 0,
                imageRendering: "pixelated",
                animation: "a02-nyan-run 1.8s linear infinite alternate",
                willChange: "left",
                pointerEvents: "none"
              }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                borderRadius: 8
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  style: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    border: "1px solid rgba(120, 120, 120, 0.9)",
                    borderRadius: 7,
                    overflow: "hidden",
                    background: "rgba(255, 255, 255, 0.28)",
                    boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.35)"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: `${context.percent}%`,
                        background: "linear-gradient(180deg, #ff0000 0%, #ffc800 14.3%, #ffff00 28.6%, #00ff00 42.9%, #00ffff 57.1%, #0000ff 71.4%, #5a009d 100%)"
                      }
                    }
                  )
                }
              )
            }
          )
        ] })
      }
    );
  };
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "context-progress"
  }, ContextProgress));
}
return module.exports; } });
