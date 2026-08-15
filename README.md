# dsh-nyan-context-progress — 上下文长度 Nyan 进度条

一个 out-of-tree 的 dsh client 插件：在 dsh Web 窗口右下角显示当前会话的
**上下文长度占用**进度条，复刻 JetBrains NyanProgressBar 的确定态视觉效果。

## 功能

- 使用官方 `shell.overlay` 槽位，渲染在窗口右下角。
- 数据来自官方 `contextPressure` 投影：
  - 已用 = `projectedTokens ?? pressureTokens`
  - 总量 = `contextWindow`
  - 百分比 = `min(100, round(used / contextWindow * 100))`
- 视觉复刻 JetBrains 原版：薄圆角轨道 + 竖直 7 色彩虹填充 + 原版 Nyan Cat；猫停在进度条前端，原地播放原版 6 帧跑步序列动画（帧来自 `iliana/html5nyancat`）。
- 根元素为 200x20 小条，不遮挡/不拦截下方 UI；鼠标悬浮时显示原生提示 `Context 50%`。
- 支持鼠标/触摸拖拽移动位置，位置会保存在本地（刷新后保持）。
- 没有可用投影/容量时自动隐藏，不占位。
- 跟随当前会话切换，投影更新时实时刷新。
- 视觉风格来自 JetBrains NyanProgressBar 开源仓库（`batya239/NyanProgressBar`）。
- 跑步序列帧来自原版 HTML5 Nyan Cat 动画（`iliana/html5nyancat`），作为资源内联进 bundle。

## 构建与自检

```sh
node build.mjs          # 生成 lib/client.js + lib/index.js
node scripts/selfcheck.mjs  # 验证 bundle 契约与槽位注册
tsc -p tsconfig.json    # 类型检查
```

构建使用 esbuild：优先本地安装，否则回退到本机 dsh 仓库的 `.pnpm` 缓存，无需联网。

## 安装到 dsh web profile

先获取源码（或直接用本地已克隆的目录）：

```sh
git clone <你的仓库地址>
dsh plugin --profile web add <repo-path>/dsh-nyan-context-progress
```

然后在 `$DSH_HOME/profiles/web/cordis.patch.yml` 追加挂载：

```yaml
- insert:
    - id: dsh-nyan-context-progress
      name: 'dsh-nyan-context-progress'
```

重启 dsh web 后，右下角会出现上下文进度条。

卸载：

```sh
dsh plugin --profile web remove dsh-nyan-context-progress
```

并把 patch 里的对应行删除。

## 目录

```text
src/client/index.tsx   # 浏览器端插件：注册 shell.overlay + 进度条组件
src/client/assets/     # 原版 Nyan Cat 跑步序列帧（SVG，内联进 bundle）
scripts/selfcheck.mjs  # 无浏览器 bundle 契约自检
lib/                   # 构建产物（client 面 + node 面）
.trellis/              # Trellis 任务/规范（由 trellis init 生成）
```

## 后续可扩展

- 5 小时限额剩余量
- 其他可自定义的进度指标
- 设置项（开关、位置、样式）
