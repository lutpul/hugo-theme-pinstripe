---
title: "文本示例"
date: 2026-10-29T12:00:00+08:00
tags: ["demo"]
description: "把主题会用到的各种文本形态摆在一起：标题层级、强调、列表、表格、引用、脚注、公式、中英文混排。"
math: true
---

这篇不是文章，是一张对照表：主题（以及它现在用的 Ubuntu Light / Ubuntu Regular 两档英文字脸）在各种文本形态下长什么样。中文目前还是系统的微软雅黑，Serif 档下会变成华文宋体。

## 标题层级

主题把 h1 和 h2 画成一样大、加粗；h3、h4 稍小；h5、h6 在同字号下变灰。所以下面这五级才是正文里真正能用到的层次。

### 三级标题 Third level

#### 四级标题 Fourth level

##### 五级标题 Fifth level

###### 六级标题 Sixth level

## 中英文混排

Lutpul 是一个 Hugo 主题，每一页都是桌面灰上的一扇窗口：条纹标题栏、下沉的内容框、状态条，还有一排像素按钮。A page is one window, and the window is the page —— 这句话放在 12px 的字号里读起来刚刚好。

中文与 English 之间没有加空格；数字 2026、版本 v0.161.1、时间 12:00:00、比例 1.2 倍、区间 10–20px 混在同一行里。标点：逗号，句号。分号；冒号：问号？感叹号！引号「直角」、“弯引号”、‘单引号’；破折号 —— 这样；省略号…… 全角与半角 (half-width) 并用。

## 强调

**粗体：这一段的字重是 700，由浏览器对 Ubuntu Light 做合成加粗。**

*斜体：斜体没有对应文件，是合成倾斜，注意看它有没有发糊。*

***粗斜体：两者叠加的样子。***

~~删除线：一般用在“此段已作废”的地方。~~

`行内代码：hugo server --port 1313` 夹在中文句子里，字号比正文小 1px。

## 链接

站内链接写成 `[代码示例](/posts/code-sample/)`，会渲染成 [代码示例](/posts/code-sample/)；外部链接 [Hugo 官网](https://gohugo.io/) 会跑到新标签页吗——不会，主题没给它加 `target`。

一条很长的链接用来试折行：[https://example.org/very/long/path/that/keeps/going/index.html?query=1&sort=date](https://example.org/very/long/path/that/keeps/going/index.html?query=1&sort=date)。

## 引用

> 单层引用：主题给它一条 2px 的灰竖线，左边留 10px，文字变灰。
>
> 引用里可以换段。

> > 嵌套引用：第二层没有额外样式，只是又缩进一层。
> >
> > 里面也能写 **强调** 和 `代码`。

## 列表

无序列表：

- 第一项
- 第二项，带一段说明文字，故意写长一点，看它换行后和项目符号对不对齐
- 第三项
  - 嵌套项
  - 另一个嵌套项
    - 第三层

有序列表：

1. 第一步
2. 第二步
   1. 子步骤
   2. 子步骤
3. 第三步

任务清单（主题会把它画成 OS 9 风格的复选框）：

- [x] 已完成的事项，文字会被划掉并变灰
- [ ] 未完成的事项
- [ ] 中文 + English mixed task to check alignment

## 表格

| 字体 | 文件 | 用途 | 大小 |
| --- | :--- | :---: | ---: |
| Ubuntu Light | `Ubuntu-L.ttf` | 正文、界面（默认） | 415 KB |
| Ubuntu Regular | `Ubuntu-R.ttf` | `Regular` 档的英文 | 354 KB |
| Ubuntu Mono | `UbuntuMono-R.ttf` | 代码块 | 205 KB |

## 分隔线

上面的内容和下面的内容之间有一条 1px 的线。

---

## 脚注

正文里放一个脚注标记[^1]，再放第二个[^note]。列表在文末，比正文小 1px、颜色变灰。

## 数学公式

行内公式：质能方程 $E = mc^2$，勾股定理 $a^2 + b^2 = c^2$，还有一点点 $\LaTeX$ 味道的 $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$。

块级公式：

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

（公式靠 KaTeX 从 unpkg 的 CDN 加载，断网时会原样显示 `$...$`。）

## 代码

行内 `git log --oneline -12` 是这个样子。

```bash
hugo --minify --gc && echo "built"
```

## 数字与易混字符

0123456789 与 0O、1lI|、5S、2Z、8B、6G 放在一起看：等宽字里这些是不是一眼能分开。

符号：`{}[]()<>` `/*&^%$#@!~` `+ - × ÷ = ±` `© ® ™` `° ℃` `→ ← ↑ ↓` `… — –`。

## 一段长英文，用来看行长

The window is the page: a striped title bar, a sunken frame, a status strip along the bottom, and a row of pixel buttons underneath the text. Everything on this page is drawn from a single 720px-wide box, so the measure stays comfortable no matter how wide the browser window gets. If a paragraph runs long enough, you can see where the browser breaks the line, and whether the two bundled Latin faces hold their color at the same size.

[^1]: 第一条脚注：说明文字可以很长，长到换行为止。
[^note]: 第二条脚注，带一个 [链接](https://gohugo.io/)。
