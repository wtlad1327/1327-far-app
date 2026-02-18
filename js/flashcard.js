// 公開版閃卡資料（基礎詞彙）
const cards = [
  { term: "心臟 Heart", definition: "位於胸腔中央偏左，負責將血液泵送至全身，是循環系統的核心器官。" },
  { term: "肺 Lung", definition: "左右各一，負責吸入氧氣及排出二氧化碳，是呼吸系統的主要器官。" },
  { term: "動脈 Artery", definition: "將含氧血液從心臟輸送到全身各部位的血管，管壁較厚。" },
  { term: "靜脈 Vein", definition: "將身體各部位的血液送回心臟的血管，含氧量較低。" },
  { term: "大腦 Brain", definition: "神經系統的控制中心，負責思考、記憶、感覺及控制身體活動。" },
  { term: "脊髓 Spinal Cord", definition: "從大腦延伸至背部的神經束，負責傳遞大腦與身體之間的訊號。" },
  { term: "氣管 Trachea", definition: "連接喉嚨與肺部的管道，讓空氣進出肺部，俗稱「喉嚨」。" },
  { term: "橫膈膜 Diaphragm", definition: "位於胸腔底部的肌肉，收縮時使肺部擴張吸氣，放鬆時呼氣。" },
  { term: "CPR", definition: "心肺復甦法。心臟停頓時，用胸外壓及人工呼吸維持血液循環，爭取救援時間。" },
  { term: "AED 自動體外除顫器", definition: "一種可自動分析心律並施以電擊的儀器，用於心室纖顫患者的緊急搶救。" },
  { term: "心室纖顫 VF", definition: "心臟肌肉無序顫動，無法有效泵血的致命心律失常，是AED最主要的治療對象。" },
  { term: "股骨 Femur", definition: "大腿骨，是人體最長、最強壯的骨骼，連接髖關節與膝關節。" }
];

let currentIndex = 0;
let isFlipped = false;

function updateCard() {
  const card = cards[currentIndex];
  document.getElementById('card-term').textContent = card.term;
  document.getElementById('card-definition').textContent = card.definition;
  document.getElementById('card-counter').textContent = `${currentIndex + 1} / ${cards.length}`;
  
  // 重設翻轉狀態
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('flipped');
  isFlipped = false;
}

window.flipCard = function() {
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.toggle('flipped');
  isFlipped = !isFlipped;
}

window.nextCard = function() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCard();
}

window.prevCard = function() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCard();
}

// 初始化
document.addEventListener('DOMContentLoaded', updateCard);
