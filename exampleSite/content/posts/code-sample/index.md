---
title: "代码示例"
date: 2026-09-26T09:00:00+08:00
tags: ["demo"]
---

这是一篇用来检查代码排版的示例文章：行内代码、围栏代码块、Hugo 高亮、长行折行、中文注释、斜体合成各来一份。

行内代码长这样：`hugo server -D`，夹在中文句子里 `--scale: 1.2` 也要看得清。较长的行内代码 `themes/lutpul/static/fonts/UbuntuMono-R.ttf` 应该整段不断字地贴着文字走。

## Shell

```bash
# 中文注释：把主题字体换成自带文件之后，构建产物落在 public/fonts/
hugo --minify --gc && rsync -av --delete public/ /var/www/blog/
curl -sS -H 'Content-Type: application/json' -d '{"name":"lutpul","tags":["hugo","mac-os-9","platinum"]}' https://example.org/api/v1/posts
```

## JavaScript

```js
// 长行不换行会撑破窗口，主题用 pre-wrap，会在任意处折回来
const apply = () => {
  doc.style.setProperty("--ts", size + "px");
  doc.classList.toggle("serif", serif);
  for (const b of document.querySelectorAll(".type [data-type]")) {
    b.setAttribute("aria-pressed", String((b.dataset.type === "serif") === serif));
  }
};
```

## Python

```python
import json
from pathlib import Path

def load_config(path: Path) -> dict:
    """读取 hugo.yaml 里 params 的一段，注释里的中文占两个字符宽。"""
    text = path.read_text(encoding="utf-8")
    return json.loads(json.dumps({"raw": text, "size": len(text)}))
```

## 斜体、粗体、删除线

```text
italic: the quick brown fox jumps over the lazy dog
bold:   the quick brown fox jumps over the lazy dog
```

没有斜体文件时，`italic` 由浏览器合成倾斜，可能比正文糊一点；这一点用肉眼对一下就知道了。

## 长行折行

```text
https://example.org/very/long/path/that/keeps/going/and/going/index.html?query=1&sort=date&page=2&utm_source=newsletter&utm_medium=email&utm_campaign=autumn
```

---

祝排版愉快。
