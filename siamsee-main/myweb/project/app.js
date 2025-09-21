// ===== คำทำนาย (ตัวอย่าง) =====
const FORTUNES = [
  {id:1,tier:"ดีมาก",meaning:"ดวงขึ้น งาน เงิน ความรักไปทางเดียวกัน",advice:"โฟกัสสิ่งสำคัญ 1–2 เรื่อง"},
  {id:2,tier:"ดี",meaning:"มีข่าวดีเข้ามา แต่ต้องลงมือก่อน",advice:"เริ่มวันนี้ แม้ก้าวเล็ก ๆ ก็มีค่า"}
];

// ===== DOM =====
const shakeSection = document.getElementById('shakeSection');
const resultSection = document.getElementById('resultSection');
const tubeSvg = document.getElementById('tubeSvg');
const tubeArea = document.getElementById('tubeArea');
const coinsBox = document.getElementById('coins');
const shakeBtn = document.getElementById('shakeBtn');
const skipBtn = document.getElementById('skipBtn');
const backBtn = document.getElementById('backBtn');
const againBtn = document.getElementById('againBtn');
const copyBtn = document.getElementById('copyBtn');
const stickEl = document.getElementById('stick');
const tierEl = document.getElementById('tier');
const meaningEl = document.getElementById('meaning');
const adviceEl = document.getElementById('advice');
const warnNotice = document.getElementById('warnNotice');

const rand = n => Math.floor(Math.random() * n);
const tierClass = t => ["ดีมาก"].includes(t) ? "good" : "mid";

function drawFortune(){
  const f = FORTUNES[rand(FORTUNES.length)];
  stickEl.textContent = `ไม้เลข ${f.id}`;
  tierEl.textContent = f.tier;
  tierEl.className = `badge ${tierClass(f.tier)}`;
  meaningEl.textContent = f.meaning;
  adviceEl.textContent  = "คำแนะนำ: " + f.advice;
}

function goResult(){
  shakeSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
}

/* เสียงก้องเล็ก ๆ */
function playGong(){
  try{
    const audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    const o1 = audioCtx.createOscillator(), o2 = audioCtx.createOscillator();
    const g  = audioCtx.createGain(); g.gain.setValueAtTime(0.0001,audioCtx.currentTime);
    o1.type="sine"; o2.type="sine";
    o1.frequency.setValueAtTime(196,audioCtx.currentTime);
    o2.frequency.setValueAtTime(392,audioCtx.currentTime);
    o1.connect(g); o2.connect(g); g.connect(audioCtx.destination);
    g.gain.exponentialRampToValueAtTime(0.35,audioCtx.currentTime+0.03);
    g.gain.exponentialRampToValueAtTime(0.0001,audioCtx.currentTime+0.9);
    o1.start(); o2.start(); o1.stop(audioCtx.currentTime+1); o2.stop(audioCtx.currentTime+1);
  }catch(e){}
}

/* โปรยเหรียญ */
function coinRain(){
  coinsBox.innerHTML = "";
  const howMany = 12;
  for(let i=0;i<howMany;i++){
    const c = document.createElement('span');
    c.className = "coin";
    const x = 10 + Math.random()*80;
    c.style.left = x + "%";
    c.style.animationDelay = (Math.random()*0.35) + "s";
    coinsBox.appendChild(c);
  }
  setTimeout(()=>coinsBox.innerHTML="",1500);
}

function doShakeThenShow(){
  // ข้อความ “เขย่าๆ”
  let burst = tubeArea.querySelector('.fx-burst');
  if(!burst){ burst = document.createElement('div'); burst.className = 'fx-burst'; tubeArea.appendChild(burst); }
  burst.innerHTML = "";
  for(let i=0;i<6;i++){
    const s = document.createElement('span');
    s.className = 'shake-text';
    s.style.setProperty('--dx',`${Math.floor(Math.random()*200-100)}px`);
    s.style.setProperty('--dy',`${Math.floor(Math.random()*-100)}px`);
    s.style.setProperty('--rot',`${Math.floor(Math.random()*30-15)}deg`);
    s.style.setProperty('--dur',`${820+Math.floor(Math.random()*200)}ms`);
    s.textContent = 'เขย่าๆ';
    burst.appendChild(s);
  }

  warnNotice.classList.add('show');
  playGong();

  tubeSvg.classList.remove('shake'); void tubeSvg.offsetWidth;
  tubeArea.classList.add('is-shaking'); tubeSvg.classList.add('shake');

  tubeSvg.addEventListener('animationend', ()=>{
    tubeArea.classList.remove('is-shaking'); tubeSvg.classList.remove('shake');
    warnNotice.classList.remove('show');
    drawFortune(); coinRain(); goResult();
  }, {once:true});
}

/* ปุ่มกด */
shakeBtn.addEventListener('click', doShakeThenShow);
skipBtn.addEventListener('click', ()=>{ drawFortune(); coinRain(); goResult(); });

backBtn?.addEventListener('click', ()=>{
  resultSection.classList.add('hidden');
  shakeSection.classList.remove('hidden');
  tubeSvg.classList.remove('shake'); tubeArea.classList.remove('is-shaking');
  warnNotice.classList.remove('show');
});

againBtn?.addEventListener('click', ()=>{
  resultSection.classList.add('hidden');
  shakeSection.classList.remove('hidden');
  requestAnimationFrame(()=>requestAnimationFrame(doShakeThenShow));
});

copyBtn?.addEventListener('click', ()=>{
  const text = `${stickEl.textContent} • ${tierEl.textContent}\n${meaningEl.textContent}\n${adviceEl.textContent}`;
  navigator.clipboard.writeText(text).then(()=>{
    const old = copyBtn.textContent; copyBtn.textContent = "คัดลอกแล้ว ✓";
    setTimeout(()=>copyBtn.textContent = old, 1100);
  });
});
