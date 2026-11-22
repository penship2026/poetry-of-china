const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/reader.BmS58y3J.js","_astro/preload-helper.BlTxHScW.js"])))=>i.map(i=>d[i]);
import{_ as v}from"./preload-helper.BlTxHScW.js";const f=/[國雲風龍蟬聲陸車門馬鳥魚東長見說時間無為來個這裡後過還進遠邊點電頭題顏願飛鄉親愛夢樓蘭劍書畫筆萬與齊龜歲殘燈燭淚濕滿灑塵緣憶懷驚嘆舊歸辭亂離難誰謝識讀聽寫語論談記賦嶽]/,u=/[国见说时无来这个后过还进远边点电头题颜愿飞乡亲爱梦楼兰剑书画笔万与齐龟岁残灯烛泪湿满洒尘缘忆怀惊叹旧归辞乱离难谁谢识读听写语论谈记]/;function t(s){return s.replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a])}function p(s,a){s.innerHTML=`<div class="empty-state"><strong>${t(a)}</strong>可能链接不完整，或该篇未收录。<div class="links"><a class="btn" href="/browse/">去浏览</a><a class="btn" href="/search/">去检索</a></div></div>`}async function m(){const s=document.getElementById("poemMount");if(!s)return;const a=new URLSearchParams(location.search),d=a.get("id"),i=Number(a.get("s"));if(!d||!Number.isInteger(i)||i<0){p(s,"缺少诗篇编号");return}try{const e=await fetch(`/data/v1/text/${String(i).padStart(4,"0")}.json`,{cache:"force-cache"});if(!e.ok)throw new Error(String(e.status));const n=(await e.json()).find(c=>c.i===d);if(!n){p(s,"没有找到这首诗");return}$(s,n);const{initReader:l}=await v(async()=>{const{initReader:c}=await import("./reader.BmS58y3J.js");return{initReader:c}},__vite__mapDeps([0,1]));l(s),document.title=`${n.t} · ${n.a} · 中华古诗词`;const o=document.querySelector('meta[name="description"]');o&&o.setAttribute("content",`${n.d} · ${n.a}《${n.t}》：${n.p[0]||""}`)}catch{p(s,"诗篇载入失败")}}function $(s,a){const d=a.p.length>8,i=`${a.t}${a.a}${a.p.join("")}`,e=a.s?a.s==="trad"||a.s==="mixed":f.test(i),r=a.s?a.s==="simp"||a.s==="mixed":u.test(i),n=a.f??(e?"simp":r?"trad":""),l=n==="simp"?"简体":"繁体",o=`/poem/?id=${encodeURIComponent(a.i)}&s=${new URLSearchParams(location.search).get("s")}`;s.innerHTML=`
  <div class="breadcrumb" style="padding-top:26px"><a href="/">首页</a> <span>/</span> <a href="/browse/">浏览</a> <span>/</span> ${t(a.g)} <span>/</span> <span data-script-text="title">${t(a.t)}</span></div>
  <section class="poem-head">
    <h1 data-script-text="title">${t(a.t)}</h1>
    <div class="by">${t(a.d)} · <span data-script-text="author">${t(a.a)}</span><span>·</span>${t(a.g)}</div>
    <div class="toolbar">
      <button class="btn" data-action="pinyin" aria-pressed="false">拼音</button>
      <button class="btn" data-action="metre" aria-pressed="false" disabled title="该篇来自全量库，暂无平仄数据">平仄</button>
      <button class="btn" data-action="script" data-first-target="${n}" data-can-simp="${e}" data-can-trad="${r}" aria-pressed="false"${n?"":' hidden disabled title="本篇简繁同形"'}>${l}</button>
      <button class="btn" data-action="vertical">竖排</button>
      <span class="sep"></span>
      <button class="btn" data-action="speech">▶ 朗读</button>
      <button class="btn" data-action="fav" data-fav-id="${t(a.i)}" data-fav-title="${t(a.t)}" data-fav-author="${t(a.a)}" data-fav-dynasty="${t(a.d)}" data-fav-genre="${t(a.g)}" data-fav-first="${t(a.p[0]||"")}" data-fav-href="${t(o)}"><span data-fav-star>☆</span> 收藏</button>
      <span class="sep"></span>
      <button class="btn primary" data-action="recite">开始背诵</button>
    </div>
  </section>
  <section class="poem-body">
    <div class="poem-lines ${d?"long":""}" data-poem-lines>
      ${a.p.map((c,b)=>`<span class="verse" data-action="reveal" data-hint="${t(c.slice(0,1))}" data-line="${b}">${t(c)}</span>`).join("")}
    </div>
  </section>
  <div class="recite-tip">背诵模式 · 点击任意一句显示答案</div>
  <div class="pinyin-hint">拼音按上下文取音。</div>
  <div class="recite-panel">
    <div class="row"><span>默写练习</span><span>标点可省略，按字比对</span></div>
    <textarea class="input" placeholder="在这里默写，标点可省略……" data-recite-input></textarea>
    <div style="display:flex; gap:10px; align-items:center; margin-top:10px; flex-wrap:wrap">
      <button class="btn primary" data-action="check" style="font-size:12px">比对</button>
      <button class="btn" data-action="hint" style="font-size:12px">首字提示</button>
      <span style="font-size:11px;color:var(--ink-3)">错字标红，结果只保存在本机</span>
    </div>
    <div class="feedback" data-feedback></div>
  </div>
  <section class="poem-extra" id="notes">
    <div class="tabs"><span class="tab active">注释</span></div>
    <div class="tab-panel active">
      <div class="empty-state" style="padding:28px 0"><strong>该篇来自全量库，暂无校订注释</strong>精讲注释按首批 600 首逐步补充。<div class="links"><a class="btn" href="/about/#report">提交纠错</a></div></div>
      <div class="famous"><span class="lab">摘句</span>${t(a.p[0]||"")}</div>
    </div>
  </section>
  <div class="mobile-bar">
    <button class="mb primary" data-action="recite"><b>诵</b><span>背诵</span></button>
    <button class="mb" data-action="speech"><b>听</b><span>朗读</span></button>
    <button class="mb" data-action="fav" data-fav-id="${t(a.i)}" data-fav-title="${t(a.t)}" data-fav-author="${t(a.a)}" data-fav-dynasty="${t(a.d)}" data-fav-genre="${t(a.g)}" data-fav-first="${t(a.p[0]||"")}" data-fav-href="${t(o)}"><b data-fav-star>☆</b><span>收藏</span></button>
  </div>`}m();
