'use strict';
const $=s=>document.querySelector(s),N={K:'Khadija',A:'Ayoub'},LETTER=["إلى خديجة،","يمكن هاد العالم غير خيال، ولكن الوقت والمجهود اللي تحطّو فيه حقيقيين.","بغيت نصايب ليك حاجة مختلفة، ماشي غير رسالة عادية ولا تهنئة كتدوز بحال أي نهار.","بغيتك تعيشي مغامرة صغيرة، تكتاشفي فيها أماكن وشخصيات، وتلقاي مفاجآت مخبيّة فكل مرحلة، حتى توصلي لهنا.","ما عرفت واش هاد المغامرة غادي تكون أجمل هدية، ولكن عرفت أنني بغيت ندير ليك شي حاجة تبقى ذكرى زوينة.","نتمنى ليك عاماً جديداً مليئاً بالفرح، والنجاح، واللحظات اللي تستاهل تبقاي فاكرها.","وحتى إلا كان هاد العالم خيالي، فالأمنيات الزوينة اللي فيه كلها حقيقية.","Happy Birthday, Khadija! ❤️","— Ayoub"];
const K=(m,t,o)=>({w:'K',m,t,...o}),A=(m,t,o)=>({w:'A',m,t,...o});
const IT={invite:'📜 Da3wa dyal lqmar',compass:'🧭 Bousla dyal njoum',key:'🗝️ Mftah wra9a lfDDiya',seal1:'🌙 Khatem 1',seal2:'🌙 Khatem 2',seal3:'🌙 Khatem 3',seal4:'🌙 Khatem 4',seal5:'🌙 Khatem 5',f1:'✍️ Jozo2 1: "Had l3alam"',f2:'✍️ Jozo2 2: "khayali"',f3:'✍️ Jozo2 3: "walakin"',f4:'✍️ Jozo2 4: "lomnyat"',f5:'✍️ Jozo2 5: "7a9i9iya"'};
const C=[
{n:'Ldaa3wa',bg:'path',q:'📜 Fte7 lbab dyal lmamlaka',st:[
 A('happy','Khadija! Chofi chno lqit f had lktab l9dim... da3wa mn "Mamlakat Lqmar". Wallah ma kankdb 3lik!',{g:'invite'}),
 K('think','Kol mra kat9ol "ma kankdb" w kanl9a rassi f chi mochkil. Chkoun ktebha?'),
 A('happy','Ma kan3rf! Ghi tji nchofo.'),
 {c:[{t:'Fte7ha daba 📖',r:[K('think','Ayoub, ma tfte7ch... ach kayn ila tla3 lina chi 7aja?'),A('surprised','Ops. Fte7tha. Ana kanl9a rassi dima 9bl ma nfekker.'),K('happy','Dima hakka! 😂')]},{t:'Khllih chwiya nfekkro',r:[A('think','Nfekkro? 7na ma 3ndna lwa9t, lkhatima f lktab katkhayyel!'),K('happy','Wakha wakha, ftah 7it kantsenna ghi hadi.')]}]},
 {f:'find',it:[['🔮',20,34,'compass','Lqiti Bousla dyal njoum!'],['✨',70,48,'f1','Jozo2 mn rrisala tl9a!']],say:A('surprised','Chofi!! L bab tfta7! Yallah ndkhlo!')}]},
{n:'Lghaba Sehriya',bg:'forest',q:'🗝️ Lqa mftah wra9a lfDDiya, w 3bar lghaba',st:[
 K('happy','Ayoub, fin jebtini a sa7bi? Wach hadi ghaba wla chi film dyal lkhla3? 😂'),
 A('happy','Hahaha ghir tb3ini, rah 3aref tri9.'),
 {c:[{t:'Wakha, tb3tek 😒',r:[K('think','Wakha. Akher mra wati9t fik tlfna f blasa ma3rfinha.')]},{t:'Dik lyemna, ana kan3ref!',r:[A('think','Dik lyemna. 100%.'),K('think','Hadchi nafs "100%" li glti 9bel mni tlfna.'),A('think','Hadchi kan ghi tjriba!')]}]},
 {f:'find',it:[['🍄',15,30,'','Fottr kay3tsd... w kaybyyn tri9!'],['🗝️',55,52,'key','Lqiti mftah wra9a lfDDiya!'],['🦋',78,28,'','Farasha sehriya tdoz bjwar rasek.']],need:['key'],say:A('surprised','Chofi lsma... kayna ri7 ghadi tji.',{fx:'dark'})},
 K('scared','Ayoub!! Rri7 ghadi tchd fiya! Ma 9aderch n9of!',{fx:'storm'}),
 A('scared','Tchedi f yddi! Ma t7elihach!',{fx:'hold'}),
 K('scared','Ma tkhllinich... 7ta lbra9 ma khfa 3lih ana!'),
 A('think','Safi safi, 3dd m3aya: wa7ed... jouj... tlata...'),
 K('happy','...Hbet rri7. Chokran. Walakin ghi bach t3ref, nta li glti "tbe3ini, 3aref tri9".',{fx:'calm',g:'seal1'}),
 A('happy','Mn daba ana kan9ol "ma 3arf walo" w kanrta7 😅',{g:'f2'})]},
{n:'Lasrar Nsiya',bg:'castle',q:'📕 Qlb 3la lkoutob, w fte7 lbab sri',st:[
 A('happy','Hadi lmaktaba! Rayha 9dima... ou ri7at lwra9 😍'),
 K('happy','Hadchi li kan7lm bih. Ghir ma t9rbch men chi ktab bla ma t9ol lia.'),
 {f:'find',it:[['📕',20,30,'','Lktab 1: "Lktab kay9ol lik lkhbar mn ghir lsan."'],['📗',50,48,'','Lktab 2: "Mn ghir swt, kaybqa m3ak."'],['📘',76,28,'','Lktab 3: "Wach 7tafdti bih, wla tlfti?"']]},
 K('think','Ach hadchi... lghz? Ila bghiti nfth lbab khessni njawb:'),
 {f:'quiz',q:'Kay3ti lkhbar mn ghir lsan, w kayb9a m3ak ila 7tafdti bih. Chno houa?',o:[['Ktab',1],['Rri7'],['Mraya']],h:'Fkr: fin knti kat9ra 3ndk chwiya...',y:[K('happy','Ktab! Bravo 3lya!'),A('happy','Bravo 3lik nta, ana kont ghadi n9ol "Rri7" 😅',{g:'seal2'})]},
 A('happy','Chofi had sndo9!! Ghadi nfte7o.'),
 {c:[{t:'La, 9rb mn lbab 😬',r:[K('think','F ga3 l\'aflam, lli kay7el sndo9 mchbouh kaytl3 lih chi 7aja mn tahta.'),A('think','Hada ma film... hada waqi3. Chof, ma kayn walo.'),K('happy','Tfou 3lik. Allah ysster.')]},{t:'Fte7ha 📦',r:[A('surprised','Ayy! Tla3 lia fer dyal wrq!'),K('think','Ana gotlik. Ghadi nwrik nass dyal lktaba lkhfia.')]}]},
 K('think','Wa7d chwiya... mn had zawya, b nadharati kayban ktaba!',{g:'seal3'}),
 A('surprised','Wow Khadija! Nadharatek kat9ra lkhfi.',{g:'f3'})]},
{n:'Lmamlaka Lakhira',bg:'bridge',q:'🌉 3bar lqantara, w d5ol lqal3a',st:[
 K('think','Ana ma ghadi n3ber 7ta tjreb nta lwl.'),
 A('surprised','Ana?! 3lach ana?'),
 K('think','7it nta li kharejtina mn tri9 jouj mrat.'),
 A('think','...Safi, wakha. Chofi, kat7mel. Ghi ban lia fiha chi sir.',{g:''}),
 K('think','Chofi, kayn rsm dyal fanous 3la lyemna w lisr. Kayn tartib...'),
 {f:'coop',p:'KAK'},
 A('happy','Lqantara dwat! Ghadi n3ebro ensem!',{g:'seal4'}),
 K('happy','Yallah. Ghi mchi l9ddam nta, o ana m3ak.',{g:'seal5'}),
 A('happy','Hadi hya lqal3a! Chofi lqmar... kbir bzaf 😍',{g:'f4'})]},
{n:'Lmofaja2a',bg:'land',q:'🌙 Rje3 dow lfanous lmoqdds',st:[
 A('think','Khadija... bghit n9ol lik chi 7aja 9bel mandkhlo.'),
 K('think','Hadchi li kayskhef... wach tkhsrti chi 7aja?'),
 A('happy','La. Ghi... chofi lfog.'),
 {f:'seals'},
 K('happy','Ayoub... wach nta li dar had lkhra kamla?',{g:'f5'}),
 A('happy','Chwiya... wla ghir bzaf. W Nouira? Hadi ghi lampa 😂'),
 K('happy','Chokran. Hadchi mzyan bzaf. Maghadich ntkelem bzaf daba.'),
 A('happy','3id mbarek a Khadija! Kheli lqmar ytkelem. 💜'),
 {f:'end'}]}];
let ci=0,si=0,inv=[],done=new Set(),started=false,calm=matchMedia('(prefers-reduced-motion:reduce)').matches,tm,ac,mg,mu,sg,mt,root=261.6,wi,ps=[],W,H,stars=[],fl=[],lOpen=false;
const ROOTS=[261.6,293.7,246.9,220,261.6];
const sv=b=>`<svg viewBox="0 0 100 40" preserveAspectRatio="none">${b}</svg>`,hill=(c,y,a)=>`<path d="M0 40V${y}Q25 ${y-a} 50 ${y}T100 ${y}V40Z" fill="${c}"/>`,trees=(n,c)=>[...Array(n)].map((_,i)=>{const x=3+i*(94/n),h=12+(i*7)%9;return`<polygon points="${x-3},40 ${x},${40-h} ${x+3},40" fill="${c}"/><circle cx="${x+2}" cy="${37-(i*5)%6}" r=".7" fill="#ffd34d"/>`}).join('');
const SC={path:()=>hill('#1a1240',26,6)+hill('#241a55',32,5)+'<path d="M45 40Q55 33 48 30T52 26L56 26Q52 30 60 33T70 40Z" fill="#9b8cff" opacity=".4"/>',forest:()=>hill('#1a1240',28,5)+trees(14,'#13304a')+trees(11,'#0f2438'),bridge:()=>'<rect y="30" width="100" height="10" fill="#2a2a7a"/><path d="M0 30Q50 10 100 30V33Q50 14 0 33Z" fill="#8b7fd0"/>'+hill('#150f3c',34,3),castle:()=>hill('#1a1240',32,4)+'<rect x="35" y="12" width="30" height="28" fill="#2a1f5e"/><rect x="26" y="8" width="9" height="32" fill="#34267a"/><rect x="65" y="8" width="9" height="32" fill="#34267a"/><polygon points="33,12 50,2 67,12" fill="#7a5cff"/><path d="M46 40V30Q50 26 54 30V40Z" fill="#ffd34d"/>',land:()=>hill('#1a1240',27,6)+hill('#241a55',32,5)+[...Array(14)].map((_,i)=>`<circle cx="${6+i*7}" cy="${30+(i*3)%6}" r=".6" fill="#ffd34d"/>`).join('')};
const face=k=>`<svg viewBox="0 0 100 190"><g class="body">${k?'<path d="M20 55Q14 130 32 145L68 145Q86 130 80 55Z" fill="#3a1f2a"/><path d="M30 85h40l12 90H18z" fill="#4a2a8a"/><path d="M18 175h64" stroke="#d4af37" stroke-width="3"/>':'<rect x="30" y="85" width="40" height="60" rx="14" fill="#2b2b3a"/><path d="M34 85h32" stroke="#d4af37" stroke-width="3"/><rect x="34" y="143" width="13" height="40" rx="5" fill="#15151f"/><rect x="53" y="143" width="13" height="40" rx="5" fill="#15151f"/>'}<rect x="22" y="88" width="12" height="42" rx="6" fill="${k?'#4a2a8a':'#2b2b3a'}"/><g class="arm" style="transform-origin:68px 92px"><rect x="64" y="88" width="12" height="42" rx="6" fill="${k?'#4a2a8a':'#2b2b3a'}"/><circle cx="70" cy="132" r="6" fill="#e8b48a"/></g><circle cx="50" cy="55" r="27" fill="#e8b48a"/><path d="${k?'M22 52Q24 22 50 22Q78 22 78 52Q66 38 50 40Q34 38 22 52Z':'M22 52Q20 18 52 20Q80 22 78 52Q70 36 58 38L44 30Q30 36 22 52Z'}" fill="#1b1210"/><g class="eyes"><circle cx="40" cy="56" r="3" fill="#222"/><circle cx="60" cy="56" r="3" fill="#222"/></g>${k?'<g fill="none" stroke="#d4af37" stroke-width="2"><circle cx="40" cy="56" r="8"/><circle cx="60" cy="56" r="8"/><path d="M48 56h4"/></g>':''}<g><path class="m1" d="M42 68Q50 75 58 68" stroke="#7a2a2a" stroke-width="2.5" fill="none"/><ellipse class="m2" cx="50" cy="70" rx="5" ry="6" fill="#7a2a2a"/><path class="m3" d="M40 66Q50 82 60 66Z" fill="#7a2a2a"/></g></g></svg>`;
$('#K').innerHTML=face(1);$('#A').innerHTML=face(0);
const mood=(w,m,t)=>{const c=x=>'char '+(x==='scared'?'surprised scared':x==='think'?'think':x);$('#A').className=c(w==='A'?m:'idle')+(t&&w==='A'?' talking':'');$('#K').className=c(w==='K'?m:(m==='celebrate'?'celebrate':'idle'))+(t&&w==='K'?' talking':'')};
function setScene(b){$('#scene').innerHTML=sv(SC[b]());document.body.dataset.bg=b}
const toast=t=>{const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(e.t);e.t=setTimeout(()=>e.classList.remove('on'),2200)};
function save(){try{localStorage.setItem('kmj',JSON.stringify({ci,si,inv}))}catch(e){}}
function load(){try{return JSON.parse(localStorage.getItem('kmj'))}catch(e){return null}}
function give(k){if(!k||inv.includes(k))return;inv.push(k);sfx.star();toast('+ '+IT[k]);renderInv()}
function renderInv(){$('#inv').innerHTML='<b>🎒 Inventory</b><br>'+(inv.map(k=>IT[k]).join('<br>')||'—')}
function btns(l){const o=$('#opts');o.innerHTML='';l.forEach(b=>{const e=document.createElement('button');e.className='btn';e.textContent=b.t;e.onclick=b.f;o.appendChild(e)})}
function typeIt(s,m){clearInterval(tm);const t=s.t,el=$('#txt');let i=0;el.textContent='';mood(s.w,m||s.m,1);$('#who').textContent=N[s.w]||'';tm=setInterval(()=>{el.textContent=t.slice(0,++i);if(i>=t.length){clearInterval(tm);mood(s.w,m||s.m,0)}},calm?4:26);$('#dlg').onclick=()=>{clearInterval(tm);el.textContent=t;mood(s.w,m||s.m,0)}}
function fx(x){const b=document.body.classList;if(x==='dark')b.add('dark','cine');if(x==='storm'){b.add('storm','shake','cine','zoom');sfx.thunder();$('#flash').classList.add('on');setTimeout(()=>$('#flash').classList.remove('on'),600);for(let i=0;i<(calm?10:60);i++)ps.push({x:-10,y:Math.random()*H,vx:6+Math.random()*6,vy:Math.random()*2-1,l:200,c:'#6fbf73',t:2});wi=setInterval(()=>ac&&sfx.wind(),1500);setTimeout(()=>b.remove('shake'),2500)}if(x==='hold')b.add('hold');if(x==='calm'){b.remove('dark','storm','shake','cine','zoom','hold');clearInterval(wi)}}
function dlg(s){if(s.fx)fx(s.fx);if(s.g)give(s.g);typeIt(s);btns([{t:'Kmel ➜',f:nxt}])}
function play(l,cb){let i=0;const n=()=>{if(i>=l.length)return cb();const s=l[i++];if(s.g)give(s.g);typeIt(s);btns([{t:'Kmel ➜',f:n}])};n()}
function nxt(){done.clear();si++;if(si>=C[ci].st.length){ci++;si=0;if(ci>=C.length)return;save();return chapter()}save();show()}
function chapter(){document.body.classList.remove('cine','hold','dark');ROOTS[ci]&&(root=ROOTS[ci]);sfx.chap();const t=$('#title');t.textContent=`Lfasl ${ci+1} — ${C[ci].n}`;t.classList.add('on');setTimeout(()=>{t.classList.remove('on');show()},calm?500:2200)}
function show(){const c=C[ci],s=c.st[si];setScene(c.bg);$('#items').innerHTML='';$('#quest').textContent=c.q;$('#prog').innerHTML=C.map((x,i)=>`<i class="${i<ci?'done':i==ci?'cur':''}" title="${x.n}"></i>`).join('');if(s.w)dlg(s);else if(s.c){typeIt({w:'K',m:'idle',t:'...'});btns(s.c.map(o=>({t:o.t,f:()=>play(o.r,nxt)})))}else F[s.f](s)}
function item(h,x,y,f){const b=document.createElement('button');b.className='item';b.innerHTML=h;b.style.cssText=`left:${x}%;top:${y}%`;b.onclick=f;$('#items').appendChild(b);return b}
const F={
find(s){typeIt({w:'A',m:'point',t:s.say&&s.it.length?'Chof 7da: kayn chi 7aja kat3ref... tchoufha? (Dir clic 3la lacha2ya2 lmdawya)':'...'});btns([]);s.it.forEach((p,i)=>{if(done.has(i))return;const b=item(p[0],p[1],p[2],()=>{done.add(i);b.remove();give(p[3]);toast(p[4]);if(done.size===s.it.length){$('#items').innerHTML='';s.say?play([s.say],nxt):nxt()}})})},
quiz(s){typeIt({w:'A',m:'think',t:s.q});btns(s.o.map(o=>({t:o[0],f:()=>{if(o[1]){sfx.ok();play(s.y,nxt)}else{sfx.bad();typeIt({w:'A',m:'think',t:s.h})}}})))},
coop(s){let p=0;typeIt({w:'A',m:'point',t:'Tartib: Khadija 🏮 → Ayoub 🏮 → Khadija 🏮. Dir clic 3la lfwanis b nafs tartib!'});const r=(w,l)=>({t:l+' 🏮',f:()=>{if(s.p[p]===w){p++;sfx.star();if(p===s.p.length){sfx.ok();nxt()}else toast(p+'/'+s.p.length)}else{sfx.bad();p=0;typeIt({w:'K',m:'think',t:'Ayoub!! Ghalat! 3awd mn lwl!'})}}});btns([r('K','Khadija'),r('A','Ayoub')])},
seals(){let n=0;typeIt({w:'K',m:'point',t:'Dir clic 3la khmsa lkhwatim bach nl9o lfanous lmoqdds...'});btns([]);for(let i=0;i<5;i++)item('🌙',12+i*17,40+(i%2)*10,function(){this.remove();sfx.star();if(++n===5){sfx.party();document.body.classList.add('cine','zoom');setTimeout(()=>{$('#hb').hidden=false;party();nxt()},calm?100:900)}})},
end(){document.body.classList.remove('cine');mood('A','celebrate');typeIt({w:'A',m:'celebrate',t:'Mo3azza lik. Cheft? Lqmar tkelm.'});btns([{t:'💌 Qra risalti',f:openLetter},{t:'🔁 3awd',f:()=>{ci=0;si=0;inv=[];$('#hb').hidden=true;document.body.classList.remove('zoom');save();chapter()}}])}};
function openLetter(){lOpen=true;const L=$('#letter'),lt=$('#lt');L.hidden=false;lt.innerHTML=LETTER.map(p=>`<p dir="auto">${p.split(' ').map(w=>`<span>${w}</span>`).join(' ')}</p>`).join('');const sp=[...lt.querySelectorAll('span')];let i=0;const iv=setInterval(()=>{if(i>=sp.length)return clearInterval(iv);sp[i++].classList.add('v');if(calm)while(i<sp.length)sp[i++].classList.add('v');lt.scrollTop=lt.scrollHeight},130);$('#lc').onclick=()=>{clearInterval(iv);L.hidden=true;lOpen=false}}
// audio
function ini(){if(ac)return;ac=new(window.AudioContext||window.webkitAudioContext)();mg=ac.createGain();mg.connect(ac.destination);mu=ac.createGain();sg=ac.createGain();mu.connect(mg);sg.connect(mg);vols();const m=[1,1.25,1.5,1.875,1.667,1.5,1.25,1.125];let i=0;mt=setInterval(()=>{tone(root*m[i%8],1.4,'sine',.1,0,mu);if(i%4==0)tone(root/2,2.4,'triangle',.08,0,mu);i++},650)}
const vols=()=>{if(!ac)return;mu.gain.value=+$('#vm').value;sg.gain.value=+$('#vs').value};
function tone(f,d=.15,ty='sine',v=.2,dl=0,out){if(!ac)return;const o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime+dl;o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(out||sg);o.start(t);o.stop(t+d+.05)}
function noise(d,f,v){if(!ac)return;const b=ac.createBuffer(1,ac.sampleRate*d,ac.sampleRate),a=b.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*(1-i/a.length);const s=ac.createBufferSource(),fl=ac.createBiquadFilter(),g=ac.createGain();s.buffer=b;fl.type='lowpass';fl.frequency.value=f;g.gain.value=v;s.connect(fl);fl.connect(g);g.connect(sg);s.start()}
const arp=(a,d=.08,v=.18)=>a.forEach((f,i)=>tone(f,.3,'sine',v,i*d)),sfx={click:()=>tone(520,.08,'triangle',.12),ok:()=>arp([523,659,784]),bad:()=>tone(180,.25,'sawtooth',.06),star:()=>arp([880,1175,1568],.07),chap:()=>arp([392,523,659,784],.15),party:()=>arp([523,659,784,1047,784,1047,1319],.12),thunder:()=>noise(1.8,220,1),wind:()=>noise(2,700,.35)};
document.addEventListener('click',e=>{if(e.target.closest('button'))sfx.click()});
// fx canvas
const cv=$('#fx'),g=cv.getContext('2d');
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;const n=calm?50:innerWidth<700?70:130;stars=[...Array(n)].map(()=>({x:Math.random()*W,y:Math.random()*H*.7,r:Math.random()*1.4+.3,p:Math.random()*6}));fl=[...Array(calm?0:18)].map(()=>({x:Math.random()*W,y:H*.4+Math.random()*H*.5,p:Math.random()*6}))}
function burst(x,y){const c=`hsl(${Math.random()*360},90%,70%)`;for(let i=0;i<36;i++){const a=i/36*6.28,v=2+Math.random()*3;ps.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:60,c,t:0})}}
function party(){for(let i=0;i<(calm?30:110);i++)ps.push({x:Math.random()*W,y:-10-Math.random()*H*.5,vx:Math.random()*2-1,vy:1+Math.random()*2,l:300,c:`hsl(${Math.random()*360},90%,65%)`,t:1});let n=0;const iv=setInterval(()=>{burst(W*(.15+Math.random()*.7),H*(.1+Math.random()*.35));if(++n>(calm?3:14))clearInterval(iv)},700)}
function loop(t){g.clearRect(0,0,W,H);for(const s of stars){g.globalAlpha=calm?.7:.4+.6*Math.abs(Math.sin(t/900+s.p));g.fillStyle='#fff';g.beginPath();g.arc(s.x,s.y,s.r,0,6.3);g.fill()}for(const f of fl){f.x+=Math.sin(t/1500+f.p)*.4;f.y+=Math.cos(t/1900+f.p)*.3;g.globalAlpha=.5+.5*Math.sin(t/400+f.p);g.fillStyle='#ffd34d';g.beginPath();g.arc(f.x,f.y,2,0,6.3);g.fill()}
 ps=ps.filter(p=>p.l>0&&p.y<H+20&&p.x<W+20);for(const p of ps){p.x+=p.vx;p.y+=p.vy;if(p.t===0)p.vy+=.05;p.l--;g.globalAlpha=Math.min(1,p.l/30);g.fillStyle=p.c;p.t===2?g.fillRect(p.x,p.y,9,4):p.t?g.fillRect(p.x,p.y,6,4):g.fillRect(p.x,p.y,3,3)}g.globalAlpha=1;requestAnimationFrame(loop)}
addEventListener('resize',rs);rs();requestAnimationFrame(loop);
// ui
const menu=$('#menu');$('#bc').hidden=!load();
function begin(l){ini();if(ac.state==='suspended')ac.resume();menu.hidden=true;if(started)return;started=true;if(l){ci=l.ci;si=l.si;inv=l.inv||[]}renderInv();si>0?show():chapter()}
$('#bs').onclick=()=>{if(started&&!confirm('Bda men jdid?'))return;started=false;ci=0;si=0;inv=[];document.body.className='';begin(null)};
$('#bc').onclick=()=>begin(load());
$('#pb').onclick=()=>{menu.hidden=false;$('#bc').hidden=false;$('#bc').textContent='▶ Kmel'};
$('#ib').onclick=()=>{renderInv();$('#inv').hidden=!$('#inv').hidden};
$('#vm').oninput=vols;$('#vs').oninput=vols;
$('#bm').onclick=()=>{calm=!calm;document.body.classList.toggle('calm',calm);$('#bm').textContent='Tbsit lharaka: '+(calm?'on':'off');rs()};
if(calm){document.body.classList.add('calm');$('#bm').textContent='Tbsit lharaka: on'}
setScene('path');mood('A','idle');mood('K','idle');
