// =============================================================
//  PETUALANGAN ALJABAR
//  Soal diambil dari instrumen Pre-test & Post-test
//  Literasi Matematika – Bentuk Aljabar (4 soal × 6 tahap = 24)
//  Pada setiap langkah, opsi PERTAMA adalah jawaban benar
//  (urutan opsi diacak otomatis saat permainan berjalan).
// =============================================================

const MISSIONS = [
  {
    indicator: "Mathematical Reasoning",
    title: "Misi 1 · Paket Alat Tulis Mana yang Lebih Murah?",
    problem: `Toko A dan Toko B menjual paket berisi buku (<span class="math">x</span>) dan pulpen (<span class="math">y</span>).<br>
      • <b>Paket Toko A</b>: 2 kantong, tiap kantong berisi <span class="math">3x + 2y</span>, lalu dapat potongan <span class="math">x − y</span>.<br>
      • <b>Paket Toko B</b>: 3 kantong, tiap kantong berisi <span class="math">2x + y</span>, lalu ditambah biaya kemasan <span class="math">y</span>.`,
    steps: [
      { q: "Bentuk aljabar yang tepat untuk Paket Toko A adalah…",
        options: ["2(3x + 2y) − (x − y)", "2(3x + 2y) + (x − y)", "(3x + 2y) − (x − y)"],
        explain: "Ada 2 kantong → 2(3x + 2y). Potongan harga berarti dikurangi → − (x − y)." },
      { q: "Bentuk aljabar yang tepat untuk Paket Toko B adalah…",
        options: ["3(2x + y) + y", "3(2x + y) − y", "3(2x + y + y)"],
        explain: "Ada 3 kantong → 3(2x + y). Biaya kemasan ditambahkan sekali → + y." },
      { q: "Hasil sifat distributif pada Paket A: 2(3x + 2y) − (x − y) = …",
        options: ["6x + 4y − x + y", "6x + 4y − x − y", "6x + 2y − x + y"],
        explain: "2 × 3x = 6x, 2 × 2y = 4y. Tanda minus di depan kurung mengubah −(x − y) menjadi −x + y." },
      { q: "Setelah suku sejenis dikelompokkan, Paket A menjadi…",
        options: ["5x + 5y", "5x + 3y", "7x + 5y"],
        explain: "(6x − x) + (4y + y) = 5x + 5y." },
      { q: "Paket B: 3(2x + y) + y = 6x + 3y + y. Bentuk paling sederhananya adalah…",
        options: ["6x + 4y", "6x + 3y", "5x + 4y"],
        explain: "3y + y = 4y, jadi Paket B = 6x + 4y." },
      { q: "Selisih B − A = (6x + 4y) − (5x + 5y) = x − y. Jika harga buku lebih mahal dari pulpen (x > y), paket mana yang lebih murah?",
        options: ["Paket Toko A, karena selisihnya x − y bernilai positif", "Paket Toko B, karena isinya lebih banyak", "Keduanya selalu sama harganya"],
        explain: "Jika x > y maka x − y > 0, artinya Paket B lebih mahal. Jadi Paket A lebih murah. Keputusan bergantung pada nilai x dan y." }
    ]
  },
  {
    indicator: "Formulating Situations Mathematically",
    title: "Misi 2 · Pagar Kebun Pak Budi",
    problem: `Kebun Pak Budi berbentuk persegi panjang dengan panjang <span class="math">(3p + 5)</span> m dan lebar <span class="math">(2p − 1)</span> m.
      Sekeliling kebun akan dipagari kawat, tetapi ada pintu masuk selebar <span class="math">(p + 2)</span> m yang tidak dipagari.<br>
      Tentukan bentuk aljabar paling sederhana untuk panjang pagar yang dibutuhkan!`,
    steps: [
      { q: "Informasi yang diketahui dari soal adalah…",
        options: ["Panjang = 3p + 5, lebar = 2p − 1, lebar pintu = p + 2",
                  "Panjang = 2p − 1, lebar = 3p + 5, lebar pintu = p − 2",
                  "Panjang = 3p + 5, lebar = p + 2, lebar pintu = 2p − 1"],
        explain: "Baca soal dengan teliti: panjang (3p + 5), lebar (2p − 1), dan pintu (p + 2)." },
      { q: "Hubungan konsep yang tepat untuk menghitung panjang pagar adalah…",
        options: ["Panjang pagar = keliling persegi panjang − lebar pintu",
                  "Panjang pagar = luas persegi panjang − lebar pintu",
                  "Panjang pagar = keliling persegi panjang + lebar pintu"],
        explain: "Pagar mengelilingi kebun (keliling), lalu bagian pintu tidak dipagari sehingga dikurangi." },
      { q: "Model matematikanya adalah…",
        options: ["2(3p + 5) + 2(2p − 1) − (p + 2)",
                  "(3p + 5) + (2p − 1) − (p + 2)",
                  "2(3p + 5) + 2(2p − 1) + (p + 2)"],
        explain: "Keliling = 2 × panjang + 2 × lebar, lalu dikurangi lebar pintu." },
      { q: "Hasil penjabaran perkaliannya adalah…",
        options: ["6p + 10 + 4p − 2 − p − 2", "6p + 10 + 4p − 2 − p + 2", "6p + 5 + 4p − 1 − p − 2"],
        explain: "2(3p + 5) = 6p + 10; 2(2p − 1) = 4p − 2; −(p + 2) = −p − 2." },
      { q: "Pengelompokan suku sejenis yang benar adalah…",
        options: ["(6p + 4p − p) + (10 − 2 − 2)", "(6p + 4p + p) + (10 − 2 − 2)", "(6p + 4p − p) + (10 + 2 − 2)"],
        explain: "Kumpulkan suku ber-p dan konstanta, tetap perhatikan tandanya." },
      { q: "Jadi, panjang pagar kawat yang dibutuhkan Pak Budi adalah…",
        options: ["(9p + 6) meter", "(11p + 6) meter", "(9p + 10) meter"],
        explain: "6p + 4p − p = 9p dan 10 − 2 − 2 = 6, sehingga panjang pagar = (9p + 6) m." }
    ]
  },
  {
    indicator: "Employing Mathematical Concepts, Facts, and Procedures",
    title: "Misi 3 · Menyederhanakan Ekspresi A",
    problem: `Diberikan bentuk aljabar:<br>
      <span class="math">A = 4(2a − 3b + 5) − 2(3a − 4b + 7)</span><br>
      a. Tentukan bentuk paling sederhana dari A.<br>
      b. Tentukan nilai A jika <span class="math">a = 3</span> dan <span class="math">b = −2</span>.`,
    steps: [
      { q: "Langkah pertama yang tepat untuk menyederhanakan A adalah…",
        options: ["Mengalikan 4 dan −2 ke setiap suku di dalam kurung (sifat distributif)",
                  "Langsung menjumlahkan 4 dan −2 menjadi 2",
                  "Mencoret semua kurung tanpa mengalikan"],
        explain: "Bilangan di depan kurung harus dikalikan ke setiap suku di dalamnya." },
      { q: "4(2a − 3b + 5) = …",
        options: ["8a − 12b + 20", "8a − 3b + 5", "6a − 12b + 20"],
        explain: "4 × 2a = 8a, 4 × (−3b) = −12b, 4 × 5 = 20." },
      { q: "−2(3a − 4b + 7) = …",
        options: ["−6a + 8b − 14", "−6a − 8b + 14", "−6a − 8b − 14"],
        explain: "−2 × 3a = −6a, −2 × (−4b) = +8b, −2 × 7 = −14. Ingat: negatif × negatif = positif." },
      { q: "Setelah suku sejenis dikelompokkan: (8a − 6a) + (−12b + 8b) + (20 − 14). Bentuk paling sederhana A adalah…",
        options: ["A = 2a − 4b + 6", "A = 2a − 20b + 6", "A = 14a − 4b + 34"],
        explain: "8a − 6a = 2a; −12b + 8b = −4b; 20 − 14 = 6." },
      { q: "Substitusi a = 3 dan b = −2 ke A = 2a − 4b + 6 yang benar adalah…",
        options: ["2(3) − 4(−2) + 6", "2(3) − 4(2) + 6", "2(−2) − 4(3) + 6"],
        explain: "Ganti a dengan 3 dan b dengan −2. Tanda negatif pada b harus ikut ditulis." },
      { q: "Nilai A adalah…",
        options: ["20", "4", "−2"],
        explain: "2(3) − 4(−2) + 6 = 6 + 8 + 6 = 20." }
    ]
  },
  {
    indicator: "Interpreting, Applying, and Evaluating Mathematical Outcomes",
    title: "Misi 4 · Periksa Pekerjaan Sinta",
    problem: `Sinta diminta menyederhanakan <span class="math">5x − 3(2x − 4) + 7</span>. Ia menulis:<br>
      <span class="math">= 5x − 6x − 12 + 7</span><br>
      <span class="math">= −x − 5</span><br>
      Periksalah apakah hasil Sinta sudah benar!`,
    steps: [
      { q: "Bentuk aljabar awal yang harus disederhanakan Sinta adalah…",
        options: ["5x − 3(2x − 4) + 7", "5x − 3(2x + 4) + 7", "(5x − 3)(2x − 4) + 7"],
        explain: "Tuliskan kembali soal dengan tepat sebelum mengevaluasi langkahnya." },
      { q: "Di manakah letak kesalahan Sinta?",
        options: ["Pada −3 × (−4): Sinta menulis −12, seharusnya +12",
                  "Pada −3 × 2x: Sinta menulis −6x, seharusnya +6x",
                  "Tidak ada kesalahan, langkah Sinta sudah benar"],
        explain: "−3 × (−4) = +12, karena negatif × negatif = positif." },
      { q: "Penjabaran yang benar adalah…",
        options: ["5x − 6x + 12 + 7", "5x − 6x − 12 + 7", "5x + 6x + 12 + 7"],
        explain: "−3(2x − 4) = −6x + 12." },
      { q: "Pengelompokan suku sejenis yang benar adalah…",
        options: ["(5x − 6x) + (12 + 7)", "(5x + 6x) + (12 + 7)", "(5x − 6x) + (12 − 7)"],
        explain: "Kelompokkan suku ber-x dan konstanta tanpa mengubah tanda." },
      { q: "Hasil penyederhanaan yang tepat adalah…",
        options: ["−x + 19", "−x − 5", "11x + 19"],
        explain: "5x − 6x = −x dan 12 + 7 = 19, jadi hasilnya −x + 19." },
      { q: "Kesimpulan yang tepat tentang pekerjaan Sinta adalah…",
        options: ["Hasil Sinta salah karena keliru tanda negatif; jawaban yang benar −x + 19",
                  "Hasil Sinta sudah benar, yaitu −x − 5",
                  "Hasil Sinta salah; jawaban yang benar 11x + 19"],
        explain: "Kekeliruan tanda pada perkalian distributif membuat hasil akhir Sinta salah." }
    ]
  }
];

// ---------- STATE ----------
let playerName = "";
let missionIndex = 0;
let stepIndex = 0;
let score = 0;
let scorePerMission = [0, 0, 0, 0];
let stepResults = [];

const TOTAL_STEPS = MISSIONS.reduce((n, m) => n + m.steps.length, 0);
const $ = (id) => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0, 0);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- MULAI ----------
$("btn-start").addEventListener("click", () => {
  playerName = $("player-name").value.trim() || "Petualang";
  missionIndex = 0; stepIndex = 0; score = 0;
  scorePerMission = [0, 0, 0, 0];
  stepResults = [];
  showScreen("screen-game");
  renderStep();
});

// ---------- TAMPILKAN LANGKAH ----------
function renderStep() {
  const mission = MISSIONS[missionIndex];
  const step = mission.steps[stepIndex];

  $("mission-label").textContent = `Misi ${missionIndex + 1} dari ${MISSIONS.length}`;
  $("mission-title").textContent = mission.title;
  $("problem-text").innerHTML = mission.problem;
  $("step-label").textContent = `Langkah ${stepIndex + 1} dari ${mission.steps.length}`;
  $("question-text").textContent = step.q;
  $("score").textContent = score;

  const done = MISSIONS.slice(0, missionIndex).reduce((n, m) => n + m.steps.length, 0) + stepIndex;
  $("progress-bar").style.width = (done / TOTAL_STEPS) * 100 + "%";

  // titik-titik langkah
  $("steps-dots").innerHTML = mission.steps.map((_, i) => {
    let cls = "";
    if (i < stepIndex) cls = stepResults[i] ? "done-ok" : "done-bad";
    else if (i === stepIndex) cls = "now";
    return `<span class="${cls}"></span>`;
  }).join("");

  // opsi jawaban (diacak)
  const correct = step.options[0];
  const box = $("options");
  box.innerHTML = "";
  shuffle(step.options).forEach((text) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = text;
    btn.addEventListener("click", () => checkAnswer(btn, text === correct, correct, step.explain));
    box.appendChild(btn);
  });

  $("feedback").className = "feedback hidden";
  $("btn-next").classList.add("hidden");
}

// ---------- CEK JAWABAN ----------
function checkAnswer(btn, isCorrect, correct, explain) {
  document.querySelectorAll(".option").forEach((b) => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
  });

  const fb = $("feedback");
  if (isCorrect) {
    score++;
    scorePerMission[missionIndex]++;
    fb.className = "feedback ok";
    fb.innerHTML = `<b>Tepat! ⭐ +1</b><br>${explain}`;
  } else {
    btn.classList.add("wrong");
    fb.className = "feedback bad";
    fb.innerHTML = `<b>Belum tepat.</b> Jawaban yang benar: <b>${correct}</b><br>${explain}`;
  }
  stepResults[stepIndex] = isCorrect;
  $("score").textContent = score;

  const lastStep = stepIndex === MISSIONS[missionIndex].steps.length - 1;
  const lastMission = missionIndex === MISSIONS.length - 1;
  $("btn-next").textContent = lastStep ? (lastMission ? "Lihat Hasil 🏁" : "Misi Berikutnya ▶") : "Lanjut ▶";
  $("btn-next").classList.remove("hidden");
}

// ---------- LANJUT ----------
$("btn-next").addEventListener("click", () => {
  if (stepIndex < MISSIONS[missionIndex].steps.length - 1) {
    stepIndex++;
  } else if (missionIndex < MISSIONS.length - 1) {
    missionIndex++;
    stepIndex = 0;
    stepResults = [];
  } else {
    showResult();
    return;
  }
  renderStep();
});

// ---------- HASIL ----------
function showResult() {
  $("final-score").textContent = score;
  $("result-greeting").textContent = `Kerja bagus, ${playerName}! Ini hasil petualanganmu.`;

  const pct = (score / TOTAL_STEPS) * 100;
  let grade;
  if (pct >= 85) grade = "🏆 Sangat Baik – kamu master aljabar!";
  else if (pct >= 70) grade = "🥈 Baik – sedikit lagi sempurna!";
  else if (pct >= 50) grade = "🥉 Cukup – ayo ulangi bagian yang salah.";
  else grade = "💪 Perlu latihan – coba main lagi, ya!";
  $("final-grade").textContent = grade;

  $("indicator-list").innerHTML = MISSIONS.map((m, i) => {
    const max = m.steps.length;
    return `<div class="indicator">
      <div class="row"><span>${m.indicator}</span><b>${scorePerMission[i]}/${max}</b></div>
      <div class="bar"><div style="width:${(scorePerMission[i] / max) * 100}%"></div></div>
    </div>`;
  }).join("");

  showScreen("screen-result");
}

$("btn-restart").addEventListener("click", () => showScreen("screen-start"));
