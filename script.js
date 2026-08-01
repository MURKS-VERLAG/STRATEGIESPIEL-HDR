"use strict";

const introScreen = document.querySelector("#introScreen");
const mapScreen = document.querySelector("#mapScreen");
const introCopy = document.querySelector("#introCopy");
const textWindow = document.querySelector("#textWindow");
const introMusic = document.querySelector("#introMusic");
const mapMusic = document.querySelector("#mapMusic");
const startOverlay = document.querySelector("#startOverlay");
const startButton = document.querySelector("#startButton");
const introControl = document.querySelector("#introControl");

const mapViewport = document.querySelector("#mapViewport");
const campaignMap = document.querySelector("#campaignMap");
const mapHotspots = document.querySelector("#mapHotspots");
const zoomDisplay = document.querySelector("#zoomDisplay");
const mapHint = document.querySelector("#mapHint");

const INTRO_DURATION = 72000;
const TRANSITION_DURATION = 1400;

let crawlAnimation = null;
let mapReady = false;

const mapState = {
  fitScale: 1,
  zoom: 1,
  maxZoom: 1.36,
  x: 0,
  y: 0
};

function stopIntro() {
  if (crawlAnimation) {
    crawlAnimation.cancel();
    crawlAnimation = null;
  }
}

function fadeAudio(audio, targetVolume, duration, pauseAtEnd = false) {
  const startVolume = audio.volume;
  const difference = targetVolume - startVolume;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    audio.volume = Math.max(0, Math.min(1, startVolume + difference * progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (pauseAtEnd) {
      audio.pause();
    }
  }

  requestAnimationFrame(step);
}

async function startIntro() {
  stopIntro();

  startOverlay.classList.add("is-hidden");
  introControl.hidden = false;
  introControl.textContent = "Intro überspringen";

  introCopy.style.opacity = "1";
  introCopy.style.transform = "translateY(0px)";

  const distance = introCopy.offsetHeight + textWindow.clientHeight;

  crawlAnimation = introCopy.animate(
    [
      { transform: "translateY(0px)", opacity: 1 },
      { transform: `translateY(-${distance}px)`, opacity: 1 }
    ],
    {
      duration: INTRO_DURATION,
      easing: "linear",
      fill: "forwards"
    }
  );

  crawlAnimation.onfinish = switchToMap;

  introMusic.pause();
  introMusic.currentTime = 0;
  introMusic.volume = 0.72;

  try {
    await introMusic.play();
  } catch (error) {
    console.warn("Intro-Musik wurde vom Browser blockiert:", error);
  }
}

async function switchToMap() {
  stopIntro();
  introControl.hidden = true;

  fadeAudio(introMusic, 0, TRANSITION_DURATION, true);

  mapScreen.classList.add("is-active");
  introScreen.classList.add("is-leaving");

  // Erst nach dem Sichtbarmachen messen und immer sauber zentrieren.
  window.requestAnimationFrame(() => {
    initializeMap();
  });

  mapMusic.pause();
  mapMusic.currentTime = 0;
  mapMusic.volume = 0;

  try {
    await mapMusic.play();
    fadeAudio(mapMusic, 0.72, TRANSITION_DURATION);
  } catch (error) {
    console.warn("Kartenmusik wurde vom Browser blockiert:", error);
  }

  window.setTimeout(() => {
    introScreen.classList.remove("is-active", "is-leaving");
  }, TRANSITION_DURATION);
}

startButton.addEventListener("click", startIntro);
introControl.addEventListener("click", switchToMap);

/* Karte vollständig in den Bildschirm einpassen. */
function initializeMap() {
  if (!campaignMap.complete || !campaignMap.naturalWidth) {
    campaignMap.addEventListener("load", initializeMap, { once: true });
    return;
  }

  const viewportWidth = mapViewport.clientWidth;
  const viewportHeight = mapViewport.clientHeight;

  if (viewportWidth <= 0 || viewportHeight <= 0) {
    window.requestAnimationFrame(initializeMap);
    return;
  }

  // Exaktes "contain": Die gesamte Karte bleibt immer sichtbar.
  const fitScale = Math.min(
    viewportWidth / campaignMap.naturalWidth,
    viewportHeight / campaignMap.naturalHeight
  );

  const fittedWidth = campaignMap.naturalWidth * fitScale;
  const fittedHeight = campaignMap.naturalHeight * fitScale;

  campaignMap.style.width = `${fittedWidth}px`;
  campaignMap.style.height = `${fittedHeight}px`;
  mapHotspots.style.width = `${fittedWidth}px`;
  mapHotspots.style.height = `${fittedHeight}px`;

  mapState.fitScale = fitScale;
  mapState.zoom = 1;
  mapState.x = (viewportWidth - fittedWidth) / 2;
  mapState.y = (viewportHeight - fittedHeight) / 2;
  mapReady = true;

  renderMap();
}

function clampMapPosition() {
  const viewportWidth = mapViewport.clientWidth;
  const viewportHeight = mapViewport.clientHeight;
  const displayWidth = campaignMap.offsetWidth * mapState.zoom;
  const displayHeight = campaignMap.offsetHeight * mapState.zoom;

  if (displayWidth <= viewportWidth) {
    mapState.x = (viewportWidth - displayWidth) / 2;
  } else {
    mapState.x = Math.min(0, Math.max(viewportWidth - displayWidth, mapState.x));
  }

  if (displayHeight <= viewportHeight) {
    mapState.y = (viewportHeight - displayHeight) / 2;
  } else {
    mapState.y = Math.min(0, Math.max(viewportHeight - displayHeight, mapState.y));
  }
}

function renderMap() {
  clampMapPosition();

  campaignMap.style.transform =
    `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.zoom})`;
  mapHotspots.style.transform =
    `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.zoom})`;

  zoomDisplay.textContent = `${Math.round(mapState.zoom * 100)} %`;
}

mapViewport.addEventListener("wheel", (event) => {
  event.preventDefault();

  const rect = mapViewport.getBoundingClientRect();
  const cursorX = event.clientX - rect.left;
  const cursorY = event.clientY - rect.top;

  const previousZoom = mapState.zoom;
  const zoomFactor = event.deltaY < 0 ? 1.14 : 1 / 1.14;
  const nextZoom = Math.min(
    mapState.maxZoom,
    Math.max(1, previousZoom * zoomFactor)
  );

  if (nextZoom === previousZoom) {
    return;
  }

  const imagePointX = (cursorX - mapState.x) / previousZoom;
  const imagePointY = (cursorY - mapState.y) / previousZoom;

  mapState.zoom = nextZoom;
  mapState.x = cursorX - imagePointX * nextZoom;
  mapState.y = cursorY - imagePointY * nextZoom;

  renderMap();
  mapHint.classList.add("is-hidden");
}, { passive: false });

mapViewport.addEventListener("dblclick", () => {
  mapState.zoom = 1;
  initializeMap();
});


const pressedKeys = new Set();
const PAN_SPEED = 520;
let lastFrameTime = performance.now();

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (["w", "a", "s", "d"].includes(key)) {
    event.preventDefault();
    pressedKeys.add(key);
    mapHint.classList.add("is-hidden");
  }
});

window.addEventListener("keyup", (event) => {
  pressedKeys.delete(event.key.toLowerCase());
});

window.addEventListener("blur", () => {
  pressedKeys.clear();
});

function updateKeyboardPan(now) {
  const deltaSeconds = Math.min(0.05, (now - lastFrameTime) / 1000);
  lastFrameTime = now;

  if (mapScreen.classList.contains("is-active") && mapState.zoom > 1) {
    const distance = PAN_SPEED * deltaSeconds;

    if (pressedKeys.has("a")) mapState.x += distance;
    if (pressedKeys.has("d")) mapState.x -= distance;
    if (pressedKeys.has("w")) mapState.y += distance;
    if (pressedKeys.has("s")) mapState.y -= distance;

    if (pressedKeys.size > 0) {
      renderMap();
    }
  }

  requestAnimationFrame(updateKeyboardPan);
}

requestAnimationFrame(updateKeyboardPan);

window.addEventListener("resize", () => {
  if (mapScreen.classList.contains("is-active")) {
    initializeMap();
  }
});





/* V16: Hover-Sounds zuverlässig für Browser freischalten. */
const hoverSoundIds = [
  "bellSound",
  "blackShieldSound",
  "familyTreeSound",
  "scrollSound",
  "handbookSound"
];

const hoverAudios = hoverSoundIds
  .map((id) => document.querySelector(`#${id}`))
  .filter(Boolean);

hoverAudios.forEach((audio) => {
  audio.volume = 0.55;
});

/*
  Chrome/Edge blockieren Sound oft, wenn play() erstmals nur durch Hover
  ausgelöst wird. Deshalb werden alle fünf Sounds beim echten Klick auf
  „Intro starten“ stumm freigeschaltet und sofort zurückgesetzt.
*/
function unlockHoverSounds() {
  hoverAudios.forEach((audio) => {
    const originalVolume = audio.volume;
    audio.muted = true;
    audio.currentTime = 0;

    const playPromise = audio.play();

    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => {
          audio.pause();
          audio.currentTime = 0;
          audio.muted = false;
          audio.volume = originalVolume;
        })
        .catch(() => {
          audio.muted = false;
          audio.volume = originalVolume;
        });
    } else {
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
      audio.volume = originalVolume;
    }
  });
}

startButton.addEventListener("click", unlockHoverSounds, { once: true });

document.querySelectorAll(".map-hotspot[data-sound]").forEach((hotspot) => {
  hotspot.addEventListener("pointerenter", () => {
    const audio = document.querySelector(`#${hotspot.dataset.sound}`);

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.muted = false;
    audio.volume = 0.55;

    audio.play().catch((error) => {
      console.warn(
        `Hover-Sound ${hotspot.dataset.sound} konnte nicht abgespielt werden:`,
        error
      );
    });
  });
});
