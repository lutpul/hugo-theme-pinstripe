# Pinstripe

**每一页，都是桌面灰上的一扇窗口。**

一个 Hugo 主题：整站只有一扇窗口——条纹标题栏、下沉的内容框、底部状态条、一排像素图标按钮；西文全等宽，中文走系统黑体；没有 hover 动效，没有卡片阴影，所有立体感都来自 1px 的双色斜面。

- 示例站：<https://lutpul.com>
- 许可：MIT（字体是另外的许可，见下方）

## 特性

- **一页一窗**：`baseof.html` 只画一扇窗口，标题栏 / 内容框 / 状态条 / 按钮行四段结构，所有页面共用
- **白金材质**：标题栏 1px 条纹、`inset` 双色斜面、2px 硬阴影，全部由 CSS 画，没有图片
- **像素图标**：导航按钮是内联 SVG，`shape-rendering="crispEdges"`，88×31 的站徽自动按像素画处理（`image-rendering: pixelated`）
- **阅读端可调**：文章页顶部有三组按钮——字号（10–20px）、字重（细 / 粗）、代码折行（折 / 滑），选择存 localStorage，全站生效
- **等宽西文**：Ubuntu Mono 两份（Regular / Bold）随主题分发，中文用系统黑体（苹方 / 雅黑 / 思源）＋ `font-weight` 取子集，不额外下载
- **代码块**：黑底终端、右上角复制按钮、超长行横向滑动（可切换折行）
- **版权表**：文章底部一张「本文标题 / 作者 / 时间 / 原始链接 / 版权声明 / 授权限制」定义表，逐篇可覆盖
- **友链页**：`data/links.yaml` 一个文件维护，两列网格，头像固定 32×32
- **RSS 美化**（可选）：`/index.xml` 带 XSLT 样式表，浏览器打开是白金风格页面，阅读器不受影响
- **响应式**：≤480px 时导航退化成 28px 图标、控件隐藏、代码改为横向滑动

## 安装

```bash
# 1. 作为 git submodule（推荐）
git submodule add https://github.com/lutpul/hugo-theme-pinstripe themes/hugo-theme-pinstripe

# 2. 或者 Hugo Module
hugo mod init github.com/you/your-site
hugo mod get github.com/lutpul/hugo-theme-pinstripe

# 3. 或者直接下载 zip 解压到 themes/
```

然后在 `hugo.yaml` 里：

```yaml
theme: hugo-theme-pinstripe
```

本地跑示例站点：

```bash
cd exampleSite
hugo server --themesDir ../..
```

## 需要自己准备的页面

主题只提供模板，下面这些页面要你建（示例站点里都有现成的可以抄）：

| 路径 | 内容 | 要求 |
|---|---|---|
| `content/about.md` | 关于页 | 无 |
| `content/archive/_index.md` | 归档页 | front matter 里写 `layout: archive` |
| `content/links.md` | 友链页 | front matter 里写 `layout: links`，数据放 `data/links.yaml` |
| `content/badge/index.md` | 站徽页 | 正文里用短码 `{{</* badge */>}}` |
| `content/posts/…` | 文章 | 建议用 page bundle（`posts/x/index.md`），图片放同目录 |

## 配置

`exampleSite/hugo.yaml` 里每一条都带注释，这里只列常改的：

```yaml
params:
  description: "站名下面的一行字，同时用作 meta description"
  avatar: /avatar.png          # 32×32 头像 + favicon
  footer: '页脚，支持 HTML'
  author: "作者名"             # 文章底部版权表
  license: CC BY-NC-SA 4.0
  licenseURL: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh
  aiPolicy: '授权限制那一整段，可带 HTML'
  email: you@example.com       # 页脚第二行
  links:                       # 页脚外部链接
    - name: GitHub
      url: https://github.com/you
    - name: Mastodon
      url: https://mastodon.social/@you
      rel: me
  # 底栏按钮开关，默认全开
  tags: true
  about: true
  friendLinks: true            # 友链页按钮
  rss: true
  badge: /badge/               # 写了才出现 Badge 按钮

pagination:
  pagerSize: 10
```

文章 front matter 可覆盖的键：`author`、`license`、`licenseURL`、`copyrightNote`、`aiPolicy`、`description`、`math`（加载 KaTeX）、`dir`/`pagelang`（整页方向与语言标记）。

### RSS 美化（可选，要动一次站点配置）

主题自带 `layouts/_default/rss.xml` 和 `static/rss.xsl`，会把 `/index.xml` 变成白金风格页面。要让浏览器认得 `.xsl`，站点配置里加三行：

```yaml
mediaTypes:
  application/xml:
    suffixes: [xml, xsl]
```

不想要就删掉站点里的 `layouts/_default/rss.xml`（或整个忽略主题的这份），`/index.xml` 会回到 Hugo 默认输出。**注意**：Chrome 已在弃用 XSLT，届时 Chrome 里会退化成裸 XML，阅读器全程不受影响。

## 字体与许可

| 文件 | 字体 | 许可 |
|---|---|---|
| `assets/fonts/UbuntuMono-R.woff2`、`UbuntuMono-B.woff2` | Ubuntu Mono | [Ubuntu Font Licence 1.0](licenses/UbuntuFontLicence-1.0.txt) |
| `assets/fonts/NotoSansSC-Light.woff2` | 思源黑体 Light（子集） | [SIL OFL 1.1](licenses/NotoSansSC-OFL.txt) |

中文不打包，走系统字体：`--cjk` 那条栈是「思源/Noto → 苹方 → 雅黑 → 文泉驿」，用 `font-weight` 选字重（细档 300、粗档 400）。要换西文字体，替换 `assets/fonts/` 里的文件即可 —— `head.html` 会给它们取指纹地址再注入 `style.css`，不用改路径。

## 致谢

- 视觉参考：Mac OS 9 的 Platinum 外观（窗口、斜面、状态条）
- 等宽西文：[Ubuntu Font Family](https://design.canonical.com/2010/09/the-ubuntu-font-family/)
- 中文：[思源黑体 / Noto Sans CJK](https://github.com/notofonts/noto-cjk)
- 生成器：[Hugo](https://gohugo.io/)

## License

代码 MIT，字体各自从其许可（见上）。
