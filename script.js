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
const diplomacyModal = document.querySelector("#diplomacyModal");
const diplomacyStage = document.querySelector("#diplomacyStage");
const diplomacyCharacterRed = document.querySelector("#diplomacyCharacterRed");
const diplomacyCharacterOrange = document.querySelector("#diplomacyCharacterOrange");
const diplomacyCharacterYellow = document.querySelector("#diplomacyCharacterYellow");
const diplomacyCharacterBlue = document.querySelector("#diplomacyCharacterBlue");
const diplomacyCharacterPurple = document.querySelector("#diplomacyCharacterPurple");
const diplomacyCharacterGreen = document.querySelector("#diplomacyCharacterGreen");
const diplomacyCharacterBlack = document.querySelector("#diplomacyCharacterBlack");
const troopSelectionModal = document.querySelector("#troopSelectionModal");
const troopSelectionWindow = document.querySelector("#troopSelectionWindow");
const neuensteinTroopSelectionModal =
  document.querySelector("#neuensteinTroopSelectionModal");
const neuensteinTroopSelectionWindow =
  document.querySelector("#neuensteinTroopSelectionWindow");
const feudHoverIcon = document.querySelector("#feudHoverIcon");
const feudConfirmation = document.querySelector("#feudConfirmation");
const feudConfirmYes = document.querySelector("#feudConfirmYes");
const feudConfirmNo = document.querySelector("#feudConfirmNo");
const feudPortraitModal = document.querySelector("#feudPortraitModal");
const battleScreen = document.querySelector("#battleScreen");
const battleStage = document.querySelector("#battleStage");
const battleArcherOne = document.querySelector("#battleArcherOne");
const battleSwordsman = document.querySelector("#battleSwordsman");
const battleArcherTwo = document.querySelector("#battleArcherTwo");
const archerAppearSound = document.querySelector("#archerAppearSound");
const swordsmanAppearSound = document.querySelector("#swordsmanAppearSound");
const unitKeyLayer = document.querySelector("#unitKeyLayer");
const unitKeyElements = Array.from(document.querySelectorAll(".unit-key"));
const marchUnitLayer = document.querySelector("#marchUnitLayer");
const neuensteinMarchUnitLayer =
  document.querySelector("#neuensteinMarchUnitLayer");
const ringelnatzTentTarget =
  document.querySelector("#ringelnatzTentTarget");
const neuensteinTentTarget =
  document.querySelector("#neuensteinTentTarget");
const ringelnatzTentHealthFill =
  document.querySelector("#ringelnatzTentHealthFill");
const neuensteinTentHealthFill =
  document.querySelector("#neuensteinTentHealthFill");
const unitKeySound1 = document.querySelector("#unitKeySound1");
const unitKeySound2 = document.querySelector("#unitKeySound2");
const unitKeySound3 = document.querySelector("#unitKeySound3");
const unitKeySound4 = document.querySelector("#unitKeySound4");
const unitKeySound5 = document.querySelector("#unitKeySound5");
const unitKeySound6 = document.querySelector("#unitKeySound6");
const unitKeySound7 = document.querySelector("#unitKeySound7");
const ringelnatzFarmer = document.querySelector("#ringelnatzFarmer");
const ringelnatzSpearman = document.querySelector("#ringelnatzSpearman");
const ringelnatzCavalry = document.querySelector("#ringelnatzCavalry");
const ringelnatzCrossbow = document.querySelector("#ringelnatzCrossbow");
const ringelnatzBuilder = document.querySelector("#ringelnatzBuilder");
const ringelnatzAssassin = document.querySelector("#ringelnatzAssassin");
const ringelnatzMercenary = document.querySelector("#ringelnatzMercenary");
const surrenderButton = document.querySelector("#surrenderButton");

const INTRO_DURATION = 72000;
const TRANSITION_DURATION = 1400;

let crawlAnimation = null;
let mapReady = false;
let barracksOpen = false;
let barracksClosing = false;
let diplomacyOpen = false;
let diplomacyClosing = false;
let diplomacyHoveredCharacter = null;
let diplomacyPinnedCharacter = null;
let troopSelectionOpen = false;
let troopSelectionCloseTimer = null;
let mapCharacterHovered = false;
let troopSelectionHovered = false;
let neuensteinTroopSelectionOpen = false;
let neuensteinTroopSelectionCloseTimer = null;
let neuensteinMapCharacterHovered = false;
let neuensteinTroopSelectionHovered = false;
let feudConfirmationOpen = false;
let feudSequenceInProgress = false;
let battleScreenOpen = false;
let battleUnitTimers = [];
let battleUnitSequenceStarted = false;
let ringelnatzUnitTimers = [];
let marchingUnitInstances = [];
let productionCooldownUntil = 0;
let ringelnatzProductionUnlocked = false;
let marchInstanceCounter = 0;

let neuensteinSpawnTimer = null;
let neuensteinSpawnQueue = [];
let neuensteinUnits = [];
let neuensteinUnitCounter = 0;
let neuensteinProductionStarted = false;
let neuensteinProductionFinished = false;
let neuensteinBattleLoop = null;

const ringelnatzUnits = [
  ringelnatzFarmer,
  ringelnatzSpearman,
  ringelnatzCavalry,
  ringelnatzCrossbow,
  ringelnatzBuilder,
  ringelnatzAssassin,
  ringelnatzMercenary
];

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

  if (barracksOpen || barracksClosing || diplomacyOpen || diplomacyClosing || feudConfirmationOpen || feudSequenceInProgress || battleScreenOpen) {
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
  if (barracksOpen || barracksClosing || diplomacyOpen || diplomacyClosing || feudConfirmationOpen || feudSequenceInProgress || battleScreenOpen) {
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

  if (barracksOpen || barracksClosing || diplomacyOpen || diplomacyClosing || feudConfirmationOpen || feudSequenceInProgress || battleScreenOpen) {
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
  minX: 0.445,
  maxX: 0.500,
  minY: 0.035,
  maxY: 0.145
};

const troopSelectionTargetRegion = {
  id: "ringelnatzTroops",
  minX: 0.548,
  maxX: 0.590,
  minY: 0.285,
  maxY: 0.445
};

const neuensteinTroopSelectionTargetRegion = {
  id: "neuensteinTroops",
  minX: 0.392,
  maxX: 0.468,
  minY: 0.118,
  maxY: 0.266
};


function openTroopSelection() {
  closeNeuensteinTroopSelection();
  if (
    troopSelectionOpen ||
    barracksOpen ||
    barracksClosing ||
    diplomacyOpen ||
    diplomacyClosing ||
    feudConfirmationOpen ||
    feudSequenceInProgress ||
    battleScreenOpen ||
    yearChangeInProgress
  ) {
    return;
  }

  window.clearTimeout(troopSelectionCloseTimer);
  troopSelectionOpen = true;
  troopSelectionModal.classList.add("is-open");
  troopSelectionModal.setAttribute("aria-hidden", "false");
}

function closeTroopSelection() {
  window.clearTimeout(troopSelectionCloseTimer);
  troopSelectionCloseTimer = null;
  troopSelectionOpen = false;
  mapCharacterHovered = false;
  troopSelectionHovered = false;
  troopSelectionModal.classList.remove("is-open");
  troopSelectionModal.setAttribute("aria-hidden", "true");
}

function scheduleTroopSelectionClose() {
  window.clearTimeout(troopSelectionCloseTimer);

  troopSelectionCloseTimer = window.setTimeout(() => {
    if (mapCharacterHovered || troopSelectionHovered) {
      return;
    }

    closeTroopSelection();
  }, 260);
}

troopSelectionWindow.addEventListener("pointerenter", () => {
  troopSelectionHovered = true;
  window.clearTimeout(troopSelectionCloseTimer);
});

troopSelectionWindow.addEventListener("pointerleave", () => {
  troopSelectionHovered = false;
  scheduleTroopSelectionClose();
});



function openNeuensteinTroopSelection() {
  if (
    neuensteinTroopSelectionOpen ||
    barracksOpen ||
    barracksClosing ||
    diplomacyOpen ||
    diplomacyClosing ||
    feudConfirmationOpen ||
    feudSequenceInProgress ||
    battleScreenOpen ||
    yearChangeInProgress
  ) {
    return;
  }

  closeTroopSelection();
  window.clearTimeout(neuensteinTroopSelectionCloseTimer);

  neuensteinTroopSelectionOpen = true;
  neuensteinTroopSelectionModal.classList.add("is-open");
  neuensteinTroopSelectionModal.setAttribute("aria-hidden", "false");
}

function closeNeuensteinTroopSelection() {
  window.clearTimeout(neuensteinTroopSelectionCloseTimer);
  neuensteinTroopSelectionCloseTimer = null;
  neuensteinTroopSelectionOpen = false;
  neuensteinMapCharacterHovered = false;
  neuensteinTroopSelectionHovered = false;
  neuensteinTroopSelectionModal.classList.remove("is-open");
  neuensteinTroopSelectionModal.setAttribute("aria-hidden", "true");
}

function scheduleNeuensteinTroopSelectionClose() {
  window.clearTimeout(neuensteinTroopSelectionCloseTimer);

  neuensteinTroopSelectionCloseTimer = window.setTimeout(() => {
    if (
      neuensteinMapCharacterHovered ||
      neuensteinTroopSelectionHovered
    ) {
      return;
    }

    closeNeuensteinTroopSelection();
  }, 260);
}

neuensteinTroopSelectionWindow.addEventListener(
  "pointerenter",
  () => {
    neuensteinTroopSelectionHovered = true;
    window.clearTimeout(neuensteinTroopSelectionCloseTimer);
  }
);

neuensteinTroopSelectionWindow.addEventListener(
  "pointerleave",
  () => {
    neuensteinTroopSelectionHovered = false;
    scheduleNeuensteinTroopSelectionClose();
  }
);

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
  const overTroopSelectionTarget =
    isInsideRegion(position, troopSelectionTargetRegion);
  const overNeuensteinTroopSelectionTarget =
    isInsideRegion(position, neuensteinTroopSelectionTargetRegion);

  if (overTroopSelectionTarget) {
    mapCharacterHovered = true;
    window.clearTimeout(troopSelectionCloseTimer);
    closeNeuensteinTroopSelection();
    openTroopSelection();
  } else if (mapCharacterHovered) {
    mapCharacterHovered = false;
    scheduleTroopSelectionClose();
  }

  if (overNeuensteinTroopSelectionTarget) {
    neuensteinMapCharacterHovered = true;
    window.clearTimeout(neuensteinTroopSelectionCloseTimer);
    closeTroopSelection();
    openNeuensteinTroopSelection();
  } else if (neuensteinMapCharacterHovered) {
    neuensteinMapCharacterHovered = false;
    scheduleNeuensteinTroopSelectionClose();
  }

  feudHoverIcon.classList.toggle("is-visible", overFeudTarget);
  mapViewport.style.cursor =
    (
      region ||
      overFeudTarget ||
      overTroopSelectionTarget ||
      overNeuensteinTroopSelectionTarget
    )
      ? "pointer"
      : "default";

  if (regionId !== activeSoundRegion) {
    activeSoundRegion = regionId;

    if (region) {
      playHoverSound(region.audioId);
    }
  }
});

mapViewport.addEventListener("pointerleave", () => {
  activeSoundRegion = null;

  mapCharacterHovered = false;
  scheduleTroopSelectionClose();

  neuensteinMapCharacterHovered = false;
  scheduleNeuensteinTroopSelectionClose();

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
  closeNeuensteinTroopSelection();
  closeTroopSelection();
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
  const scrollRegion = soundRegions.find(
    (region) => region.id === "scroll"
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

  if (
    scrollRegion &&
    isInsideRegion(position, scrollRegion)
  ) {
    openDiplomacyModal();
    return;
  }

  if (isInsideRegion(position, feudTargetRegion)) {
    openFeudConfirmation();
  }
});

updateYearDisplay();


/* V20: Kasernenansicht öffnen und schließen. */
function openBarracks() {
  closeNeuensteinTroopSelection();
  closeTroopSelection();
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
  if (!barracksOpen || barracksClosing || diplomacyOpen || diplomacyClosing) {
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




/* V26: Diplomatieansicht über die Schriftrolle öffnen und schließen. */

const diplomacyCharacterEntries = [
  {
    id: "red",
    element: diplomacyCharacterRed,
    minX: 0.455,
    maxX: 0.548,
    minY: 0.030,
    maxY: 0.150
  },
  {
    id: "orange",
    element: diplomacyCharacterOrange,
    minX: 0.452,
    maxX: 0.550,
    minY: 0.145,
    maxY: 0.270
  },
  {
    id: "yellow",
    element: diplomacyCharacterYellow,
    minX: 0.447,
    maxX: 0.553,
    minY: 0.260,
    maxY: 0.405
  },
  {
    id: "blue",
    element: diplomacyCharacterBlue,
    minX: 0.452,
    maxX: 0.550,
    minY: 0.550,
    maxY: 0.675
  },
  {
    id: "purple",
    element: diplomacyCharacterPurple,
    minX: 0.462,
    maxX: 0.535,
    minY: 0.685,
    maxY: 0.795
  },
  {
    id: "green",
    element: diplomacyCharacterGreen,
    minX: 0.465,
    maxX: 0.535,
    minY: 0.790,
    maxY: 0.885
  },
  {
    id: "black",
    element: diplomacyCharacterBlack,
    minX: 0.458,
    maxX: 0.540,
    minY: 0.875,
    maxY: 0.970
  }
];

function getDiplomacyNormalizedPosition(event) {
  if (!diplomacyStage) {
    return null;
  }

  const rect = diplomacyStage.getBoundingClientRect();

  if (rect.width <= 0 || rect.height <= 0) {
    return null;
  }

  return {
    x: (event.clientX - rect.left) / rect.width,
    y: (event.clientY - rect.top) / rect.height
  };
}

function findDiplomacyCharacter(position) {
  if (!position) {
    return null;
  }

  return diplomacyCharacterEntries.find((entry) =>
    position.x >= entry.minX &&
    position.x <= entry.maxX &&
    position.y >= entry.minY &&
    position.y <= entry.maxY
  ) || null;
}

function hideAllDiplomacyCharacters() {
  diplomacyCharacterEntries.forEach((entry) => {
    entry.element.classList.remove("is-visible");
  });
}

function showDiplomacyCharacter(entry) {
  hideAllDiplomacyCharacters();

  if (entry) {
    entry.element.classList.add("is-visible");
  }
}

function resetDiplomacyCharacterSelection() {
  diplomacyHoveredCharacter = null;
  diplomacyPinnedCharacter = null;
  diplomacyStage?.classList.remove("is-character-pinned");
  hideAllDiplomacyCharacters();

  if (diplomacyStage) {
    diplomacyStage.style.cursor = "default";
  }
}

diplomacyStage.addEventListener("pointermove", (event) => {
  if (
    !diplomacyOpen ||
    diplomacyClosing ||
    diplomacyPinnedCharacter
  ) {
    return;
  }

  const entry = findDiplomacyCharacter(
    getDiplomacyNormalizedPosition(event)
  );

  diplomacyHoveredCharacter = entry;
  diplomacyStage.style.cursor = entry ? "pointer" : "default";
  showDiplomacyCharacter(entry);
});

diplomacyStage.addEventListener("pointerleave", () => {
  if (diplomacyPinnedCharacter) {
    return;
  }

  diplomacyHoveredCharacter = null;
  diplomacyStage.style.cursor = "default";
  hideAllDiplomacyCharacters();
});

diplomacyStage.addEventListener("click", (event) => {
  if (
    !diplomacyOpen ||
    diplomacyClosing ||
    diplomacyPinnedCharacter
  ) {
    return;
  }

  const entry = findDiplomacyCharacter(
    getDiplomacyNormalizedPosition(event)
  );

  if (!entry) {
    return;
  }

  diplomacyPinnedCharacter = entry;
  diplomacyHoveredCharacter = entry;
  diplomacyStage.classList.add("is-character-pinned");
  diplomacyStage.style.cursor = "default";
  showDiplomacyCharacter(entry);
});


function openDiplomacyModal() {
  closeNeuensteinTroopSelection();
  closeTroopSelection();
  if (
    diplomacyOpen ||
    diplomacyClosing ||
    barracksOpen ||
    barracksClosing ||
    feudConfirmationOpen ||
    feudSequenceInProgress ||
    battleScreenOpen ||
    yearChangeInProgress
  ) {
    return;
  }

  diplomacyOpen = true;
  resetDiplomacyCharacterSelection();
  activeSoundRegion = null;
  pressedKeys.clear();
  feudHoverIcon.classList.remove("is-visible");
  mapViewport.style.cursor = "default";
  diplomacyModal.hidden = false;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      diplomacyModal.classList.add("is-open");
    });
  });
}

function closeDiplomacyModal() {
  if (!diplomacyOpen || diplomacyClosing) {
    return;
  }

  diplomacyClosing = true;
  diplomacyModal.classList.remove("is-open");

  window.setTimeout(() => {
    diplomacyModal.hidden = true;
    diplomacyOpen = false;
    diplomacyClosing = false;
    resetDiplomacyCharacterSelection();
  }, 560);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && diplomacyOpen) {
    event.preventDefault();
    closeDiplomacyModal();
  }
});

diplomacyModal.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  if (!diplomacyOpen) {
    return;
  }

  if (diplomacyPinnedCharacter) {
    resetDiplomacyCharacterSelection();
    return;
  }

  closeDiplomacyModal();
});


/* V21: Fehde-Erklärung und Übergang zum Kastelberg. */
function openFeudConfirmation() {
  closeNeuensteinTroopSelection();
  closeTroopSelection();
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




const unitProductionSounds = {
  farmer: unitKeySound1,
  spearman: unitKeySound2,
  cavalry: unitKeySound3,
  crossbow: unitKeySound4,
  builder: unitKeySound5,
  assassin: unitKeySound6,
  mercenary: unitKeySound7
};

function playUnitProductionSound(unitType) {
  const audio = unitProductionSounds[unitType];

  if (!audio) {
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  audio.volume = 0.78;

  audio.play().catch((error) => {
    console.error("Einheitensound konnte nicht abgespielt werden:", error);
  });
}

const marchUnitDefinitions = {
  farmer: {
    type: "farmer",
    armorClass: "light",
    idleSrc: "assets/ringelnatz-marsch-bauer.png?v=28",
    attackSrc: "assets/ringelnatz-angriff-bauer.png?v=31",
    width: 6.4,
    height: 22,
    duration: 6500,
    switchesPoseOnCollision: true,
    attackScale: 1.12,
    attackOffsetX: 8,
    attackOffsetY: 0
  },
  spearman: {
    type: "spearman",
    armorClass: "light",
    idleSrc: "assets/ringelnatz-marsch-lanzentraeger.png?v=28",
    attackSrc: "assets/ringelnatz-angriff-lanzentraeger.png?v=31",
    width: 6.2,
    height: 22,
    duration: 5800,
    switchesPoseOnCollision: true,
    attackScale: 1.08,
    attackOffsetX: 5,
    attackOffsetY: 0
  },
  cavalry: {
    type: "cavalry",
    armorClass: "medium",
    idleSrc: "assets/ringelnatz-marsch-lanzenreiter.png?v=28",
    attackSrc: null,
    width: 9.2,
    height: 25,
    duration: 4400,
    switchesPoseOnCollision: false
  },
  crossbow: {
    type: "crossbow",
    armorClass: "medium",
    idleSrc: "assets/ringelnatz-marsch-armbrustschuetze.png?v=28",
    attackSrc: "assets/ringelnatz-angriff-armbrustschuetze.png?v=31",
    width: 6.4,
    height: 20,
    duration: 2000,
    shortMove: true,
    rangedUnit: true,
    attackScale: 1.12,
    attackOffsetX: 8,
    attackOffsetY: 0
  },
  builder: {
    type: "builder",
    armorClass: "light",
    idleSrc: "assets/ringelnatz-marsch-baumeister.png?v=28",
    attackSrc: null,
    width: 6.2,
    height: 22,
    duration: 13000,
    switchesPoseOnCollision: false
  },
  assassin: {
    type: "assassin",
    armorClass: "light",
    idleSrc: "assets/ringelnatz-marsch-assassine.png?v=28",
    attackSrc: "assets/ringelnatz-angriff-assassine.png?v=31",
    width: 6.6,
    height: 20,
    duration: 10000,
    switchesPoseOnCollision: true,
    attackScale: 1.24,
    attackOffsetX: 4,
    attackOffsetY: "-2cm"
  },
  mercenary: {
    type: "mercenary",
    armorClass: "heavy",
    idleSrc: "assets/ringelnatz-marsch-soeldner.png?v=28",
    attackSrc: null,
    width: 6.0,
    height: 20,
    duration: 11200,
    switchesPoseOnCollision: false
  }
};

const CROSSBOW_TRIGGER_X = 50;

function preloadCombatImages() {
  Object.values(marchUnitDefinitions).forEach((definition) => {
    if (!definition.attackSrc) {
      return;
    }

    const image = new Image();
    image.src = definition.attackSrc;
  });
}

preloadCombatImages();






/* V45 – Todesgeräusche ausschließlich bei einem tatsächlichen Kill. */
const RANGED_KILL_SOUNDS = [
  "assets/arrow-death-01.mp3?v=45",
  "assets/arrow-death-02.mp3?v=45",
  "assets/arrow-death-03.mp3?v=45",
  "assets/arrow-death-04.mp3?v=45",
  "assets/arrow-death-05.mp3?v=45"
];

const CLUB_KILL_SOUNDS = [
  "assets/club-death-01.mp3?v=45",
  "assets/club-death-02.mp3?v=45"
];

const HORSE_DEATH_SOUNDS = [
  "assets/horse-death-01.mp3?v=45",
  "assets/horse-death-02.mp3?v=45"
];

function playRandomBattleSound(soundPaths) {
  if (
    !Array.isArray(soundPaths) ||
    soundPaths.length === 0 ||
    !battleScreenOpen
  ) {
    return;
  }

  const selectedPath =
    soundPaths[
      Math.floor(Math.random() * soundPaths.length)
    ];

  const sound = new Audio(selectedPath);
  sound.preload = "auto";
  sound.volume = 1;

  const cleanup = () => {
    sound.removeEventListener("ended", cleanup);
    sound.removeEventListener("error", cleanup);
  };

  sound.addEventListener("ended", cleanup);
  sound.addEventListener("error", cleanup);

  sound.play().catch(() => {
    cleanup();
  });
}

function playKillSound(victim, attacker) {
  if (
    !victim ||
    victim.type === "tent"
  ) {
    return;
  }

  const victimType =
    victim.type ||
    victim.definition?.type;

  const attackerType =
    attacker?.type ||
    attacker?.definition?.type;

  /*
   * Priorität:
   * 1. Stirbt Ringelnatz' Reiter, erklingt immer ein Pferdetod.
   * 2. Kill durch Neuenstein-Flegel oder Ringelnatz-Baumeister:
   *    einer der beiden Wuchtwaffen-Sounds.
   * 3. Kill durch Bogen oder Armbrust:
   *    einer der fünf Fernkampf-Todessounds.
   */
  if (
    victim.faction === "ringelnatz" &&
    victimType === "cavalry"
  ) {
    playRandomBattleSound(HORSE_DEATH_SOUNDS);
    return;
  }

  if (
    attackerType === "flail" ||
    attackerType === "builder"
  ) {
    playRandomBattleSound(CLUB_KILL_SOUNDS);
    return;
  }

  if (
    attackerType === "archer" ||
    attackerType === "crossbow"
  ) {
    playRandomBattleSound(RANGED_KILL_SOUNDS);
  }
}

function preloadKillSounds() {
  [
    ...RANGED_KILL_SOUNDS,
    ...CLUB_KILL_SOUNDS,
    ...HORSE_DEATH_SOUNDS
  ].forEach((src) => {
    const sound = new Audio();
    sound.preload = "auto";
    sound.src = src;
  });
}

preloadKillSounds();

const TENT_DAMAGE_PER_HIT = 10;

const ringelnatzTent = {
  faction: "ringelnatz",
  type: "tent",
  maxHealth: 100,
  health: 100,
  isDead: false,
  cancelled: false,
  element: ringelnatzTentTarget,
  healthFill: ringelnatzTentHealthFill
};

const neuensteinTent = {
  faction: "neuenstein",
  type: "tent",
  maxHealth: 100,
  health: 100,
  isDead: false,
  cancelled: false,
  element: neuensteinTentTarget,
  healthFill: neuensteinTentHealthFill
};

function resetTentHealthSystem() {
  [ringelnatzTent, neuensteinTent].forEach((tent) => {
    tent.health = 100;
    tent.isDead = false;
    tent.cancelled = false;
    tent.element.classList.remove("is-hit", "is-defeated");
    updateUnitHealthBar(tent);
  });
}

function triggerTentHitReaction(tent) {
  if (!tent || tent.isDead) {
    return;
  }

  tent.element.classList.remove("is-hit");
  void tent.element.offsetWidth;
  tent.element.classList.add("is-hit");

  window.setTimeout(() => {
    tent.element.classList.remove("is-hit");
  }, 230);
}

function defeatTent(tent) {
  if (!tent || tent.isDead) {
    return;
  }

  tent.isDead = true;
  tent.health = 0;
  updateUnitHealthBar(tent);
  tent.element.classList.add("is-defeated");

  if (tent.faction === "neuenstein") {
    stopNeuensteinProduction();
    neuensteinProductionFinished = true;
    ringelnatzProductionUnlocked = false;
    return;
  }

  ringelnatzProductionUnlocked = false;
  stopNeuensteinProduction();

  window.setTimeout(() => {
    if (battleScreenOpen) {
      returnToCampaignMap();
    }
  }, 650);
}


const RINGELNATZ_DAMAGE_TABLE = {
  farmer: {
    light: 20,
    medium: 10,
    heavy: 5
  },
  spearman: {
    light: 50,
    medium: 25,
    heavy: 10
  },
  cavalry: {
    light: 100,
    medium: 50,
    heavy: 25
  },
  crossbow: {
    light: 100,
    medium: 35,
    heavy: 15
  },
  builder: {
    light: 35,
    medium: 20,
    heavy: 10
  },
  assassin: {
    light: 100,
    medium: 70,
    heavy: 40
  },
  mercenary: {
    light: 100,
    medium: 35,
    heavy: 25
  }
};


const NEUENSTEIN_DAMAGE_TABLE = {
  archer: {
    light: 75,
    medium: 30,
    heavy: 15
  },
  flail: {
    light: 100,
    medium: 50,
    heavy: 25
  },
  halberdier: {
    light: 50,
    medium: 20,
    heavy: 10
  },
  swordsman: {
    light: 100,
    medium: 40,
    heavy: 25
  }
};

const NEUENSTEIN_ARCHER_HIT_CHANCE = 0.70;
const NEUENSTEIN_ARROW_FLIGHT_DURATION = 560;

const ASSASSIN_INSTANT_KILL_CHANCE = 0.30;
const CROSSBOW_HIT_CHANCE = 0.80;
const CROSSBOW_SHOT_POSE_DURATION = 1000;
const CROSSBOW_RELOAD_DURATION = 3000;
const CROSSBOW_BOLT_FLIGHT_DURATION = 520;

function createUnitHealthBar(side) {
  const healthBar = document.createElement("div");
  healthBar.className =
    `unit-health-bar unit-health-bar--${side}`;

  const healthFill = document.createElement("div");
  healthFill.className = "unit-health-fill";
  healthBar.appendChild(healthFill);

  return {
    healthBar,
    healthFill
  };
}

function updateUnitHealthBar(unit) {
  if (!unit || !unit.healthFill) {
    return;
  }

  const percentage = Math.max(
    0,
    Math.min(
      100,
      unit.health / unit.maxHealth * 100
    )
  );

  unit.healthFill.style.width = `${percentage}%`;
}

function assertValidArmorClass(unit) {
  return [
    "light",
    "medium",
    "heavy"
  ].includes(unit?.armorClass);
}

function triggerUnitHitReaction(unit) {
  if (!unit || unit.cancelled || unit.isDead) {
    return;
  }

  unit.element.classList.remove("is-hit");
  void unit.element.offsetWidth;
  unit.element.classList.add("is-hit");

  window.setTimeout(() => {
    if (!unit.cancelled) {
      unit.element.classList.remove("is-hit");
    }
  }, 230);
}

function getRingelnatzDamage(attacker, target) {
  if (
    !attacker ||
    !target ||
    !assertValidArmorClass(target)
  ) {
    if (target && !assertValidArmorClass(target)) {
      console.warn(
        "Fehlende Rüstungsklasse:",
        target.type
      );
    }

    return null;
  }

  const type =
    attacker.type ||
    attacker.definition?.type;

  const table =
    RINGELNATZ_DAMAGE_TABLE[type];

  if (!table) {
    return null;
  }

  if (type === "assassin") {
    if (target.armorClass === "light") {
      return {
        damage: 100,
        instantKill: true
      };
    }

    const instantKill =
      Math.random() <
      ASSASSIN_INSTANT_KILL_CHANCE;

    return {
      damage:
        target.armorClass === "medium"
          ? 70
          : 40,
      instantKill
    };
  }

  const damage =
    table[target.armorClass] ?? 0;

  return {
    damage,
    instantKill: damage >= 100
  };
}

function getNeuensteinDamage(attacker, target) {
  if (
    !isLivingCombatUnit(attacker) ||
    !isLivingCombatUnit(target) ||
    !assertValidArmorClass(target)
  ) {
    return null;
  }

  const table =
    NEUENSTEIN_DAMAGE_TABLE[
      attacker.type
    ];

  if (!table) {
    return null;
  }

  const damage =
    table[target.armorClass] ?? 0;

  return {
    damage,
    instantKill: damage >= 100
  };
}


function resumeRingelnatzMarch(instance) {
  if (
    !instance ||
    instance.cancelled ||
    instance.isDead ||
    instance.definition.shortMove ||
    !battleScreenOpen
  ) {
    return;
  }

  stopCombatPoseCycle(instance);
  instance.combatTarget = null;
  instance.parked = false;
  instance.combatActive = false;
  setUnitPose(instance, "idle");

  instance.startX = getMarchInstanceX(instance);
  instance.currentX = instance.startX;
  instance.targetX = 78.5;
  instance.startTime = 0;
  instance.duration = Math.max(
    700,
    Math.abs(instance.targetX - instance.startX) * 95
  );

  instance.element.classList.add("is-walking");
  instance.animationFrame =
    window.requestAnimationFrame((timestamp) => {
      animateMarchInstance(instance, timestamp);
    });
}


function resumeNeuensteinMarch(unit) {
  if (
    !unit ||
    unit.cancelled ||
    unit.isDead ||
    unit.definition.ranged ||
    !battleScreenOpen
  ) {
    return;
  }

  stopNeuensteinAttackCycle(unit);
  unit.combatTarget = null;
  unit.parked = false;
  unit.combatActive = false;
  unit.walking = true;
  setNeuensteinPose(unit, "idle");
}

function defeatNeuensteinUnit(unit, attacker = null) {
  if (!unit || unit.isDead) {
    return;
  }

  unit.isDead = true;
  playKillSound(unit, attacker);
  unit.health = 0;
  updateUnitHealthBar(unit);
  unit.walking = false;
  unit.parked = true;
  unit.combatActive = false;

  stopNeuensteinAttackCycle(unit);

  const waitingAttackers = marchingUnitInstances.filter((instance) =>
    !instance.cancelled &&
    !instance.isDead &&
    instance.combatTarget === unit
  );

  waitingAttackers.forEach((instance) => {
    stopRingelnatzCombat(instance);
  });

  unit.cancelled = true;
  unit.element.classList.add("is-defeated");

  window.setTimeout(() => {
    unit.element.remove();

    neuensteinUnits = neuensteinUnits.filter(
      (entry) => entry !== unit
    );

    waitingAttackers.forEach((instance) => {
      if (instance.definition.rangedUnit) {
        activateCrossbowCombatState(instance);
      } else {
        resumeRingelnatzMarch(instance);
      }
    });
  }, 460);
}


function defeatRingelnatzUnit(unit, attacker = null) {
  if (!unit || unit.isDead) {
    return;
  }

  unit.isDead = true;
  playKillSound(unit, attacker);
  unit.health = 0;
  updateUnitHealthBar(unit);
  unit.parked = true;
  unit.combatActive = false;

  stopRingelnatzCombat(unit);

  if (unit.animationFrame !== null) {
    window.cancelAnimationFrame(unit.animationFrame);
    unit.animationFrame = null;
  }

  const waitingEnemies = neuensteinUnits.filter((enemy) =>
    !enemy.cancelled &&
    !enemy.isDead &&
    enemy.combatTarget === unit
  );

  waitingEnemies.forEach((enemy) => {
    stopNeuensteinAttackCycle(enemy);
    enemy.combatTarget = null;
  });

  unit.cancelled = true;
  unit.element.classList.remove("is-walking");
  unit.element.classList.add("is-defeated");

  window.setTimeout(() => {
    unit.element.remove();

    marchingUnitInstances =
      marchingUnitInstances.filter(
        (entry) => entry !== unit
      );

    waitingEnemies.forEach((enemy) => {
      if (enemy.definition.ranged) {
        startNeuensteinArcherCycle(enemy);
      } else {
        resumeNeuensteinMarch(enemy);
      }
    });
  }, 460);
}

function applyDamageToUnit(
  target,
  damageAmount,
  options = {}
) {
  if (
    !target ||
    target.cancelled ||
    target.isDead ||
    damageAmount <= 0
  ) {
    return false;
  }

  const {
    instantKill = false,
    attacker = null
  } = options;

  if (target.type === "tent") {
    target.health = Math.max(
      0,
      target.health - TENT_DAMAGE_PER_HIT
    );

    updateUnitHealthBar(target);
    triggerTentHitReaction(target);

    if (target.health <= 0) {
      defeatTent(target);
    }

    return true;
  }

  target.health = instantKill
    ? 0
    : Math.max(
        0,
        target.health - damageAmount
      );

  updateUnitHealthBar(target);
  triggerUnitHitReaction(target);

  if (target.health <= 0) {
    if (target.faction === "ringelnatz") {
      defeatRingelnatzUnit(target, attacker);
    } else {
      defeatNeuensteinUnit(target, attacker);
    }
  }

  return true;
}

function executeRingelnatzMeleeHit(attacker) {
  if (
    !attacker ||
    attacker.cancelled ||
    attacker.isDead
  ) {
    return;
  }

  const target = attacker.combatTarget;

  if (
    !target ||
    target.isDead ||
    target.cancelled ||
    target.health <= 0
  ) {
    attacker.combatTarget = null;
    return;
  }

  if (target.type === "tent") {
    applyDamageToUnit(
      target,
      TENT_DAMAGE_PER_HIT,
      { attacker }
    );
    return;
  }

  const result =
    getRingelnatzDamage(
      attacker,
      target
    );

  if (!result) {
    return;
  }

  applyDamageToUnit(
    target,
    result.damage,
    {
      instantKill: result.instantKill,
      attacker
    }
  );
}

function findCrossbowTarget(instance) {
  const livingEnemies =
    neuensteinUnits.filter((unit) =>
      !unit.cancelled &&
      !unit.isDead &&
      unit.health > 0
    );

  if (livingEnemies.length > 0) {
    return livingEnemies
      .filter((unit) =>
        unit.x > getMarchInstanceX(instance)
      )
      .sort((a, b) => a.x - b.x)[0] || null;
  }

  return !neuensteinTent.isDead
    ? neuensteinTent
    : null;
}


function randomBetween(minimum, maximum) {
  return minimum +
    Math.random() * (maximum - minimum);
}

function launchProjectile({
  sourceUnit,
  targetUnit,
  projectileClass,
  hit,
  flightDuration,
  sourceXRatio,
  sourceYRatio,
  targetXRatio = 0.50,
  targetYRatio = 0.43,
  onArrival
}) {
  if (
    !isLivingCombatUnit(sourceUnit) ||
    !isLivingCombatUnit(targetUnit) ||
    !battleScreenOpen
  ) {
    return;
  }

  const sourceRect =
    sourceUnit.element.getBoundingClientRect();
  const targetRect =
    targetUnit.element.getBoundingClientRect();
  const stageRect =
    battleStage.getBoundingClientRect();

  let startX =
    sourceRect.left -
    stageRect.left +
    sourceRect.width * sourceXRatio;

  let startY =
    sourceRect.top -
    stageRect.top +
    sourceRect.height * sourceYRatio;

  let targetX =
    targetRect.left -
    stageRect.left +
    targetRect.width * targetXRatio;

  let targetY =
    targetRect.top -
    stageRect.top +
    targetRect.height * targetYRatio;

  if (!hit) {
    targetX += randomBetween(-30, 30);
    targetY +=
      Math.random() < 0.5
        ? randomBetween(-65, -32)
        : randomBetween(32, 65);
  }

  const deltaX = targetX - startX;
  const deltaY = targetY - startY;
  const angle =
    Math.atan2(deltaY, deltaX) *
    180 / Math.PI;

  const projectile =
    document.createElement("span");

  projectile.className = projectileClass;
  projectile.style.left = `${startX}px`;
  projectile.style.top = `${startY}px`;
  projectile.style.transform =
    `rotate(${angle}deg)`;
  projectile.style.transition =
    `left ${flightDuration}ms linear, ` +
    `top ${flightDuration}ms ease-in`;

  battleStage.appendChild(projectile);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      projectile.style.left = `${targetX}px`;
      projectile.style.top = `${targetY}px`;
    });
  });

  window.setTimeout(() => {
    projectile.remove();

    if (
      hit &&
      isLivingCombatUnit(targetUnit)
    ) {
      onArrival?.();
    }
  }, flightDuration);
}

function launchRingelnatzCrossbowBolt(
  attacker,
  target,
  hit
) {
  if (
    !isLivingCombatUnit(attacker) ||
    !isLivingCombatUnit(target)
  ) {
    return;
  }

  launchProjectile({
    sourceUnit: attacker,
    targetUnit: target,
    projectileClass:
      "ringelnatz-crossbow-bolt",
    hit,
    flightDuration:
      CROSSBOW_BOLT_FLIGHT_DURATION,
    sourceXRatio: 0.78,
    sourceYRatio: 0.48,
    onArrival: () => {
      if (target.type === "tent") {
        applyDamageToUnit(
          target,
          TENT_DAMAGE_PER_HIT,
          { attacker }
        );
        return;
      }

      const result =
        getRingelnatzDamage(
          attacker,
          target
        );

      if (!result) {
        return;
      }

      applyDamageToUnit(
        target,
        result.damage,
        {
          instantKill:
            result.instantKill,
          attacker
        }
      );
    }
  });
}

function scheduleRingelnatzCrossbowCycle(
  instance,
  delay
) {
  if (
    !instance ||
    instance.cancelled ||
    instance.isDead
  ) {
    return;
  }

  instance.poseTimer =
    window.setTimeout(() => {
      instance.poseTimer = null;

      if (
        instance.cancelled ||
        !battleScreenOpen
      ) {
        return;
      }

      const target =
        findCrossbowTarget(instance);

      if (!target) {
        instance.combatActive = false;
        setUnitPose(instance, "idle");
        scheduleRingelnatzCrossbowCycle(
          instance,
          500
        );
        return;
      }

      instance.combatActive = true;
      instance.combatTarget = target;
      setUnitPose(instance, "attack");

      const hit =
        Math.random() <
        CROSSBOW_HIT_CHANCE;

      launchRingelnatzCrossbowBolt(
        instance,
        target,
        hit
      );

      instance.poseTimer =
        window.setTimeout(() => {
          instance.poseTimer = null;

          if (
            instance.cancelled ||
            !battleScreenOpen
          ) {
            return;
          }

          setUnitPose(instance, "idle");

          scheduleRingelnatzCrossbowCycle(
            instance,
            CROSSBOW_RELOAD_DURATION
          );
        }, CROSSBOW_SHOT_POSE_DURATION);
    }, delay);
}

function startRingelnatzCrossbowCycle(instance) {
  if (
    !instance ||
    instance.poseTimer ||
    instance.cancelled
  ) {
    return;
  }

  scheduleRingelnatzCrossbowCycle(
    instance,
    100
  );
}


const NEUENSTEIN_SPAWN_INTERVAL = 7000;
const NEUENSTEIN_SPAWN_X = 88.0;
const NEUENSTEIN_TENT_STOP_X = 15.8;
const BATTLE_LINE_TOP = "calc(94% + 0.5cm)";
const NEUENSTEIN_BATTLE_LINE_TOP = BATTLE_LINE_TOP;
const NEUENSTEIN_MELEE_SPACING = 4.8;
const NEUENSTEIN_ARCHER_ATTACK_DURATION = 1000;
const NEUENSTEIN_ARCHER_IDLE_DURATION = 3000;

const neuensteinUnitDefinitions = {
  archer: {
    type: "archer",
    armorClass: "light",
    idleSrc: "assets/neuenstein-bogenschuetze-idle.png?v=37",
    attackSrc: "assets/neuenstein-bogenschuetze-angriff.png?v=37",
    width: 6.4,
    height: 21.0,
    speed: 5.4,
    ranged: true,
    attackScale: 1.16,
    attackOffsetX: -6,
    attackOffsetY: 0
  },
  halberdier: {
    type: "halberdier",
    armorClass: "heavy",
    idleSrc: "assets/neuenstein-hellebardier-idle.png?v=37",
    attackSrc: "assets/neuenstein-hellebardier-angriff.png?v=37",
    width: 7.15,
    height: 23.5,
    speed: 5.7,
    ranged: false,
    attackScale: 1.15,
    attackOffsetX: -7,
    attackOffsetY: 0
  },
  flail: {
    type: "flail",
    armorClass: "medium",
    idleSrc: "assets/neuenstein-flegel-idle.png?v=37",
    attackSrc: "assets/neuenstein-flegel-angriff.png?v=37",
    width: 6.3,
    height: 22.0,
    speed: 5.6,
    ranged: false,
    attackScale: 1.15,
    attackOffsetX: -6,
    attackOffsetY: 0
  },
  swordsman: {
    type: "swordsman",
    armorClass: "heavy",
    idleSrc: "assets/neuenstein-schwertkaempfer-idle.png?v=37",
    attackSrc: "assets/neuenstein-schwertkaempfer-angriff.png?v=37",
    width: 6.4,
    height: 22.0,
    speed: 5.9,
    ranged: false,
    attackScale: 1.15,
    attackOffsetX: -5,
    attackOffsetY: 0
  }
};

function preloadNeuensteinUnitImages() {
  Object.values(neuensteinUnitDefinitions).forEach((definition) => {
    [definition.idleSrc, definition.attackSrc].forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  });
}

preloadNeuensteinUnitImages();

function shuffleNeuensteinQueue(items) {
  const queue = [...items];

  for (let index = queue.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [queue[index], queue[randomIndex]] =
      [queue[randomIndex], queue[index]];
  }

  return queue;
}

function createShuffledNeuensteinQueue() {
  return shuffleNeuensteinQueue([
    "archer",
    "archer",
    "halberdier",
    "halberdier",
    "halberdier",
    "halberdier",
    "halberdier",
    "flail",
    "flail",
    "flail",
    "flail",
    "flail",
    "swordsman",
    "swordsman",
    "swordsman"
  ]);
}

function getMarchInstanceX(instance) {
  if (Number.isFinite(instance.currentX)) {
    return instance.currentX;
  }

  const parsed = Number.parseFloat(instance.element.style.left);
  return Number.isFinite(parsed) ? parsed : instance.startX;
}

function getActiveRingelnatzTargets() {
  return marchingUnitInstances
    .filter((instance) => !instance.cancelled)
    .map((instance) => ({
      instance,
      x: getMarchInstanceX(instance)
    }))
    .filter((entry) => Number.isFinite(entry.x));
}

function setNeuensteinPose(unit, pose) {
  const attack = pose === "attack";

  unit.attackPoseVisible = attack;
  unit.idleImage.classList.toggle("is-active", !attack);
  unit.attackImage.classList.toggle("is-active", attack);
}

function createNeuensteinDustAt(x) {
  const dust = document.createElement("div");
  dust.className = "neuenstein-dust-instance";
  dust.style.left = `${x}%`;
  dust.style.top = NEUENSTEIN_BATTLE_LINE_TOP;
  neuensteinMarchUnitLayer.appendChild(dust);

  window.setTimeout(() => {
    dust.remove();
  }, 760);
}

function triggerNeuensteinImpact(unit) {
  if (unit.cancelled) {
    return;
  }

  unit.element.classList.remove("is-impacting");
  void unit.element.offsetWidth;
  unit.element.classList.add("is-impacting");
  createNeuensteinDustAt(unit.x);

  window.setTimeout(() => {
    if (!unit.cancelled) {
      unit.element.classList.remove("is-impacting");
    }
  }, 430);
}

function stopNeuensteinAttackCycle(unit) {
  if (unit.attackTimer) {
    window.clearTimeout(unit.attackTimer);
    window.clearInterval(unit.attackTimer);
    unit.attackTimer = null;
  }

  unit.combatActive = false;
  setNeuensteinPose(unit, "idle");
}


function executeNeuensteinMeleeHit(attacker) {
  if (!isLivingCombatUnit(attacker)) {
    return;
  }

  const target = attacker.combatTarget;

  if (!isLivingCombatUnit(target)) {
    stopNeuensteinAttackCycle(attacker);
    attacker.combatTarget = null;
    return;
  }

  if (target.type === "tent") {
    applyDamageToUnit(
      target,
      TENT_DAMAGE_PER_HIT,
      { attacker }
    );
    return;
  }

  const result =
    getNeuensteinDamage(
      attacker,
      target
    );

  if (!result) {
    return;
  }

  applyDamageToUnit(
    target,
    result.damage,
    {
      instantKill: result.instantKill,
      attacker
    }
  );
}

function startNeuensteinMeleeCycle(unit) {
  if (
    unit.cancelled ||
    unit.attackTimer ||
    unit.definition.ranged ||
    !isLivingCombatUnit(unit.combatTarget)
  ) {
    return;
  }

  unit.combatActive = true;
  setNeuensteinPose(unit, "attack");
  triggerNeuensteinImpact(unit);
  executeNeuensteinMeleeHit(unit);

  unit.attackTimer = window.setInterval(() => {
    if (
      !battleScreenOpen ||
      unit.cancelled ||
      !isLivingCombatUnit(unit.combatTarget)
    ) {
      stopNeuensteinAttackCycle(unit);
      return;
    }

    if (unit.attackPoseVisible) {
      setNeuensteinPose(unit, "idle");
    } else {
      setNeuensteinPose(unit, "attack");
      triggerNeuensteinImpact(unit);
      executeNeuensteinMeleeHit(unit);
    }
  }, 1000);
}

function findNearestRingelnatzTargetForArcher(unit) {
  const livingTargets =
    getActiveRingelnatzTargets()
      .filter((entry) =>
        !entry.instance.cancelled &&
        !entry.instance.isDead &&
        entry.instance.health > 0
      );

  if (livingTargets.length > 0) {
    return livingTargets
      .filter((entry) =>
        entry.x < unit.x
      )
      .sort((a, b) => b.x - a.x)[0] || null;
  }

  return !ringelnatzTent.isDead
    ? {
        instance: ringelnatzTent,
        x: 7.5
      }
    : null;
}

function launchNeuensteinArrow(
  unit,
  target,
  hit
) {
  if (
    !isLivingCombatUnit(unit) ||
    !isLivingCombatUnit(target)
  ) {
    return;
  }

  launchProjectile({
    sourceUnit: unit,
    targetUnit: target,
    projectileClass: "neuenstein-arrow",
    hit,
    flightDuration:
      NEUENSTEIN_ARROW_FLIGHT_DURATION,
    sourceXRatio: 0.26,
    sourceYRatio: 0.42,
    onArrival: () => {
      if (target.type === "tent") {
        applyDamageToUnit(
          target,
          TENT_DAMAGE_PER_HIT,
          { attacker: unit }
        );
        return;
      }

      const result =
        getNeuensteinDamage(
          unit,
          target
        );

      if (!result) {
        return;
      }

      applyDamageToUnit(
        target,
        result.damage,
        {
          instantKill:
            result.instantKill,
          attacker: unit
        }
      );
    }
  });
}

function scheduleNeuensteinArcherCycle(unit, delay) {
  if (unit.cancelled) {
    return;
  }

  unit.attackTimer = window.setTimeout(() => {
    unit.attackTimer = null;

    if (!battleScreenOpen || unit.cancelled) {
      stopNeuensteinAttackCycle(unit);
      return;
    }

    const target = findNearestRingelnatzTargetForArcher(unit);

    if (!target) {
      unit.combatActive = false;
      setNeuensteinPose(unit, "idle");
      scheduleNeuensteinArcherCycle(unit, 500);
      return;
    }

    unit.combatActive = true;
    setNeuensteinPose(unit, "attack");
    const hit =
      Math.random() <
      NEUENSTEIN_ARCHER_HIT_CHANCE;

    launchNeuensteinArrow(
      unit,
      target.instance,
      hit
    );

    unit.attackTimer = window.setTimeout(() => {
      unit.attackTimer = null;

      if (!battleScreenOpen || unit.cancelled) {
        return;
      }

      setNeuensteinPose(unit, "idle");
      scheduleNeuensteinArcherCycle(
        unit,
        NEUENSTEIN_ARCHER_IDLE_DURATION
      );
    }, NEUENSTEIN_ARCHER_ATTACK_DURATION);
  }, delay);
}

function startNeuensteinArcherCycle(unit) {
  if (unit.attackTimer || unit.cancelled || unit.isDead) {
    return;
  }

  scheduleNeuensteinArcherCycle(unit, 250);
}

function calculateNeuensteinArcherSlot() {
  const parkedArchers = neuensteinUnits.filter((unit) =>
    !unit.cancelled &&
    unit.type === "archer"
  );

  return Math.max(69.5, 83.0 - parkedArchers.length * 6.2);
}

function createNeuensteinUnitElement(type, definition) {
  const wrapper = document.createElement("div");
  wrapper.className = "neuenstein-unit-instance";
  wrapper.style.left = `${NEUENSTEIN_SPAWN_X}%`;
  wrapper.style.top = NEUENSTEIN_BATTLE_LINE_TOP;
  wrapper.style.width = `${definition.width}%`;
  wrapper.style.height = `${definition.height}%`;
  wrapper.style.setProperty(
    "--enemy-attack-scale",
    String(definition.attackScale || 1)
  );
  wrapper.style.setProperty(
    "--enemy-attack-offset-x",
    `${definition.attackOffsetX || 0}px`
  );
  wrapper.style.setProperty(
    "--enemy-attack-offset-y",
    `${definition.attackOffsetY || 0}px`
  );

  const idleImage = document.createElement("img");
  idleImage.className =
    "neuenstein-unit-pose neuenstein-unit-pose--idle is-active";
  idleImage.src = definition.idleSrc;
  idleImage.alt = "";
  idleImage.draggable = false;
  wrapper.appendChild(idleImage);

  const attackImage = document.createElement("img");
  attackImage.className =
    "neuenstein-unit-pose neuenstein-unit-pose--attack";
  attackImage.src = definition.attackSrc;
  attackImage.alt = "";
  attackImage.draggable = false;
  wrapper.appendChild(attackImage);

  const {
    healthBar,
    healthFill
  } = createUnitHealthBar("neuenstein");

  wrapper.appendChild(healthBar);
  neuensteinMarchUnitLayer.appendChild(wrapper);

  return {
    wrapper,
    idleImage,
    attackImage,
    healthBar,
    healthFill
  };
}

function spawnNeuensteinUnit(type, options = {}) {
  if (!battleScreenOpen || !neuensteinUnitDefinitions[type]) {
    return null;
  }

  const definition = neuensteinUnitDefinitions[type];
  const {
    wrapper,
    idleImage,
    attackImage,
    healthBar,
    healthFill
  } = createNeuensteinUnitElement(
    type,
    definition
  );

  const unit = {
    id: ++neuensteinUnitCounter,
    type,
    definition,
    element: wrapper,
    idleImage,
    attackImage,
    x: NEUENSTEIN_SPAWN_X,
    targetX:
      type === "archer"
        ? calculateNeuensteinArcherSlot()
        : NEUENSTEIN_TENT_STOP_X,
    currentSpeed: definition.speed,
    walking: type !== "archer" || !options.firstArcher,
    parked: false,
    combatActive: false,
    attackPoseVisible: false,
    attackTimer: null,
    attackInterval: null,
    shotTimeout: null,
    reloadTimeout: null,
    cancelled: false,
    isDead: false,
    faction: "neuenstein",
    maxHealth: 100,
    health: 100,
    armorClass: definition.armorClass,
    healthBar,
    healthFill,
    combatTarget: null,
    firstArcher: Boolean(options.firstArcher)
  };

  neuensteinUnits.push(unit);
  updateUnitHealthBar(unit);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      wrapper.classList.add("is-visible");
    });
  });

  return unit;
}

function spawnFirstNeuensteinArcher() {
  const archer = spawnNeuensteinUnit("archer", {
    firstArcher: true
  });

  if (!archer) {
    return;
  }

  archer.walking = true;
}

function getEnemyAheadStopX(unit) {
  if (unit.type === "archer") {
    return unit.targetX;
  }

  const meleeAhead = neuensteinUnits
    .filter((other) =>
      other !== unit &&
      !other.cancelled &&
      other.type !== "archer" &&
      other.x < unit.x
    )
    .sort((a, b) => b.x - a.x)[0];

  if (!meleeAhead) {
    return NEUENSTEIN_TENT_STOP_X;
  }

  return meleeAhead.x + NEUENSTEIN_MELEE_SPACING;
}


function isLivingCombatUnit(unit) {
  return Boolean(
    unit &&
    !unit.cancelled &&
    !unit.isDead &&
    unit.health > 0
  );
}

function stopRingelnatzCombat(instance) {
  if (!instance) {
    return;
  }

  stopCombatPoseCycle(instance);
  instance.combatActive = false;
  instance.combatTarget = null;
  setUnitPose(instance, "idle");
}

function connectCombatants(ringelnatzUnit, neuensteinUnit) {
  if (
    !isLivingCombatUnit(ringelnatzUnit) ||
    !isLivingCombatUnit(neuensteinUnit)
  ) {
    return false;
  }

  ringelnatzUnit.combatTarget = neuensteinUnit;
  neuensteinUnit.combatTarget = ringelnatzUnit;

  ringelnatzUnit.parked = true;
  neuensteinUnit.parked = true;
  neuensteinUnit.walking = false;

  if (ringelnatzUnit.animationFrame !== null) {
    window.cancelAnimationFrame(ringelnatzUnit.animationFrame);
    ringelnatzUnit.animationFrame = null;
  }

  ringelnatzUnit.element.classList.remove("is-walking");

  if (ringelnatzUnit.definition.rangedUnit) {
    activateCrossbowCombatState(ringelnatzUnit);
  } else if (ringelnatzUnit.definition.switchesPoseOnCollision) {
    activateUnitCombatState(ringelnatzUnit);
  } else {
    triggerImpactPulse(ringelnatzUnit);
    executeRingelnatzMeleeHit(ringelnatzUnit);

    window.setTimeout(() => {
      if (
        isLivingCombatUnit(ringelnatzUnit) &&
        isLivingCombatUnit(ringelnatzUnit.combatTarget)
      ) {
        startImpactPulseCycle(ringelnatzUnit);
      }
    }, 1000);
  }

  if (!neuensteinUnit.definition.ranged) {
    startNeuensteinMeleeCycle(neuensteinUnit);
  }

  return true;
}

function getRingelnatzCollisionForEnemy(unit) {
  const targets = getActiveRingelnatzTargets()
    .filter((entry) =>
      !entry.instance.isDead &&
      entry.instance.health > 0 &&
      entry.x < unit.x
    )
    .sort((a, b) => b.x - a.x);

  const nearest = targets[0];

  if (!nearest) {
    return null;
  }

  const stopX = nearest.x + 4.3;

  return {
    target: nearest.instance,
    stopX
  };
}

function updateNeuensteinUnit(unit, deltaSeconds) {
  if (unit.cancelled || !unit.walking) {
    return;
  }

  if (unit.type === "archer") {
    const desiredX = unit.targetX;

    if (unit.x <= desiredX + 0.08) {
      unit.x = desiredX;
      unit.walking = false;
      unit.parked = true;
      unit.element.style.left = `${unit.x}%`;
      startNeuensteinArcherCycle(unit);
      return;
    }

    unit.x = Math.max(
      desiredX,
      unit.x - unit.currentSpeed * deltaSeconds
    );
    unit.element.style.left = `${unit.x}%`;
    return;
  }

  const queueStopX = getEnemyAheadStopX(unit);
  const collision = getRingelnatzCollisionForEnemy(unit);
  let desiredStopX = Math.max(
    NEUENSTEIN_TENT_STOP_X,
    queueStopX
  );

  if (collision) {
    desiredStopX = Math.max(desiredStopX, collision.stopX);
  }

  const nextX = Math.max(
    desiredStopX,
    unit.x - unit.currentSpeed * deltaSeconds
  );

  unit.x = nextX;
  unit.element.style.left = `${unit.x}%`;

  if (unit.x <= desiredStopX + 0.08) {
    unit.x = desiredStopX;
    unit.walking = false;
    unit.parked = true;
    unit.element.style.left = `${unit.x}%`;

    if (collision) {
      connectCombatants(collision.target, unit);
      return;
    }

    if (!ringelnatzTent.isDead) {
      unit.combatTarget = ringelnatzTent;
      startNeuensteinMeleeCycle(unit);
      return;
    }

    unit.combatTarget = null;
    unit.combatActive = false;
    setNeuensteinPose(unit, "idle");
  }
}

function runNeuensteinBattleLoop(timestamp) {
  if (!battleScreenOpen) {
    neuensteinBattleLoop = null;
    return;
  }

  if (!runNeuensteinBattleLoop.previousTimestamp) {
    runNeuensteinBattleLoop.previousTimestamp = timestamp;
  }

  const deltaMilliseconds = Math.min(
    45,
    timestamp - runNeuensteinBattleLoop.previousTimestamp
  );
  runNeuensteinBattleLoop.previousTimestamp = timestamp;
  const deltaSeconds = deltaMilliseconds / 1000;

  neuensteinUnits.forEach((unit) => {
    updateNeuensteinUnit(unit, deltaSeconds);
  });

  const nearestEnemyX = neuensteinUnits
    .filter((unit) => !unit.cancelled)
    .reduce(
      (minimum, unit) => Math.min(minimum, unit.x),
      Number.POSITIVE_INFINITY
    );

  if (Number.isFinite(nearestEnemyX)) {
    updateCrossbowEnemyRange(nearestEnemyX);
  }

  neuensteinBattleLoop =
    window.requestAnimationFrame(runNeuensteinBattleLoop);
}

function startNeuensteinBattleLoop() {
  if (neuensteinBattleLoop !== null) {
    return;
  }

  runNeuensteinBattleLoop.previousTimestamp = 0;
  neuensteinBattleLoop =
    window.requestAnimationFrame(runNeuensteinBattleLoop);
}

function stopNeuensteinProduction() {
  if (neuensteinSpawnTimer) {
    window.clearInterval(neuensteinSpawnTimer);
    neuensteinSpawnTimer = null;
  }
}

function startNeuensteinProduction() {
  if (
    neuensteinProductionStarted ||
    !battleScreenOpen
  ) {
    return;
  }

  neuensteinProductionStarted = true;
  neuensteinProductionFinished = false;
  ringelnatzProductionUnlocked = true;
  neuensteinSpawnQueue = createShuffledNeuensteinQueue();

  spawnFirstNeuensteinArcher();
  startNeuensteinBattleLoop();

  neuensteinSpawnTimer = window.setInterval(() => {
    if (!battleScreenOpen) {
      stopNeuensteinProduction();
      return;
    }

    if (neuensteinSpawnQueue.length === 0) {
      stopNeuensteinProduction();
      neuensteinProductionFinished = true;
      return;
    }

    const nextType = neuensteinSpawnQueue.shift();
    spawnNeuensteinUnit(nextType);

    if (neuensteinSpawnQueue.length === 0) {
      stopNeuensteinProduction();
      neuensteinProductionFinished = true;
    }
  }, NEUENSTEIN_SPAWN_INTERVAL);
}

function resetNeuensteinBattleSystem() {
  stopNeuensteinProduction();

  if (neuensteinBattleLoop !== null) {
    window.cancelAnimationFrame(neuensteinBattleLoop);
    neuensteinBattleLoop = null;
  }

  runNeuensteinBattleLoop.previousTimestamp = 0;

  neuensteinUnits.forEach((unit) => {
    unit.cancelled = true;
    stopNeuensteinAttackCycle(unit);
    unit.element.remove();
  });

  neuensteinUnits = [];
  neuensteinSpawnQueue = [];
  neuensteinUnitCounter = 0;
  neuensteinProductionStarted = false;
  neuensteinProductionFinished = false;

  neuensteinMarchUnitLayer
    .querySelectorAll(
      ".neuenstein-arrow, .neuenstein-dust-instance"
    )
    .forEach((element) => element.remove());
}

function getRingelnatzCollisionStopX(
  instance,
  proposedX
) {
  const enemiesAhead = neuensteinUnits
    .filter((unit) =>
      !unit.cancelled &&
      !unit.isDead &&
      unit.health > 0 &&
      unit.x > proposedX
    )
    .sort((a, b) => a.x - b.x);

  const nearest = enemiesAhead[0];

  if (!nearest) {
    return null;
  }

  const stopX = nearest.x - 4.3;

  if (proposedX >= stopX) {
    return {
      stopX,
      target: nearest
    };
  }

  return null;
}


const unitKeyMap = {
  "1": "farmer",
  "2": "spearman",
  "3": "cavalry",
  "4": "crossbow",
  "5": "builder",
  "6": "assassin",
  "7": "mercenary",
  "Numpad1": "farmer",
  "Numpad2": "spearman",
  "Numpad3": "cavalry",
  "Numpad4": "crossbow",
  "Numpad5": "builder",
  "Numpad6": "assassin",
  "Numpad7": "mercenary"
};

function syncUnitKeysWithSelectionUnits() {
  ringelnatzUnits.forEach((unit, index) => {
    const key = unitKeyElements[index];

    if (!key) {
      return;
    }

    key.classList.toggle(
      "is-visible",
      unit.classList.contains("is-visible")
    );
  });
}

function createDustAt(x) {
  const dust = document.createElement("div");
  dust.className = "march-dust-instance";
  dust.style.left = `${x}%`;
  dust.style.top = BATTLE_LINE_TOP;
  marchUnitLayer.appendChild(dust);

  window.setTimeout(() => {
    dust.remove();
  }, 760);
}

function calculateQueuedTargetX(definition) {
  if (definition.shortMove) {
    const CROSSBOW_FIRST_X = 20.5;
    const CROSSBOW_SPACING = 5.2;

    const occupiedCrossbowXs = marchingUnitInstances
      .filter((instance) =>
        !instance.cancelled &&
        !instance.isDead &&
        instance.definition.shortMove
      )
      .map((instance) => getMarchInstanceX(instance))
      .filter(Number.isFinite)
      .sort((a, b) => a - b);

    if (occupiedCrossbowXs.length === 0) {
      return CROSSBOW_FIRST_X;
    }

    let candidate = CROSSBOW_FIRST_X;

    while (
      occupiedCrossbowXs.some(
        (x) => Math.abs(x - candidate) < CROSSBOW_SPACING * 0.72
      )
    ) {
      candidate += CROSSBOW_SPACING;
    }

    return candidate;
  }

  const parkedNormalUnits = marchingUnitInstances.filter((instance) =>
    instance.parked &&
    !instance.cancelled &&
    !instance.isDead &&
    !instance.definition.shortMove
  );

  const spacing = 5.4;
  return Math.max(28, 78.5 - parkedNormalUnits.length * spacing);
}

function setUnitPose(instance, pose) {
  const showAttack =
    pose === "attack" &&
    Boolean(instance.attackImage);

  instance.attackPoseVisible = showAttack;

  instance.idleImage.classList.toggle(
    "is-active",
    !showAttack
  );

  if (instance.attackImage) {
    instance.attackImage.classList.toggle(
      "is-active",
      showAttack
    );
  }
}

function stopCombatPoseCycle(instance) {
  if (instance.poseTimer) {
    window.clearInterval(instance.poseTimer);
    instance.poseTimer = null;
  }

  instance.combatActive = false;
}

function startCombatPoseCycle(instance) {
  if (
    !instance.attackImage ||
    instance.poseTimer ||
    instance.cancelled
  ) {
    return;
  }

  instance.combatActive = true;
  setUnitPose(instance, "attack");
  executeRingelnatzMeleeHit(instance);

  instance.poseTimer = window.setInterval(() => {
    if (
      instance.cancelled ||
      !battleScreenOpen ||
      !isLivingCombatUnit(instance.combatTarget)
    ) {
      stopRingelnatzCombat(instance);
      return;
    }

    const nextPose =
      instance.attackPoseVisible
        ? "idle"
        : "attack";

    setUnitPose(instance, nextPose);

    if (nextPose === "attack") {
      executeRingelnatzMeleeHit(instance);
    }
  }, 1000);
}

function triggerImpactPulse(instance) {
  if (instance.cancelled || !battleScreenOpen) {
    return;
  }

  instance.element.classList.remove("is-impacting");
  void instance.element.offsetWidth;
  instance.element.classList.add("is-impacting");
  createDustAt(instance.targetX);

  window.setTimeout(() => {
    if (!instance.cancelled) {
      instance.element.classList.remove("is-impacting");
      instance.element.classList.add("is-visible");
    }
  }, 430);
}

function startImpactPulseCycle(instance) {
  if (
    instance.poseTimer ||
    instance.cancelled ||
    !isLivingCombatUnit(instance.combatTarget)
  ) {
    return;
  }

  instance.combatActive = true;
  instance.poseTimer = window.setInterval(() => {
    if (
      instance.cancelled ||
      !battleScreenOpen ||
      !isLivingCombatUnit(instance.combatTarget)
    ) {
      stopRingelnatzCombat(instance);
      return;
    }

    triggerImpactPulse(instance);
    executeRingelnatzMeleeHit(instance);
  }, 1000);
}

function activateUnitCombatState(instance) {
  if (
    instance.combatActive ||
    !instance.definition.switchesPoseOnCollision ||
    !isLivingCombatUnit(instance.combatTarget)
  ) {
    return;
  }

  instance.element.classList.add("is-impacting");
  createDustAt(instance.targetX);

  window.setTimeout(() => {
    if (instance.cancelled) {
      return;
    }

    instance.element.classList.remove("is-impacting");
    instance.element.classList.add("is-visible");
    startCombatPoseCycle(instance);
  }, 420);
}

function activateCrossbowCombatState(instance) {
  if (
    !instance ||
    !instance.definition.rangedUnit ||
    instance.combatActive ||
    instance.cancelled
  ) {
    return;
  }

  // Kein Wackeln und kein Staub für die Fernkampfeinheit.
  startRingelnatzCrossbowCycle(instance);
}

function updateCrossbowEnemyRange(enemyX) {
  if (enemyX > CROSSBOW_TRIGGER_X) {
    return;
  }

  marchingUnitInstances
    .filter((instance) =>
      instance.parked &&
      instance.definition.rangedUnit
    )
    .forEach(activateCrossbowCombatState);
}

function finishMarchInstance(instance) {
  instance.animationFrame = null;
  instance.element.classList.remove("is-walking");
  instance.parked = true;
  instance.element.classList.add("is-visible");

  if (instance.definition.shortMove) {
    activateCrossbowCombatState(instance);
    return;
  }

  if (isLivingCombatUnit(instance.combatTarget)) {
    connectCombatants(instance, instance.combatTarget);
    return;
  }

  if (!neuensteinTent.isDead) {
    instance.combatTarget = neuensteinTent;

    if (instance.definition.switchesPoseOnCollision) {
      activateUnitCombatState(instance);
    } else {
      triggerImpactPulse(instance);
      executeRingelnatzMeleeHit(instance);

      window.setTimeout(() => {
        if (
          isLivingCombatUnit(instance) &&
          isLivingCombatUnit(instance.combatTarget)
        ) {
          startImpactPulseCycle(instance);
        }
      }, 1000);
    }

    return;
  }

  instance.combatTarget = null;
  instance.combatActive = false;
  setUnitPose(instance, "idle");
}

function animateMarchInstance(instance, timestamp) {
  if (!battleScreenOpen || instance.cancelled) {
    return;
  }

  if (!instance.startTime) {
    instance.startTime = timestamp;
  }

  const elapsed = timestamp - instance.startTime;
  const progress = Math.min(elapsed / instance.duration, 1);
  let currentX =
    instance.startX + (instance.targetX - instance.startX) * progress;

  const enemyCollision =
    getRingelnatzCollisionStopX(
      instance,
      currentX
    );

  if (
    enemyCollision !== null &&
    !instance.definition.shortMove
  ) {
    currentX = enemyCollision.stopX;
    instance.targetX = enemyCollision.stopX;
    instance.combatTarget =
      enemyCollision.target;
    instance.currentX = currentX;
    instance.element.style.left = `${currentX}%`;
    instance.parked = true;
    connectCombatants(instance, enemyCollision.target);
    return;
  }

  instance.currentX = currentX;
  instance.element.style.left = `${currentX}%`;

  if (progress < 1) {
    instance.animationFrame = window.requestAnimationFrame((nextTimestamp) => {
      animateMarchInstance(instance, nextTimestamp);
    });
    return;
  }

  finishMarchInstance(instance);
}

function spawnAndMarchUnit(unitType) {
  if (
    !battleScreenOpen ||
    feudSequenceInProgress ||
    !ringelnatzProductionUnlocked ||
    ringelnatzTent.isDead ||
    Date.now() < productionCooldownUntil
  ) {
    return;
  }

  const definition = marchUnitDefinitions[unitType];

  if (!definition) {
    return;
  }

  productionCooldownUntil = Date.now() + 7000;
  playUnitProductionSound(unitType);

  const wrapper = document.createElement("div");
  wrapper.className = "march-unit-instance";
  wrapper.style.left = "14.5%";
  wrapper.style.top = BATTLE_LINE_TOP;
  wrapper.style.width = `${definition.width}%`;
  wrapper.style.height = `${definition.height}%`;
  wrapper.style.setProperty(
    "--attack-scale",
    String(definition.attackScale || 1)
  );
  wrapper.style.setProperty(
    "--attack-offset-x",
    `${definition.attackOffsetX || 0}px`
  );
  wrapper.style.setProperty(
    "--attack-offset-y",
    typeof definition.attackOffsetY === "string"
      ? definition.attackOffsetY
      : `${definition.attackOffsetY || 0}px`
  );
  wrapper.dataset.marchId = String(++marchInstanceCounter);

  const idleImage = document.createElement("img");
  idleImage.className =
    "march-unit-pose march-unit-pose--idle is-active";
  idleImage.src = definition.idleSrc;
  idleImage.alt = "";
  idleImage.draggable = false;
  wrapper.appendChild(idleImage);

  let attackImage = null;

  if (definition.attackSrc) {
    attackImage = document.createElement("img");
    attackImage.className =
      "march-unit-pose march-unit-pose--attack";
    attackImage.src = definition.attackSrc;
    attackImage.alt = "";
    attackImage.draggable = false;
    wrapper.appendChild(attackImage);
  }

  const {
    healthBar,
    healthFill
  } = createUnitHealthBar("ringelnatz");

  wrapper.appendChild(healthBar);
  marchUnitLayer.appendChild(wrapper);

  const instance = {
    id: marchInstanceCounter,
    element: wrapper,
    idleImage,
    attackImage,
    definition,
    startX: 14.5,
    currentX: 14.5,
    targetX: calculateQueuedTargetX(definition),
    duration: definition.duration,
    startTime: 0,
    animationFrame: null,
    parked: false,
    combatActive: false,
    attackPoseVisible: false,
    poseTimer: null,
    attackInterval: null,
    shotTimeout: null,
    reloadTimeout: null,
    cancelled: false,
    isDead: false,
    faction: "ringelnatz",
    maxHealth: 100,
    health: 100,
    armorClass: definition.armorClass,
    type: definition.type,
    healthBar,
    healthFill,
    combatTarget: null
  };

  marchingUnitInstances.push(instance);
  updateUnitHealthBar(instance);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      wrapper.classList.add("is-visible");

      window.setTimeout(() => {
        if (!battleScreenOpen || instance.cancelled) {
          return;
        }

        wrapper.classList.add("is-walking");
        instance.animationFrame =
          window.requestAnimationFrame((timestamp) => {
            animateMarchInstance(instance, timestamp);
          });
      }, 320);
    });
  });
}

function resetMarchingUnits() {
  marchingUnitInstances.forEach((instance) => {
    instance.cancelled = true;
    stopCombatPoseCycle(instance);

    if (instance.animationFrame !== null) {
      window.cancelAnimationFrame(instance.animationFrame);
    }

    instance.element.remove();
  });

  marchingUnitInstances = [];
  productionCooldownUntil = 0;
  ringelnatzProductionUnlocked = false;
  marchInstanceCounter = 0;

  marchUnitLayer
    .querySelectorAll(
      ".march-dust-instance, .ringelnatz-crossbow-bolt, .neuenstein-arrow"
    )
    .forEach((element) => element.remove());

  Object.values(unitProductionSounds).forEach((audio) => {
    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  });
}

function clearRingelnatzUnitTimers() {
  ringelnatzUnitTimers.forEach((timer) => {
    window.clearTimeout(timer);
  });

  ringelnatzUnitTimers = [];
}

function resetRingelnatzUnits() {
  clearRingelnatzUnitTimers();

  ringelnatzUnits.forEach((unit) => {
    unit.classList.remove("is-visible");
  });

  syncUnitKeysWithSelectionUnits();
}

function startRingelnatzUnitSequence() {
  resetRingelnatzUnits();

  ringelnatzUnits.forEach((unit, index) => {
    ringelnatzUnitTimers.push(
      window.setTimeout(() => {
        if (!battleScreenOpen) {
          return;
        }

        unit.classList.add("is-visible");
        syncUnitKeysWithSelectionUnits();
      }, index * 200)
    );
  });
}

function clearBattleUnitTimers() {
  battleUnitTimers.forEach((timer) => {
    window.clearTimeout(timer);
  });

  battleUnitTimers = [];
}

function playBattleUnitSound(audio) {
  if (!audio) {
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  audio.volume = 0.70;

  audio.play().catch((error) => {
    console.error("Einheitensound konnte nicht abgespielt werden:", error);
  });
}

function resetBattleUnits() {
  clearBattleUnitTimers();
  resetTentHealthSystem();
  resetNeuensteinBattleSystem();
  resetRingelnatzUnits();
  resetMarchingUnits();
  battleUnitSequenceStarted = false;

  battleArcherOne.classList.remove("is-visible");
  battleSwordsman.classList.remove("is-visible");
  battleArcherTwo.classList.remove("is-visible");

  [archerAppearSound, swordsmanAppearSound].forEach((audio) => {
    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  });
}

function startBattleUnitSequence() {
  resetBattleUnits();
  battleUnitSequenceStarted = true;

  battleUnitTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        return;
      }

      battleArcherOne.classList.add("is-visible");
      playBattleUnitSound(archerAppearSound);
    }, 2000)
  );

  battleUnitTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        return;
      }

      battleSwordsman.classList.add("is-visible");
      playBattleUnitSound(swordsmanAppearSound);
    }, 4000)
  );

  battleUnitTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        return;
      }

      battleArcherTwo.classList.add("is-visible");
      playBattleUnitSound(archerAppearSound);
    }, 6000)
  );

  battleUnitTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        return;
      }

      startRingelnatzUnitSequence();
    }, 6800)
  );

  battleUnitTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        return;
      }

      startNeuensteinProduction();
    }, 8000)
  );
}

function showBattleScreen() {
  battleScreen.hidden = false;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      battleScreen.classList.add("is-open");
      battleScreenOpen = true;
      feudSequenceInProgress = false;
      surrenderButton.focus();

      window.setTimeout(() => {
        if (battleScreenOpen) {
          startBattleUnitSequence();
        }
      }, 850);
    });
  });
}

async function beginFeudSequence() {
  closeNeuensteinTroopSelection();
  closeTroopSelection();
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

  resetBattleUnits();
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


window.addEventListener("keydown", (event) => {
  const key =
    event.code && event.code.startsWith("Numpad")
      ? event.code
      : event.key;

  const unitType = unitKeyMap[key];

  if (!unitType) {
    return;
  }

  if (
    !battleScreenOpen ||
    feudSequenceInProgress ||
    !ringelnatzProductionUnlocked ||
    ringelnatzTent.isDead ||
    Date.now() < productionCooldownUntil
  ) {
    return;
  }

  event.preventDefault();
  spawnAndMarchUnit(unitType);
});

