let photographyImages = [];
let livePerformanceVideos = [];
let soundcloud = [];
let slideIndex = 0;

let $slideShow = document.querySelector("#skills-slideshow-container");
let $skillsSection = document.querySelector("#skills-section");
let $sectionMenu = document.querySelector("#section-menu");
let logger;

$skillsSection.addEventListener("click", (event) => {
  // after button is pressed, an option for the dynamic dispatch is selected
  const choice = determineButton(event);

  // function is dispatched
  const dispatch = {
    rightArrowButton: nextSlide,
    leftArrowButton: previousSlide,
    "Live Performance": () => {},
    "Music Production": () => {},
    Photography: () => {},
    Videography: () => {},
    Beats: () => {},
    default: () => {},
  };
  dispatch[choice]();
});

fetch("data/skillsData.json")
  .then((response) => response.json())
  .then((data) => {
    photographyImages = data.photography;
    livePerformanceVideos = data.livePerformance;
    soundcloud = [...data.soundcloud];
    // $slideShow.append(htmlToElement(soundcloud[0]));

    slideLength = livePerformanceVideos.length;
    addSlideShow($slideShow, livePerformanceVideos, true);
    showSlideAt(slideIndex);
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
  showSlideAt(slideIndex);
}

function previousSlide() {
  slideIndex = recalculateIndex(slideIndex, false, slideLength); // increment index
  showSlideAt(slideIndex);
}

function clearSlides() {
  $slideShow.innerHTML = "";
}

// function addSoundcloud() {
//   clearSlides();
//   addSlideShow($slideShow, soundcloud, true);
// }
