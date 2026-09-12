const openBtn = document.getElementById("openBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const surprise = document.getElementById("surprise");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");

function startMusic() {
  music.play().then(() => {
    musicBtn.textContent = "Ⅱ";
    musicText.textContent = "Playing";
  }).catch(() => {
    musicText.textContent = "Tap ♫";
  });
}

openBtn.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");
  message.scrollIntoView({ behavior: "smooth" });
  startMusic();
  makeHearts(14);
});

surpriseBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  surprise.classList.add("show");
  surprise.scrollIntoView({ behavior: "smooth" });
  makeHearts(24);
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    startMusic();
  } else {
    music.pause();
    musicBtn.textContent = "♫";
    musicText.textContent = "Paused";
  }
});

function makeHearts(amount) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart-float";
      heart.textContent = Math.random() > .25 ? "♡" : "✦";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = (12 + Math.random() * 18) + "px";
      heart.style.animationDuration = (5 + Math.random() * 5) + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 11000);
    }, i * 120);
  }
}

// Efek hati kecil sesekali di latar.
setInterval(() => makeHearts(1), 2200);
