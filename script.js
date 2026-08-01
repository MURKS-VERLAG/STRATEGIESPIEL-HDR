"use strict";

const stage = document.querySelector("#stage");
const introCopy = document.querySelector("#introCopy");
const introControl = document.querySelector("#introControl");

const INTRO_DURATION_MS = 59000;
const START_DELAY_MS = 800;

let finishTimer = null;
let revealTimers = [];

function clearTimers() {
  window.clearTimeout(finishTimer);
  revealTimers.forEach((timer) => window.clearTimeout(timer));
  revealTimers = [];
}

function resetElements() {
  introCopy.classList.remove("is-running", "is-skipped");
  stage.classList.remove("intro-finished");

  const pieces = [...introCopy.querySelectorAll("h1, p")];
  pieces.forEach((piece) => {
    piece.style.animationDelay = "";
  });

  // Erzwingt einen neuen Animationsdurchlauf.
  void introCopy.offsetWidth;
}

function scheduleParagraphs() {
  const pieces = [...introCopy.querySelectorAll("h1, p")];

  /*
    Die Passagen treten nacheinander auf und ziehen damit organisch
    von oben nach unten durch den verfügbaren Raum.
  */
  const delays = [1.0, 4.2, 11.5, 17.0, 25.2, 32.6, 39.6, 47.0];

  pieces.forEach((piece, index) => {
    const delay = delays[index] ?? (1 + index * 6);
    piece.style.animationDelay = `${delay}s`;
  });
}

function finishIntro() {
  stage.classList.add("intro-finished");
  introControl.textContent = "Intro wiederholen";
  introControl.setAttribute("aria-label", "Intro erneut starten");
}

function startIntro() {
  clearTimers();
  resetElements();
  scheduleParagraphs();

  introControl.textContent = "Intro überspringen";
  introControl.setAttribute("aria-label", "Intro überspringen");

  window.setTimeout(() => {
    introCopy.classList.add("is-running");
  }, 30);

  finishTimer = window.setTimeout(
    finishIntro,
    INTRO_DURATION_MS + START_DELAY_MS
  );
}

function skipIntro() {
  clearTimers();
  introCopy.classList.remove("is-running");
  introCopy.classList.add("is-skipped");

  window.setTimeout(() => {
    finishIntro();
  }, 430);
}

introControl.addEventListener("click", () => {
  if (stage.classList.contains("intro-finished")) {
    startIntro();
    return;
  }

  skipIntro();
});

window.addEventListener("load", startIntro);
