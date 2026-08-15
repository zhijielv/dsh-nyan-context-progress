# test-plugin-a-02 — 上下文长度 Nyan 进度条

一个 out-of-tree 的 dsh client 插件：在 dsh Web 窗口右下角显示当前会话的
**上下文长度占用**进度条，采用 Nyan 风格的彩虹动画填充条。

## 功能

- 使用官方 `shell.overlay` 槽位，渲染在窗口右下角。
- 数据来自官方 `contextPressure` 投影：
  - 已用 = `projectedTokens ?? pressureTokens`
  - 总量 = `contextWindow`
  - 显示 `~12.3K / 128K` 与百分比。
- 没有可用投影/容量时自动隐藏，不占位。
- 跟随当前会话切换，投影更新时实时刷新。

## 构建与自检

```sh
node build.mjs          # 生成 lib/client.js + lib/index.js
node scripts/selfcheck.mjs  # 验证 bundle 契约与槽位注册
tsc -p tsconfig.json    # 类型检查
```

构建使用 esbuild：优先本地安装，否则回退到本机 dsh 仓库的 `.pnpm` 缓存，无需联网。

## 安装到 dsh web profile

```sh
dsh plugin --profile web add D:\Projects\GithubProjects\deepseek-harness-plugins\test-plugin-A-02
```

然后在 `$DSH_HOME/profiles/web/cordis.patch.yml` 追加挂载：

```yaml
- insert:
    - id: test-plugin-a-02
      name: 'test-plugin-a-02'
```

重启 dsh web 后，右下角会出现上下文进度条。

卸载：

```sh
dsh plugin --profile web remove test-plugin-a-02
```

并把 patch 里的对应行删除。

## 目录

```text
src/client/index.tsx   # 浏览器端插件：注册 shell.overlay + 进度条组件
scripts/selfcheck.mjs  # 无浏览器 bundle 契约自检
lib/                   # 构建产物（client 面 + node 面）
.trellis/              # Trellis 任务/规范（由 trellis init 生成）
```

## 后续可扩展

- 5 小时限额剩余量
- 其他可自定义的进度指标
- 设置项（开关、位置、样式）
