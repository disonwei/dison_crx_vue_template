# 谷歌开发工具模版


使用 --target 标志指示 Plasmo 为特定浏览器和清单版本构建扩展：
```shell
plasmo dev --target=firefox-mv2
plasmo build --target=firefox-mv2
```


要创建准备上传到网上商店的生产 zip 包，请使用 package 命令：
```shell
pnpm package

```

如果您想将构建和打包过程结合起来，请使用 --zip 标志和 build 命令

```shell
pnpm build --zip
```


tabs 标签页
- 用户首次安装您的扩展程序时显示的页面。
- 用于身份验证的专用页面
- 当您需要更精细的路由设置时
目录: src/tabs