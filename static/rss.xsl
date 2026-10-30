<?xml version="1.0" encoding="utf-8"?>
<!-- 给 /index.xml 用的样式表：浏览器打开订阅源时套上这一层，阅读器无视它。
     只输出「标题 + 日期 + 阅读全文」，不渲染 item 里的 description
     （那段是转义过的 HTML，XSLT 1.0 没法制服，浏览器也不一定支持反转移义）。 -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  exclude-result-prefixes="atom">
  <xsl:output method="html" encoding="utf-8" indent="yes"/>

  <xsl:template match="/rss/channel">
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="title"/> — RSS</title>
        <style>
          :root { --black:#262626; --g300:#ddd; --g400:#ccc; --quiet:#555; --hl:#333399; }
          * { box-sizing: border-box; }
          body { margin:0; padding:24px 12px 48px; background:var(--g400); color:var(--black);
                 font:12px/1.45 "Ubuntu Mono", ui-monospace, Menlo, Consolas, monospace;
                 -webkit-text-size-adjust:100%; }
          a { color:var(--hl); text-decoration:none; }
          a:hover { text-decoration:underline; }
          .window { max-width:720px; margin:0 auto; background:var(--g400);
                    border:1px solid var(--black); box-shadow:2px 2px 0 var(--black); }
          .titlebar { display:flex; align-items:center; gap:4px; padding:2px 4px; }
          .stripe { flex:1; height:12px; min-width:8px; background-color:var(--g300);
                    background-image:linear-gradient(#fff,#fff 50%,#777 50%,#777);
                    background-size:100% 2px; }
          .title { font-weight:bold; padding:0 4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
          .frame { margin:0 4px 4px; background:#fff; border:1px solid var(--black);
                   box-shadow:-1px -1px 0 #999, 1px 1px 0 #fff; }
          .head { padding:12px 16px; border-bottom:1px solid var(--g300); }
          .head p { margin:0 0 4px; }
          .head .feed { font-size:11px; color:var(--quiet); overflow-wrap:anywhere; }
          .items { padding:0 16px; }
          .item { display:flex; align-items:baseline; gap:12px; padding:6px 0;
                  border-bottom:1px solid var(--g300); }
          .item:first-child { border-top:1px solid var(--g300); }
          .item-title { font-weight:bold; flex:1 1 auto; min-width:0; }
          .item-date { font-size:11px; color:var(--quiet); white-space:nowrap; }
          .status { display:flex; gap:12px; padding:3px 16px; background:var(--g300);
                    border-top:1px solid var(--black); font-size:11px; color:#333; }
          .status :last-child { margin-left:auto; }
          @media (max-width:480px) { .item { flex-direction:column; gap:2px; } }
        </style>
      </head>
      <body>
        <div class="window">
          <div class="titlebar">
            <span class="stripe"></span>
            <span class="title"><xsl:value-of select="title"/> — RSS</span>
            <span class="stripe"></span>
          </div>
          <div class="frame">
            <div class="head">
              <p><xsl:value-of select="description"/></p>
              <xsl:if test="atom:link/@href">
                <p class="feed">订阅地址 <a href="{atom:link/@href}"><xsl:value-of select="atom:link/@href"/></a></p>
              </xsl:if>
            </div>
            <div class="items">
              <xsl:for-each select="item">
                <div class="item">
                  <a class="item-title" href="{link}"><xsl:value-of select="title"/></a>
                  <span class="item-date"><xsl:value-of select="substring(pubDate, 6, 11)"/></span>
                </div>
              </xsl:for-each>
            </div>
            <div class="status">
              <span><xsl:value-of select="count(item)"/> 条</span>
              <span>RSS 2.0 · <a href="/">回站点</a> · <a href="{atom:link/@href}">原始 XML</a></span>
            </div>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
