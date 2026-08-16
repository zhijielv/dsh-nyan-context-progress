# dsh-nyan-context-progress

一个 **dsh Web 客户端插件**：在窗口右下角显示当前会话的上下文长度占用进度条，复刻 JetBrains NyanProgressBar 的确定态视觉效果。数据来自官方 `contextPressure` 投影，猫会原地播放原版 6 帧跑步动画。

## 功能

- 使用官方 `shell.overlay` 槽位，渲染在窗口右下角，不遮挡下方 UI。
- 数据来自官方 `contextPressure` 投影：
  - 已用 = `projectedTokens ?? pressureTokens`
  - 总量 = `contextWindow`
  - 百分比 = `min(100, round(used / contextWindow * 100))`
- 视觉复刻 JetBrains 原版：薄圆角轨道 + 竖直 7 色彩虹填充 + 原版 Nyan Cat。
- 猫停在进度条前端，原地播放原版 6 帧跑步序列动画。
- 根元素为 `200x20` 小条；鼠标悬浮显示原生提示 `Context 50%`。
- 支持鼠标/触摸拖拽移动位置，位置保存在本地（刷新后保持）。
- 没有可用投影/容量时自动隐藏，不占位。
- 跟随当前会话切换，投影更新时实时刷新。
- `lib/` 已提交构建产物，普通安装无需本地构建。

## 环境要求

- dsh Web profile（基于 `@deepseek-ai/dsh-web-app`）
- 现代浏览器（支持 React 18 与 es2022）
- 普通安装：不需要 Node/npm 环境，因为 `lib/` 已包含构建产物
- 二次开发：需要 Node.js 及 `deepseek-harness` 源码目录（见「开发」节）

## 安装

### 1. 获取源码

```sh
git clone git@github.com:zhijielv/dsh-nyan-context-progress.git
cd dsh-nyan-context-progress
```

> 也可以使用 HTTPS：
> ```sh
> git clone https://github.com/zhijielv/dsh-nyan-context-progress.git
> ```

### 2. 添加到 dsh web profile

```sh
dsh plugin --profile web add "$PWD"
```

### 3. 挂载插件

在 `$DSH_HOME/profiles/web/cordis.patch.yml` 追加：

```yaml
- insert:
    - id: dsh-nyan-context-progress
      name: 'dsh-nyan-context-progress'
```

### 4. 重启

重启 dsh web 后，右下角会出现上下文进度条。

### 卸载

```sh
dsh plugin --profile web remove dsh-nyan-context-progress
```

并删除 `cordis.patch.yml` 中对应的挂载行。

## 使用

- 默认出现在右下角，`200x20` 像素。
- 鼠标悬停显示 `Context <百分比>%`。
- 按住拖拽可移动位置，位置会保存在浏览器本地存储中。
- 当前会话没有 `contextPressure` 数据或没有容量信息时，进度条自动隐藏。

## 开发

### 目录结构

```text
src/client/index.tsx      # 浏览器端插件：注册 shell.overlay + 进度条组件
src/client/assets/        # 原版 Nyan Cat 跑步序列帧（SVG，内联进 bundle）
scripts/selfcheck.mjs     # 无浏览器 bundle 契约自检
lib/                      # 构建产物（client 面 + node 面），已提交
build.mjs                 # esbuild 构建脚本
package.json              # 插件元数据与 dsh client 注入声明
```

### 命令

```sh
node build.mjs              # 生成 lib/client.js + lib/index.js
node scripts/selfcheck.mjs  # 验证 bundle 契约与槽位注册
tsc -p tsconfig.json        # 类型检查
```

### 开发依赖说明

`build.mjs` 会优先使用本地 `node_modules/esbuild`，否则回退到 sibling 目录的 `deepseek-harness` 仓库 `.pnpm` 缓存；`tsconfig.json` 也依赖 `../../deepseek-harness` 的类型声明路径。因此**二次构建/类型检查**需要把官方 `deepseek-harness` 仓库放在本项目上级目录（`../deepseek-harness`）。普通安装/使用不需要这些。

## 数据说明

- 投影名称：`contextPressure`
- 已用 token：优先 `projectedTokens`，回退 `pressureTokens`
- 总量：`contextWindow`
- 百分比上限：`100%`

## 致谢

- 视觉风格参考 [batya239/NyanProgressBar](https://github.com/batya239/NyanProgressBar)
- 跑步序列帧来自 [iliana/html5nyancat](https://github.com/iliana/html5nyancat)

## License

[MIT](./LICENSE)