// 代码块右上角的复制按钮。按钮不在 HTML 里：页面脚本给每个
// .content pre 套一层 .codeblock，再把按钮放进去——没有脚本时
// 页面和原来完全一样，不出现一个点了没反应的按钮。
// 复制的文字取自 pre 的 innerText（高亮块也一样），所以从正文里
// 选中复制和点按钮得到的是同一份代码，行尾多余的空行会去掉。
(() => {
  const pres = document.querySelectorAll(".content pre");
  if (!pres.length) return;

  const write = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      // 非安全上下文（http、file）里没有 clipboard API，退回到老办法
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (e2) {}
      ta.remove();
      return ok;
    }
  };

  for (const pre of pres) {
    // 高亮块的结构是 .highlight > pre，按钮要挂在外层，位置才对得上框
    const box = pre.closest(".highlight") || pre;
    if (box.parentElement && box.parentElement.classList.contains("codeblock")) continue;

    const wrap = document.createElement("div");
    wrap.className = "codeblock";
    box.parentNode.insertBefore(wrap, box);
    wrap.appendChild(box);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy";
    btn.title = "Copy";
    btn.setAttribute("aria-label", "Copy code");
    wrap.appendChild(btn);

    btn.addEventListener("click", async () => {
      const ok = await write(pre.innerText.replace(/\n+$/, ""));
      btn.classList.toggle("copied", ok);
      btn.title = ok ? "Copied" : "Copy failed";
      btn.setAttribute("aria-label", ok ? "Copied" : "Copy failed");
      clearTimeout(btn._t);
      btn._t = setTimeout(() => {
        btn.classList.remove("copied");
        btn.title = "Copy";
        btn.setAttribute("aria-label", "Copy code");
      }, 1400);
    });
  }
})();
