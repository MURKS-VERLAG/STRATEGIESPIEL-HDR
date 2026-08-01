"use strict";

const stage = document.querySelector("#stage");
const introCopy = document.querySelector("#introCopy");
const music = document.querySelector("#introMusic");
const startOverlay = document.querySelector("#startOverlay");
const startButton = document.querySelector("#startButton");
const introControl = document.querySelector("#introControl");

const INTRO_DURATION_MS = 72000;
let finishTimer = null;

function clearTimer() {
  window.clearTimeout(finishTimer);
  finishTimer = null;
}

function resetIntro() {
  clearTimer();
  introCopy.classList.remove("is-running", "is-skipped");
  void introCopy.offsetWidth;
}

async function startMusic() {
  music.pause();
  music.currentTime = 0;
  music.volume = 0.72;

  try {
    await music.play();
  } catch (error) {
    console.warn("Musikstart wurde vom Browser blockiert:", error);
  }
}

function fadeOutMusic() {
  const fade = window.setInterval(() => {
    music.volume = Math.max(0, music.volume - 0.04);

    if (music.volume <= 0.01) {
      window.clearInterval(fade);
      music.pause();
      music.volume = 0.72;
    }
  }, 80);
}

function finishIntro() {
  clearTimer();
  introCopy.classList.remove("is-running");
  introControl.hidden = false;
  introControl.textContent = "Intro wiederholen";
  fadeOutMusic();
}

async function startIntro() {
  resetIntro();

  startOverlay.classList.add("is-hidden");
  introControl.hidden = false;
  introControl.textContent = "Intro überspringen";

  await startMusic();

  introCopy.classList.add("is-running");
  finishTimer = window.setTimeout(finishIntro, INTRO_DURATION_MS);
}

function skipIntro() {
  clearTimer();

  introCopy.classList.remove("is-running");
  introCopy.classList.add("is-skipped");
  introControl.hidden = true;

  window.setTimeout(() => {
    music.pause();
    music.currentTime = 0;
    music.volume = 0.72;

    introControl.hidden = false;
    introControl.textContent = "Intro wiederholen";
  }, 430);
}

startButton.addEventListener("click", startIntro);

introControl.addEventListener("click", () => {
  if (introControl.textContent === "Intro wiederholen") {
    startIntro();
    return;
  }

  skipIntro();
});
