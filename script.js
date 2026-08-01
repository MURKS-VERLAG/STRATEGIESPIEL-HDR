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
const mapOverlay = document.querySelector("#mapOverlay");
const mapFogLayer = document.querySelector("#mapFogLayer");
const yearDisplay = document.querySelector("#yearDisplay");
const zoomDisplay = document.querySelector("#zoomDisplay");
const mapHint = document.querySelector("#mapHint");
const barracksModal = document.querySelector("#barracksModal");
const feudHoverIcon = document.querySelector("#feudHoverIcon");
const feudConfirmation = document.querySelector("#feudConfirmation");
const feudConfirmYes = document.querySelector("#feudConfirmYes");
const feudConfirmNo = document.querySelector("#feudConfirmNo");
const feudPortraitModal = document.querySelector("#feudPortraitModal");
const battleScreen = document.querySelector("#battleScreen");
const surrenderButton = document.querySelector("#surrenderButton");

const INTRO_DURATION = 72000;
const TRANSITION_DURATION = 1400;

let crawlAnimation = null;
let mapReady = false;
let barracksOpen = false;
let barracksClosing = false;
let feudConfirmationOpen = false;
let feudSequenceInProgress = false;
let battleScreenOpen = false;

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

  mapOverlay.style.width = `${fittedWidth}px`;
  mapOverlay.style.height = `${fittedHeight}px`;
  mapOverlay.style.fontSize = `${Math.max(26, fittedWidth * 0.036)}px`;

  mapFogLayer.style.width = `${fittedWidth}px`;
  mapFogLayer.style.height = `${fittedHeight}px`;

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

  mapOverlay.style.transform =
    `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.zoom})`;

  mapFogLayer.style.transform =
    `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.zoom})`;

  zoomDisplay.textContent = `${Math.round(mapState.zoom * 100)} %`;
}

mapViewport.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (barracksOpen || barracksClosing || feudConfirmationOpen || feudSequenceInProgress || battleScreenOpen) {
    return;
  }

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
  if (barracksOpen || barracksClosing || feudConfirmationOpen || feudSequenceInProgress || battleScreenOpen) {
    return;
  }

  mapState.zoom = 1;
  initializeMap();
});


const pressedKeys = new Set();
const PAN_SPEED = 520;
let lastFrameTime = performance.now();

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (barracksOpen || barracksClosing || feudConfirmationOpen || feudSequenceInProgress || battleScreenOpen) {
    return;
  }

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

  if (
    mapScreen.classList.contains("is-active") &&
    mapState.zoom > 1 &&
    !barracksOpen &&
    !barracksClosing
  ) {
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

/* V17: direkte Koordinatenprüfung auf dem transformierten Kartenbild. */
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

function unlockHoverSounds() {
  hoverAudios.forEach((audio) => {
    const originalVolume = 0.55;
    audio.muted = true;
    audio.currentTime = 0;

    const result = audio.play();

    if (result && typeof result.then === "function") {
      result
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

const soundRegions = [
  {
    id: "handbook",
    minX: 0.895,
    maxX: 0.985,
    minY: 0.010,
    maxY: 0.175,
    audioId: "handbookSound"
  },
  {
    id: "scroll",
    minX: 0.870,
    maxX: 0.995,
    minY: 0.275,
    maxY: 0.405,
    audioId: "scrollSound"
  },
  {
    id: "familyTree",
    minX: 0.885,
    maxX: 0.995,
    minY: 0.425,
    maxY: 0.565,
    audioId: "familyTreeSound"
  },
  {
    id: "blackShield",
    minX: 0.875,
    maxX: 0.995,
    minY: 0.565,
    maxY: 0.790,
    audioId: "blackShieldSound"
  },
  {
    id: "bell",
    minX: 0.875,
    maxX: 0.995,
    minY: 0.785,
    maxY: 0.995,
    audioId: "bellSound"
  }
];


const feudTargetRegion = {
  id: "feudTarget",
  minX: 0.500,
  maxX: 0.555,
  minY: 0.035,
  maxY: 0.145
};

let activeSoundRegion = null;

function findSoundRegion(x, y) {
  return soundRegions.find((region) =>
    x >= region.minX &&
    x <= region.maxX &&
    y >= region.minY &&
    y <= region.maxY
  ) || null;
}

function playHoverSound(audioId) {
  const audio = document.querySelector(`#${audioId}`);

  if (!audio) {
    console.error(`Audioelement fehlt: ${audioId}`);
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  audio.muted = false;
  audio.volume = 0.55;

  audio.play().catch((error) => {
    console.error(`Sound konnte nicht abgespielt werden: ${audioId}`, error);
  });
}

mapViewport.addEventListener("pointermove", (event) => {
  if (
    barracksOpen ||
    barracksClosing ||
    feudConfirmationOpen ||
    feudSequenceInProgress ||
    battleScreenOpen ||
    yearChangeInProgress
  ) {
    activeSoundRegion = null;
    feudHoverIcon.classList.remove("is-visible");
    mapViewport.style.cursor = "default";
    return;
  }

  const position = getNormalizedMapPosition(event);

  if (!position) {
    feudHoverIcon.classList.remove("is-visible");
    mapViewport.style.cursor = "default";
    return;
  }

  const region = findSoundRegion(position.x, position.y);
  const regionId = region ? region.id : null;
  const overFeudTarget = isInsideRegion(position, feudTargetRegion);

  feudHoverIcon.classList.toggle("is-visible", overFeudTarget);
  mapViewport.style.cursor = (region || overFeudTarget) ? "pointer" : "default";

  if (regionId !== activeSoundRegion) {
    activeSoundRegion = regionId;

    if (region) {
      playHoverSound(region.audioId);
    }
  }
});

mapViewport.addEventListener("pointerleave", () => {
  activeSoundRegion = null;
  feudHoverIcon.classList.remove("is-visible");
  mapViewport.style.cursor = "default";
});

/* V18: Jahreswechsel über einen Klick auf die Glocke. */
const gameState = {
  year: 1430
};

let yearChangeInProgress = false;

function updateYearDisplay() {
  yearDisplay.textContent = String(gameState.year);
}

function getNormalizedMapPosition(event) {
  if (!mapReady || campaignMap.offsetWidth <= 0 || campaignMap.offsetHeight <= 0) {
    return null;
  }

  const rect = mapViewport.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const imageX = (mouseX - mapState.x) / mapState.zoom;
  const imageY = (mouseY - mapState.y) / mapState.zoom;

  return {
    x: imageX / campaignMap.offsetWidth,
    y: imageY / campaignMap.offsetHeight
  };
}

function isInsideRegion(position, region) {
  return (
    position.x >= region.minX &&
    position.x <= region.maxX &&
    position.y >= region.minY &&
    position.y <= region.maxY
  );
}

function advanceYear() {
  if (yearChangeInProgress) {
    return;
  }

  yearChangeInProgress = true;
  mapViewport.classList.add("is-year-changing");

  window.setTimeout(() => {
    gameState.year += 1;
    updateYearDisplay();

    mapState.zoom = 1;
    initializeMap();

    window.setTimeout(() => {
      mapViewport.classList.remove("is-year-changing");

      window.setTimeout(() => {
        yearChangeInProgress = false;
      }, 780);
    }, 190);
  }, 760);
}

mapViewport.addEventListener("click", (event) => {
  if (
    yearChangeInProgress ||
    barracksOpen ||
    barracksClosing ||
    feudConfirmationOpen ||
    feudSequenceInProgress ||
    battleScreenOpen
  ) {
    return;
  }

  const position = getNormalizedMapPosition(event);
  const bellRegion = soundRegions.find((region) => region.id === "bell");
  const blackShieldRegion = soundRegions.find(
    (region) => region.id === "blackShield"
  );

  if (!position) {
    return;
  }

  if (bellRegion && isInsideRegion(position, bellRegion)) {
    advanceYear();
    return;
  }

  if (
    blackShieldRegion &&
    isInsideRegion(position, blackShieldRegion)
  ) {
    openBarracks();
    return;
  }

  if (isInsideRegion(position, feudTargetRegion)) {
    openFeudConfirmation();
  }
});

updateYearDisplay();


/* V20: Kasernenansicht öffnen und schließen. */
function openBarracks() {
  if (
    barracksOpen ||
    barracksClosing ||
    yearChangeInProgress
  ) {
    return;
  }

  barracksOpen = true;
  activeSoundRegion = null;
  pressedKeys.clear();
  mapViewport.style.cursor = "default";
  barracksModal.hidden = false;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      barracksModal.classList.add("is-open");
    });
  });
}

function closeBarracks() {
  if (!barracksOpen || barracksClosing) {
    return;
  }

  barracksClosing = true;
  barracksModal.classList.remove("is-open");

  window.setTimeout(() => {
    barracksModal.hidden = true;
    barracksOpen = false;
    barracksClosing = false;
  }, 560);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && barracksOpen) {
    event.preventDefault();
    closeBarracks();
  }
});

barracksModal.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  if (barracksOpen) {
    closeBarracks();
  }
});


/* V21: Fehde-Erklärung und Übergang zum Kastelberg. */
function openFeudConfirmation() {
  if (
    feudConfirmationOpen ||
    feudSequenceInProgress ||
    battleScreenOpen ||
    barracksOpen ||
    barracksClosing ||
    yearChangeInProgress
  ) {
    return;
  }

  feudConfirmationOpen = true;
  activeSoundRegion = null;
  pressedKeys.clear();
  feudHoverIcon.classList.remove("is-visible");
  mapViewport.style.cursor = "default";
  feudConfirmation.hidden = false;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      feudConfirmation.classList.add("is-open");
      feudConfirmYes.focus();
    });
  });
}

function closeFeudConfirmation() {
  if (!feudConfirmationOpen || feudSequenceInProgress) {
    return;
  }

  feudConfirmation.classList.remove("is-open");

  window.setTimeout(() => {
    feudConfirmation.hidden = true;
    feudConfirmationOpen = false;
    mapViewport.focus?.();
  }, 430);
}

function showPortraitTransition() {
  feudPortraitModal.hidden = false;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      feudPortraitModal.classList.add("is-open");
    });
  });
}

function hidePortraitTransition() {
  feudPortraitModal.classList.remove("is-open");

  return new Promise((resolve) => {
    window.setTimeout(() => {
      feudPortraitModal.hidden = true;
      resolve();
    }, 670);
  });
}

function showBattleScreen() {
  battleScreen.hidden = false;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      battleScreen.classList.add("is-open");
      battleScreenOpen = true;
      feudSequenceInProgress = false;
      surrenderButton.focus();
    });
  });
}

async function beginFeudSequence() {
  if (
    !feudConfirmationOpen ||
    feudSequenceInProgress ||
    battleScreenOpen
  ) {
    return;
  }

  feudSequenceInProgress = true;
  feudConfirmationOpen = false;
  feudConfirmation.classList.remove("is-open");

  window.setTimeout(() => {
    feudConfirmation.hidden = true;
  }, 430);

  window.setTimeout(() => {
    showPortraitTransition();

    window.setTimeout(async () => {
      await hidePortraitTransition();
      showBattleScreen();
    }, 2650);
  }, 470);
}

function returnToCampaignMap() {
  if (!battleScreenOpen) {
    return;
  }

  battleScreenOpen = false;
  battleScreen.classList.remove("is-open");

  window.setTimeout(() => {
    battleScreen.hidden = true;
    feudSequenceInProgress = false;
    feudConfirmationOpen = false;
    activeSoundRegion = null;
    feudHoverIcon.classList.remove("is-visible");
    mapViewport.style.cursor = "default";
  }, 870);
}

feudConfirmYes.addEventListener("click", beginFeudSequence);
feudConfirmNo.addEventListener("click", closeFeudConfirmation);
surrenderButton.addEventListener("click", returnToCampaignMap);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && feudConfirmationOpen) {
    event.preventDefault();
    closeFeudConfirmation();
  }
});

