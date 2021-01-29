function addSlideShow($slideShow, images, isIframe = false) {
  images
    .map((image) => {
      if (!isIframe) {
        return createSlide(image, $slideShow);
      } else {
        return htmlToElement(image);
      }
    })
    .forEach(($slide) => {
      $slide.classList.add("my-slides", "fade");
      $slideShow.append($slide);
    });
}

function createSlide(image, slideshow) {
  let $slide = document.createElement("div");
  $slide.innerHTML = `
    <div class="numbertext">${image.id}</div>
    <img src="${image.img}" alt="to be replaces when I add data later" />
    <div class="text"/>
      ${image.description}
    </div>
    <a class="prev">&#10094;</a>
    <a class="next">&#10095;</a>
  `;

  return $slide;
}

function recalculateIndex(slideIndex, isDecrement, slideLength) {
  if (slideLength > 1) {
    if (isDecrement) {
      slideIndex = slideIndex > 0 ? slideIndex - 1 : slideLength - 1;
    } else {
      slideIndex = slideIndex + 1 > slideLength - 1 ? 0 : slideIndex + 1;
    }
  } else {
    slideIndex = 0;
  }
  console.log(slideIndex);
  return slideIndex;
}

//showSlideAt
function showSlideAt(slideIndex) {
  $slides = document.querySelectorAll(".my-slides");

  $slides.forEach(($slide, arrayIndex) => {
    if (slideIndex !== arrayIndex) {
      $slide.style.display = "none";
    } else {
      console.log("setting at " + arrayIndex);
      $slide.style.display = "block";
    }
  });
}
