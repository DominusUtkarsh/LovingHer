// =========================================================
// LAUNCH DATE
// Change this to the exact moment you publish the site.
// Every visitor's timer counts from this fixed point, so it
// keeps climbing forever/globally instead of resetting each
// time someone opens the page.
// Format: "YYYY-MM-DDTHH:MM:SSZ"  (Z = UTC time)
// =========================================================
const LAUNCH_DATE = "2024-03-07T20:18:00Z"; // = 1:48 AM, 8 March 2024 (IST)
const startTime = new Date(LAUNCH_DATE).getTime();

// =========================================================
// RANK TITLES
// seconds elapsed -> title shown
// =========================================================
const levels = {
  63072000: "Two Years of Love",             // 730 days / 2 years
//   70000000: "Smitten",                       // ~810 days / ~2.22 years
  80000000: "Smitten",                    // ~926 days / ~2.54 years
  95000000: "Lovestruck",                    // ~1100 days / ~3.01 years
  110000000: "Head Over Heels",              // ~1273 days / ~3.49 years
  125000000: "Daydreamer",                   // ~1447 days / ~3.96 years
  140000000: "Devoted",                      // ~1620 days / ~4.44 years
  157680000: "Five Years Eternal",           // 1825 days / 5 years

  172000000: "Sweetheart",                   // ~1991 days / ~5.45 years
  195000000: "Darling",                      // ~2257 days / ~6.18 years
  220000000: "Beloved",                      // ~2546 days / ~6.98 years
  245000000: "Cherished One",                // ~2836 days / ~7.77 years
  270000000: "Heart's Keeper",               // ~3125 days / ~8.56 years
  295000000: "True Love",                    // ~3414 days / ~9.35 years
  315360000: "Ten Years Timeless",           // 3650 days / 10 years

  335000000: "Soulmate",                     // ~3877 days / ~10.62 years
  365000000: "Forever Fond",                 // ~4225 days / ~11.57 years
  395000000: "Hopeless Romantic",            // ~4572 days / ~12.53 years
  425000000: "Eternal Flame",                // ~4919 days / ~13.48 years
  450000000: "Bound by the Heart",           // ~5208 days / ~14.27 years
  473040000: "Fifteen Years Together",       // 5475 days / 15 years

  495000000: "Twin Flame",                   // ~5729 days / ~15.7 years
  525000000: "Love of a Lifetime",           // ~6076 days / ~16.65 years
  555000000: "Devoted Beyond Words",         // ~6424 days / ~17.6 years
  585000000: "One and Only",                 // ~6771 days / ~18.55 years
  610000000: "Heart and Soul",               // ~7060 days / ~19.34 years
  630720000: "Twenty Years Everlasting",     // 7300 days / 20 years

  655000000: "Forever Yours",                // ~7581 days / ~20.77 years
  685000000: "Endless Devotion",             // ~7928 days / ~21.72 years
  715000000: "Unconditional Love",           // ~8276 days / ~22.67 years
  745000000: "My Whole Heart",               // ~8623 days / ~23.62 years
  770000000: "Ride or Die",                  // ~8912 days / ~24.42 years
  788400000: "Twenty-Five Years True",       // 9125 days / 25 years

  810000000: "Ultimate Soulmate",            // ~9375 days / ~25.68 years
  840000000: "Love Incarnate",               // ~9722 days / ~26.64 years
  870000000: "Undying Devotion",             // ~10069 days / ~27.59 years
  900000000: "Star-Crossed",                 // ~10417 days / ~28.54 years
  925000000: "Fated",                        // ~10706 days / ~29.33 years
  946080000: "Thirty Years Beyond Forever",  // 10950 days / 30 years

  965000000: "Love Beyond Measure",          // ~11169 days / ~30.6 years
  1000000000: "Written in the Stars",        // ~11574 days / ~31.71 years
  1040000000: "Heart of Hearts",             // ~12037 days / ~32.98 years
  1075000000: "Infinite Fondness",           // ~12442 days / ~34.09 years
  1103760000: "Thirty-Five Years Devoted",   // 12775 days / 35 years

  1130000000: "Forever's Companion",         // ~13079 days / ~35.83 years
  1165000000: "Love Unfading",               // ~13484 days / ~36.94 years
  1200000000: "Heartbound",                  // ~13889 days / ~38.05 years
  1230000000: "Steadfast and Sure",          // ~14236 days / ~39.0 years
  1261440000: "Forty Years Eternal",         // 14600 days / 40 years

  1290000000: "Deep as the Sea",             // ~14931 days / ~40.91 years
  1325000000: "Faithful Heart",              // ~15336 days / ~42.02 years
  1360000000: "Wrapped in Love",             // ~15741 days / ~43.13 years
  1390000000: "Love's True Compass",         // ~16088 days / ~44.08 years
  1419120000: "Forty-Five Years True",       // 16425 days / 45 years

  1445000000: "Heart of Gold",               // ~16725 days / ~45.82 years
  1480000000: "Timeless Together",           // ~17130 days / ~46.93 years
  1515000000: "Still Smitten",               // ~17535 days / ~48.04 years
  1550000000: "Endless and Unshaken",        // ~17940 days / ~49.15 years
  1576800000: "Fifty Years of Forever"       // 18250 days / 50 years
};

const secondsCount = document.querySelector(".seconds");
const grade = document.querySelector(".grade");

function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  secondsCount.innerText = elapsed;

  // find the highest threshold reached so far (works even on first load,
  // unlike only checking the exact current second)
  let currentTitle = grade.innerText;
  let bestThreshold = -1;
  for (const threshold in levels) {
    const t = Number(threshold);
    if (elapsed >= t && t > bestThreshold) {
      bestThreshold = t;
      currentTitle = levels[threshold];
    }
  }
  grade.innerText = currentTitle;
}

setInterval(updateTimer, 1000);
updateTimer();

// =========================================================
// Subtle mouse parallax on the photo — a gentle tilt/drift,
// not a dizzying zoom. Feel free to lower `strength` further
// or remove this block entirely for a fully still photo.
// =========================================================
const photoWrap = document.getElementById("photoWrap");
const strength = 12; // max pixels of drift

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * strength;
  const y = (e.clientY / window.innerHeight - 0.5) * strength;
  photoWrap.style.transform = `translate(${x}px, ${y}px)`;
});

// =========================================================
// Softly floating hearts drifting upward in the background
// =========================================================
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const hearts = [];
const MAX_HEARTS = 22; // keep this low for a calm, uncluttered feel

function spawnHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: 10 + Math.random() * 16,
    speed: 0.3 + Math.random() * 0.6,
    drift: (Math.random() - 0.5) * 0.4,
    opacity: 0.15 + Math.random() * 0.35,
    hue: 330 + Math.random() * 20 // soft pinks/roses
  });
}

function drawHeart(h) {
  ctx.save();
  ctx.translate(h.x, h.y);
  ctx.globalAlpha = h.opacity;
  ctx.fillStyle = `hsl(${h.hue}, 80%, 75%)`;
  const s = h.size;

  ctx.beginPath();
  ctx.moveTo(0, s * 0.3);
  ctx.bezierCurveTo(-s / 2, -s / 3, -s, s / 4, 0, s);
  ctx.bezierCurveTo(s, s / 4, s / 2, -s / 3, 0, s * 0.3);
  ctx.fill();
  ctx.restore();
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (hearts.length < MAX_HEARTS && Math.random() < 0.03) {
    spawnHeart();
  }

  for (let i = hearts.length - 1; i >= 0; i--) {
    const h = hearts[i];
    h.y -= h.speed;
    h.x += h.drift;
    drawHeart(h);
    if (h.y < -30) hearts.splice(i, 1);
  }

  requestAnimationFrame(loop);
}
loop();