let slideIndex = 0;
let slideLength = 0;
const $slideShow = document.querySelector("#about-slideshow");

fetch("data/aboutPictures.json")
  .then((response) => response.json())
  .then((images) => {
    slideLength = images.length;
    addSlideShow($slideShow, images);
    showSlideAt(slideIndex);
  });

//listen for button clicks
$slideShow.addEventListener("click", (event) => {
  if (event.target.classList.contains("prev")) {
    slideIndex = recalculateIndex(slideIndex, true, slideLength); //decrement index
    showSlideAt(slideIndex);
  } else if (event.target.classList.contains("next")) {
    slideIndex = recalculateIndex(slideIndex, false, slideLength); // increment index
    showSlideAt(slideIndex);
  }
});
