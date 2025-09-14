// ===== คำทำนาย (ตัวอย่าง) =====
const FORTUNES = [
  {
    id: 1,
    tier: "ตอน พระรามโศกเมื่อนางสีดาถูกลักพาตัว",
    meaning: `
      <div class="fortune-poem">
        <p>โอ๋เอ๋พระลักษณ์ผู้ร่วมไตร       เห็นน้องไฉนจึงไม่อยู่</p>
        <p>ข้าตามหาน้องเรียกชู้            เห็นแต่หมู่ไม้ไพรไสว</p>
        <p>ป่าพงเงียบเหงาเศร้าใจแท้      อกพี่จะแหลกแล้งไฉน</p>
        <p>แสนรักแสนหวงดวงใจ          ถูกพรากไปกลางไพรพง</p>
      </div>
      <div class="fortune-explain">
        ผู้ที่ได้เซียมซีใบนี้ความรักของผู้เสี่ยงทายมีเกณฑ์ต้องเผชิญอุปสรรคและความห่างไกล 
        อาจจำเป็นต้องพลัดพรากจากคู่ครองหรือ บุคคลอันเป็นที่รักด้วยเหตุจำเป็น 
        ทำให้ต้องใช้เวลานานกว่าจะได้กลับมาพบเจอกันอีกครั้ง 
        ช่วงเวลานี้จึงควรให้คุณค่ากับทุกวินาทีที่ได้อยู่ร่วมกัน 
        ใช้ความเข้าใจ ความเอาใจใส่ และความอบอุ่นเติมเต็มหัวใจของกันและกัน 
        เพื่อเป็นกำลังใจและหล่อเลี้ยงความสัมพันธ์ให้มั่นคง 
        จนกว่าจะถึงวันที่ได้กลับมาอยู่ใกล้ชิดดังเดิม
      </div>
    `,
    advice: "ใช้ความเข้าใจและความอดทนดูแลความสัมพันธ์"
  },
  {
    id: 2,
    tier: "ตอน นางเกสรครวญ",
    meaning: `
      <div class="fortune-poem">
        <p>ครานั้นนางเกสรมารศรี                  มาตำหนักพระบุตรีเสนหา</p>
        <p>ชลนัยน์ไหลหลั่งลงถั่งตา                 สวมกอดพระธิดาเเล้วร่ำไร</p>
        <p>โอ้ว่าสร้อยทองของเเม่อา                พระบิดาจะให้ไปเมืองใต้</p>
        <p>อีกสามวันขวัญเจ้าจะจากไป            เหมือนดังใจเเม่จะขาดอนาถนัก</p>
      </div>
      <div class="fortune-explain">
        ผู้ที่ได้ใบเซียมซีใบนี้อาจต้องพบเจอกับอุปสรรคและปัญหาบางประการ 
        จะต้องมีการจากลาหรือพลัดพรากจากถิ่นที่อยู่ 
        หรือหากเป็นเรื่องของความรักความสัมพันธ์จะมีการเปลี่ยนแปลงหรือต้องพลัดพรากกัน 
        ผู้เสี่ยงทายต้องเตรียมใจรับการเปลี่ยนแปลง และรักษาสติให้มั่นคง 
        และทำใจยอมรับความเปลี่ยนแปลงเพื่อให้ได้สิ่งใหม่ที่ดี
      </div>
    `,
    advice: "เตรียมใจรับการเปลี่ยนแปลงและรักษาสติให้มั่นคง"
  },
  {
    id: 3,
    tier: "ตอน พระรามยกศรโมลี",
    meaning: `
      <div class="fortune-poem">
        <p>ครั้นหนึ่งจึงยื่นพระหัตถ์ขวา                 อันมีจักรลักขณาประภัสสร</p>
        <p>งามดังงวงเทวกุญชร                          พระสี่กรจับคันศิลป์ชัย</p>
        <p>อันมหาธนูสิทธิศักดิ์                           จะหนักพระหัตถ์ก็หาไม่</p>
        <p>ยกขึ้นได้คล่องว่องไว                          ภูวไนยกวัดแกว่งสำแดงฤทธิ์</p>
      </div>
      <div class="fortune-explain">
        ผู้ที่ได้ใบเซียมซีใบนี้ท่านจะมีโชคลาภจากหน้าที่การงานของท่าน 
        งานที่ท่านได้รับท่านอาจจะคิดว่ายากแต่ด้วยสามารถของท่านก็ทำได้จนประสบความสำเร็จ 
        โชคลาภเงินทองจะมาจากความตั้งใจและมั่นใจในการทำงานของท่าน 
        จงใช้ความสามารถและปัญญาของท่านให้ดีอย่าประมาท 
        เก็บออมเมื่อได้ลาภอย่าฟุ่มเฟือยเกินเหตุ
      </div>
    `,
    advice: "ตั้งใจทำงาน ใช้ความสามารถและรู้จักเก็บออม"
  }
  
];

function drawFortune(){
  const f = FORTUNES[rand(FORTUNES.length)];
  stickEl.textContent = `ไม้เลข ${f.id}`;
  tierEl.textContent = f.tier;
  tierEl.className = `badge ${tierClass(f.tier)}`;

  // ถ้า meaning มี tag HTML ให้แสดงแบบ innerHTML
  meaningEl.innerHTML = f.meaning;
  adviceEl.textContent  = "คำแนะนำ: " + f.advice;
}

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
