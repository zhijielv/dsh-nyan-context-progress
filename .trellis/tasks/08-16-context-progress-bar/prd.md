# A-02 上下文长度进度条插件

## Goal

在 dsh Web 窗口右下角提供一个 Nyan 风格的美化进度条，用来展示当前会话的上下文长度占用情况。当前先实现上下文长度一项，后续可扩展为 5 小时限额剩余量等其他进度指标。

## Requirements

- 插件位于 `test-plugin-A-02/`，独立于 A-01，不参考/复用 A-01 代码。
- 只参考官方 dsh API/文档；本插件使用官方 client 插件机制。
- 在 dsh Web 窗口右下角渲染进度条，使用官方 `shell.overlay`（`@deepseek-ai/dsh-client-ui-layout/client`）槽位，`id` 为 `context-progress`。
- “上下文长度”定义为官方 token 占用（`contextPressure` 投影），不是字符数。
- 数据来源使用官方 `contextPressure` 投影（`@deepseek-ai/dsh-token-meter/client`）：
  - 已用 tokens = `projectedTokens ?? pressureTokens`
  - 总容量 = `contextWindow`
  - 百分比 = `min(100, round(used / contextWindow * 100))`
- 仅当 `usedTokens` 和 `contextWindow` 都可用时显示；缺失时隐藏，不占位。
- 进度条为 Nyan 风格：彩色（彩虹）动画填充条 + 简洁文本（如 `~12.3K / 128K` 和百分比）。
- 跟随当前会话切换；会话投影更新时进度条自动更新；切换会话时清理旧订阅。
- 使用 `ctx.slots.inject('shell.overlay', ...)` 等待官方槽位声明，避免插件加载顺序问题。
- 无额外运行时依赖；样式使用内联 style + 注入的 CSS keyframes，不引入第三方 UI/动画库。
- 插件按 dsh client 插件契约构建：`lib/client.js` 通过 `window.__ModuleLoader__.load({ id, factory })` 交付，导出 `apply`/`inject`。

## Acceptance Criteria

- [ ] `test-plugin-A-02` 中可通过 `node build.mjs` 构建出 `lib/client.js` 与 `lib/index.js`。
- [ ] `node scripts/selfcheck.mjs` 通过：验证 bundle id、`apply`/`inject` 导出、注册到 `shell.overlay` 且 `id` 为 `context-progress`。
- [ ] 不包含对 `test-plugin-A-01` 的任何 import/路径/代码复制。
- [ ] 进度条渲染在窗口右下角，`pointer-events` 不遮挡下方 UI（仅自身区域可交互）。
- [ ] 无会话或尚无 `contextPressure`/`contextWindow` 时不渲染。
- [ ] 有数据时显示百分比与 `~used / max` 文本。
- [ ] 切换当前会话时读取新会话的 `contextPressure`，并取消旧会话订阅。

## Definition of Done

- 构建成功，selfcheck 通过。
- 文档（README）说明安装方式与功能。
- 代码经过 Trellis check：类型、构建、契约检查通过。

## Out of Scope

- 5 小时限额剩余量等其他指标（后续版本）。
- 配置界面、开关、主题设置。
- 修改 dsh 仓库本体。
- 浏览器端 E2E 测试（本阶段用构建/契约 selfcheck 验证）。

## Technical Notes

- 官方槽位：`packages/client/ui-layout/src/client/index.ts` 中 `shell.overlay` 为 `{ kind: 'list'; scope: 'root' }`，适用于窗口级浮动层。
- 官方投影：`packages/llm/token-meter/src/projection.ts` 中 `ContextPressureProjection` 提供 `pressureTokens` / `projectedTokens` / `contextWindow`。
- 根 scope 槽位没有 `useProjection` 标准 prop，需通过 `ctx.sessions.binding(sessionId)?.session.projections.faceOf('contextPressure')` 订阅投影。
- 构建契约参考官方 client bundle 预设（`window.__ModuleLoader__.load` + 平台模块 external）。
