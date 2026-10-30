// 顶条上那组按钮：− + 调字号，两个 Aa 调字重，Wrap 让代码块折行或左右滑。
// 读者选的值记在 localStorage 里，下一页在第一帧之前就套上，全文跟着走。
// 宽屏和窄屏是同一份设置：手机上（≤480px）只是不摆这组按钮，宽屏上选过的
// 字号 / 粗细 / 折行在手机上照样生效。
(() => {
  const doc = document.documentElement,
    KEY = "lutpul-type",
    BASE = 12,
    MIN = 10,
    MAX = 20,
    clamp = (n) => Math.max(MIN, Math.min(MAX, n));

  let size = BASE,
    serif = false,
    wrap = false;
  try {
    const kept = JSON.parse(localStorage.getItem(KEY) || "null");
    if (kept) {
      size = clamp(parseInt(kept.size, 10) || BASE);
      serif = !!kept.serif;
      wrap = !!kept.wrap;
    }
  } catch (e) {}

  const apply = () => {
    doc.style.setProperty("--ts", size + "px");
    doc.classList.toggle("serif", serif);
    doc.classList.toggle("code-wrap", wrap);
    doc.classList.toggle("ts-min", size <= MIN);
    doc.classList.toggle("ts-max", size >= MAX);
    for (const b of document.querySelectorAll(".type [data-type]")) {
      const t = b.dataset.type;
      if (t === "sans" || t === "serif") {
        b.setAttribute("aria-pressed", String((t === "serif") === serif));
      }
      if (t === "wrap") {
        b.setAttribute("aria-pressed", String(wrap));
      }
      if (t === "smaller" || t === "bigger") {
        b.disabled = t === "smaller" ? size <= MIN : size >= MAX;
      }
    }
    try {
      localStorage.setItem(KEY, JSON.stringify({ size, serif, wrap }));
    } catch (e) {}
  };

  // the buttons keep their place without script and are unseen; with it
  // they are the reader's
  doc.classList.add("type-on");
  apply();

  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest(".type [data-type]");
    if (!b) return;
    const t = b.dataset.type;
    if (t === "bigger") size = clamp(size + 1);
    else if (t === "smaller") size = clamp(size - 1);
    else if (t === "sans") serif = false;
    else if (t === "serif") serif = true;
    else if (t === "wrap") wrap = !wrap;
    else return;
    apply();
  });
})();
