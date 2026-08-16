# dsh-nyan-context-progress

![Nyan Cat](src/client/assets/nyan/nyan1.svg)

dsh Web 客户端右下角上下文占用进度条，复刻 JetBrains NyanProgressBar 的确定态视觉。

## 功能

- 右下角 `200x20` 进度条，不遮挡下方 UI
- 基于官方 `contextPressure` 投影实时显示上下文占比
- 鼠标悬浮显示 `Context 50%`
- 支持拖拽并记住位置
- 无可用数据时自动隐藏
- `lib/` 已提交构建产物，普通安装无需编译

## 安装

```sh
git clone git@github.com:zhijielv/dsh-nyan-context-progress.git
cd dsh-nyan-context-progress
dsh plugin --profile web add "$PWD"
```

在 `$DSH_HOME/profiles/web/cordis.patch.yml` 追加：

```yaml
- insert:
    - id: dsh-nyan-context-progress
      name: 'dsh-nyan-context-progress'
```

重启 dsh web 后生效。

卸载：

```sh
dsh plugin --profile web remove dsh-nyan-context-progress
```

## 开发

```sh
node build.mjs              # 构建 lib/
node scripts/selfcheck.mjs  # 自检 bundle 契约
```

> 类型检查与二次构建依赖 sibling 目录的 `deepseek-harness` 源码；普通使用无需。

## 致谢

- [batya239/NyanProgressBar](https://github.com/batya239/NyanProgressBar)
- [iliana/html5nyancat](https://github.com/iliana/html5nyancat)

## License

[MIT](./LICENSE)