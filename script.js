"use strict";

const introCopy = document.querySelector("#introCopy");
const textWindow = document.querySelector("#textWindow");
const music = document.querySelector("#introMusic");
const startOverlay = document.querySelector("#startOverlay");
const startButton = document.querySelector("#startButton");
const introControl = document.querySelector("#introControl");

const DURATION = 72000;
let crawlAnimation = null;

function stopEverything() {
  if (crawlAnimation) {
    crawlAnimation.cancel();
    crawlAnimation = null;
  }

  music.pause();
  music.currentTime = 0;
  music.volume = 0.72;
}

function finishIntro() {
  introControl.hidden = false;
  introControl.textContent = "Intro wiederholen";
  music.pause();
}

async function startIntro() {
  stopEverything();

  startOverlay.classList.add("hidden");
  introControl.hidden = false;
  introControl.textContent = "Intro überspringen";

  introCopy.style.opacity = "1";
  introCopy.style.transform = "translateY(0px)";

  /*
    Exakte Strecke:
    Höhe des gesamten Textes + Höhe des sichtbaren Wandfensters.
    Dadurch beginnt die erste Zeile an der Tischkante und am Ende
    ist auch die letzte Zeile vollständig über den oberen Bildrand hinaus.
  */
  const distance = introCopy.offsetHeight + textWindow.clientHeight;

  crawlAnimation = introCopy.animate(
    [
      { transform: "translateY(0px)", opacity: 1 },
      { transform: `translateY(-${distance}px)`, opacity: 1 }
    ],
    {
      duration: DURATION,
      easing: "linear",
      fill: "forwards"
    }
  );

  crawlAnimation.onfinish = finishIntro;

  try {
    await music.play();
  } catch (error) {
    console.warn("Musik wurde vom Browser blockiert:", error);
  }
}

function skipIntro() {
  if (crawlAnimation) {
    crawlAnimation.cancel();
    crawlAnimation = null;
  }

  introCopy.animate(
    [{ opacity: 1 }, { opacity: 0 }],
    { duration: 350, fill: "forwards" }
  );

  music.pause();
  introControl.textContent = "Intro wiederholen";
}

startButton.addEventListener("click", startIntro);

introControl.addEventListener("click", () => {
  if (introControl.textContent === "Intro wiederholen") {
    startIntro();
  } else {
    skipIntro();
  }
});

window.addEventListener("resize", () => {
  if (crawlAnimation && crawlAnimation.playState === "running") {
    startIntro();
  }
});
