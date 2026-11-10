/* RenderFlow Studios docs — 動き（3D Manga Studios ドキュメントの extra.js から共通部分だけを移植。navigation.instant 対応） */
function msBeforeAfter(){
  document.querySelectorAll('.ms-ba').forEach(ba=>{const r=ba.querySelector('input');if(!r||r.dataset.b)return;r.dataset.b=1;r.addEventListener('input',()=>ba.style.setProperty('--pos',r.value+'%'));});
}
function msSplit(el,base,step){if(!el)return 0;if(el.dataset.split)return +el.dataset.split;let i=0;
  const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();for(const ch of c.textContent){if(/\s/.test(ch)){f.appendChild(document.createTextNode(ch));continue;}const sp=document.createElement('span');sp.className='ms-ch';sp.textContent=ch;sp.style.setProperty('--d',(base+i*step)+'ms');i++;f.appendChild(sp);}c.replaceWith(f);}
    else if(c.nodeType===1&&!c.classList.contains('bi')&&!c.classList.contains('en')&&!c.classList.contains('headerlink')&&!c.classList.contains('new-label')&&c.tagName!=='BR'&&c.tagName!=='IMG')walk(c);});};
  walk(el);const en=el.querySelector(':scope>.en');if(en)en.style.setProperty('--d',(base+i*step+80)+'ms');const nl=el.querySelector('.new-label');if(nl)nl.style.setProperty('--d',(base+i*step+(en?380:150))+'ms');el.dataset.split=base+i*step;return base+i*step;}
function msTop(){
  const sheet=document.querySelector('.md-content .ms-sheet');
  document.body.classList.toggle('ms-top',!!sheet);
  if(!sheet) return;
  if(!sheet.querySelector('.ms-tone')){const t=document.createElement('div');t.className='ms-tone';t.setAttribute('aria-hidden','true');sheet.prepend(t);}
  /* 見出しはタイピング風：1文字ずつ現れ、打ち終えたらマーカー */
  const h1=sheet.querySelector('.ms-hero h1');msSplit(h1,0,0);
  if(h1&&!h1.dataset.typed){let t=250;const cs=[...h1.querySelectorAll('.ms-ch')];const em=h1.querySelector('em');
    cs.forEach((c,j)=>{const prev=j?cs[j-1].textContent:'';t+=/[、。,.]/.test(prev)?260:55+((j*37)%45);setTimeout(()=>c.classList.add('on'),t);});
    h1.dataset.typed=t;if(em)setTimeout(()=>em.classList.add('go'),t+200);}
}
/* 全ページ共通：h2 は1文字ずつ、表・図・カードなどはスクロールで見えたときに出す */
function msAnim(){
  document.body.classList.add('ms-anim');
  const T='.md-content .md-typeset > ';
  const els=[...document.querySelectorAll(['h2','.ms-flow','figure','.md-typeset__scrollwrap','table','.ms-grid3','.admonition','details','.grid','div[class*="ms-"]:not(.ms-sheet)','.fx-card','p:has(>img.ui)'].map(x=>T+x).join(','))];
  els.forEach(e=>{if(e.tagName==='H2')msSplit(e,60,28);else e.classList.add('ms-reveal');});
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('is-in'));return;}
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-in');io.unobserve(en.target);}}),{rootMargin:'0px 0px -12% 0px',threshold:.15});
  els.forEach(e=>{if(!e.classList.contains('is-in'))io.observe(e);});
}
function msLangLinks(){const logo=document.querySelector('a.md-logo');const ls=document.querySelectorAll('a.md-select__link[hreflang]');if(!logo||!ls.length)return;
const en=document.documentElement.lang==='en';const cur=new URL('.',new URL(logo.getAttribute('href'),location.href));const root=en?new URL('../',cur):cur;
let rel=location.pathname.startsWith(cur.pathname)?location.pathname.slice(cur.pathname.length):'';
ls.forEach(a=>{a.href=new URL((a.getAttribute('hreflang')==='en'?'en/':'')+rel+location.hash,root).href;});}
window.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a.md-select__link[hreflang]');if(a){msLangLinks();e.preventDefault();e.stopPropagation();location.href=a.href;}},true);
function msInit(){msLangLinks();msTop();msAnim();msBeforeAfter();}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',msInit)}else{msInit()}
if(window.document$){document$.subscribe(()=>setTimeout(msInit,0))}

// ---------- 背景アニメの位置を時計に合わせる ----------
// ページの読み込み・保存時の自動リロードのたびに最初の位置へ戻って「止まった」ように見えないよう、
// 現在時刻から逆算した負の delay を入れて、続きから動かす
(function(){
  function msBgSync(){
    var t=Date.now()/1000, r=document.documentElement.style;
    r.setProperty('--ms-drift-delay', -(t%20).toFixed(2)+'s');
    r.setProperty('--ms-sweep-delay', -(t%8).toFixed(2)+'s');
  }
  msBgSync();
  if(window.document$&&document$.subscribe){document$.subscribe(msBgSync)}
  document.addEventListener('visibilitychange',function(){if(!document.hidden)msBgSync()});
})();

// ---------- 背景：三角形6枚で組んだ六角形が柱のように浮き沈みする（RenderFlow 用・20261109m）----------
// 画面に固定したキャンバスに描く。外側ほど濃く・中心（本文の下）は描かない
/* 六角タイル（三角形6枚）が柱のように浮き沈みする背景の描画（RenderFlow・20261109m）
   o: {ctx,W,H,top,T,rgb,acc,pap,dark} */
function rfHexDraw(o){
  var ctx=o.ctx,W=o.W,H=o.H,top=o.top,T=o.T,rgb=o.rgb,acc=o.acc,pap=o.pap,dark=o.dark;
  var R=22,SH=.9,HW=Math.sqrt(3)*R,RH=1.5*R,DEPTH=14,i,j;
  var cs=rfHexDraw.cs;if(!cs){cs=rfHexDraw.cs=[];rfHexDraw.sn=[];rfHexDraw.face=[];rfHexDraw.side=[];
    for(i=0;i<6;i++){var a=Math.PI/180*(60*i-90);cs.push(Math.cos(a));rfHexDraw.sn.push(Math.sin(a));
      var m=a+Math.PI/6,nx=Math.cos(m),ny=Math.sin(m);rfHexDraw.face.push((nx+ny)*-.7071);rfHexDraw.side.push([nx,ny]);}}
  var sn=rfHexDraw.sn,face=rfHexDraw.face,side=rfHexDraw.side;
  function K(x,y){var cx=W/2,cy=top+(H-top)/2,dx=(x-cx)/(W*.72),dy=(y-cy)/((H-top)*.72);var k=(Math.sqrt(dx*dx+dy*dy)-.5)/.7;k=Math.max(0,Math.min(1,k));return k*k*(3-2*k);}
  ctx.clearRect(0,0,W,H);
  var list=[];
  for(var r=-1;r*RH<H+R*2;r++)for(var c=-1;c*HW<W+HW;c++){
    var cx=c*HW+(r&1?HW/2:0),cy=top+r*RH,k=K(cx,cy);if(k<.03)continue;
    var rr=Math.sin(c*12.9898+r*78.233)*43758.5453%1;if(rr<0)rr+=1;
    var rr2=Math.sin(c*39.346+r*11.135)*24634.6345%1;if(rr2<0)rr2+=1;
    // 大きな波 ＋ タイルごとの上下（速さと位相をずらす）。上下の端はなめらかに止まる
    var w=.5+.5*Math.sin(T*.45+cx*.009+cy*.006);
    var p=.5+.5*Math.sin(T*(.5+rr*.9)+rr2*6.283);p=p*p*(3-2*p);
    var h=Math.max(0,Math.min(1,.45*w+.55*p));
    list.push([cx,cy,k,h,rr]);
  }
  list.sort(function(a,b){return (a[0]+a[1])-(b[0]+b[1]);}); // 左上から順に（右下ほど手前）
  var s=R*SH;
  list.forEach(function(e){
    var k=e[2],h=e[3],d=h*DEPTH*Math.min(1,k*1.3),bx=e[0],by=e[1],x=bx-d,y=by-d,hot=h>.85&&e[4]<.14;
    // 側面：右下を向いた辺だけ、上の面と台座をつなぐ四角形
    if(d>.3)for(i=0;i<6;i++){var n=side[i];if(n[0]+n[1]<=0)continue;j=(i+1)%6;
      var lit=(n[0]+n[1])/1.4142;
      ctx.beginPath();ctx.moveTo(x+cs[i]*s,y+sn[i]*s);ctx.lineTo(x+cs[j]*s,y+sn[j]*s);ctx.lineTo(bx+cs[j]*s,by+sn[j]*s);ctx.lineTo(bx+cs[i]*s,by+sn[i]*s);ctx.closePath();
      ctx.fillStyle=pap;ctx.fill();
      ctx.fillStyle=hot?'rgba('+acc+','+(k*(.55+.2*lit)).toFixed(3)+')':'rgba('+rgb+','+(k*(dark?.10+.08*(1-lit):.20+.16*lit)).toFixed(3)+')';ctx.fill();}
    // 上の面：三角形6枚。光の向きで明るさを変え、低いタイルほど暗く沈む
    ctx.beginPath();ctx.moveTo(x+cs[0]*s,y+sn[0]*s);for(i=1;i<6;i++)ctx.lineTo(x+cs[i]*s,y+sn[i]*s);ctx.closePath();ctx.fillStyle=pap;ctx.fill();
    for(i=0;i<6;i++){j=(i+1)%6;var f=face[i];
      var a=dark?k*(.05+.16*(1+f)/2+.10*h):k*(.03+.13*(1-f)/2+.20*(1-h));
      ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+cs[i]*s,y+sn[i]*s);ctx.lineTo(x+cs[j]*s,y+sn[j]*s);ctx.closePath();
      ctx.fillStyle=hot?'rgba('+acc+','+(k*(.30+.25*(1+f)/2)).toFixed(3)+')':'rgba('+rgb+','+a.toFixed(3)+')';ctx.fill();}
    ctx.beginPath();for(i=0;i<3;i++){ctx.moveTo(x+cs[i]*s,y+sn[i]*s);ctx.lineTo(x+cs[i+3]*s,y+sn[i+3]*s);}
    ctx.strokeStyle='rgba('+(dark?'0,0,0':'255,255,255')+','+(k*.6).toFixed(3)+')';ctx.lineWidth=1;ctx.stroke();
  });
}
// 背景の模様を選ぶ：rfTriDraw（三角タイル）／rfHexDraw（六角タイル）
/* 三角タイルが1枚ずつ柱のように浮き沈みする背景の描画（RenderFlow・20261109n）
   o: {ctx,W,H,top,T,rgb,acc,pap,dark} */
function rfTriDraw(o){
  var ctx=o.ctx,W=o.W,H=o.H,top=o.top,T=o.T,rgb=o.rgb,acc=o.acc,pap=o.pap,dark=o.dark;
  var L=30,RH=L*Math.sqrt(3)/2,SH=.86,DEPTH=12,i,j;
  function K(x,y){var cx=W/2,cy=top+(H-top)/2,dx=(x-cx)/(W*.72),dy=(y-cy)/((H-top)*.72);var k=(Math.sqrt(dx*dx+dy*dy)-.5)/.7;k=Math.max(0,Math.min(1,k));return k*k*(3-2*k);}
  ctx.clearRect(0,0,W,H);
  var list=[];
  for(var r=-1;r*RH<H+RH;r++)for(var c=-2;c*L/2<W+L;c++){
    var up=((c+r)&1)===0,x0=c*L/2,y0=top+r*RH,v;
    v=up?[[x0,y0+RH],[x0+L/2,y0],[x0+L,y0+RH]]:[[x0,y0],[x0+L,y0],[x0+L/2,y0+RH]];
    var cx=(v[0][0]+v[1][0]+v[2][0])/3,cy=(v[0][1]+v[1][1]+v[2][1])/3,k=K(cx,cy);if(k<.03)continue;
    for(i=0;i<3;i++){v[i]=[cx+(v[i][0]-cx)*SH,cy+(v[i][1]-cy)*SH];}
    var rr=Math.sin(c*12.9898+r*78.233)*43758.5453%1;if(rr<0)rr+=1;
    var rr2=Math.sin(c*39.346+r*11.135)*24634.6345%1;if(rr2<0)rr2+=1;
    // なめらかな波だけで高さを決める（隣どうしが近い高さになり、グラデーションになる）
    var w1=Math.sin(T*.7-(cx*.8+cy*.6)*.011);          // 左上→右下へ進む大きな波
    var w2=Math.sin(T*.4+(cx*.3-cy*.9)*.007+1.3);      // 角度と速さの違う波を重ねてうねりに
    var hh=.5+.36*w1+.14*w2;
    list.push({v:v,cx:cx,cy:cy,k:k,up:up,h:Math.max(0,Math.min(1,hh)),rr:rr});
  }
  list.sort(function(a,b){return (a.cx+a.cy)-(b.cx+b.cy);}); // 左上から順に（右下ほど手前）
  list.forEach(function(e){
    var k=e.k,h=e.h,d=h*DEPTH*Math.min(1,k*1.3),v=e.v,hot=false,m=Math.max(0,Math.min(1,(h-.8)/.17)),t=[];
    for(i=0;i<3;i++)t.push([v[i][0]-d,v[i][1]-d]);
    // 側面：右下を向いた辺だけ
    if(d>.3)for(i=0;i<3;i++){j=(i+1)%3;
      var ex=v[j][0]-v[i][0],ey=v[j][1]-v[i][1],nx=ey,ny=-ex,ln=Math.hypot(nx,ny);nx/=ln;ny/=ln;
      if((e.cx-v[i][0])*nx+(e.cy-v[i][1])*ny>0){nx=-nx;ny=-ny;} // 外向きにそろえる
      if(nx+ny<=0)continue;var lit=(nx+ny)/1.4142;
      ctx.beginPath();ctx.moveTo(t[i][0],t[i][1]);ctx.lineTo(t[j][0],t[j][1]);ctx.lineTo(v[j][0],v[j][1]);ctx.lineTo(v[i][0],v[i][1]);ctx.closePath();
      ctx.fillStyle=pap;ctx.fill();
      ctx.fillStyle='rgba('+rgb+','+(k*(dark?.10+.08*(1-lit):.18+.18*lit)).toFixed(3)+')';ctx.fill();
      if(m>0){ctx.fillStyle='rgba('+acc+','+(k*m*(.5+.2*lit)).toFixed(3)+')';ctx.fill();}}
    // 上の面：上向き▲と下向き▼で光の当たり方を変え、低いほど暗く沈む
    ctx.beginPath();ctx.moveTo(t[0][0],t[0][1]);ctx.lineTo(t[1][0],t[1][1]);ctx.lineTo(t[2][0],t[2][1]);ctx.closePath();
    ctx.fillStyle=pap;ctx.fill();
    var f=e.up?.25:-.25,a=dark?k*(.06+.12*(1+f)/2+.12*h):k*(.03+.10*(1-f)/2+.22*(1-h));
    ctx.fillStyle='rgba('+rgb+','+a.toFixed(3)+')';ctx.fill();
    if(m>0){ctx.fillStyle='rgba('+acc+','+(k*m*(.32+.12*(1+f)/2)).toFixed(3)+')';ctx.fill();} // 波の頂上ほどミントがにじむ
  });
}
var RF_BG_DRAW=rfTriDraw;
(function(){
  if(window.msHalftoneOn) return; window.msHalftoneOn=1;
  var cv=document.createElement('canvas'); cv.className='ms-halftone'; cv.setAttribute('aria-hidden','true');
  var ctx=cv.getContext('2d'), W=0, H=0, top=0, dpr=1, col={rgb:'15,42,48',acc:'61,220,159',pap:'#FBFDFC',dark:false};
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';hdr();}
  function hdr(){var b=0;document.querySelectorAll('.md-header,.md-tabs').forEach(function(e){var r=e.getBoundingClientRect();if(r.height&&r.top<5)b=Math.max(b,r.bottom)});top=Math.max(0,Math.min(b,H*.5));}
  function color(){var st=getComputedStyle(document.body||document.documentElement);
    col.rgb=st.getPropertyValue('--rf-hex-rgb').trim()||col.rgb; col.acc=st.getPropertyValue('--rf-hex-acc').trim()||col.acc;
    col.pap=st.getPropertyValue('--md-default-bg-color').trim()||col.pap; col.dark=document.body.getAttribute('data-md-color-scheme')==='slate';}
  function draw(t){ctx.setTransform(dpr,0,0,dpr,0,0);RF_BG_DRAW({ctx:ctx,W:W,H:H,top:top,T:reduce?0:t/1000,rgb:col.rgb,acc:col.acc,pap:col.pap,dark:col.dark});}
  var last=0;
  function loop(t){ if(!document.hidden&&t-last>40){last=t;if((t|0)%500<40)hdr();draw(Date.now()%1e7);} if(!reduce) requestAnimationFrame(loop); }
  function start(){ if(!document.body.contains(cv)) document.body.insertBefore(cv,document.body.firstChild); size(); color(); draw(Date.now()%1e7); }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',start)}else{start()}
  addEventListener('resize',function(){size();draw(Date.now()%1e7)});
  new MutationObserver(function(){color();draw(Date.now()%1e7)}).observe(document.body,{attributes:true,attributeFilter:['data-md-color-scheme']});
  if(window.document$&&document$.subscribe){document$.subscribe(start)}
  if(!reduce) requestAnimationFrame(loop);
})();
/* LP POP: letters pop up from below when scrolled into view (20261102m) */
(function(){
  function popInit(){
    var els=[].slice.call(document.querySelectorAll('.ms-pop'));
    if(!els.length) return;
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('on')});return;}
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('on');}else if(en.intersectionRatio===0){en.target.classList.remove('on');}})},{threshold:[0,1],rootMargin:'0px 0px -25% 0px'});
    els.forEach(function(e){io.observe(e)});
  }
  if(window.document$&&document$.subscribe){document$.subscribe(popInit)}else if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',popInit)}else{popInit()}
})();

