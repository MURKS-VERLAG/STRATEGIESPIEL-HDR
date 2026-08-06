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
const petronillaScreen = document.querySelector("#petronillaScreen");
const petronillaPortraitA = document.querySelector("#petronillaPortraitA");
const petronillaPortraitB = document.querySelector("#petronillaPortraitB");
const petronillaBlackout = document.querySelector("#petronillaBlackout");
const petronillaMusic = document.querySelector("#petronillaMusic");
const petronillaTitleLayer = document.querySelector("#petronillaTitleLayer");
const petronillaTitleCard = document.querySelector("#petronillaTitleCard");

const mapViewport = document.querySelector("#mapViewport");
const campaignMap = document.querySelector("#campaignMap");
const mapOverlay = document.querySelector("#mapOverlay");
const mapFogLayer = document.querySelector("#mapFogLayer");
const yearDisplay = document.querySelector("#yearDisplay");
const roundTransitionIris = document.querySelector("#roundTransitionIris");
const banditEventModal = document.querySelector("#banditEventModal");
const banditEventWindow = document.querySelector("#banditEventWindow");
const banditEventRr5 = document.querySelector("#banditEventRr5");
const banditEventGeneralGroup = document.querySelector("#banditEventGeneralGroup");
const banditEventBanditLine = document.querySelector("#banditEventBanditLine");
const banditEventRr4 = document.querySelector("#banditEventRr4");
const banditEventStartButton = document.querySelector("#banditEventStartButton");
const banditEventOpeningSound = document.querySelector("#banditEventOpeningSound");
const banditEventRr5Sound = document.querySelector("#banditEventRr5Sound");
const banditEventRr4Sound = document.querySelector("#banditEventRr4Sound");
const banditEventStartHoverSound = document.querySelector("#banditEventStartHoverSound");
const zoomDisplay = document.querySelector("#zoomDisplay");
const mapHint = document.querySelector("#mapHint");
const campaignResourceBar = document.querySelector("#campaignResourceBar");
const campaignScribe = document.querySelector("#campaignScribe");
const campaignScribeBlink = document.querySelector("#campaignScribeBlink");
const campaignRightLogos = document.querySelector("#campaignRightLogos");
const campaignMurksLogo = document.querySelector("#campaignMurksLogo");
const campaignFireflyLogo = document.querySelector("#campaignFireflyLogo");
const campaignLeftTopMenu = document.querySelector("#campaignLeftTopMenu");
const campaignRightUpperMenu = document.querySelector("#campaignRightUpperMenu");
const campaignBookMenu = document.querySelector("#campaignBookMenu");
const politicalMapOverlay = document.querySelector("#politicalMapOverlay");
const politicalMapMenuIcon = document.querySelector("#politicalMapMenuIcon");
const darkTriadMenuIcon = document.querySelector("#darkTriadMenuIcon");
const darkTriadHoverSound = document.querySelector("#darkTriadHoverSound");
const darkTriadModal = document.querySelector("#darkTriadModal");
const darkTriadResponse = document.querySelector("#darkTriadResponse");
const darkTriadResponseCharacter = document.querySelector("#darkTriadResponseCharacter");
const darkTriadResponseText = document.querySelector("#darkTriadResponseText");
const darkTriadBookHotspots = Array.from(
  document.querySelectorAll("[data-dark-triad-book]")
);
const darkTriadBookMiddleSound = document.querySelector("#darkTriadBookMiddleSound");
const darkTriadBookSidesSound = document.querySelector("#darkTriadBookSidesSound");
const mapBlackTransition = document.querySelector("#mapBlackTransition");
const normalMapIrisOverlay = document.querySelector("#normalMapIrisOverlay");

const fireflyHoverSoundIds = [
  "hoverFirefly1",
  "hoverFirefly2",
  "hoverFirefly3",
  "hoverFirefly4",
  "hoverFirefly5",
  "hoverFirefly6",
  "hoverFirefly7",
  "hoverFirefly8"
];

const murksHoverSoundIds = [
  "hoverMurks1",
  "hoverMurks2",
  "hoverMurks3",
  "hoverMurks4",
  "hoverMurks5",
  "hoverMurks6",
  "hoverMurks7"
];
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
const mapHotspotHighlight =
  document.querySelector("#mapHotspotHighlight");
const mapMerchant =
  document.querySelector("#mapMerchant");
const mapMerchantKey =
  document.querySelector("#mapMerchantKey");
const hoverMerchantSound =
  document.querySelector("#hoverMerchantSound");
const merchantKeySound =
  document.querySelector("#merchantKeySound");
const neuensteinPanelFeudButton =
  document.querySelector("#neuensteinPanelFeudButton");
const lachersgutPanelFeudButton =
  document.querySelector("#lachersgutPanelFeudButton");

const hoverNeuenstein1 =
  document.querySelector("#hoverNeuenstein1");
const hoverNeuenstein2 =
  document.querySelector("#hoverNeuenstein2");
const hoverRingelnatzGeneral1 =
  document.querySelector("#hoverRingelnatzGeneral1");
const hoverRingelnatzGeneral2 =
  document.querySelector("#hoverRingelnatzGeneral2");
const hoverKastelberg =
  document.querySelector("#hoverKastelberg");
const hoverRingelnatz =
  document.querySelector("#hoverRingelnatz");
const hoverSchauenburgRitter =
  document.querySelector("#hoverSchauenburgRitter");
const lachersgutModal =
  document.querySelector("#lachersgutModal");
const meierhofModal =
  document.querySelector("#meierhofModal");
const kastelbergOverviewModal =
  document.querySelector("#kastelbergOverviewModal");
const schauenburgKnightModal =
  document.querySelector("#schauenburgKnightModal");
const brownArmyModal =
  document.querySelector("#brownArmyModal");
const kastelbergPanelFeudButton =
  document.querySelector("#kastelbergPanelFeudButton");
const hoverCowSound =
  document.querySelector("#hoverCowSound");
const feudHoverIcon = document.querySelector("#feudHoverIcon");
const feudConfirmation = document.querySelector("#feudConfirmation");
const feudConfirmYes = document.querySelector("#feudConfirmYes");
const feudConfirmNo = document.querySelector("#feudConfirmNo");
const feudPortraitModal = document.querySelector("#feudPortraitModal");
const battleScreen = document.querySelector("#battleScreen");
const battleStage = document.querySelector("#battleStage");
const battleCountdown =
  document.querySelector("#battleCountdown");
const battleCountdownNumber =
  document.querySelector("#battleCountdownNumber");
const battleTitleOverlay =
  document.querySelector("#battleTitleOverlay");
const battleTitleYear =
  document.querySelector("#battleTitleYear");
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
const battleScreenImage =
  document.querySelector(".battle-screen-image");
const siegeTransitionOverlay =
  document.querySelector("#siegeTransitionOverlay");
const kastelbergSiegeLayer =
  document.querySelector("#kastelbergSiegeLayer");
const kastelbergSiegeDefenders =
  document.querySelector("#kastelbergSiegeDefenders");
const siegeStructureUi =
  document.querySelector("#siegeStructureUi");
const siegePreparationUnitLayer =
  document.querySelector("#siegePreparationUnitLayer");
const siegeBuilderCount =
  document.querySelector("#siegeBuilderCount");
const siegeShieldKnightAppearSound =
  document.querySelector("#siegeShieldKnightAppearSound");

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
let lachersgutModalOpen = false;
let meierhofModalOpen = false;
let kastelbergOverviewModalOpen = false;
let schauenburgKnightModalOpen = false;
let brownArmyModalOpen = false;
let darkTriadModalOpen = false;
let feudConfirmationOpen = false;
let feudSequenceInProgress = false;
let battleScreenOpen = false;
let battleUnitTimers = [];
let battleUnitSequenceStarted = false;
let battleCountdownRunning = false;
let battleCountdownTimers = [];
let battleTitleTimers = [];
let battleTitleRunning = false;
const battleStartHorn =
  new Audio("assets/battle-start-horn.mp3?v=49");
battleStartHorn.preload = "auto";
let ringelnatzUnitTimers = [];
let marchingUnitInstances = [];
let productionCooldownUntil = 0;
let ringelnatzProductionUnlocked = false;
let marchInstanceCounter = 0;

const KASTELBERG_PHASES = Object.freeze({
  FIELD_BATTLE: "field-battle",
  TRANSITION_TO_SIEGE: "transition-to-siege",
  SIEGE_DEFENDERS_INTRO: "siege-defenders-intro",
  SIEGE_RINGELNATZ_UI_INTRO: "siege-ringelnatz-ui-intro",
  SIEGE_PREPARATION: "siege-preparation",
  SIEGE_COUNTDOWN: "siege-countdown",
  SIEGE_ACTIVE: "siege-active"
});

let kastelbergPhase = KASTELBERG_PHASES.FIELD_BATTLE;
let siegeTransitionStarted = false;
let siegeSequenceTimers = [];
let siegePlacementBusy = false;
let siegeCrossbowSlotsFilled = 0;
let siegeBuildersAssigned = 0;

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

const MAP_ZOOM_LEVELS = [0.88, 1, 1.14, 1.30];

const mapState = {
  fitScale: 1,
  zoom: 1,
  maxZoom: 1.30,
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

let petronillaSequenceRunning = false;

function shufflePetronillaPortraits() {
  const portraits = [
    "assets/petronilla-p1.png?v=100",
    "assets/petronilla-p2.png?v=100",
    "assets/petronilla-p3.png?v=100",
    "assets/petronilla-p4.png?v=100",
    "assets/petronilla-p5.png?v=100"
  ];

  for (let index = portraits.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [portraits[index], portraits[randomIndex]] = [portraits[randomIndex], portraits[index]];
  }

  return portraits;
}

async function openCampaignMapAfterPetronilla() {
  mapScreen.classList.add("is-active");

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
}


const PETRONILLA_TITLE_CARDS = [
  "assets/petronilla-titel-stunde-null.png?v=100",
  "assets/petronilla-titel-im-jahre-des-herrn.png?v=100",
  "assets/petronilla-titel-1430.png?v=100"
];

function preloadImageAsset(source) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = async () => {
      try {
        if (typeof image.decode === "function") {
          await image.decode();
        }
      } catch (_) {}
      resolve(source);
    };
    image.onerror = () => resolve(source);
    image.src = source;
  });
}

async function showPetronillaTitleCard(source, visibleDuration = 2000) {
  if (!petronillaTitleLayer || !petronillaTitleCard) {
    return;
  }

  await preloadImageAsset(source);
  petronillaTitleCard.src = source;
  petronillaTitleLayer.classList.add("is-visible");
  await new Promise((resolve) => window.setTimeout(resolve, visibleDuration));
  petronillaTitleLayer.classList.remove("is-visible");
  await new Promise((resolve) => window.setTimeout(resolve, 140));
}

async function runPetronillaSequence() {
  if (petronillaSequenceRunning) {
    return;
  }

  petronillaSequenceRunning = true;
  stopIntro();
  introControl.hidden = true;
  fadeAudio(introMusic, 0, 260, true);

  document.body.classList.add("is-petronilla-playing");
  petronillaScreen.hidden = false;
  petronillaBlackout.classList.remove("is-visible");

  const portraitElements = [petronillaPortraitA, petronillaPortraitB];
  let visibleIndex = 0;
  let shuffledPortraits = shufflePetronillaPortraits();
  let portraitQueueIndex = 0;

  const allPortraitSources = [
    "assets/petronilla-p1.png?v=100",
    "assets/petronilla-p2.png?v=100",
    "assets/petronilla-p3.png?v=100",
    "assets/petronilla-p4.png?v=100",
    "assets/petronilla-p5.png?v=100"
  ];
  await Promise.all([...allPortraitSources, ...PETRONILLA_TITLE_CARDS].map(preloadImageAsset));

  portraitElements[0].src = shuffledPortraits[portraitQueueIndex++];
  portraitElements[0].classList.add("is-visible");
  portraitElements[1].classList.remove("is-visible");
  petronillaTitleLayer?.classList.remove("is-visible");

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      petronillaScreen.classList.add("is-active");
      introScreen.classList.add("is-leaving");
    });
  });

  window.setTimeout(() => {
    introScreen.classList.remove("is-active", "is-leaving");
  }, TRANSITION_DURATION);

  petronillaMusic.pause();
  petronillaMusic.currentTime = 4;
  petronillaMusic.volume = 1;

  try {
    await petronillaMusic.play();
  } catch (error) {
    console.warn("Petronilla-Musik wurde vom Browser blockiert:", error);
  }

  let portraitSwapRunning = false;
  const portraitTimer = window.setInterval(async () => {
    if (portraitSwapRunning) return;
    portraitSwapRunning = true;

    if (portraitQueueIndex >= shuffledPortraits.length) {
      shuffledPortraits = shufflePetronillaPortraits();
      portraitQueueIndex = 0;
    }

    const nextIndex = visibleIndex === 0 ? 1 : 0;
    const nextSource = shuffledPortraits[portraitQueueIndex++];
    await preloadImageAsset(nextSource);
    portraitElements[nextIndex].src = nextSource;

    window.requestAnimationFrame(() => {
      portraitElements[nextIndex].classList.add("is-visible");
      window.setTimeout(() => {
        portraitElements[visibleIndex].classList.remove("is-visible");
        visibleIndex = nextIndex;
        portraitSwapRunning = false;
      }, 55);
    });
  }, 300);

  const titleSequence = (async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 5000));
    await showPetronillaTitleCard(PETRONILLA_TITLE_CARDS[0], 2000);
    await new Promise((resolve) => window.setTimeout(resolve, 2000));
    await showPetronillaTitleCard(PETRONILLA_TITLE_CARDS[1], 2000);
    await new Promise((resolve) => window.setTimeout(resolve, 2000));
    await showPetronillaTitleCard(PETRONILLA_TITLE_CARDS[2], 2000);
  })();

  await new Promise((resolve) => window.setTimeout(resolve, 25000));
  await titleSequence;
  window.clearInterval(portraitTimer);

  petronillaMusic.pause();
  petronillaBlackout.classList.add("is-visible");
  await new Promise((resolve) => window.setTimeout(resolve, 220));

  await openCampaignMapAfterPetronilla();

  if (roundTransitionIris) {
    roundTransitionIris.classList.add("is-active", "is-closed");
    await new Promise((resolve) => window.setTimeout(resolve, 40));

    petronillaScreen.classList.remove("is-active");
    petronillaScreen.hidden = true;

    roundTransitionIris.classList.remove("is-closed");
    await new Promise((resolve) => window.setTimeout(resolve, 300));
    roundTransitionIris.classList.remove("is-active");
  } else {
    petronillaScreen.classList.remove("is-active");
    petronillaScreen.hidden = true;
  }

  portraitElements.forEach((portrait) => portrait.classList.remove("is-visible"));
  petronillaTitleLayer?.classList.remove("is-visible");
  petronillaBlackout.classList.remove("is-visible");
  document.body.classList.remove("is-petronilla-playing");
  petronillaSequenceRunning = false;
}

async function switchToMap() {
  await runPetronillaSequence();
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

function getNearestZoomLevelIndex(zoom) {
  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;

  MAP_ZOOM_LEVELS.forEach((level, index) => {
    const distance = Math.abs(level - zoom);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  return nearestIndex;
}

function updateOverviewZoomUi() {
  if (!campaignResourceBar) {
    return;
  }

  const viewportWidth = mapViewport.clientWidth;
  const displayedMapWidth = campaignMap.offsetWidth * mapState.zoom;
  const leftMapEdge = Math.max(0, mapState.x);
  const rightMapEdge = mapState.x + displayedMapWidth;
  const outerPadding = 8;

  const availableLeftBorderWidth = Math.max(
    0,
    Math.min(leftMapEdge - outerPadding * 2, viewportWidth * 0.32)
  );

  const availableRightBorderWidth = Math.max(
    0,
    Math.min(
      viewportWidth - rightMapEdge - outerPadding * 2,
      viewportWidth * 0.32
    )
  );

  const resourceBarVisible =
    mapState.zoom <= 1 &&
    availableLeftBorderWidth >= 42;

  const rightLogosVisible =
    mapState.zoom <= 1 &&
    availableRightBorderWidth >= 42;

  mapScreen.classList.toggle(
    "is-overview-zoom",
    mapState.zoom < 1
  );

  campaignResourceBar.style.setProperty(
    "--resource-bar-left",
    `${outerPadding}px`
  );
  campaignResourceBar.style.setProperty(
    "--resource-bar-width",
    `${availableLeftBorderWidth}px`
  );
  campaignResourceBar.classList.toggle(
    "is-visible",
    resourceBarVisible
  );

  if (campaignScribe) {
    campaignScribe.style.setProperty(
      "--scribe-width",
      `${availableLeftBorderWidth}px`
    );
    campaignScribe.classList.toggle(
      "is-visible",
      resourceBarVisible
    );
  }

  if (campaignRightLogos) {
    campaignRightLogos.style.setProperty(
      "--right-logo-offset",
      `${outerPadding}px`
    );
    campaignRightLogos.style.setProperty(
      "--right-logo-width",
      `${availableRightBorderWidth}px`
    );
    campaignRightLogos.classList.toggle(
      "is-visible",
      rightLogosVisible
    );
  }

  if (campaignLeftTopMenu) {
    campaignLeftTopMenu.style.setProperty(
      "--left-menu-offset",
      `${outerPadding}px`
    );
    campaignLeftTopMenu.style.setProperty(
      "--left-menu-width",
      `${availableLeftBorderWidth}px`
    );
    campaignLeftTopMenu.classList.toggle(
      "is-visible",
      resourceBarVisible
    );
    campaignLeftTopMenu.classList.toggle(
      "is-lowest-map-zoom",
      Math.abs(mapState.zoom - MAP_ZOOM_LEVELS[0]) < 0.001
    );
  }

  if (campaignRightUpperMenu) {
    campaignRightUpperMenu.style.setProperty(
      "--right-upper-offset",
      `${outerPadding}px`
    );
    campaignRightUpperMenu.style.setProperty(
      "--right-upper-width",
      `${availableRightBorderWidth}px`
    );
    campaignRightUpperMenu.classList.toggle(
      "is-visible",
      rightLogosVisible
    );
  }
}

function renderMap() {
  clampMapPosition();

  campaignMap.style.transform =
    `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.zoom})`;

  if (politicalMapOverlay) {
    politicalMapOverlay.style.width = `${campaignMap.offsetWidth}px`;
    politicalMapOverlay.style.height = `${campaignMap.offsetHeight}px`;
    politicalMapOverlay.style.transform =
      `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.zoom})`;
  }

  if (normalMapIrisOverlay) {
    normalMapIrisOverlay.style.width = `${campaignMap.offsetWidth}px`;
    normalMapIrisOverlay.style.height = `${campaignMap.offsetHeight}px`;
    normalMapIrisOverlay.style.transform =
      `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.zoom})`;
  }

  mapOverlay.style.transform =
    `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.zoom})`;

  mapFogLayer.style.transform =
    `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.zoom})`;

  zoomDisplay.textContent = `${Math.round(mapState.zoom * 100)} %`;
  updateOverviewZoomUi();
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
  const currentZoomIndex = getNearestZoomLevelIndex(previousZoom);
  const direction = event.deltaY < 0 ? 1 : -1;
  const nextZoomIndex = Math.min(
    MAP_ZOOM_LEVELS.length - 1,
    Math.max(0, currentZoomIndex + direction)
  );
  const nextZoom = MAP_ZOOM_LEVELS[nextZoomIndex];

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


const kastelbergTargetRegion = {
  id: "kastelberg",
  minX: 0.468,
  maxX: 0.506,
  minY: 0.064,
  maxY: 0.153,
  soundIds: ["hoverKastelberg"],
  attackable: true
};

const neuensteinTroopSelectionTargetRegion = {
  id: "neuensteinTroops",
  minX: 0.410,
  maxX: 0.454,
  minY: 0.135,
  maxY: 0.252,
  soundIds: ["hoverNeuenstein1", "hoverNeuenstein2"],
  attackable: true
};

const ringelnatzEstateTargetRegion = {
  id: "ringelnatzEstate",
  minX: 0.514,
  maxX: 0.544,
  minY: 0.129,
  maxY: 0.286,
  soundIds: ["hoverRingelnatz"],
  attackable: false
};

const troopSelectionTargetRegion = {
  id: "ringelnatzTroops",
  minX: 0.566,
  maxX: 0.606,
  minY: 0.232,
  maxY: 0.355,
  soundIds: [
    "hoverRingelnatzGeneral1",
    "hoverRingelnatzGeneral2"
  ],
  attackable: false
};

const schauenburgKnightTargetRegion = {
  id: "schauenburgKnight",
  minX: 0.466,
  maxX: 0.507,
  minY: 0.252,
  maxY: 0.391,
  soundIds: ["hoverSchauenburgRitter"],
  attackable: true
};

const schauenburgBannerTargetRegion = {
  id: "schauenburgBanner",
  minX: 0.338,
  maxX: 0.376,
  minY: 0.432,
  maxY: 0.523,
  soundIds: ["hoverKastelberg"],
  attackable: true
};

const schauenburgCastleTargetRegion = {
  id: "schauenburgCastle",
  minX: 0.491,
  maxX: 0.570,
  minY: 0.354,
  maxY: 0.474,
  soundIds: ["hoverKastelberg"],
  attackable: true
};

const schauenburgSouthKnightTargetRegion = {
  id: "schauenburgSouthKnight",
  minX: 0.535,
  maxX: 0.574,
  minY: 0.610,
  maxY: 0.759,
  soundIds: ["hoverSchauenburgRitter"],
  attackable: true
};

const brownArmyTargetRegion = {
  id: "brownArmy",
  minX: 0.491,
  maxX: 0.540,
  minY: 0.516,
  maxY: 0.668,
  soundIds: ["hoverBrownArmy1", "hoverBrownArmy2", "hoverBrownArmy3", "hoverBrownArmy4", "hoverBrownArmy5", "hoverBrownArmy6", "hoverBrownArmy7"],
  attackable: true
};

/* Die Kuh bleibt als einzige Hitbox exakt unverändert. */
const cowTargetRegion = {
  id: "lachersgutCow",
  minX: 0.438,
  maxX: 0.478,
  minY: 0.115,
  maxY: 0.175,
  soundIds: ["hoverCowSound"],
  attackable: true
};

const merchantTargetRegion = {
  id: "niccoloMerchant",
  minX: 0.004,
  maxX: 0.138,
  minY: 0.004,
  maxY: 0.156,
  soundIds: [],
  attackable: false
};

const mainMapHotspotRegions = [
  merchantTargetRegion,
  neuensteinTroopSelectionTargetRegion,
  troopSelectionTargetRegion,
  kastelbergTargetRegion,
  ringelnatzEstateTargetRegion,
  schauenburgKnightTargetRegion,
  schauenburgBannerTargetRegion,
  schauenburgCastleTargetRegion,
  schauenburgSouthKnightTargetRegion,
  brownArmyTargetRegion,
  cowTargetRegion
];



const DARK_TRIAD_BOOK_RESPONSES = {
  left: {
    image: "assets/dunkle-triade-ringelnatz-links.png?v=89",
    text: "„Der Einfall ist vollendet. Allein, es fehlen noch die rechten Bekanntschaften. Ein wahrhaft hinterfotziger Plan gedeiht selten ohne die passenden... Geschäftspartner.“",
    sound: darkTriadBookSidesSound
  },
  middle: {
    image: "assets/dunkle-triade-ringelnatz-mitte.png?v=89",
    text: "„Ein Plan von solcher Hinterfotzigkeit ist selten zu schauen. Seid unbesorgt: Er kostet keinerlei Ehre... denn ehrenloser könnte er kaum sein.“",
    sound: darkTriadBookMiddleSound
  },
  right: {
    image: "assets/dunkle-triade-ringelnatz-rechts.png?v=89",
    text: "„Ein Meisterwerk! Allein, wir kennen noch nicht genügend zwielichtige Leute. Selbst die größte Hinterfotzigkeit bedarf bisweilen der richtigen Kontakte.“",
    sound: darkTriadBookSidesSound
  }
};

let activeDarkTriadBook = null;

function stopDarkTriadBookSounds() {
  [darkTriadBookMiddleSound, darkTriadBookSidesSound].forEach((sound) => {
    if (!sound) return;
    sound.pause();
    sound.currentTime = 0;
  });
}

function hideDarkTriadBookResponse() {
  activeDarkTriadBook = null;
  stopDarkTriadBookSounds();

  if (darkTriadResponse) {
    darkTriadResponse.classList.remove("is-visible");
    darkTriadResponse.setAttribute("aria-hidden", "true");
    darkTriadResponse.removeAttribute("data-active-book");
  }
}

function showDarkTriadBookResponse(bookKey) {
  const response = DARK_TRIAD_BOOK_RESPONSES[bookKey];

  if (
    !response ||
    !darkTriadModalOpen ||
    !darkTriadResponse ||
    !darkTriadResponseCharacter ||
    !darkTriadResponseText
  ) {
    return;
  }

  activeDarkTriadBook = bookKey;
  stopDarkTriadBookSounds();

  darkTriadResponseCharacter.src = response.image;
  darkTriadResponseText.textContent = response.text;
  darkTriadResponse.dataset.activeBook = bookKey;
  darkTriadResponse.classList.add("is-visible");
  darkTriadResponse.setAttribute("aria-hidden", "false");

  if (response.sound) {
    response.sound.currentTime = 0;
    response.sound.play().catch(() => {});
  }
}

function closeMapLocationModals() {
  hideDarkTriadBookResponse();

  lachersgutModalOpen = false;
  meierhofModalOpen = false;
  kastelbergOverviewModalOpen = false;
  schauenburgKnightModalOpen = false;
  brownArmyModalOpen = false;
  darkTriadModalOpen = false;

  const locationModals = [
    lachersgutModal,
    meierhofModal,
    kastelbergOverviewModal,
    schauenburgKnightModal,
    brownArmyModal,
    darkTriadModal
  ];

  locationModals.forEach((modal) => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
}

function canOpenMainMapLocation() {
  return !(
    barracksOpen ||
    barracksClosing ||
    diplomacyOpen ||
    diplomacyClosing ||
    feudConfirmationOpen ||
    feudSequenceInProgress ||
    battleScreenOpen ||
    yearChangeInProgress
  );
}

function openExclusiveLocationModal(modal, stateName) {
  pauseMainMapHoverFeedback();
  if (!canOpenMainMapLocation()) return;

  closeTroopSelection();
  closeNeuensteinTroopSelection();
  closeMapLocationModals();

  if (stateName === "lachersgut") lachersgutModalOpen = true;
  if (stateName === "meierhof") meierhofModalOpen = true;
  if (stateName === "kastelberg") kastelbergOverviewModalOpen = true;
  if (stateName === "schauenburg") schauenburgKnightModalOpen = true;
  if (stateName === "brownArmy") brownArmyModalOpen = true;
  if (stateName === "darkTriad") darkTriadModalOpen = true;

  modal?.classList.add("is-open");
  modal?.setAttribute("aria-hidden", "false");
}

function openLachersgutModal() {
  openExclusiveLocationModal(lachersgutModal, "lachersgut");
}

function openMeierhofModal() {
  openExclusiveLocationModal(meierhofModal, "meierhof");
}

function openKastelbergOverviewModal() {
  openExclusiveLocationModal(kastelbergOverviewModal, "kastelberg");
}

function openSchauenburgKnightModal() {
  openExclusiveLocationModal(schauenburgKnightModal, "schauenburg");
}

function openBrownArmyModal() {
  openExclusiveLocationModal(brownArmyModal, "brownArmy");
}

function openDarkTriadModal() {
  politicalMapRequested = false;
  resetPoliticalMapTransitionToNormal();
  openExclusiveLocationModal(darkTriadModal, "darkTriad");
}

function openTroopSelection() {
  pauseMainMapHoverFeedback();
  closeMapLocationModals();
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
  // V61: Klickfenster bleiben bis zum Rechtsklick geöffnet.
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
  pauseMainMapHoverFeedback();
  closeMapLocationModals();

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
  // V61: Klickfenster bleiben bis zum Rechtsklick geöffnet.
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

let activeMainMapHotspot = null;
let pendingFeudTarget = "kastelberg";
let merchantHasBeenHovered = false;

function findMainMapHotspot(position) {
  return mainMapHotspotRegions.find((region) =>
    isInsideRegion(position, region)
  ) || null;
}

const hoverShufflePools = new Map();

function shuffleAudioIds(soundIds) {
  const shuffled = [...soundIds];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] =
      [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function getNextShuffledHoverAudio(poolKey, soundIds) {
  let pool = hoverShufflePools.get(poolKey);

  if (!Array.isArray(pool) || pool.length === 0) {
    pool = shuffleAudioIds(soundIds);
  }

  const audioId = pool.shift();
  hoverShufflePools.set(poolKey, pool);

  return audioId;
}

function playLogoHoverSound(soundIds) {
  if (!Array.isArray(soundIds) || soundIds.length === 0) {
    return;
  }

  const audioId =
    soundIds[Math.floor(Math.random() * soundIds.length)];
  const audio = document.querySelector(`#${audioId}`);

  if (!audio) {
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  audio.volume = 0.62;
  audio.play().catch(() => {});
}

function playRandomHoverAudio(soundIds, poolKey = null) {
  if (!Array.isArray(soundIds) || soundIds.length === 0) {
    return;
  }

  const audioId = poolKey
    ? getNextShuffledHoverAudio(poolKey, soundIds)
    : soundIds[Math.floor(Math.random() * soundIds.length)];

  const audio = document.querySelector(`#${audioId}`);

  if (!audio) {
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  audio.volume = 0.62;
  audio.play().catch(() => {});
}

function playMerchantHoverSound() {
  if (!hoverMerchantSound) {
    return;
  }

  if (!hoverMerchantSound.paused && !hoverMerchantSound.ended) {
    return;
  }

  hoverMerchantSound.currentTime = 0;
  hoverMerchantSound.volume = 0.62;
  hoverMerchantSound.play().catch(() => {});
}

function revealMerchantKey() {
  if (merchantHasBeenHovered) {
    return;
  }

  merchantHasBeenHovered = true;
  mapMerchantKey?.classList.add("is-visible");
}

function triggerMerchantKeySound() {
  if (!merchantHasBeenHovered || !mapScreen.classList.contains("is-active")) {
    return;
  }

  if (
    battleScreenOpen ||
    barracksOpen ||
    barracksClosing ||
    diplomacyOpen ||
    diplomacyClosing ||
    feudConfirmationOpen ||
    feudSequenceInProgress ||
    yearChangeInProgress ||
    isAnyMainMapPanelOpen()
  ) {
    return;
  }

  if (hoverMerchantSound) {
    hoverMerchantSound.pause();
    hoverMerchantSound.currentTime = 0;
  }

  if (!merchantKeySound) {
    return;
  }

  merchantKeySound.pause();
  merchantKeySound.currentTime = 0;
  merchantKeySound.volume = 0.68;
  merchantKeySound.play().catch(() => {});
}

function showMapHotspotHighlight(region) {
  if (!mapHotspotHighlight || !region) {
    return;
  }

  mapHotspotHighlight.style.left =
    `${region.minX * 100}%`;
  mapHotspotHighlight.style.top =
    `${region.minY * 100}%`;
  mapHotspotHighlight.style.width =
    `${(region.maxX - region.minX) * 100}%`;
  mapHotspotHighlight.style.height =
    `${(region.maxY - region.minY) * 100}%`;

  mapHotspotHighlight.classList.add("is-visible");
}

function hideMapHotspotHighlight() {
  mapHotspotHighlight?.classList.remove("is-visible");
}

function closeAllMainMapPanels() {
  closeTroopSelection();
  closeNeuensteinTroopSelection();
  closeMapLocationModals();
}


function isAnyMainMapPanelOpen() {
  return (
    troopSelectionOpen ||
    neuensteinTroopSelectionOpen ||
    lachersgutModalOpen ||
    meierhofModalOpen ||
    kastelbergOverviewModalOpen ||
    schauenburgKnightModalOpen ||
    brownArmyModalOpen ||
    darkTriadModalOpen
  );
}


function pauseMainMapHoverFeedback() {
  activeMainMapHotspot = null;
  activeSoundRegion = null;

  hideMapHotspotHighlight();
  feudHoverIcon.classList.remove("is-visible");
  mapViewport.classList.remove("is-hotspot-hovered");
  mapViewport.style.cursor = "default";
}

function closeMainMapViewFromUserInput(event) {
  if (!isAnyMainMapPanelOpen()) {
    return false;
  }

  event?.preventDefault?.();
  event?.stopPropagation?.();

  closeAllMainMapPanels();
  hideMapHotspotHighlight();
  feudHoverIcon.classList.remove("is-visible");
  mapViewport.classList.remove("is-hotspot-hovered");
  mapViewport.style.cursor = "default";

  return true;
}

function startCampaignScribeAnimation() {
  if (!campaignScribeBlink) {
    return;
  }

  window.setInterval(() => {
    campaignScribeBlink.classList.add("is-visible");

    window.setTimeout(() => {
      campaignScribeBlink.classList.remove("is-visible");
    }, 2000);
  }, 20000);
}

startCampaignScribeAnimation();

campaignFireflyLogo?.addEventListener("mouseenter", () => {
  playLogoHoverSound(fireflyHoverSoundIds);
});

campaignMurksLogo?.addEventListener("mouseenter", () => {
  playLogoHoverSound(murksHoverSoundIds);
});

mapScreen.addEventListener("contextmenu", (event) => {
  closeMainMapViewFromUserInput(event);
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "1" || event.repeat) {
    return;
  }

  triggerMerchantKeySound();
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  closeMainMapViewFromUserInput(event);
});

neuensteinPanelFeudButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  pendingFeudTarget = "neuenstein";
  closeAllMainMapPanels();
  openFeudConfirmation();
});

lachersgutPanelFeudButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  pendingFeudTarget = "lachersgut";
  closeAllMainMapPanels();
  openFeudConfirmation();
});

kastelbergPanelFeudButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  pendingFeudTarget = "kastelberg";
  closeAllMainMapPanels();
  openFeudConfirmation();
});

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
  if (isAnyMainMapPanelOpen()) {
    pauseMainMapHoverFeedback();
    return;
  }

  if (
    barracksOpen ||
    barracksClosing ||
    feudConfirmationOpen ||
    feudSequenceInProgress ||
    battleScreenOpen ||
    yearChangeInProgress
  ) {
    activeMainMapHotspot = null;
    activeSoundRegion = null;
    hideMapHotspotHighlight();
    feudHoverIcon.classList.remove("is-visible");
    mapViewport.classList.remove("is-hotspot-hovered");
    mapViewport.style.cursor = "default";
    return;
  }

  const position = getNormalizedMapPosition(event);

  if (!position) {
    activeMainMapHotspot = null;
    hideMapHotspotHighlight();
    feudHoverIcon.classList.remove("is-visible");
    mapViewport.classList.remove("is-hotspot-hovered");
    mapViewport.style.cursor = "default";
    return;
  }

  const hotspot = findMainMapHotspot(position);
  const hotspotId = hotspot?.id || null;
  const utilityRegion = findSoundRegion(position.x, position.y);
  const utilityRegionId = utilityRegion?.id || null;

  if (hotspot) {
    showMapHotspotHighlight(hotspot);
    mapViewport.classList.add("is-hotspot-hovered");
    mapViewport.style.cursor = "";

    if (hotspotId !== activeMainMapHotspot) {
      activeMainMapHotspot = hotspotId;

      if (hotspot.id === "niccoloMerchant") {
        revealMerchantKey();
        playMerchantHoverSound();
      } else {
        playRandomHoverAudio(
          hotspot.soundIds,
          hotspot.id === "brownArmy" ? "brownArmy" : null
        );
      }
    }

    /* V65: Fehde-Schwerter erscheinen nur noch innerhalb der Übersicht. */
    feudHoverIcon.classList.remove("is-visible");
  } else {
    activeMainMapHotspot = null;
    hideMapHotspotHighlight();
    feudHoverIcon.classList.remove("is-visible");
    mapViewport.classList.remove("is-hotspot-hovered");

    mapViewport.style.cursor =
      utilityRegion ? "pointer" : "default";
  }

  if (utilityRegionId !== activeSoundRegion) {
    activeSoundRegion = utilityRegionId;

    if (utilityRegion && !hotspot) {
      playHoverSound(utilityRegion.audioId);
    }
  }
});

mapViewport.addEventListener("pointerleave", () => {
  activeMainMapHotspot = null;
  activeSoundRegion = null;
  hideMapHotspotHighlight();
  feudHoverIcon.classList.remove("is-visible");
  mapViewport.classList.remove("is-hotspot-hovered");
  mapViewport.style.cursor = "default";
});

/* V90: vollständig geskriptetes Banditenereignis beim Wechsel auf 1431. */
let campaignEventInProgress = false;
let banditEventCompleted = false;

const wait = (milliseconds) =>
  new Promise((resolve) => window.setTimeout(resolve, milliseconds));

function safePlay(audio) {
  if (!audio) {
    return Promise.resolve();
  }

  audio.pause();
  audio.currentTime = 0;

  const playResult = audio.play();
  if (playResult && typeof playResult.catch === "function") {
    playResult.catch(() => {});
  }

  return new Promise((resolve) => {
    let resolved = false;

    const finish = () => {
      if (resolved) return;
      resolved = true;
      audio.removeEventListener("ended", finish);
      audio.removeEventListener("error", finish);
      resolve();
    };

    audio.addEventListener("ended", finish, { once: true });
    audio.addEventListener("error", finish, { once: true });

    const fallbackDuration =
      Number.isFinite(audio.duration) && audio.duration > 0
        ? (audio.duration * 1000) + 450
        : 6500;

    window.setTimeout(finish, fallbackDuration);
  });
}

function stopBanditEventSounds() {
  [banditEventOpeningSound, banditEventRr5Sound, banditEventRr4Sound].forEach(
    (audio) => {
      if (!audio) return;
      audio.pause();
      audio.currentTime = 0;
    }
  );
}

function resetBanditEventVisuals() {
  banditEventRr5?.classList.remove("is-visible");
  banditEventGeneralGroup?.classList.remove("is-visible");
  banditEventBanditLine?.classList.remove("is-visible");
  banditEventRr4?.classList.remove("is-visible");
  banditEventStartButton?.classList.remove("is-visible");

  banditEventGeneralGroup?.setAttribute("aria-hidden", "true");
  banditEventBanditLine?.setAttribute("aria-hidden", "true");
}

async function runRoundIrisTransition(nextYear) {
  if (!roundTransitionIris) {
    gameState.year = nextYear;
    updateYearDisplay();
    mapState.zoom = 1;
    initializeMap();
    await wait(600);
    return;
  }

  roundTransitionIris.classList.add("is-active");
  roundTransitionIris.classList.remove("is-closed");

  await new Promise((resolve) => requestAnimationFrame(resolve));
  await new Promise((resolve) => requestAnimationFrame(resolve));

  roundTransitionIris.classList.add("is-closed");
  await wait(300);

  gameState.year = nextYear;
  updateYearDisplay();

  mapState.zoom = 1;
  initializeMap();

  await wait(30);
  roundTransitionIris.classList.remove("is-closed");
  await wait(300);

  roundTransitionIris.classList.remove("is-active");
}

async function runBanditEvent1431() {
  if (
    campaignEventInProgress ||
    banditEventCompleted ||
    !banditEventModal
  ) {
    return;
  }

  campaignEventInProgress = true;
  yearChangeInProgress = true;
  document.body.classList.add("is-campaign-event-locked");
  resetBanditEventVisuals();
  stopBanditEventSounds();

  await runRoundIrisTransition(1431);
  await wait(400);

  banditEventModal.classList.add("is-open", "is-cinematic");
  banditEventModal.setAttribute("aria-hidden", "false");
  await wait(500);

  await safePlay(banditEventOpeningSound);
  await wait(180);

  banditEventRr5?.classList.add("is-visible");
  await wait(380);
  await safePlay(banditEventRr5Sound);
  banditEventRr5?.classList.remove("is-visible");
  await wait(420);

  banditEventGeneralGroup?.classList.add("is-visible");
  banditEventGeneralGroup?.setAttribute("aria-hidden", "false");
  await wait(12000);
  banditEventGeneralGroup?.classList.remove("is-visible");
  banditEventGeneralGroup?.setAttribute("aria-hidden", "true");
  await wait(450);

  banditEventBanditLine?.classList.add("is-visible");
  banditEventBanditLine?.setAttribute("aria-hidden", "false");
  await wait(2500);
  banditEventBanditLine?.classList.remove("is-visible");
  banditEventBanditLine?.setAttribute("aria-hidden", "true");
  await wait(380);

  banditEventRr4?.classList.add("is-visible");
  await wait(380);
  await safePlay(banditEventRr4Sound);
  banditEventRr4?.classList.remove("is-visible");
  await wait(460);

  banditEventStartButton?.classList.add("is-visible");
  banditEventModal.classList.remove("is-cinematic");

  banditEventCompleted = true;
  campaignEventInProgress = false;
  yearChangeInProgress = false;
  document.body.classList.remove("is-campaign-event-locked");
}

function isCampaignEventInputAllowed(target) {
  return (
    banditEventCompleted &&
    banditEventModal?.classList.contains("is-open") &&
    Boolean(target?.closest?.("#banditEventStartButton"))
  );
}

window.addEventListener(
  "keydown",
  (event) => {
    if (campaignEventInProgress) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  },
  true
);

window.addEventListener(
  "wheel",
  (event) => {
    if (campaignEventInProgress) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  },
  { capture: true, passive: false }
);

window.addEventListener(
  "pointerdown",
  (event) => {
    if (
      campaignEventInProgress &&
      !isCampaignEventInputAllowed(event.target)
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  },
  true
);

banditEventStartButton?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  startMeierhofBattle();
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

  if (
    yearChangeInProgress ||
    campaignEventInProgress ||
    banditEventModal?.classList.contains("is-open")
  ) {
    return;
  }

  if (gameState.year === 1430 && !banditEventCompleted) {
    runBanditEvent1431();
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

  const hotspot = findMainMapHotspot(position);

  if (hotspot) {
    closeAllMainMapPanels();

    switch (hotspot.id) {
      case "niccoloMerchant":
        return;

      case "neuensteinTroops":
        openNeuensteinTroopSelection();
        return;

      case "ringelnatzTroops":
        openTroopSelection();
        return;

      case "ringelnatzEstate":
        openMeierhofModal();
        return;

      case "lachersgutCow":
        openLachersgutModal();
        return;

      case "kastelberg":
        openKastelbergOverviewModal();
        return;

      case "schauenburgKnight":
      case "schauenburgBanner":
      case "schauenburgCastle":
      case "schauenburgSouthKnight":
        openSchauenburgKnightModal();
        return;

      case "brownArmy":
        openBrownArmyModal();
        return;
    }
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
  }
});

updateYearDisplay();


/* V20: Kasernenansicht öffnen und schließen. */
function openBarracks() {
  closeMapLocationModals();
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
  closeMapLocationModals();
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
    visualOffsetY: 10,
    attackScale: 1.08,
    attackOffsetX: 5,
    attackOffsetY: 10
  },
  cavalry: {
    type: "cavalry",
    armorClass: "medium",
    idleSrc: "assets/ringelnatz-marsch-lanzenreiter.png?v=28",
    attackSrc: null,
    width: 9.2,
    height: 25,
    duration: 4400,
    switchesPoseOnCollision: false,
    visualOffsetY: 10
  },
  crossbow: {
    type: "crossbow",
    armorClass: "medium",
    idleSrc: "assets/ringelnatz-marsch-armbrustschuetze.png?v=28",
    attackSrc: "assets/ringelnatz-angriff-armbrustschuetze.png?v=31",
    reloadSrc: "assets/ringelnatz-armbrustschuetze-nachladen.png?v=51",
    deathSrc: "assets/ringelnatz-armbrustschuetze-tot.png?v=51",
    width: 6.4,
    height: 20,
    duration: 2000,
    shortMove: true,
    rangedUnit: true,
    visualOffsetY: 10,
    attackScale: 1,
    attackOffsetX: 0,
    attackOffsetY: 10,
    reloadOffsetY: 10,
    deathOffsetY: 10
  },
  builder: {
    type: "builder",
    armorClass: "light",
    idleSrc: "assets/ringelnatz-marsch-baumeister.png?v=28",
    attackSrc: null,
    width: 6.2,
    height: 22,
    duration: 13000,
    switchesPoseOnCollision: false,
    visualOffsetY: 10
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
    visualOffsetY: 10,
    attackScale: 1.24,
    attackOffsetX: 4,
    attackOffsetY: 10
  },
  mercenary: {
    type: "mercenary",
    armorClass: "heavy",
    idleSrc: "assets/ringelnatz-marsch-soeldner.png?v=28",
    attackSrc: null,
    width: 6.0,
    height: 20,
    duration: 16000,
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



const MELEE_HIT_SOUNDS = [
  "assets/melee-hit-01.mp3?v=47",
  "assets/melee-hit-02.mp3?v=47",
  "assets/melee-hit-03.mp3?v=47",
  "assets/melee-hit-04.mp3?v=47",
  "assets/melee-hit-05.mp3?v=47"
];


const ARCHER_MISS_SOUND =
  "assets/archer-miss.mp3?v=48";

const ARCHER_HIT_SOUNDS = [
  "assets/archer-hit-01.mp3?v=48",
  "assets/archer-hit-02.mp3?v=48"
];

function playArcherMissSound() {
  playRandomBattleSound([
    ARCHER_MISS_SOUND
  ]);
}

const RANGED_HIT_SOUNDS = [
  "assets/ranged-hit-01.mp3?v=47",
  "assets/ranged-hit-02.mp3?v=47"
];

function playHitSound(attacker) {
  const attackerType =
    attacker?.type ||
    attacker?.definition?.type;

  if (!attackerType) {
    return;
  }

  if (attackerType === "archer") {
    playRandomBattleSound(
      ARCHER_HIT_SOUNDS
    );
    return;
  }

  if (attackerType === "crossbow") {
    playRandomBattleSound(
      ARCHER_HIT_SOUNDS
    );
    return;
  }

  playRandomBattleSound(
    MELEE_HIT_SOUNDS
  );
}

function preloadHitSounds() {
  [
    ...MELEE_HIT_SOUNDS,
    ...RANGED_HIT_SOUNDS,
    ...ARCHER_HIT_SOUNDS,
    ARCHER_MISS_SOUND
  ].forEach((src) => {
    const sound = new Audio();
    sound.preload = "auto";
    sound.src = src;
  });
}

preloadHitSounds();

const SPEAR_KILL_SOUNDS = [
  "assets/spear-death-01.mp3?v=46",
  "assets/spear-death-02.mp3?v=46"
];

const SWORD_KILL_SOUNDS = [
  "assets/sword-death-01.mp3?v=46",
  "assets/sword-death-02.mp3?v=46",
  "assets/sword-death-03.mp3?v=46",
  "assets/sword-death-04.mp3?v=46"
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
   * 1. Stirbt Ringelnatz' Lanzenreiter, erklingt immer Pferdetod.
   * 2. Kill durch Neuenstein-Flegel oder Ringelnatz-Baumeister:
   *    einer der beiden Wuchtwaffen-Sounds.
   * 3. Kill durch Ringelnatz-Speerträger, Ringelnatz-Lanzenreiter
   *    oder Neuenstein-Hellebardier:
   *    einer der beiden Speer-Todessounds.
   * 4. Kill durch Neuenstein-Schwertkämpfer, Ringelnatz-Söldner
   *    oder Ringelnatz-Assassine:
   *    einer der vier Schwert-Todessounds.
   * 5. Kill durch Bogen oder Armbrust:
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
    attackerType === "spearman" ||
    attackerType === "cavalry" ||
    attackerType === "halberdier"
  ) {
    playRandomBattleSound(SPEAR_KILL_SOUNDS);
    return;
  }

  if (
    attackerType === "swordsman" ||
    attackerType === "mercenary" ||
    attackerType === "assassin"
  ) {
    playRandomBattleSound(SWORD_KILL_SOUNDS);
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
    ...HORSE_DEATH_SOUNDS,
    ...SPEAR_KILL_SOUNDS,
    ...SWORD_KILL_SOUNDS
  ].forEach((src) => {
    const sound = new Audio();
    sound.preload = "auto";
    sound.src = src;
  });
}

preloadKillSounds();


const SIEGE_CROSSBOW_SLOTS = [
  {
    route: [
      { x: 27.0, y: 99.0 },
      { x: 27.5, y: 75.0 }
    ]
  },
  {
    route: [
      { x: 28.0, y: 99.0 },
      { x: 36.2, y: 73.6 }
    ]
  },
  {
    route: [
      { x: 71.0, y: 99.0 },
      { x: 73.5, y: 80.4 }
    ]
  }
];

const SIEGE_BUILDER_ROUTE = {
  startX: 100,
  startY: 91,
  targetX: 88.6,
  targetY: 64.5
};

function clearSiegeSequenceTimers() {
  siegeSequenceTimers.forEach((timer) => {
    window.clearTimeout(timer);
  });
  siegeSequenceTimers = [];
}

function waitForSiegeDelay(milliseconds) {
  return new Promise((resolve) => {
    const timer = window.setTimeout(resolve, milliseconds);
    siegeSequenceTimers.push(timer);
  });
}

function getSiegeDefenderSound(defender) {
  const defenderType = defender?.dataset.siegeDefender;

  if (defenderType === "shield") {
    return {
      audio: siegeShieldKnightAppearSound,
      volume: 0.76
    };
  }

  if (defenderType === "swordsman") {
    return {
      audio: swordsmanAppearSound,
      volume: 0.70
    };
  }

  return {
    audio: archerAppearSound,
    volume: 0.70
  };
}

function playSiegeSequenceSoundToEnd(audio, volume = 0.72) {
  return new Promise((resolve) => {
    if (!audio) {
      resolve();
      return;
    }

    let finished = false;
    let fallbackTimer = 0;

    const finish = () => {
      if (finished) {
        return;
      }

      finished = true;
      audio.removeEventListener("ended", finish);
      audio.removeEventListener("error", finish);

      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }

      resolve();
    };

    const startPlayback = () => {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = volume;
      audio.addEventListener("ended", finish, { once: true });
      audio.addEventListener("error", finish, { once: true });

      const knownDuration =
        Number.isFinite(audio.duration) && audio.duration > 0
          ? audio.duration
          : 8;

      fallbackTimer = window.setTimeout(
        finish,
        Math.ceil(knownDuration * 1000) + 500
      );

      const result = audio.play();

      if (result && typeof result.catch === "function") {
        result.catch(finish);
      }
    };

    if (
      audio.readyState >= HTMLMediaElement.HAVE_METADATA &&
      Number.isFinite(audio.duration)
    ) {
      startPlayback();
      return;
    }

    const metadataFallback = window.setTimeout(startPlayback, 1200);

    audio.addEventListener(
      "loadedmetadata",
      () => {
        window.clearTimeout(metadataFallback);
        startPlayback();
      },
      { once: true }
    );

    audio.load();
  });
}

function resetKastelbergSiegeSystem() {
  clearSiegeSequenceTimers();
  kastelbergPhase = KASTELBERG_PHASES.FIELD_BATTLE;
  siegeTransitionStarted = false;
  siegePlacementBusy = false;
  siegeCrossbowSlotsFilled = 0;
  siegeBuildersAssigned = 0;

  if (siegeBuilderCount) {
    siegeBuilderCount.textContent = "×2";
  }

  if (siegePreparationUnitLayer) {
    siegePreparationUnitLayer.replaceChildren();
  }

  if (kastelbergSiegeDefenders) {
    kastelbergSiegeDefenders
      .querySelectorAll(".siege-defender")
      .forEach((defender) => {
        defender.classList.remove("is-visible");
      });
  }

  ringelnatzUnits.forEach((unit) => {
    unit.classList.remove("is-visible");
  });
  unitKeyElements.forEach((key) => {
    key.classList.remove("is-visible");
  });

  kastelbergSiegeLayer?.classList.remove(
    "is-visible",
    "is-preparation-ready"
  );
  kastelbergSiegeLayer?.setAttribute("aria-hidden", "true");
  siegeTransitionOverlay?.classList.remove("is-visible");
  battleStage?.classList.remove("is-siege-phase");

  if (battleScreenImage) {
    battleScreenImage.classList.remove("is-part-one-hidden");
  }
}

function hidePartOneForSiege() {
  stopCastleArcher();
  stopNeuensteinProduction();
  clearBattleCountdown();
  resetMarchingUnits();
  resetNeuensteinBattleSystem();

  [
    battleArcherOne,
    battleSwordsman,
    battleArcherTwo
  ].forEach((unit) => {
    unit?.classList.remove("is-visible");
  });

  ringelnatzTentTarget?.classList.add("is-siege-hidden");
  neuensteinTentTarget?.classList.add("is-siege-hidden");
  battleStage?.classList.add("is-siege-phase");
}

async function revealSiegeDefender(defender) {
  if (!defender || !battleScreenOpen) {
    return false;
  }

  defender.classList.add("is-visible");

  const sound = getSiegeDefenderSound(defender);
  await playSiegeSequenceSoundToEnd(
    sound.audio,
    sound.volume
  );

  if (
    !battleScreenOpen ||
    kastelbergPhase !==
      KASTELBERG_PHASES.SIEGE_DEFENDERS_INTRO
  ) {
    return false;
  }

  await waitForSiegeDelay(200);
  return true;
}

function startSiegeRingelnatzUiSequence() {
  kastelbergPhase =
    KASTELBERG_PHASES.SIEGE_RINGELNATZ_UI_INTRO;

  resetRingelnatzUnits();

  ringelnatzUnits.forEach((unit, index) => {
    siegeSequenceTimers.push(
      window.setTimeout(() => {
        if (
          !battleScreenOpen ||
          kastelbergPhase !==
            KASTELBERG_PHASES.SIEGE_RINGELNATZ_UI_INTRO
        ) {
          return;
        }

        unit.classList.add("is-visible");
        syncUnitKeysWithSelectionUnits();
      }, index * 220)
    );
  });

  siegeSequenceTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        return;
      }

      kastelbergPhase =
        KASTELBERG_PHASES.SIEGE_PREPARATION;
      kastelbergSiegeLayer?.classList.add(
        "is-preparation-ready"
      );
    }, ringelnatzUnits.length * 220 + 350)
  );
}

async function startSiegeDefenderSequence() {
  kastelbergPhase =
    KASTELBERG_PHASES.SIEGE_DEFENDERS_INTRO;

  const defenders = Array.from(
    kastelbergSiegeDefenders?.querySelectorAll(
      ".siege-defender"
    ) || []
  );

  for (const defender of defenders) {
    if (
      !battleScreenOpen ||
      kastelbergPhase !==
        KASTELBERG_PHASES.SIEGE_DEFENDERS_INTRO
    ) {
      return;
    }

    const completed =
      await revealSiegeDefender(defender);

    if (!completed) {
      return;
    }
  }

  if (
    battleScreenOpen &&
    kastelbergPhase ===
      KASTELBERG_PHASES.SIEGE_DEFENDERS_INTRO
  ) {
    startSiegeRingelnatzUiSequence();
  }
}

function startKastelbergSiegeTransition() {
  if (
    siegeTransitionStarted ||
    !battleScreenOpen
  ) {
    return;
  }

  siegeTransitionStarted = true;
  kastelbergPhase =
    KASTELBERG_PHASES.TRANSITION_TO_SIEGE;
  ringelnatzProductionUnlocked = false;
  hidePartOneForSiege();

  siegeTransitionOverlay?.classList.add("is-visible");

  siegeSequenceTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        return;
      }

      battleScreenImage?.classList.add("is-part-one-hidden");
      kastelbergSiegeLayer?.classList.add("is-visible");
      kastelbergSiegeLayer?.setAttribute(
        "aria-hidden",
        "false"
      );
    }, 700)
  );

  siegeSequenceTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        return;
      }

      siegeTransitionOverlay?.classList.remove("is-visible");
    }, 1150)
  );

  siegeSequenceTimers.push(
    window.setTimeout(() => {
      if (battleScreenOpen) {
        startSiegeDefenderSequence();
      }
    }, 1650)
  );
}

function moveSiegePreparationUnitToPoint(
  wrapper,
  fromPoint,
  targetPoint
) {
  return new Promise((resolve) => {
    const dx = targetPoint.x - fromPoint.x;
    const dy = targetPoint.y - fromPoint.y;
    const distance = Math.hypot(dx, dy);
    const duration = Math.max(850, distance * 58);

    wrapper.style.transitionDuration = `${duration}ms`;
    wrapper.style.left = `${targetPoint.x}%`;
    wrapper.style.top = `${targetPoint.y}%`;

    const timer = window.setTimeout(
      resolve,
      duration + 80
    );
    siegeSequenceTimers.push(timer);
  });
}

function createSiegePreparationUnit(type, route, onArrive) {
  if (
    !siegePreparationUnitLayer ||
    !battleScreenOpen ||
    !Array.isArray(route) ||
    route.length < 2
  ) {
    siegePlacementBusy = false;
    return;
  }

  const definition = marchUnitDefinitions[type];
  if (!definition) {
    siegePlacementBusy = false;
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className =
    "siege-preparation-unit " +
    `siege-preparation-unit--${type}`;

  const firstPoint = route[0];
  wrapper.style.left = `${firstPoint.x}%`;
  wrapper.style.top = `${firstPoint.y}%`;
  wrapper.style.width = `${definition.width}%`;
  wrapper.style.height = `${definition.height}%`;

  const image = document.createElement("img");
  image.src = definition.idleSrc;
  image.alt = "";
  image.draggable = false;
  image.style.transform =
    `translateX(-50%) translateY(${definition.visualOffsetY || 0}px)`;
  wrapper.appendChild(image);
  siegePreparationUnitLayer.appendChild(wrapper);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(async () => {
      wrapper.classList.add("is-visible");
      await waitForSiegeDelay(60);

      let previousPoint = firstPoint;

      for (const targetPoint of route.slice(1)) {
        if (
          !battleScreenOpen ||
          kastelbergPhase !==
            KASTELBERG_PHASES.SIEGE_PREPARATION
        ) {
          wrapper.remove();
          siegePlacementBusy = false;
          return;
        }

        await moveSiegePreparationUnitToPoint(
          wrapper,
          previousPoint,
          targetPoint
        );
        previousPoint = targetPoint;
      }

      if (typeof onArrive === "function") {
        onArrive(wrapper);
      }

      siegePlacementBusy = false;
    });
  });
}

function deployNextSiegeCrossbow() {
  if (
    kastelbergPhase !==
      KASTELBERG_PHASES.SIEGE_PREPARATION ||
    siegePlacementBusy ||
    siegeCrossbowSlotsFilled >=
      SIEGE_CROSSBOW_SLOTS.length
  ) {
    return;
  }

  const slot =
    SIEGE_CROSSBOW_SLOTS[siegeCrossbowSlotsFilled];

  siegePlacementBusy = true;
  playUnitProductionSound("crossbow");

  createSiegePreparationUnit(
    "crossbow",
    slot.route,
    (wrapper) => {
      wrapper.classList.add("is-parked");
      siegeCrossbowSlotsFilled += 1;

      const slotElement =
        siegeStructureUi?.querySelector(
          `[data-siege-slot="${siegeCrossbowSlotsFilled - 1}"]`
        );
      slotElement?.classList.add("is-occupied");
    }
  );
}

function deployNextSiegeBuilder() {
  if (
    kastelbergPhase !==
      KASTELBERG_PHASES.SIEGE_PREPARATION ||
    siegePlacementBusy ||
    siegeBuildersAssigned >= 2
  ) {
    return;
  }

  siegePlacementBusy = true;
  playUnitProductionSound("builder");

  createSiegePreparationUnit(
    "builder",
    [
      {
        x: SIEGE_BUILDER_ROUTE.startX,
        y: SIEGE_BUILDER_ROUTE.startY
      },
      {
        x: SIEGE_BUILDER_ROUTE.targetX,
        y: SIEGE_BUILDER_ROUTE.targetY
      }
    ],
    (wrapper) => {
      wrapper.classList.add("is-dissolving");

      window.setTimeout(() => {
        wrapper.remove();
      }, 500);

      siegeBuildersAssigned += 1;
      const remaining =
        Math.max(0, 2 - siegeBuildersAssigned);

      if (siegeBuilderCount) {
        siegeBuilderCount.textContent =
          remaining > 0 ? `×${remaining}` : "✓";
      }
    }
  );
}

const TENT_DAMAGE_PER_HIT = 5;

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

    window.setTimeout(() => {
      if (battleScreenOpen) {
        startKastelbergSiegeTransition();
      }
    }, 650);
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

const castleArcher = {
  type: "archer",
  faction: "neuenstein",
  element: battleArcherTwo,
  x: 61.7,
  health: 1,
  isDead: false,
  cancelled: false,
  active: false,
  combatActive: false,
  combatTarget: null,
  attackTimer: null
};
const NEUENSTEIN_ARROW_FLIGHT_DURATION = 560;

const ASSASSIN_INSTANT_KILL_CHANCE = 0.30;
const CROSSBOW_HIT_CHANCE = 0.80;
const CROSSBOW_SHOT_POSE_DURATION = 1000;
const CROSSBOW_RELOAD_DURATION = 4000;
const CROSSBOW_BOLT_FLIGHT_DURATION = 520;
const ringelnatzCrossbowReloadSound =
  new Audio("assets/ringelnatz-armbrust-nachladen.mp3?v=51");
ringelnatzCrossbowReloadSound.preload = "auto";

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
  const resumeDurationMultiplier =
    instance.type === "mercenary"
      ? (1 / 0.70)
      : 1;

  instance.duration = Math.max(
    700,
    Math.abs(instance.targetX - instance.startX) *
      95 *
      resumeDurationMultiplier
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
  unit.element.classList.remove(
    "is-walking",
    "is-impacting",
    "is-hit"
  );

  const removeUnit = () => {
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
  };

  if (
    unit.type === "crossbow" &&
    unit.deathImage
  ) {
    setUnitPose(unit, "death");
    unit.element.classList.add(
      "is-crossbow-dead"
    );

    window.setTimeout(() => {
      unit.element.classList.add(
        "is-crossbow-dead-fading"
      );

      window.setTimeout(
        removeUnit,
        700
      );
    }, 5000);

    return;
  }

  unit.element.classList.add("is-defeated");
  window.setTimeout(removeUnit, 460);
}

function applyDamageToUnit(
  target,
  damageAmount,
  options = {}
) {
  if (target === castleArcher) {
    return false;
  }
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

    return true;
  }

  // Nur ein nicht tödlicher Treffer erhält einen Hit-Sound.
  // Der bestehende Kill-Sound bleibt beim Tod allein bestehen.
  playHitSound(attacker);

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
        instance.isDead ||
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

      // Exakt eine Sekunde Schussbild, ohne Kippen oder Schrägstellung.
      setUnitPose(instance, "attack");

      const hit =
        Math.random() <
        CROSSBOW_HIT_CHANCE;

      if (!hit) {
        playArcherMissSound();
      }

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
            instance.isDead ||
            !battleScreenOpen
          ) {
            return;
          }

          // Vier Sekunden sichtbare Nachladepose.
          setUnitPose(instance, "reload");
          ringelnatzCrossbowReloadSound.currentTime = 0;
          ringelnatzCrossbowReloadSound
            .play()
            .catch(() => {});

          instance.poseTimer =
            window.setTimeout(() => {
              instance.poseTimer = null;

              if (
                instance.cancelled ||
                instance.isDead ||
                !battleScreenOpen
              ) {
                return;
              }

              setUnitPose(instance, "idle");
              scheduleRingelnatzCrossbowCycle(
                instance,
                100
              );
            }, CROSSBOW_RELOAD_DURATION);
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
const BATTLE_LINE_TOP = "97.2%";
const NEUENSTEIN_BATTLE_LINE_TOP = BATTLE_LINE_TOP;
const RINGELNATZ_BATTLE_LINE_TOP = "calc(97.2% + 10px)";
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
    idleOffsetY: 22,
    attackOffsetX: -6,
    attackOffsetY: 22
  },
  halberdier: {
    type: "halberdier",
    armorClass: "heavy",
    idleSrc: "assets/neuenstein-hellebardier-idle.png?v=37",
    attackSrc: "assets/neuenstein-hellebardier-angriff.png?v=37",
    width: 7.15,
    height: 23.5,
    speed: 3.99,
    ranged: false,
    attackScale: 1.15,
    idleOffsetY: 34,
    attackOffsetX: -7,
    attackOffsetY: 34
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
    idleOffsetY: 24,
    attackOffsetX: -6,
    attackOffsetY: 24
  },
  swordsman: {
    type: "swordsman",
    armorClass: "heavy",
    idleSrc: "assets/neuenstein-schwertkaempfer-idle.png?v=37",
    attackSrc: "assets/neuenstein-schwertkaempfer-angriff.png?v=37",
    width: 6.4,
    height: 22.0,
    speed: 4.13,
    ranged: false,
    attackScale: 1.15,
    idleOffsetY: 24,
    attackOffsetX: -5,
    attackOffsetY: 38
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

function findCastleArcherTarget() {
  const livingTargets =
    getActiveRingelnatzTargets()
      .filter((entry) =>
        !entry.instance.cancelled &&
        !entry.instance.isDead &&
        entry.instance.health > 0
      )
      .sort((a, b) => b.x - a.x);

  if (livingTargets.length > 0) {
    return livingTargets[0];
  }

  return !ringelnatzTent.isDead
    ? {
        instance: ringelnatzTent,
        x: 7.5
      }
    : null;
}

function stopCastleArcher() {
  castleArcher.active = false;
  castleArcher.combatActive = false;
  castleArcher.combatTarget = null;

  if (castleArcher.attackTimer !== null) {
    window.clearTimeout(
      castleArcher.attackTimer
    );
    castleArcher.attackTimer = null;
  }

  if (battleArcherTwo) {
    battleArcherTwo.classList.remove(
      "is-castle-archer-attacking"
    );
  }
}

function scheduleCastleArcherCycle(delay = 250) {
  if (
    !castleArcher.active ||
    !battleScreenOpen
  ) {
    return;
  }

  castleArcher.attackTimer =
    window.setTimeout(() => {
      castleArcher.attackTimer = null;

      if (
        !castleArcher.active ||
        !battleScreenOpen
      ) {
        stopCastleArcher();
        return;
      }

      const target =
        findCastleArcherTarget();

      if (!target) {
        castleArcher.combatActive = false;
        castleArcher.combatTarget = null;
        scheduleCastleArcherCycle(500);
        return;
      }

      castleArcher.combatActive = true;
      castleArcher.combatTarget =
        target.instance;

      battleArcherTwo.classList.add(
        "is-castle-archer-attacking"
      );

      const hit =
        Math.random() <
        NEUENSTEIN_ARCHER_HIT_CHANCE;

      if (!hit) {
        playArcherMissSound();
      }

      launchNeuensteinArrow(
        castleArcher,
        target.instance,
        hit
      );

      castleArcher.attackTimer =
        window.setTimeout(() => {
          castleArcher.attackTimer = null;

          if (
            !castleArcher.active ||
            !battleScreenOpen
          ) {
            return;
          }

          battleArcherTwo.classList.remove(
            "is-castle-archer-attacking"
          );

          scheduleCastleArcherCycle(
            NEUENSTEIN_ARCHER_IDLE_DURATION
          );
        }, NEUENSTEIN_ARCHER_ATTACK_DURATION);
    }, delay);
}

function startCastleArcher() {
  stopCastleArcher();

  if (
    !battleScreenOpen ||
    !battleArcherTwo.classList.contains(
      "is-visible"
    )
  ) {
    return;
  }

  castleArcher.cancelled = false;
  castleArcher.isDead = false;
  castleArcher.health = 1;
  castleArcher.active = true;

  scheduleCastleArcherCycle(250);
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

    if (!hit) {
      playArcherMissSound();
    }

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
  idleImage.style.transform =
    `translateX(-50%) translateY(${definition.idleOffsetY || 0}px)`;
  wrapper.appendChild(idleImage);

  const attackImage = document.createElement("img");
  attackImage.className =
    "neuenstein-unit-pose neuenstein-unit-pose--attack";
  attackImage.src = definition.attackSrc;
  attackImage.alt = "";
  attackImage.draggable = false;
  attackImage.style.transform =
    `translateX(calc(-50% + ${definition.attackOffsetX || 0}px)) ` +
    `translateY(${definition.attackOffsetY || 0}px) ` +
    `scale(${definition.attackScale || 1})`;
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

  const collisionTolerance = 0.35;

  if (
    proposedX + collisionTolerance >=
    stopX
  ) {
    return {
      stopX: Math.min(
        stopX,
        proposedX
      ),
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
  const showReload =
    pose === "reload" &&
    Boolean(instance.reloadImage);
  const showDeath =
    pose === "death" &&
    Boolean(instance.deathImage);

  instance.attackPoseVisible = showAttack;

  instance.idleImage.classList.toggle(
    "is-active",
    !showAttack && !showReload && !showDeath
  );

  if (instance.attackImage) {
    instance.attackImage.classList.toggle(
      "is-active",
      showAttack
    );
  }

  if (instance.reloadImage) {
    instance.reloadImage.classList.toggle(
      "is-active",
      showReload
    );
  }

  if (instance.deathImage) {
    instance.deathImage.classList.toggle(
      "is-active",
      showDeath
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

  const nearbyEnemyBeforeTent =
    neuensteinUnits
      .filter((unit) =>
        !unit.cancelled &&
        !unit.isDead &&
        unit.health > 0 &&
        unit.x >= getMarchInstanceX(instance) &&
        unit.x - getMarchInstanceX(instance) <= 5.2
      )
      .sort((a, b) => a.x - b.x)[0] || null;

  if (nearbyEnemyBeforeTent) {
    instance.combatTarget =
      nearbyEnemyBeforeTent;

    connectCombatants(
      instance,
      nearbyEnemyBeforeTent
    );
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
  wrapper.className =
    definition.type === "crossbow"
      ? "march-unit-instance march-unit-instance--crossbow"
      : "march-unit-instance";
  wrapper.style.left = "14.5%";
  wrapper.style.top = RINGELNATZ_BATTLE_LINE_TOP;
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
  idleImage.style.transform =
    `translateX(-50%) translateY(${definition.visualOffsetY || 0}px)`;
  wrapper.appendChild(idleImage);

  let attackImage = null;
  let reloadImage = null;
  let deathImage = null;

  if (definition.attackSrc) {
    attackImage = document.createElement("img");
    attackImage.className =
      "march-unit-pose march-unit-pose--attack";
    attackImage.src = definition.attackSrc;
    attackImage.alt = "";
    attackImage.draggable = false;
    attackImage.style.transform =
      `translateX(calc(-50% + ${definition.attackOffsetX || 0}px)) ` +
      `translateY(${definition.attackOffsetY || 0}px) ` +
      `scale(${definition.attackScale || 1})`;
    wrapper.appendChild(attackImage);
  }

  if (definition.reloadSrc) {
    reloadImage = document.createElement("img");
    reloadImage.className =
      "march-unit-pose march-unit-pose--reload";
    reloadImage.src = definition.reloadSrc;
    reloadImage.alt = "";
    reloadImage.draggable = false;
    reloadImage.style.transform =
      `translateX(-50%) translateY(${definition.reloadOffsetY || 0}px)`;
    wrapper.appendChild(reloadImage);
  }

  if (definition.deathSrc) {
    deathImage = document.createElement("img");
    deathImage.className =
      "march-unit-pose march-unit-pose--death";
    deathImage.src = definition.deathSrc;
    deathImage.alt = "";
    deathImage.draggable = false;
    deathImage.style.transform =
      `translateX(-50%) translateY(${definition.deathOffsetY || 0}px)`;
    wrapper.appendChild(deathImage);
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
    reloadImage,
    deathImage,
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


function clearBattleTitle() {
  battleTitleTimers.forEach((timer) => {
    window.clearTimeout(timer);
  });

  battleTitleTimers = [];
  battleTitleRunning = false;

  if (battleTitleOverlay) {
    battleTitleOverlay.classList.remove(
      "is-visible",
      "is-leaving"
    );
    battleTitleOverlay.setAttribute(
      "aria-hidden",
      "true"
    );
  }
}

function startBattleTitleSequence(onComplete) {
  clearBattleTitle();

  if (
    !battleTitleOverlay ||
    !battleTitleYear ||
    !battleScreenOpen
  ) {
    if (typeof onComplete === "function") {
      onComplete();
    }
    return;
  }

  battleTitleRunning = true;
  battleTitleYear.textContent =
    String(gameState.year);

  battleTitleOverlay.classList.remove(
    "is-leaving"
  );
  battleTitleOverlay.setAttribute(
    "aria-hidden",
    "false"
  );

  // Direkt nach dem Erscheinen der Kastelberg-Karte weich einblenden.
  battleTitleTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        clearBattleTitle();
        return;
      }

      battleTitleOverlay.classList.add(
        "is-visible"
      );
    }, 100)
  );

  // Nach drei Sekunden sichtbarer Dauer weich ausblenden.
  battleTitleTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        clearBattleTitle();
        return;
      }

      battleTitleOverlay.classList.add(
        "is-leaving"
      );
      battleTitleOverlay.classList.remove(
        "is-visible"
      );
    }, 3100)
  );

  // Erst nach abgeschlossenem Fade läuft der bisherige Prozess weiter.
  battleTitleTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        clearBattleTitle();
        return;
      }

      clearBattleTitle();

      if (typeof onComplete === "function") {
        onComplete();
      }
    }, 3800)
  );
}

function clearBattleCountdown() {
  battleCountdownTimers.forEach((timer) => {
    window.clearTimeout(timer);
  });

  battleCountdownTimers = [];
  battleCountdownRunning = false;

  if (battleCountdown) {
    battleCountdown.classList.remove("is-active");
    battleCountdown.setAttribute("aria-hidden", "true");
  }

  if (battleCountdownNumber) {
    battleCountdownNumber.classList.remove("is-showing");
    battleCountdownNumber.textContent = "";
  }

  battleStartHorn.pause();
  battleStartHorn.currentTime = 0;
}

function showBattleCountdownNumber(number) {
  if (
    !battleCountdown ||
    !battleCountdownNumber ||
    !battleScreenOpen
  ) {
    return;
  }

  battleCountdown.classList.add("is-active");
  battleCountdown.setAttribute("aria-hidden", "false");
  battleCountdownNumber.classList.remove("is-showing");
  battleCountdownNumber.textContent = String(number);

  void battleCountdownNumber.offsetWidth;
  battleCountdownNumber.classList.add("is-showing");
}

function startBattleCountdown() {
  if (
    battleCountdownRunning ||
    !battleScreenOpen
  ) {
    return;
  }

  clearBattleCountdown();
  battleCountdownRunning = true;

  [3, 2, 1].forEach((number, index) => {
    battleCountdownTimers.push(
      window.setTimeout(() => {
        if (!battleScreenOpen) {
          clearBattleCountdown();
          return;
        }

        showBattleCountdownNumber(number);
      }, index * 1000)
    );
  });

  battleCountdownTimers.push(
    window.setTimeout(() => {
      if (!battleScreenOpen) {
        clearBattleCountdown();
        return;
      }

      battleCountdownNumber.classList.remove("is-showing");
      battleCountdownNumber.textContent = "";
      battleCountdown.classList.remove("is-active");
      battleCountdown.setAttribute("aria-hidden", "true");
      battleCountdownRunning = false;
      battleCountdownTimers = [];

      battleStartHorn.currentTime = 0;
      battleStartHorn.volume = 0.9;
      battleStartHorn.play().catch(() => {});

      // Erst nach dem vollständigen Countdown beginnt der eigentliche Kampf.
      startCastleArcher();
      startNeuensteinProduction();
    }, 3000)
  );
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
  stopCastleArcher();
  clearBattleCountdown();
  clearBattleTitle();
  resetTentHealthSystem();
  resetNeuensteinBattleSystem();
  resetRingelnatzUnits();
  resetMarchingUnits();
  resetKastelbergSiegeSystem();
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
  ringelnatzTentTarget?.classList.remove("is-siege-hidden");
  neuensteinTentTarget?.classList.remove("is-siege-hidden");
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

      startBattleCountdown();
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

      // Zuerst erscheint ausschließlich der dynamische Schlachttitel.
      // Danach startet exakt der bisherige Einheiten- und Countdownablauf.
      window.setTimeout(() => {
        if (!battleScreenOpen) {
          return;
        }

        startBattleTitleSequence(() => {
          if (battleScreenOpen) {
            startBattleUnitSequence();
          }
        });
      }, 250);
    });
  });
}

async function beginFeudSequence() {
  closeNeuensteinTroopSelection();
  closeTroopSelection();
  closeMapLocationModals();

  if (pendingFeudTarget !== "kastelberg") {
    closeFeudConfirmation();
    return;
  }
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

  if (
    battleScreenOpen &&
    kastelbergPhase ===
      KASTELBERG_PHASES.SIEGE_PREPARATION
  ) {
    if (
      key === "4" ||
      key === "Numpad4"
    ) {
      event.preventDefault();
      deployNextSiegeCrossbow();
      return;
    }

    if (
      key === "5" ||
      key === "Numpad5"
    ) {
      event.preventDefault();
      deployNextSiegeBuilder();
      return;
    }

    // During the paused preparation phase no normal field unit may spawn.
    if (unitKeyMap[key]) {
      event.preventDefault();
      return;
    }
  }

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


// ================================================================
// V87 – robuster Schwarz-/Iriswechsel der Kampagnenkarte.
// ================================================================

const MAP_IRIS_PHASE_MS = 400;

let politicalMapRequested = false;
let mapIrisSequenceRunning = false;
let mapIrisSequenceToken = 0;

function waitForMapIrisPhase(duration = MAP_IRIS_PHASE_MS) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

function resetPoliticalMapTransitionToNormal() {
  mapIrisSequenceToken += 1;
  mapIrisSequenceRunning = false;

  politicalMapOverlay?.classList.remove(
    "is-visible",
    "is-iris-opening",
    "is-iris-closing"
  );

  normalMapIrisOverlay?.classList.remove(
    "is-visible",
    "is-iris-opening"
  );

  mapBlackTransition?.classList.remove(
    "is-visible",
    "is-front"
  );
}

async function showPoliticalMapWithIris(sequenceToken) {
  if (
    sequenceToken !== mapIrisSequenceToken ||
    darkTriadModalOpen ||
    isAnyMainMapPanelOpen()
  ) {
    return;
  }

  // Phase 1: normale Karte innerhalb exakt 0,4 s vollständig zu Schwarz.
  mapBlackTransition?.classList.remove("is-front");
  mapBlackTransition?.classList.add("is-visible");

  await waitForMapIrisPhase();

  if (
    sequenceToken !== mapIrisSequenceToken ||
    !politicalMapRequested ||
    darkTriadModalOpen ||
    isAnyMainMapPanelOpen()
  ) {
    return;
  }

  // Phase 2: politische Karte aus der Bildmitte über Schwarz öffnen.
  politicalMapOverlay?.classList.add("is-visible");
  politicalMapOverlay?.classList.remove(
    "is-iris-opening",
    "is-iris-closing"
  );

  // Erzwungener Layout-Schritt, damit der Kreis sicher bei 0 % beginnt.
  void politicalMapOverlay?.offsetWidth;

  politicalMapOverlay?.classList.add("is-iris-opening");

  await waitForMapIrisPhase();

  if (sequenceToken !== mapIrisSequenceToken) {
    return;
  }

  mapIrisSequenceRunning = false;

  if (!politicalMapRequested) {
    runRequestedMapIrisState();
  }
}

async function showNormalMapWithIris(sequenceToken) {
  if (sequenceToken !== mapIrisSequenceToken) {
    return;
  }

  // V88 – Phase 1: politische Karte bleibt sichtbar und schließt sich
  // innerhalb exakt 0,4 s per umgekehrter Iris von außen zur Mitte.
  mapBlackTransition?.classList.remove("is-front");
  mapBlackTransition?.classList.add("is-visible");

  politicalMapOverlay?.classList.add("is-visible");
  politicalMapOverlay?.classList.remove("is-iris-closing");

  // Sicherstellen, dass die politische Karte vollständig geöffnet gerendert ist.
  politicalMapOverlay?.classList.add("is-iris-opening");
  void politicalMapOverlay?.offsetWidth;

  politicalMapOverlay?.classList.add("is-iris-closing");

  await waitForMapIrisPhase();

  if (
    sequenceToken !== mapIrisSequenceToken ||
    politicalMapRequested
  ) {
    return;
  }

  // Nach der geschlossenen Iris bleibt die Kartenfläche kurz vollständig schwarz.
  politicalMapOverlay?.classList.remove(
    "is-visible",
    "is-iris-opening",
    "is-iris-closing"
  );

  // Das alte Normal-Karten-Iris-Duplikat wird beim Rückweg nicht mehr verwendet.
  normalMapIrisOverlay?.classList.remove(
    "is-visible",
    "is-iris-opening"
  );

  // V88 – Phase 2: Schwarz fadet innerhalb exakt 0,4 s smooth aus.
  // Darunter erscheint direkt die originale, unveränderte Kampagnenkarte.
  mapBlackTransition?.classList.remove("is-visible", "is-front");

  await waitForMapIrisPhase();

  if (sequenceToken !== mapIrisSequenceToken) {
    return;
  }

  mapIrisSequenceRunning = false;

  if (politicalMapRequested) {
    runRequestedMapIrisState();
  }
}

function runRequestedMapIrisState() {
  if (
    mapIrisSequenceRunning ||
    darkTriadModalOpen ||
    isAnyMainMapPanelOpen()
  ) {
    return;
  }

  const politicalVisible =
    politicalMapOverlay?.classList.contains("is-visible");

  if (politicalMapRequested && !politicalVisible) {
    mapIrisSequenceRunning = true;
    const sequenceToken = ++mapIrisSequenceToken;
    showPoliticalMapWithIris(sequenceToken);
    return;
  }

  if (!politicalMapRequested && politicalVisible) {
    mapIrisSequenceRunning = true;
    const sequenceToken = ++mapIrisSequenceToken;
    showNormalMapWithIris(sequenceToken);
  }
}

if (politicalMapMenuIcon && politicalMapOverlay) {
  politicalMapMenuIcon.addEventListener("mouseenter", () => {
    if (darkTriadModalOpen || isAnyMainMapPanelOpen()) {
      return;
    }

    politicalMapRequested = true;
    runRequestedMapIrisState();
  });

  politicalMapMenuIcon.addEventListener("mouseleave", () => {
    politicalMapRequested = false;
    runRequestedMapIrisState();
  });
}

// Dunkle Triade: vorhandener Hover-Sound und Leuchteffekt bleiben bestehen.
if (darkTriadMenuIcon && darkTriadHoverSound) {
  darkTriadMenuIcon.addEventListener("mouseenter", () => {
    darkTriadHoverSound.pause();
    darkTriadHoverSound.currentTime = 0;
    darkTriadHoverSound.play().catch(() => {});
  });

  // Neu: Linksklick öffnet die normale zentrale Karten-Einblendung.
  darkTriadMenuIcon.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!canOpenMainMapLocation()) {
      return;
    }

    openDarkTriadModal();
  });
}

// ================================================================
// V89 – Dunkle Triade: Buch-Hover mit Ringelnatz, Text und Sound.
// ================================================================

darkTriadBookHotspots.forEach((hotspot) => {
  const bookKey = hotspot.dataset.darkTriadBook;

  hotspot.addEventListener("mouseenter", () => {
    showDarkTriadBookResponse(bookKey);
  });

  hotspot.addEventListener("mouseleave", () => {
    if (activeDarkTriadBook === bookKey) {
      hideDarkTriadBookResponse();
    }
  });
});


/* V91 – eigenständige Meierhof-Startaufstellung; Kastelberg bleibt unangetastet. */
const meierhofBattleScreen = document.querySelector("#meierhofBattleScreen");
const meierhofLord = document.querySelector("#meierhofLord");
const meierhofBanditFlag = document.querySelector("#meierhofBanditFlag");
const meierhofCamp = document.querySelector("#meierhofCamp");
const meierhofCrossbowDefender = document.querySelector("#meierhofCrossbowDefender");
const meierhofFarmerDefender = document.querySelector("#meierhofFarmerDefender");
const meierhofSpearmanDefenderOne = document.querySelector("#meierhofSpearmanDefenderOne");
const meierhofSpearmanDefenderTwo = document.querySelector("#meierhofSpearmanDefenderTwo");
const meierhofSelectionUnits = [...document.querySelectorAll("[data-meierhof-unit]")];
const meierhofSelectionKeys = [...document.querySelectorAll("[data-meierhof-key]")];
const meierhofStockCounts = [...document.querySelectorAll("[data-meierhof-stock]")];
const meierhofCountdown = document.querySelector("#meierhofCountdown");
const meierhofCountdownNumber = document.querySelector("#meierhofCountdownNumber");
const meierhofSurrenderButton = document.querySelector("#meierhofSurrenderButton");
const meierhofMarchLayer = document.querySelector("#meierhofMarchLayer");
const meierhofEnemyLayer = document.querySelector("#meierhofEnemyLayer");
const meierhofCooldown = document.querySelector("#meierhofCooldown");
const meierhofCooldownRing = document.querySelector("#meierhofCooldownRing");
const meierhofBattleStage = document.querySelector("#meierhofBattleStage");
const meierhofAimUi = document.querySelector("#meierhofAimUi");
const meierhofReloadIndicator = document.querySelector("#meierhofReloadIndicator");
const meierhofReloadRing = document.querySelector("#meierhofReloadRing");
const meierhofCrossbowWindSounds = [document.querySelector("#meierhofCrossbowWind1"), document.querySelector("#meierhofCrossbowWind2")].filter(Boolean);
const meierhofCrossbowReadySounds = [document.querySelector("#meierhofCrossbowReady1"), document.querySelector("#meierhofCrossbowReady2")].filter(Boolean);
const meierhofCrossbowShotSounds = [document.querySelector("#meierhofCrossbowShot1"), document.querySelector("#meierhofCrossbowShot2")].filter(Boolean);
let meierhofActiveReloadSound = null;
let meierhofActiveReadySound = null;
let meierhofReloadAudioToken = 0;
let meierhofShotPoseTimer = null;
let meierhofShotPoseActive = false;
let meierhofQueuedReloadAfterShot = false;

let meierhofBattleOpen = false;
let meierhofIntroRunning = false;
let meierhofIntroCompleted = false;
let meierhofProductionUnlocked = false;
let meierhofProductionCooldownUntil = 0;
let meierhofCooldownFrame = null;
let meierhofAimingActive = false;
let meierhofPlayerWeaponLoaded = true;
let meierhofReloadActive = false;
let meierhofReloadComplete = false;
let meierhofReloadStartedAt = 0;
let meierhofReloadAnimationFrame = null;
let meierhofControlHeld = false;
const MEIERHOF_RELOAD_DURATION = 4000;
let meierhofMarchInstanceCounter = 0;
const meierhofMarchingUnits = [];
const meierhofOccupiedFormationSlots = new Set();
const meierhofTimers = new Set();
let meierhofEnemyAnimationFrame = null;
let meierhofEnemyLastFrameAt = 0;
let meierhofEnemyInstanceCounter = 0;
const meierhofEnemies = [];
let meierhofEnemySpawnQueue = [];
let meierhofEnemySpawnTimer = null;
let meierhofBannerHealth = 100;
let meierhofBattleWon = false;
const MEIERHOF_BANNER_MAX_HEALTH = 100;
const MEIERHOF_BANNER_LINE_X = 14.0;
const MEIERHOF_LOOT_POINT_X = 80.0;
const MEIERHOF_ENEMY_EXIT_X = 101.0;
const MEIERHOF_FRIENDLY_SPACING = 5.4;
const MEIERHOF_ENEMY_SPACING = 4.9;

const MEIERHOF_RECRUITMENT_COOLDOWNS = Object.freeze({ 1: 2000, 2: 3500, 4: 6000, 7: 8000 });
const MEIERHOF_UNIT_ASSETS = Object.freeze({
  1: "assets/meierhof-ringelnatz-s1.png?v=91",
  2: "assets/meierhof-ringelnatz-s2.png?v=91",
  4: "assets/meierhof-ringelnatz-s4.png?v=91",
  7: "assets/meierhof-soeldner-s7.png?v=91"
});
const MEIERHOF_UNIT_WIDTHS = Object.freeze({ 1: 7.1, 2: 7.0, 4: 7.2, 7: 6.8 });
const MEIERHOF_FORMATION_SLOTS = Object.freeze([14.0, 19.4, 24.8, 30.2, 35.6, 41.0, 46.4, 51.8]);
const MEIERHOF_CROSSBOW_SLOTS = Object.freeze([55.0, 59.4]);
const MEIERHOF_SPAWN_X = 64.1;
const MEIERHOF_BATTLE_LINE_TOP = 99.35;
const MEIERHOF_INITIAL_STOCK = Object.freeze({ 1: 5, 2: 3, 3: 0, 4: 1, 5: 0, 6: 0, 7: 1 });
const meierhofUnitStock = { ...MEIERHOF_INITIAL_STOCK };

const MEIERHOF_GARRISON_CROSSBOW_IDLE_ASSET = "assets/meierhof-ringelnatz-s4.png?v=91";
const MEIERHOF_GARRISON_CROSSBOW_RELOAD_ASSET = "assets/meierhof-armbrust-garnison-nachladen.png?v=101";
const MEIERHOF_GARRISON_CROSSBOW_SHOT_ASSET = "assets/meierhof-armbrust-garnison-schuss.png?v=101";
// V109: eigenes, passgenau freigestelltes Schussbild ausschließlich für den rekrutierbaren Schützen.
const MEIERHOF_RECRUIT_CROSSBOW_SHOT_ASSET = "assets/meierhof-armbrust-rekrut-schuss.png?v=109";
const MEIERHOF_ENEMY_SPAWN_X = 11.4;
const MEIERHOF_ENEMY_LINE_TOP = MEIERHOF_BATTLE_LINE_TOP;
const MEIERHOF_ENEMY_ASSETS = Object.freeze({
  club: Object.freeze({
    walk: "assets/meierhof-bandit-keule-laufen.png?v=101",
    windup: "assets/meierhof-bandit-keule-ausholen.png?v=101",
    strike: "assets/meierhof-bandit-keule-schlagen.png?v=101"
  }),
  shield: Object.freeze({
    walk: "assets/meierhof-bandit-schild-laufen.png?v=101",
    attack: "assets/meierhof-bandit-schild-angriff.png?v=101"
  })
});
const MEIERHOF_ENEMY_SPEEDS = Object.freeze({
  club: 1.5, // V102: schwere Keule exakt 100 % langsamer
  shield: 2.175 // V106: exakt 50 % langsamer
});
const MEIERHOF_ARMOR_BY_UNIT = Object.freeze({ 1: "light", 2: "light", 4: "medium", 7: "heavy" });
const MEIERHOF_FRIENDLY_DAMAGE = Object.freeze({
  1: Object.freeze({ light: 20, medium: 10, heavy: 5 }),
  2: Object.freeze({ light: 50, medium: 25, heavy: 10 }),
  4: Object.freeze({ light: 100, medium: 35, heavy: 15 }),
  7: Object.freeze({ light: 100, medium: 35, heavy: 25 })
});
const MEIERHOF_ENEMY_DAMAGE = Object.freeze({
  club: Object.freeze({ light: 100, medium: 50, heavy: 25 }),
  shield: Object.freeze({ light: 35, medium: 25, heavy: 15 })
});
const MEIERHOF_FRIENDLY_ATTACK_INTERVAL = Object.freeze({ 1: 2000, 2: 1800, 4: 2400, 7: 1600 });


function meierhofDelay(ms) {
  return new Promise((resolve) => {
    const timer = window.setTimeout(() => {
      meierhofTimers.delete(timer);
      resolve();
    }, ms);
    meierhofTimers.add(timer);
  });
}
function clearMeierhofTimers() {
  meierhofTimers.forEach((timer) => window.clearTimeout(timer));
  meierhofTimers.clear();
}
function updateMeierhofStockDisplay(unitKey) {
  const element = meierhofStockCounts.find((item) => Number(item.dataset.meierhofStock) === Number(unitKey));
  if (element) element.textContent = String(meierhofUnitStock[unitKey] ?? 0);
}
function resetMeierhofStock() {
  Object.assign(meierhofUnitStock, MEIERHOF_INITIAL_STOCK);
  Object.keys(MEIERHOF_INITIAL_STOCK).forEach(updateMeierhofStockDisplay);
}
function stopMeierhofCooldown() {
  if (meierhofCooldownFrame !== null) cancelAnimationFrame(meierhofCooldownFrame);
  meierhofCooldownFrame = null;
  meierhofProductionCooldownUntil = 0;
  meierhofCooldown?.classList.remove("is-active");
  meierhofCooldown?.setAttribute("aria-hidden", "true");
  meierhofCooldownRing?.style.setProperty("--meierhof-cooldown-progress", "0deg");
}
function startMeierhofCooldown(duration) {
  stopMeierhofCooldown();
  const startedAt = performance.now();
  meierhofProductionCooldownUntil = startedAt + duration;
  meierhofCooldown?.classList.add("is-active");
  meierhofCooldown?.setAttribute("aria-hidden", "false");
  const draw = (now) => {
    if (!meierhofBattleOpen) { stopMeierhofCooldown(); return; }
    const progress = Math.min(1, (now - startedAt) / duration);
    meierhofCooldownRing?.style.setProperty("--meierhof-cooldown-progress", `${progress * 360}deg`);
    if (progress < 1) meierhofCooldownFrame = requestAnimationFrame(draw);
    else {
      meierhofCooldownFrame = null;
      meierhofProductionCooldownUntil = 0;
      window.setTimeout(() => {
        meierhofCooldown?.classList.remove("is-active");
        meierhofCooldown?.setAttribute("aria-hidden", "true");
      }, 100);
    }
  };
  meierhofCooldownFrame = requestAnimationFrame(draw);
}
function createMeierhofDust(x, y) {
  if (!meierhofMarchLayer) return;
  const dust = document.createElement("span");
  dust.className = "meierhof-dust-puff";
  dust.style.left = `${x}%`;
  dust.style.top = `${y}%`;
  meierhofMarchLayer.appendChild(dust);
  dust.addEventListener("animationend", () => dust.remove(), { once: true });
}
function reserveMeierhofSlot(unitKey) {
  const slots = Number(unitKey) === 4 ? MEIERHOF_CROSSBOW_SLOTS : MEIERHOF_FORMATION_SLOTS;
  for (const slot of slots) {
    const id = `${unitKey === 4 ? "r" : "m"}:${slot}`;
    if (!meierhofOccupiedFormationSlots.has(id)) {
      meierhofOccupiedFormationSlots.add(id);
      return { x: slot, id };
    }
  }
  const fallbackX = Math.max(8.5, 52 - meierhofOccupiedFormationSlots.size * 4.7);
  const id = `f:${fallbackX}:${meierhofMarchInstanceCounter}`;
  meierhofOccupiedFormationSlots.add(id);
  return { x: fallbackX, id };
}
function playMeierhofRecruitSound(unitKey) {
  const audio = document.querySelector(`#unitKeySound${unitKey}`);
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
  void audio.play().catch(() => {});
}
function spawnAndMarchMeierhofUnit(unitKey) {
  const asset = MEIERHOF_UNIT_ASSETS[unitKey];
  if (!asset || !meierhofMarchLayer) return false;
  const slot = reserveMeierhofSlot(unitKey);
  const unit = document.createElement("img");
  unit.className = `meierhof-march-unit meierhof-march-unit--${unitKey}`;
  unit.src = asset;
  unit.alt = "";
  unit.draggable = false;
  unit.dataset.meierhofMarchId = String(++meierhofMarchInstanceCounter);
  unit.style.left = `${MEIERHOF_SPAWN_X}%`;
  unit.style.top = `${MEIERHOF_BATTLE_LINE_TOP}%`;
  unit.style.width = `${MEIERHOF_UNIT_WIDTHS[unitKey]}%`;
  meierhofMarchLayer.appendChild(unit);
  const healthBar = document.createElement("div");
  healthBar.className = "meierhof-friendly-health";
  const healthFill = document.createElement("div");
  healthFill.className = "meierhof-friendly-health-fill";
  healthBar.appendChild(healthFill);
  healthBar.style.left = `${MEIERHOF_SPAWN_X}%`;
  healthBar.style.top = `${MEIERHOF_BATTLE_LINE_TOP}%`;
  meierhofMarchLayer.appendChild(healthBar);
  const marchRecord = {
    element: unit, healthBar, healthElement: healthFill, slotId: slot.id,
    unitKey: Number(unitKey), armorClass: MEIERHOF_ARMOR_BY_UNIT[unitKey] || "light",
    maxHealth: 100, health: 100, x: MEIERHOF_SPAWN_X, paused: false,
    arrived: false, alive: true, target: null, nextAttackAt: 0,
    rangedState: Number(unitKey) === 4 ? "idle" : null,
    rangedStateUntil: 0, rangedTarget: null, rangedShotApplied: false
  };
  meierhofMarchingUnits.push(marchRecord);
  requestAnimationFrame(() => {
    unit.classList.add("is-spawned", "is-marching");
    createMeierhofDust(MEIERHOF_SPAWN_X, MEIERHOF_BATTLE_LINE_TOP - .4);
  });
  const startX = MEIERHOF_SPAWN_X;
  const targetX = slot.x;
  const distance = Math.abs(startX - targetX);
  const baseDuration = Math.max(1250, distance * 42);
  const speedDurationMultiplier = Number(unitKey) === 1 ? 2 : Number(unitKey) === 2 ? 2.3 : Number(unitKey) === 7 ? 12 : 1;
  const duration = baseDuration * speedDurationMultiplier;
  let startedAt = performance.now();
  let lastFrameAt = startedAt;
  let lastDustAt = startedAt;
  const move = (now) => {
    if (!meierhofBattleOpen || !unit.isConnected || !marchRecord.alive) return;

    // V107: Pausenzeit darf niemals als Bewegungszeit nachgeholt werden.
    // Andernfalls springt eine Einheit nach einer Kollision mehrere Prozent
    // nach links und kann einen Gegner in einem einzelnen Frame durchqueren.
    if (marchRecord.paused) {
      startedAt += Math.max(0, now - lastFrameAt);
      lastFrameAt = now;
      requestAnimationFrame(move);
      return;
    }
    lastFrameAt = now;
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 2);
    const x = startX + (targetX - startX) * eased;
    marchRecord.x = x;
    unit.style.left = `${x}%`;
    unit.style.top = `${MEIERHOF_BATTLE_LINE_TOP}%`;
    healthBar.style.left = `${x}%`;
    healthBar.style.top = `${MEIERHOF_BATTLE_LINE_TOP}%`;
    if (now - lastDustAt > 430) {
      createMeierhofDust(x, MEIERHOF_BATTLE_LINE_TOP - .35);
      lastDustAt = now;
    }
    if (progress < 1) requestAnimationFrame(move);
    else {
      unit.classList.remove("is-marching");
      unit.classList.add("is-arrived");
      marchRecord.arrived = true;
      marchRecord.x = targetX;
      unit.style.left = `${targetX}%`;
      healthBar.style.left = `${targetX}%`;
      createMeierhofDust(targetX, MEIERHOF_BATTLE_LINE_TOP - .35);
    }
  };
  requestAnimationFrame(move);
  return true;
}


const MEIERHOF_AUTO_CROSSBOW_RELOAD_MS = 5000;
const MEIERHOF_AUTO_CROSSBOW_SHOT_MS = 1500;

// V107 – Die drei Bilder des ausbildbaren Armbrustschützen besitzen
// unterschiedliche Seitenverhältnisse. Die Pose-Metrik hält Füße und Größe
// dennoch auf exakt derselben Meierhof-Bodenlinie.
const MEIERHOF_RECRUIT_CROSSBOW_POSE = Object.freeze({
  idle: Object.freeze({ width: MEIERHOF_UNIT_WIDTHS[4], top: MEIERHOF_BATTLE_LINE_TOP }),

  // V108: Die beiden Aktionsgrafiken besitzen deutlich mehr transparente
  // Außenfläche als das Standbild. Deshalb werden sie separat größer gezogen
  // und tiefer verankert, sodass die sichtbaren Füße exakt auf derselben
  // Meierhof-Lauflinie stehen.
  // V109: Nachladen nochmals um ca. 0,15 cm abgesenkt.
  reload: Object.freeze({ width: 10.8, top: MEIERHOF_BATTLE_LINE_TOP + 1.75 }),
  // Das neue Schussbild besitzt keine übergroße transparente Außenfläche mehr:
  // daher exakt in normaler Einheitenbreite und direkt auf der Laufebene.
  shot: Object.freeze({ width: MEIERHOF_UNIT_WIDTHS[4], top: MEIERHOF_BATTLE_LINE_TOP })
});

function setMeierhofRecruitCrossbowPose(unit, pose = "idle") {
  if (!unit?.element || unit.unitKey !== 4) return;
  const src = pose === "reload"
    ? MEIERHOF_GARRISON_CROSSBOW_RELOAD_ASSET
    : pose === "shot"
      ? MEIERHOF_RECRUIT_CROSSBOW_SHOT_ASSET
      : MEIERHOF_GARRISON_CROSSBOW_IDLE_ASSET;
  if (unit.element.src !== new URL(src, document.baseURI).href) unit.element.src = src;

  const poseMetric = MEIERHOF_RECRUIT_CROSSBOW_POSE[pose] || MEIERHOF_RECRUIT_CROSSBOW_POSE.idle;
  unit.element.style.width = `${poseMetric.width}%`;
  unit.element.style.top = `${poseMetric.top}%`;

  unit.element.classList.toggle("is-auto-reloading", pose === "reload");
  unit.element.classList.toggle("is-auto-shooting", pose === "shot");
}

function findMeierhofAutoCrossbowTarget() {
  return meierhofEnemies
    .filter((enemy) => enemy?.alive && enemy.element?.isConnected && enemy.x < MEIERHOF_ENEMY_EXIT_X)
    .sort((a, b) => b.x - a.x || a.id - b.id)[0] || null;
}

function launchMeierhofAutoCrossbowBolt(unit, target) {
  if (!meierhofBattleStage || !unit?.element || !target?.element || !unit.alive || !target.alive) return;
  const stageRect = meierhofBattleStage.getBoundingClientRect();
  const sourceRect = unit.element.getBoundingClientRect();
  const targetRect = target.element.getBoundingClientRect();
  const sourceX = sourceRect.left - stageRect.left + sourceRect.width * 0.35;
  const sourceY = sourceRect.top - stageRect.top + sourceRect.height * 0.48;
  const targetX = targetRect.left - stageRect.left + targetRect.width * 0.55;
  const targetY = targetRect.top - stageRect.top + targetRect.height * 0.5;
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const distance = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  const bolt = document.createElement("span");
  bolt.className = "meierhof-crossbow-bolt meierhof-crossbow-bolt--auto";
  bolt.style.left = `${sourceX}px`;
  bolt.style.top = `${sourceY}px`;
  bolt.style.transform = `translateY(-50%) rotate(${angle}deg)`;
  meierhofBattleStage.appendChild(bolt);
  const duration = Math.max(220, Math.min(650, distance * 0.62));
  requestAnimationFrame(() => {
    bolt.style.transition = `transform ${duration}ms linear`;
    bolt.style.transform = `translate(${dx}px, ${dy}px) translateY(-50%) rotate(${angle}deg)`;
  });
  window.setTimeout(() => {
    bolt.remove();
    if (!unit.alive || !target.alive || meierhofBattleWon) return;
    const damage = getMeierhofDamage(MEIERHOF_FRIENDLY_DAMAGE[4], target.armorClass);
    applyMeierhofDamage(target, damage, "recruited-crossbow");
  }, duration);
}

function updateMeierhofAutoCrossbows(now) {
  for (const unit of meierhofMarchingUnits) {
    if (!unit?.alive || unit.unitKey !== 4 || !unit.arrived || !unit.element?.isConnected) continue;
    const availableTarget = findMeierhofAutoCrossbowTarget();
    if (!availableTarget) {
      unit.rangedState = "idle";
      unit.rangedStateUntil = 0;
      unit.rangedTarget = null;
      unit.rangedShotApplied = false;
      setMeierhofRecruitCrossbowPose(unit, "idle");
      continue;
    }
    if (unit.rangedState === "idle" || !unit.rangedState) {
      unit.rangedTarget = availableTarget;
      unit.rangedState = "reloading";
      unit.rangedStateUntil = now + MEIERHOF_AUTO_CROSSBOW_RELOAD_MS;
      setMeierhofRecruitCrossbowPose(unit, "reload");
      // Nur der normale Ladesound; bewusst KEIN Ready-Sound.
      playRandomMeierhofSound(meierhofCrossbowWindSounds);
      continue;
    }
    if (unit.rangedState === "reloading" && now >= unit.rangedStateUntil) {
      unit.rangedTarget = unit.rangedTarget?.alive ? unit.rangedTarget : availableTarget;
      unit.rangedState = "shooting";
      unit.rangedStateUntil = now + MEIERHOF_AUTO_CROSSBOW_SHOT_MS;
      unit.rangedShotApplied = true;
      setMeierhofRecruitCrossbowPose(unit, "shot");
      // Gleicher zufälliger Schusssound wie beim stationären Schützen.
      playRandomMeierhofSound(meierhofCrossbowShotSounds);
      launchMeierhofAutoCrossbowBolt(unit, unit.rangedTarget);
      continue;
    }
    if (unit.rangedState === "shooting" && now >= unit.rangedStateUntil) {
      const nextTarget = findMeierhofAutoCrossbowTarget();
      if (nextTarget) {
        unit.rangedTarget = nextTarget;
        unit.rangedState = "reloading";
        unit.rangedStateUntil = now + MEIERHOF_AUTO_CROSSBOW_RELOAD_MS;
        unit.rangedShotApplied = false;
        setMeierhofRecruitCrossbowPose(unit, "reload");
        // Neuer Ladezyklus: nur Wind/Ladesound, niemals Ready-Sound.
        playRandomMeierhofSound(meierhofCrossbowWindSounds);
      } else {
        unit.rangedState = "idle";
        unit.rangedStateUntil = 0;
        unit.rangedTarget = null;
        unit.rangedShotApplied = false;
        setMeierhofRecruitCrossbowPose(unit, "idle");
      }
    }
  }
}

function getMeierhofResourceNumber(id) {
  const el = document.querySelector(`#${id}`);
  const value = Number.parseInt(el?.textContent || "0", 10);
  return Number.isFinite(value) ? value : 0;
}
function setMeierhofResourceNumber(id, value) {
  const el = document.querySelector(`#${id}`);
  if (el) el.textContent = String(Math.max(0, Math.round(value)));
}
function showMeierhofResourceFloat(x, y, recovered = false) {
  if (!meierhofBattleStage) return;
  const float = document.createElement("div");
  float.className = `meierhof-resource-float${recovered ? " is-recovered" : ""}`;
  float.style.left = `${x}%`;
  float.style.top = `${y}%`;
  float.innerHTML = `
    <span class="meierhof-resource-item"><span class="meierhof-resource-icon">🪵</span><strong>${recovered ? "+5" : "-5"}</strong></span>
    <span class="meierhof-resource-item"><span class="meierhof-resource-icon">🍎</span><strong>${recovered ? "+10" : "-10"}</strong></span>`;
  meierhofBattleStage.appendChild(float);
  float.addEventListener("animationend", () => float.remove(), { once: true });
}
function applyMeierhofPlunder(enemy) {
  if (!enemy?.alive || enemy.hasPlundered || meierhofBattleWon) return;
  enemy.hasPlundered = true;
  enemy.state = "escaping";
  setMeierhofResourceNumber("resourceHolz", getMeierhofResourceNumber("resourceHolz") - 5);
  setMeierhofResourceNumber("resourceNahrung", getMeierhofResourceNumber("resourceNahrung") - 10);
  showMeierhofResourceFloat(enemy.x + 1.5, MEIERHOF_ENEMY_LINE_TOP - 10, false);
}
function recoverMeierhofLoot(enemy) {
  if (!enemy?.hasPlundered || enemy.lootRecovered) return;
  enemy.lootRecovered = true;
  setMeierhofResourceNumber("resourceHolz", getMeierhofResourceNumber("resourceHolz") + 5);
  setMeierhofResourceNumber("resourceNahrung", getMeierhofResourceNumber("resourceNahrung") + 10);
  showMeierhofResourceFloat(enemy.x + 1.5, MEIERHOF_ENEMY_LINE_TOP - 10, true);
}
function ensureMeierhofBannerUi() {
  if (!meierhofBattleStage) return;
  let ui = document.querySelector("#meierhofBannerHealthUi");
  if (!ui) {
    ui = document.createElement("div");
    ui.id = "meierhofBannerHealthUi";
    ui.className = "meierhof-banner-health-ui";
    ui.innerHTML = '<div class="meierhof-banner-health-frame"><div class="meierhof-banner-health-fill" id="meierhofBannerHealthFill"></div></div>';
    meierhofBattleStage.appendChild(ui);
  }
  updateMeierhofBannerUi();
}
function updateMeierhofBannerUi() {
  const fill = document.querySelector("#meierhofBannerHealthFill");
  if (fill) fill.style.width = `${Math.max(0, Math.min(100, meierhofBannerHealth))}%`;
}
function damageMeierhofBanner(amount = 5) {
  if (meierhofBattleWon || meierhofBannerHealth <= 0) return;
  meierhofBannerHealth = Math.max(0, meierhofBannerHealth - amount);
  updateMeierhofBannerUi();
  meierhofBanditFlag?.classList.remove("is-banner-hit");
  void meierhofBanditFlag?.offsetWidth;
  meierhofBanditFlag?.classList.add("is-banner-hit");
  if (meierhofBannerHealth <= 0) winMeierhofBattle();
}
function winMeierhofBattle() {
  if (meierhofBattleWon) return;
  meierhofBattleWon = true;
  meierhofProductionUnlocked = false;
  if (meierhofEnemySpawnTimer !== null) window.clearTimeout(meierhofEnemySpawnTimer);
  meierhofEnemySpawnTimer = null;
  meierhofEnemySpawnQueue = [];
  stopMeierhofReload(true);
  meierhofAimingActive = false;
  meierhofAimUi?.classList.remove("is-active");
  meierhofBattleStage?.classList.remove("has-meierhof-aim");
  meierhofMarchingUnits.forEach((unit) => { if (unit) unit.paused = true; });
  meierhofEnemies.forEach((enemy) => { if (enemy) enemy.state = "frozen"; });
  let victory = document.querySelector("#meierhofVictory");
  if (!victory && meierhofBattleStage) {
    victory = document.createElement("div");
    victory.id = "meierhofVictory";
    victory.className = "meierhof-victory";
    victory.innerHTML = '<div class="meierhof-victory-swords">⚔</div><div class="meierhof-victory-text">SIEG</div>';
    meierhofBattleStage.appendChild(victory);
    requestAnimationFrame(() => victory.classList.add("is-visible"));
  }
}
function resetMeierhofOutcomeUi() {
  meierhofBannerHealth = MEIERHOF_BANNER_MAX_HEALTH;
  meierhofBattleWon = false;
  document.querySelector("#meierhofVictory")?.remove();
  ensureMeierhofBannerUi();
  updateMeierhofBannerUi();
}
// V107 – Letzte harte Kollisionssicherung. Sie läuft in jedem Kampfframe
// nach der Bewegung und verhindert Überlappung selbst bei kurzen Frame-Einbrüchen.
function enforceMeierhofHardCollision() {
  const melee = meierhofMarchingUnits
    .filter((unit) => unit?.alive && unit.unitKey !== 4 && unit.element?.isConnected)
    .sort((a, b) => a.x - b.x);

  for (let index = 1; index < melee.length; index += 1) {
    const ahead = melee[index - 1];
    const behind = melee[index];
    if (isMeierhofCombatPair(ahead, ahead.target) || isMeierhofCombatPair(behind, behind.target)) continue;
    const minimumX = ahead.x + MEIERHOF_FRIENDLY_SPACING;
    if (behind.x < minimumX) {
      behind.x = minimumX;
      behind.element.style.left = `${behind.x}%`;
      behind.healthBar.style.left = `${behind.x}%`;
    }
  }

  for (const enemy of meierhofEnemies) {
    if (!enemy?.alive || !enemy.element?.isConnected || enemy.state === "escaping") continue;
    const target = getMeierhofFriendlyCollisionTarget(enemy);
    if (!target?.unit?.alive) continue;
    const hardDistance = enemy.type === "club" ? 4.8 : 4.6;
    if (target.distance <= hardDistance || enemy.x > target.unit.x) {
      enemy.x = Math.max(MEIERHOF_ENEMY_SPAWN_X, target.unit.x - hardDistance);
      enemy.element.style.left = `${enemy.x}%`;
      if (enemy.state === "walking" || enemy.state === "plunder-wait") {
        engageMeierhofEnemy(enemy, target.unit);
      }
    }
  }
}

function compactMeierhofFriendlyFormation() {
  const melee = meierhofMarchingUnits
    .filter((unit) => unit?.alive && unit.unitKey !== 4 && unit.element?.isConnected)
    .sort((a, b) => a.x - b.x);
  melee.forEach((unit, index) => {
    if (unit.target?.alive || unit.paused) return;
    const targetX = MEIERHOF_BANNER_LINE_X + index * MEIERHOF_FRIENDLY_SPACING;
    if (unit.x > targetX + .08) {
      unit.x = Math.max(targetX, unit.x - .055);
      unit.element.style.left = `${unit.x}%`;
      unit.healthBar.style.left = `${unit.x}%`;
      unit.arrived = unit.x <= targetX + .08;
    }
  });
}
function updateMeierhofBannerAttacks(now) {
  const melee = meierhofMarchingUnits
    .filter((unit) => unit?.alive && unit.unitKey !== 4 && !unit.target?.alive && unit.x <= MEIERHOF_BANNER_LINE_X + .35)
    .sort((a, b) => a.x - b.x);
  const attacker = melee[0];
  if (!attacker || meierhofBattleWon) return;
  attacker.paused = true;
  if (now >= (attacker.nextBannerAttackAt || 0)) {
    attacker.nextBannerAttackAt = now + (MEIERHOF_FRIENDLY_ATTACK_INTERVAL[attacker.unitKey] || 1800);
    damageMeierhofBanner(5);
    createMeierhofImpactDust(MEIERHOF_BANNER_LINE_X + .6);
  }
}

function updateMeierhofUnitHealth(unit) {
  if (!unit?.healthElement) return;
  const percent = Math.max(0, Math.min(100, (unit.health / unit.maxHealth) * 100));
  unit.healthElement.style.width = `${percent}%`;
}
function isMeierhofCombatPair(first, second) {
  return Boolean(
    first?.alive &&
    second?.alive &&
    first.target === second &&
    second.target === first
  );
}
function releaseMeierhofCombat(unit) {
  if (!unit) return;
  const target = unit.target;

  unit.target = null;
  unit.paused = false;

  // V105: Nur die wirklich gegenseitige Bindung lösen. Eine inzwischen
  // anderweitig gebundene Einheit darf niemals freigegeben werden.
  if (target?.target === unit) {
    target.target = null;
    target.paused = false;
  }
}
function defeatMeierhofUnit(unit) {
  if (!unit || !unit.alive) return;
  unit.alive = false;
  unit.health = 0;
  updateMeierhofUnitHealth(unit);
  if (unit.isEnemy && unit.lastDamageSource === "garrison-crossbow" && unit.hasPlundered && unit.state === "escaping") {
    recoverMeierhofLoot(unit);
  }
  releaseMeierhofCombat(unit);
  unit.element?.classList.add("is-defeated");
  unit.healthBar?.classList.add("is-defeated");
  window.setTimeout(() => { unit.element?.remove(); unit.healthBar?.remove(); }, 420);
}
function applyMeierhofDamage(target, amount, source = "combat") {
  if (!target?.alive || !Number.isFinite(amount) || amount <= 0 || meierhofBattleWon) return;
  target.lastDamageSource = source;
  target.health = Math.max(0, target.health - amount);
  updateMeierhofUnitHealth(target);
  if (target.health <= 0) defeatMeierhofUnit(target);
}
function getMeierhofDamage(table, armorClass) {
  return Number(table?.[armorClass]) || 0;
}
function updateMeierhofFriendlyAttacks(now) {
  for (const unit of meierhofMarchingUnits) {
    const enemy = unit?.target;
    if (!unit?.alive || !enemy?.alive) {
      if (unit?.target) releaseMeierhofCombat(unit);
      continue;
    }

    // V105: Schaden nur innerhalb derselben exklusiven Zweierbindung.
    // So können nachrückende Gegner keine bestehende Kollision überschreiben.
    if (!isMeierhofCombatPair(unit, enemy)) {
      releaseMeierhofCombat(unit);
      continue;
    }

    unit.paused = true;
    if (now < (unit.nextAttackAt || 0)) continue;
    unit.nextAttackAt = now + (MEIERHOF_FRIENDLY_ATTACK_INTERVAL[unit.unitKey] || 2000);
    const damage = getMeierhofDamage(MEIERHOF_FRIENDLY_DAMAGE[unit.unitKey], enemy.armorClass);
    applyMeierhofDamage(enemy, damage);
  }
}

function setMeierhofGarrisonCrossbowPose(pose = "idle") {
  if (!meierhofCrossbowDefender) return;
  const src = pose === "reload"
    ? MEIERHOF_GARRISON_CROSSBOW_RELOAD_ASSET
    : pose === "shot"
      ? MEIERHOF_GARRISON_CROSSBOW_SHOT_ASSET
      : MEIERHOF_GARRISON_CROSSBOW_IDLE_ASSET;
  meierhofCrossbowDefender.src = src;
  meierhofCrossbowDefender.classList.toggle("is-combat-pose", pose !== "idle");
  meierhofCrossbowDefender.classList.toggle("is-reloading-pose", pose === "reload");
  meierhofCrossbowDefender.classList.toggle("is-shot-pose", pose === "shot");
}
function clearMeierhofShotPoseTimer() {
  if (meierhofShotPoseTimer !== null) window.clearTimeout(meierhofShotPoseTimer);
  meierhofShotPoseTimer = null;
  meierhofShotPoseActive = false;
  meierhofQueuedReloadAfterShot = false;
}
function beginMeierhofShotPose() {
  clearMeierhofShotPoseTimer();
  meierhofShotPoseActive = true;
  setMeierhofGarrisonCrossbowPose("shot");
  meierhofShotPoseTimer = window.setTimeout(() => {
    meierhofShotPoseTimer = null;
    meierhofShotPoseActive = false;
    if (!meierhofBattleOpen) return;
    if (meierhofControlHeld || meierhofQueuedReloadAfterShot) {
      meierhofQueuedReloadAfterShot = false;
      beginMeierhofReload();
    } else {
      setMeierhofGarrisonCrossbowPose("idle");
    }
  }, 1500);
}
function getMeierhofFriendlyCollisionTarget(enemy) {
  let best = null;
  let bestDistance = Infinity;
  for (const unit of meierhofMarchingUnits) {
    if (!unit?.element?.isConnected || !unit.alive) continue;
    const x = Number.isFinite(unit.x) ? unit.x : parseFloat(unit.element.style.left) || 0;
    if (x < enemy.x - .35) continue;
    const distance = x - enemy.x;
    if (distance < bestDistance) { bestDistance = distance; best = unit; }
  }
  return best ? { unit: best, distance: bestDistance } : null;
}
function setMeierhofEnemySprite(enemy, state) {
  if (!enemy?.sprite) return;
  const assets = MEIERHOF_ENEMY_ASSETS[enemy.type];
  const next = assets?.[state];
  if (next && enemy.sprite.src !== new URL(next, document.baseURI).href) enemy.sprite.src = next;
}
function createMeierhofImpactDust(x) {
  if (!meierhofEnemyLayer) return;
  const dust = document.createElement("span");
  dust.className = "meierhof-impact-dust";
  dust.style.left = `${x}%`;
  dust.style.top = `${MEIERHOF_ENEMY_LINE_TOP - 1.2}%`;
  meierhofEnemyLayer.appendChild(dust);
  dust.addEventListener("animationend", () => dust.remove(), { once: true });
}
function triggerMeierhofEnemyImpact(enemy) {
  if (!enemy?.element) return;
  enemy.element.classList.remove("is-impacting");
  void enemy.element.offsetWidth;
  enemy.element.classList.add("is-impacting");
  createMeierhofImpactDust(enemy.x + 2.5);
  window.setTimeout(() => enemy.element?.classList.remove("is-impacting"), 430);
}
function engageMeierhofEnemy(enemy, friendly) {
  if (!enemy || !friendly || enemy.state !== "walking" || !enemy.alive || !friendly.alive) return;

  // V105: Eine lebende bestehende Kampfbindung ist exklusiv und darf weder
  // durch einen nachrückenden Banditen noch durch eine neue Zielsuche ersetzt werden.
  if (enemy.target?.alive && enemy.target !== friendly) return;
  if (friendly.target?.alive && friendly.target !== enemy) return;

  enemy.target = friendly;
  friendly.target = enemy;
  enemy.paused = true;
  friendly.paused = true;
  friendly.nextAttackAt = performance.now() + 250;
  enemy.x = Math.max(MEIERHOF_ENEMY_SPAWN_X, (friendly.x || enemy.x + 4.2) - (enemy.type === "club" ? 4.8 : 4.6));
  enemy.element.style.left = `${enemy.x}%`;
  if (enemy.type === "club") {
    enemy.state = "windup";
    enemy.stateUntil = performance.now() + 3000;
    setMeierhofEnemySprite(enemy, "windup");
  } else {
    enemy.state = "engaged";
    enemy.stateUntil = Infinity;
    setMeierhofEnemySprite(enemy, "attack");
  }
}
function createMeierhofEnemy(type) {
  if (!meierhofEnemyLayer || !MEIERHOF_ENEMY_ASSETS[type]) return null;
  const element = document.createElement("div");
  element.className = `meierhof-enemy-unit meierhof-enemy-unit--${type}`;
  element.style.left = `${MEIERHOF_ENEMY_SPAWN_X}%`;
  element.style.top = `${MEIERHOF_ENEMY_LINE_TOP}%`;
  const wrap = document.createElement("div");
  wrap.className = "meierhof-enemy-sprite-wrap";
  const sprite = document.createElement("img");
  sprite.className = "meierhof-enemy-sprite";
  sprite.src = MEIERHOF_ENEMY_ASSETS[type].walk;
  sprite.alt = "";
  sprite.draggable = false;
  const health = document.createElement("div");
  health.className = "meierhof-enemy-health";
  const fill = document.createElement("div");
  fill.className = "meierhof-enemy-health-fill";
  health.appendChild(fill);
  wrap.appendChild(sprite);
  element.append(wrap, health);
  meierhofEnemyLayer.appendChild(element);
  const enemy = {
    id: ++meierhofEnemyInstanceCounter,
    type,
    element,
    sprite,
    healthElement: fill,
    x: MEIERHOF_ENEMY_SPAWN_X,
    speed: MEIERHOF_ENEMY_SPEEDS[type],
    state: "walking",
    stateUntil: 0,
    target: null,
    armorClass: "medium",
    maxHealth: 100,
    health: 100,
    nextAttackAt: 0,
    collisionWidth: type === "club" ? 4.7 : 4.5,
    alive: true,
    isEnemy: true,
    hasPlundered: false,
    lootRecovered: false,
    plunderAt: 0,
    lastDamageSource: "combat"
  };
  meierhofEnemies.push(enemy);
  requestAnimationFrame(() => element.classList.add("is-visible"));
  return enemy;
}
function updateMeierhofEnemies(now) {
  if (!meierhofBattleOpen) { meierhofEnemyAnimationFrame = null; return; }
  const delta = meierhofEnemyLastFrameAt ? Math.min(.05, (now - meierhofEnemyLastFrameAt) / 1000) : 0;
  meierhofEnemyLastFrameAt = now;

  const livingEnemies = meierhofEnemies.filter((enemy) => enemy?.alive && enemy.element?.isConnected).sort((a,b)=>b.x-a.x);
  for (let i = 0; i < livingEnemies.length; i += 1) {
    const enemy = livingEnemies[i];
    if (meierhofBattleWon || enemy.state === "frozen") continue;

    if (enemy.state === "walking" || enemy.state === "escaping") {
      const ahead = livingEnemies[i - 1];
      const blockedByEnemy = ahead && ahead.x > enemy.x && (ahead.x - enemy.x) < MEIERHOF_ENEMY_SPACING;
      if (!blockedByEnemy) {
        enemy.x += enemy.speed * delta;
        enemy.element.style.left = `${enemy.x}%`;
      }

      if (enemy.state === "walking") {
        const target = getMeierhofFriendlyCollisionTarget(enemy);
        if (target && target.distance <= enemy.collisionWidth) {
          engageMeierhofEnemy(enemy, target.unit);
        } else if (enemy.x >= MEIERHOF_LOOT_POINT_X) {
          enemy.x = MEIERHOF_LOOT_POINT_X;
          enemy.element.style.left = `${enemy.x}%`;
          enemy.state = "plunder-wait";
          enemy.plunderAt = now + 1500;
        }
      } else if (enemy.x >= MEIERHOF_ENEMY_EXIT_X) {
        enemy.alive = false;
        enemy.element.remove();
      }
    } else if (enemy.state === "plunder-wait") {
      const target = getMeierhofFriendlyCollisionTarget(enemy);
      if (target && target.distance <= enemy.collisionWidth) {
        engageMeierhofEnemy(enemy, target.unit);
      } else if (now >= enemy.plunderAt) {
        applyMeierhofPlunder(enemy);
      }
    } else if (enemy.type === "club" && enemy.state === "windup") {
      const target = enemy.target;

      // V105: Während des Ausholens bleibt die Kollision fest. Nur der echte
      // Tod eines Kampfpartners darf die Verbindung lösen und den Marsch fortsetzen.
      if (!target?.alive) {
        releaseMeierhofCombat(enemy);
        enemy.state = "walking";
        enemy.paused = false;
        setMeierhofEnemySprite(enemy, "walk");
      } else {
        if (target.target !== enemy) target.target = enemy;
        target.paused = true;
        enemy.paused = true;

        if (now >= enemy.stateUntil) {
          enemy.state = "striking";
          enemy.stateUntil = now + 1000;
          setMeierhofEnemySprite(enemy, "strike");
          triggerMeierhofEnemyImpact(enemy);

          // Schaden entsteht exakt einmal beim sichtbaren Schlagbild.
          const damage = getMeierhofDamage(MEIERHOF_ENEMY_DAMAGE.club, target.armorClass);
          applyMeierhofDamage(target, damage, "bandit-club");
        }
      }
    } else if (enemy.type === "club" && enemy.state === "striking") {
      // Das Schlagbild bleibt unabhängig vom Treffer exakt eine Sekunde sichtbar.
      if (now < enemy.stateUntil) {
        enemy.paused = true;
        if (enemy.target?.alive) {
          enemy.target.paused = true;
          if (enemy.target.target !== enemy) enemy.target.target = enemy;
        }
      } else if (!enemy.target?.alive) {
        releaseMeierhofCombat(enemy);
        enemy.state = "walking";
        enemy.paused = false;
        setMeierhofEnemySprite(enemy, "walk");
      } else {
        enemy.target.paused = true;
        enemy.paused = true;
        enemy.state = "windup";
        enemy.stateUntil = now + 3000;
        setMeierhofEnemySprite(enemy, "windup");
      }
    } else if (enemy.type === "shield" && enemy.state === "engaged") {
      if (!enemy.target?.alive) {
        enemy.target = null;
        enemy.state = "walking";
        setMeierhofEnemySprite(enemy, "walk");
      } else if (now >= (enemy.nextAttackAt || 0)) {
        enemy.nextAttackAt = now + 1500;
        triggerMeierhofEnemyImpact(enemy);
        const damage = getMeierhofDamage(MEIERHOF_ENEMY_DAMAGE.shield, enemy.target.armorClass);
        applyMeierhofDamage(enemy.target, damage, "bandit-shield");
      }
    }
  }

  compactMeierhofFriendlyFormation();
  enforceMeierhofHardCollision();
  updateMeierhofFriendlyAttacks(now);
  updateMeierhofAutoCrossbows(now);
  updateMeierhofBannerAttacks(now);
  meierhofEnemyAnimationFrame = requestAnimationFrame(updateMeierhofEnemies);
}
function scheduleNextMeierhofEnemy() {
  if (!meierhofBattleOpen || !meierhofIntroCompleted || meierhofBattleWon || !meierhofEnemySpawnQueue.length) return;
  const type = meierhofEnemySpawnQueue.shift();
  createMeierhofEnemy(type);
  const cooldown = type === "club" ? 6000 : 4500;
  meierhofEnemySpawnTimer = window.setTimeout(() => {
    meierhofEnemySpawnTimer = null;
    scheduleNextMeierhofEnemy();
  }, cooldown);
}
function startMeierhofEnemies() {
  clearMeierhofEnemies();
  meierhofEnemySpawnQueue = ["club", "club", "club", "club", "club", "club", "shield", "shield", "shield", "shield", "shield", "shield"];
  for (let i = meierhofEnemySpawnQueue.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [meierhofEnemySpawnQueue[i], meierhofEnemySpawnQueue[j]] = [meierhofEnemySpawnQueue[j], meierhofEnemySpawnQueue[i]];
  }
  scheduleNextMeierhofEnemy();
  meierhofEnemyLastFrameAt = 0;
  meierhofEnemyAnimationFrame = requestAnimationFrame(updateMeierhofEnemies);
}
function clearMeierhofEnemies() {
  if (meierhofEnemySpawnTimer !== null) window.clearTimeout(meierhofEnemySpawnTimer);
  meierhofEnemySpawnTimer = null;
  meierhofEnemySpawnQueue = [];
  if (meierhofEnemyAnimationFrame !== null) cancelAnimationFrame(meierhofEnemyAnimationFrame);
  meierhofEnemyAnimationFrame = null;
  meierhofEnemyLastFrameAt = 0;
  meierhofEnemies.splice(0).forEach((enemy) => {
    if (enemy?.target) releaseMeierhofCombat(enemy.target);
    enemy.element?.remove();
  });
  meierhofEnemyLayer?.querySelectorAll(".meierhof-impact-dust").forEach((el) => el.remove());
  meierhofMarchingUnits.forEach((unit) => { if (unit) unit.paused = false; });
}

function clearMeierhofDynamicUnits() {
  meierhofMarchingUnits.splice(0).forEach(({ element, healthBar }) => { element?.remove(); healthBar?.remove(); });
  meierhofOccupiedFormationSlots.clear();
  meierhofMarchLayer?.querySelectorAll(".meierhof-dust-puff").forEach((el) => el.remove());
  clearMeierhofEnemies();
}
function tryRecruitMeierhofUnit(unitKey) {
  if (!meierhofBattleOpen || !meierhofIntroCompleted || !meierhofProductionUnlocked) return;
  if (performance.now() < meierhofProductionCooldownUntil) return;
  const cooldown = MEIERHOF_RECRUITMENT_COOLDOWNS[unitKey];
  if (!cooldown || (meierhofUnitStock[unitKey] ?? 0) <= 0) return;
  if (!spawnAndMarchMeierhofUnit(unitKey)) return;
  meierhofUnitStock[unitKey] -= 1;
  updateMeierhofStockDisplay(unitKey);
  playMeierhofRecruitSound(unitKey);
  startMeierhofCooldown(cooldown);

  // V108: Der ausbildbare Armbrustschütze benutzt denselben gelben
  // Produktionskreis am Zelt wie jede andere Einheit. Die explizite
  // Sichtbarkeit verhindert, dass ein unmittelbar beginnender Auto-Pose-
  // Wechsel den Kreis im ersten Render-Frame verdeckt.
  if (Number(unitKey) === 4) {
    meierhofCooldown?.classList.add("is-active");
    meierhofCooldown?.setAttribute("aria-hidden", "false");
  }
}
function updateMeierhofAimPosition(event) {
  if (!meierhofAimingActive || !meierhofBattleStage || !meierhofAimUi) return;
  const rect = meierhofBattleStage.getBoundingClientRect();
  const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
  const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
  meierhofAimUi.style.left = `${x}px`;
  meierhofAimUi.style.top = `${y}px`;
}
function stopMeierhofReload(resetProgress = true) {
  if (meierhofReloadAnimationFrame !== null) cancelAnimationFrame(meierhofReloadAnimationFrame);
  meierhofReloadAudioToken += 1;
  if (meierhofActiveReloadSound) { stopAndResetMeierhofAudio(meierhofActiveReloadSound); meierhofActiveReloadSound = null; }
  if (meierhofActiveReadySound) { stopAndResetMeierhofAudio(meierhofActiveReadySound); meierhofActiveReadySound = null; }
  meierhofReloadAnimationFrame = null;
  meierhofReloadActive = false;
  meierhofControlHeld = false;
  if (!meierhofShotPoseActive) setMeierhofGarrisonCrossbowPose("idle");
  if (resetProgress && !meierhofReloadComplete) {
    meierhofReloadRing?.style.setProperty("--meierhof-reload-progress", "0deg");
    meierhofReloadIndicator?.classList.remove("is-visible", "is-complete");
    meierhofReloadIndicator?.setAttribute("aria-hidden", "true");
  }
}
function resetMeierhofAiming() {
  stopMeierhofReload(true);
  stopAllMeierhofCrossbowSounds();
  clearMeierhofShotPoseTimer();
  setMeierhofGarrisonCrossbowPose("idle");
  meierhofBattleStage?.querySelectorAll(".meierhof-crossbow-bolt").forEach((bolt) => bolt.remove());
  meierhofAimingActive = false;
  meierhofPlayerWeaponLoaded = true;
  meierhofReloadComplete = false;
  meierhofAimUi?.classList.remove("is-active");
  meierhofAimUi?.setAttribute("aria-hidden", "true");
  meierhofReloadIndicator?.classList.remove("is-visible", "is-complete");
  meierhofReloadRing?.style.setProperty("--meierhof-reload-progress", "0deg");
  meierhofBattleStage?.classList.remove("has-meierhof-aim");
}
function activateMeierhofAiming() {
  meierhofAimingActive = true;
  meierhofPlayerWeaponLoaded = true;
  meierhofReloadComplete = false;
  meierhofAimUi?.classList.add("is-active");
  meierhofAimUi?.setAttribute("aria-hidden", "false");
  meierhofBattleStage?.classList.add("has-meierhof-aim");
}
function stopAndResetMeierhofAudio(audio) {
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}
function stopAllMeierhofCrossbowSounds() {
  [...meierhofCrossbowWindSounds, ...meierhofCrossbowReadySounds, ...meierhofCrossbowShotSounds].forEach(stopAndResetMeierhofAudio);
  meierhofActiveReloadSound = null;
  meierhofActiveReadySound = null;
  meierhofReloadAudioToken += 1;
}
function playRandomMeierhofSound(pool) {
  if (!pool.length) return null;
  const audio = pool[Math.floor(Math.random() * pool.length)];
  pool.forEach((item) => { if (item !== audio) stopAndResetMeierhofAudio(item); });
  stopAndResetMeierhofAudio(audio);
  void audio.play().catch(() => {});
  return audio;
}

function startMeierhofReloadAudioChain() {
  const token = ++meierhofReloadAudioToken;
  meierhofActiveReloadSound = playRandomMeierhofSound(meierhofCrossbowWindSounds);
  const wind = meierhofActiveReloadSound;
  if (!wind) return;
  const onEnded = () => {
    wind.removeEventListener("ended", onEnded);
    if (token !== meierhofReloadAudioToken || !meierhofControlHeld || !meierhofBattleOpen) return;
    meierhofActiveReloadSound = null;
    meierhofActiveReadySound = playRandomMeierhofSound(meierhofCrossbowReadySounds);
  };
  wind.addEventListener("ended", onEnded, { once: true });
}

function fireMeierhofPlayerShot(targetX, targetY) {
  if (!meierhofBattleStage) return;
  playRandomMeierhofSound(meierhofCrossbowShotSounds);

  const rect = meierhofBattleStage.getBoundingClientRect();
  const sourceX = rect.width * 0.466;
  const sourceY = rect.height * 0.625;
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const distance = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  const bolt = document.createElement("span");
  bolt.className = "meierhof-crossbow-bolt";
  bolt.style.left = `${sourceX}px`;
  bolt.style.top = `${sourceY}px`;
  bolt.style.transform = `translateY(-50%) rotate(${angle}deg)`;
  meierhofBattleStage.appendChild(bolt);

  const duration = Math.max(180, Math.min(520, distance * 0.55));
  const startedAt = performance.now();
  const fly = (now) => {
    if (!bolt.isConnected || !meierhofBattleOpen) { bolt.remove(); return; }
    const progress = Math.min(1, (now - startedAt) / duration);
    const x = sourceX + dx * progress;
    const y = sourceY + dy * progress;
    bolt.style.left = `${x}px`;
    bolt.style.top = `${y}px`;
    bolt.style.opacity = String(progress > .86 ? Math.max(0, 1 - (progress - .86) / .14) : 1);
    if (progress < 1) requestAnimationFrame(fly);
    else {
      const clickXPercent = (targetX / rect.width) * 100;
      let target = null;
      let best = Infinity;
      for (const enemy of meierhofEnemies) {
        if (!enemy.alive) continue;
        const d = Math.abs(enemy.x - clickXPercent);
        if (d < best && d <= 5.5) { best = d; target = enemy; }
      }
      if (target) applyMeierhofDamage(target, getMeierhofDamage(MEIERHOF_FRIENDLY_DAMAGE[4], target.armorClass), "garrison-crossbow");
      bolt.remove();
    }
  };
  requestAnimationFrame(fly);
}
function beginMeierhofReload() {
  if (!meierhofAimingActive || meierhofPlayerWeaponLoaded || meierhofReloadActive) return;
  meierhofControlHeld = true;
  if (meierhofShotPoseActive) {
    meierhofQueuedReloadAfterShot = true;
    return;
  }
  meierhofReloadActive = true;
  meierhofReloadComplete = false;
  meierhofReloadStartedAt = performance.now();
  setMeierhofGarrisonCrossbowPose("reload");
  startMeierhofReloadAudioChain();
  meierhofReloadIndicator?.classList.add("is-visible");
  meierhofReloadIndicator?.classList.remove("is-complete");
  meierhofReloadIndicator?.setAttribute("aria-hidden", "false");
  const draw = (now) => {
    if (!meierhofReloadActive || !meierhofControlHeld || !meierhofBattleOpen) return;
    const progress = Math.min(1, (now - meierhofReloadStartedAt) / MEIERHOF_RELOAD_DURATION);
    meierhofReloadRing?.style.setProperty("--meierhof-reload-progress", `${progress * 360}deg`);
    if (progress < 1) meierhofReloadAnimationFrame = requestAnimationFrame(draw);
    else {
      meierhofReloadAnimationFrame = null;
      meierhofReloadActive = false;
      meierhofReloadComplete = true;
      meierhofPlayerWeaponLoaded = true;
      setMeierhofGarrisonCrossbowPose("idle");
      meierhofReloadIndicator?.classList.add("is-complete");
    }
  };
  meierhofReloadAnimationFrame = requestAnimationFrame(draw);
}
function cancelMeierhofReloadOnRelease() {
  meierhofQueuedReloadAfterShot = false;
  if (!meierhofReloadActive) {
    meierhofControlHeld = false;
    meierhofReloadAudioToken += 1;
    if (meierhofActiveReloadSound) { stopAndResetMeierhofAudio(meierhofActiveReloadSound); meierhofActiveReloadSound = null; }
    if (meierhofActiveReadySound) { stopAndResetMeierhofAudio(meierhofActiveReadySound); meierhofActiveReadySound = null; }
    return;
  }
  meierhofReloadComplete = false;
  stopMeierhofReload(true);
}
function resetMeierhofBattleVisuals() {
  resetMeierhofAiming();
  resetMeierhofOutcomeUi();
  meierhofProductionUnlocked=false;
  stopMeierhofCooldown();
  clearMeierhofDynamicUnits();
  resetMeierhofStock();
  [meierhofLord,meierhofBanditFlag,meierhofCamp,meierhofCrossbowDefender,meierhofFarmerDefender,meierhofSpearmanDefenderOne,meierhofSpearmanDefenderTwo,...meierhofSelectionUnits,...meierhofSelectionKeys,...meierhofStockCounts].forEach((el)=>el?.classList.remove("is-visible"));
  meierhofCountdown?.classList.remove("is-active");
  meierhofCountdown?.setAttribute("aria-hidden","true");
  if (meierhofCountdownNumber) { meierhofCountdownNumber.classList.remove("is-showing"); meierhofCountdownNumber.textContent=""; }
  battleStartHorn.pause(); battleStartHorn.currentTime=0;
}
async function revealMeierhofElement(element, pause=190) {
  if (!meierhofBattleOpen || !element) return false;
  element.classList.add("is-visible");
  await meierhofDelay(420 + pause);
  return meierhofBattleOpen;
}
async function playMeierhofGarrisonSoundAndWait(audio) {
  if (!audio) {
    await meierhofDelay(200);
    return meierhofBattleOpen;
  }

  audio.pause();
  audio.currentTime = 0;

  let finished = false;

  await new Promise((resolve) => {
    const finish = () => {
      if (finished) return;
      finished = true;
      audio.removeEventListener("ended", finish);
      audio.removeEventListener("error", finish);
      resolve();
    };

    audio.addEventListener("ended", finish, { once: true });
    audio.addEventListener("error", finish, { once: true });

    const playResult = audio.play();
    if (playResult && typeof playResult.catch === "function") {
      playResult.catch(finish);
    }

    // Sicherheitsfallback, falls ein Browser kein ended-Ereignis liefert.
    const fallbackMs =
      Number.isFinite(audio.duration) && audio.duration > 0
        ? Math.ceil(audio.duration * 1000) + 350
        : 8000;

    const fallbackTimer = window.setTimeout(() => {
      meierhofTimers.delete(fallbackTimer);
      finish();
    }, fallbackMs);

    meierhofTimers.add(fallbackTimer);
  });

  if (!meierhofBattleOpen) return false;

  await meierhofDelay(200);
  return meierhofBattleOpen;
}

async function revealMeierhofGarrisonUnit(element, audio) {
  if (!meierhofBattleOpen || !element) return false;

  element.classList.add("is-visible");

  // Sound startet gleichzeitig mit der Smooth-Einblendung.
  return playMeierhofGarrisonSoundAndWait(audio);
}

async function revealMeierhofUnitColumn() {
  for (let i=0;i<meierhofSelectionUnits.length;i+=1) {
    if (!meierhofBattleOpen) return;
    meierhofSelectionUnits[i]?.classList.add("is-visible");
    await meierhofDelay(380);
    if (!meierhofBattleOpen) return;
    meierhofSelectionKeys[i]?.classList.add("is-visible");
    meierhofStockCounts[i]?.classList.add("is-visible");
    // V93: Die linke Einheitenleiste erscheint absichtlich vollständig stumm.
    await meierhofDelay(330);
  }
}
async function runMeierhofCountdown() {
  for (const number of [3,2,1]) {
    if (!meierhofBattleOpen) return;
    meierhofCountdown.classList.add("is-active");
    meierhofCountdown.setAttribute("aria-hidden","false");
    meierhofCountdownNumber.classList.remove("is-showing");
    meierhofCountdownNumber.textContent=String(number);
    void meierhofCountdownNumber.offsetWidth;
    meierhofCountdownNumber.classList.add("is-showing");
    await meierhofDelay(1000);
  }
  if (!meierhofBattleOpen) return;
  meierhofCountdownNumber.classList.remove("is-showing");
  meierhofCountdownNumber.textContent="";
  meierhofCountdown.classList.remove("is-active");
  meierhofCountdown.setAttribute("aria-hidden","true");
  battleStartHorn.pause(); battleStartHorn.currentTime=0; battleStartHorn.volume=.9; battleStartHorn.play().catch(()=>{});
  meierhofIntroCompleted=true;
  meierhofProductionUnlocked=true;
  activateMeierhofAiming();
  startMeierhofEnemies();
  meierhofIntroRunning=false;
}
async function runMeierhofOpeningSequence() {
  if (meierhofIntroRunning || !meierhofBattleOpen) return;
  meierhofIntroRunning=true;
  await revealMeierhofElement(meierhofLord);
  await revealMeierhofElement(meierhofBanditFlag);
  await revealMeierhofElement(meierhofCamp);

  // V93: Erst nach vollständigem Sound + 0,2 s erscheint die nächste Garnisonseinheit.
  await revealMeierhofGarrisonUnit(meierhofCrossbowDefender, unitKeySound4);
  await revealMeierhofGarrisonUnit(meierhofFarmerDefender, unitKeySound1);
  await revealMeierhofGarrisonUnit(meierhofSpearmanDefenderOne, unitKeySound2);
  await revealMeierhofGarrisonUnit(meierhofSpearmanDefenderTwo, unitKeySound2);

  if (!meierhofBattleOpen) return;
  // Die linke Leiste bleibt bei ihrer Einblendung vollständig stumm.
  await revealMeierhofUnitColumn();
  if (!meierhofBattleOpen) return;
  await meierhofDelay(250);
  await runMeierhofCountdown();
}
async function startMeierhofBattle() {
  if (meierhofBattleOpen || meierhofIntroRunning || !meierhofBattleScreen) return;
  banditEventStartButton?.setAttribute("disabled","");
  banditEventModal?.classList.remove("is-open");
  await meierhofDelay(560);
  resetMeierhofBattleVisuals();
  meierhofBattleScreen.hidden=false;
  meierhofBattleOpen=true;
  meierhofIntroCompleted=false;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    meierhofBattleScreen.classList.add("is-open");
    meierhofSurrenderButton?.focus();
    window.setTimeout(()=>{ if(meierhofBattleOpen) runMeierhofOpeningSequence(); },350);
  }));
}
function returnFromMeierhofBattle() {
  if (!meierhofBattleOpen) return;
  clearMeierhofTimers();
  meierhofBattleOpen=false;
  meierhofIntroRunning=false;
  resetMeierhofBattleVisuals();
  meierhofBattleScreen.classList.remove("is-open");
  window.setTimeout(()=>{
    meierhofBattleScreen.hidden=true;
    banditEventModal?.classList.remove("is-open","is-cinematic");
    banditEventStartButton?.removeAttribute("disabled");
  },870);
}
window.addEventListener("keydown", (event) => {
  if (event.repeat || !meierhofBattleOpen) return;
  const unitKey = Number(event.key);
  if (![1,2,3,4,5,6,7].includes(unitKey)) return;
  event.preventDefault();
  tryRecruitMeierhofUnit(unitKey);
});

meierhofBattleStage?.addEventListener("pointermove", updateMeierhofAimPosition);
meierhofBattleStage?.addEventListener("pointerdown", (event) => {
  if (event.button !== 0 || !meierhofAimingActive || !meierhofPlayerWeaponLoaded) return;
  if (event.target.closest("button")) return;
  const rect = meierhofBattleStage.getBoundingClientRect();
  fireMeierhofPlayerShot(event.clientX - rect.left, event.clientY - rect.top);
  beginMeierhofShotPose();
  meierhofPlayerWeaponLoaded = false;
  meierhofReloadComplete = false;
  meierhofReloadIndicator?.classList.remove("is-visible", "is-complete");
  meierhofReloadIndicator?.setAttribute("aria-hidden", "true");
  meierhofReloadRing?.style.setProperty("--meierhof-reload-progress", "0deg");
});
window.addEventListener("keydown", (event) => {
  if (!meierhofBattleOpen || !meierhofAimingActive) return;
  if (event.code !== "ControlLeft" && event.code !== "ControlRight") return;
  event.preventDefault();
  if (event.repeat) return;
  beginMeierhofReload();
});
window.addEventListener("keyup", (event) => {
  if (event.code !== "ControlLeft" && event.code !== "ControlRight") return;
  cancelMeierhofReloadOnRelease();
});
window.addEventListener("blur", () => cancelMeierhofReloadOnRelease());

meierhofSurrenderButton?.addEventListener("click",returnFromMeierhofBattle);


// V94 – Schwertsound einmal beim Betreten des Buttons „GEFECHT STARTEN“.
if (banditEventStartButton && banditEventStartHoverSound) {
  banditEventStartButton.addEventListener("pointerenter", () => {
    banditEventStartHoverSound.pause();
    banditEventStartHoverSound.currentTime = 0;
    void banditEventStartHoverSound.play().catch(() => {});
  });
}