// grabbing from the dom
let $slideShow = document.querySelector("#skills-slideshow-container");
let $skillsSection = document.querySelector("#skills-section");
let $sectionMenu = document.querySelector("#section-menu");

//Fetch this data from skillsData.json
let photographyImageData = [];
let livePerfomanceData = [];
let musicProductionData = [];
let beatsData = [];
let teachingData = [];

// These will be useful with the carousel
let slideIndex = 0;
let slideLength = 0;

fetch("data/skillsData.json")
  .then((response) => response.json())
  .then((data) => {
    // pull data in as global variables
    photographyImageData = data.photography;
    livePerfomanceData = data.livePerformance;
    musicProductionData = data.musicProduction;
    beatsData = data.beats;
    teachingData = data.teaching;

    //initially load teachingData
    addIframes(teachingData);
  });

$skillsSection.addEventListener("click", (event) => {
  // after button is pressed, an option for the dynamic dispatch is selected
  const choice = determineButton(event);
  // function is dispatched
  const dispatch = {
    rightArrowButton: nextSlide,
    leftArrowButton: previousSlide,
    "Live Performance": () => {
      addIframes(livePerfomanceData);
    },
    "Music Production": () => {
      addIframes(musicProductionData);
    },
    Beats: () => {
      addIframes(beatsData);
    },
    Teaching: () => {
      addIframes(teachingData);
    },
    Photography: () => {},
    default: () => {},
  };
  dispatch[choice]();
});

// This function will determine which button was pressed
function determineButton(clickEvent) {
  const classList = clickEvent.target.classList;
  if (classList.contains("left-arrow-button")) {
    return "rightArrowButton";
  } else if (classList.contains("right-arrow-button")) {
    return "rightArrowButton";
  } else if (classList.contains("section-menu-button-child")) {
    return clickEvent.target.textContent.trim();
  } else {
    return "default";
  }
}

function nextSlide() {
  slideIndex = recalculateIndex(slideIndex, true, slideLength); //decrement index
  console.log(`showing slide at ${slideIndex}`);
  showSlideAt(slideIndex);
}

function previousSlide() {
  slideIndex = recalculateIndex(slideIndex, false, slideLength); // increment index
  showSlideAt(slideIndex);
}

function clearSlides() {
  $slideShow.innerHTML = "";
}

// this will swap out all of the iframes with data from a particular array
function addIframes(array) {
  clearSlides();
  addSlideShow($slideShow, array, true);
  showSlideAt(0);
  slideIndex = 0;
  slideLength = array.length;
  updateIframeWidths();
}

var x = window.matchMedia("(max-width: 700px)");

let mediaQueries = range(1, 2000).map((number) =>
  window.matchMedia(`(width: ${number}px)`)
);

let matched = mediaQueries.map((query) => query.matches);

// update the iframe styling on resize
window.addEventListener("resize", () => {
  updateIframeWidths();
});

// This iterates through the iframes and updates each of them to fit their container
function updateIframeWidths() {
  const skillsSectionWidth = document.querySelector(".section-menu")
    .offsetWidth;
  document.querySelectorAll("iframe").forEach((iframe) => {
    iframe.width = skillsSectionWidth - 20;
    iframe.height = (iframe.width * 9) / 16;
  });
}
