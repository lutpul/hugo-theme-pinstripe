---
title: "图片示例"
date: 2026-08-22T07:00:00+08:00
tags: ["demo"]
description: "主题里各种图片形态的对照：独占一段的图套下沉框、行内小图不套、88×31 的像素徽章、竖图与大图、图片当链接用。"
---

这篇是图片的对照表。主题只对**独占一个段落的图片**做处理：套上 1px 黑框 + 下沉阴影 + 淡蓝底，像一张贴在纸上、压进框里的照片。行内小图、徽章不套框。

## 独占一段：会套上下沉框

![宽图](/posts/media-sample/photo-wide.jpg)

图片单独占一段（前后空行，Markdown 会包成 `<p><img></p>`），于是拿到边框和阴影。原来 800×500，会被压到窗口宽度内等比缩放。

## 图片 + 说明文字

![方图](/posts/media-sample/photo-square.jpg)

*说明：图片后面紧接一行斜体，读起来像图注。主题没有专门的 `figure`，斜体段落就够了。*

## 行内小图：不套框

段首放一张小图 ![徽章](/posts/media-sample/badge.png) 然后接着写字，因为图片不是独占一段，所以它老老实实待在文字流里，没有边框也没有背景——适合表情、徽章这种小东西。

## 88×31 的像素徽章

![Badge](/posts/media-sample/badge.png)

这张恰好是 88×31，主题把它当像素画处理：`image-rendering: pixelated`，缩放时不做插值，边缘保持硬边；而且即使它独占一段也不套框。

## 竖图

![竖图](/posts/media-sample/photo-tall.jpg)

400×600 的竖图，高度会按比例放大，超过窗口宽度时会先缩到宽度。

## 图片当链接

[![点一下回首页](/posts/media-sample/photo-square.jpg)](/)

图片外面套 `[ ]( )` 就成了链接；框和阴影跟着图片走，鼠标移上去没有额外动效（主题整体没有 hover 状态）。

## 附：文件放哪

这篇用的是 **page bundle**：`content/posts/media-sample/` 里放 `index.md` 和图片，引用写成 `/posts/media-sample/xxx.jpg`。也可以把图片统一扔进 `static/images/`，用 `/images/xxx.jpg` 引用（不会经过 Hugo 的处理管道，路径固定）。

## 一张普通的收尾图

![宽图再来一次](/posts/media-sample/photo-wide.jpg)

以上所有图都是示例文件，换成自己的直接替换同名文件即可。
