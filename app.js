
/// declare page variables
let $currentSection = document.getElementById('about-section')
let $currentSlideshow = document.getElementById('about-slideshow')
let newSection
let newSectionName

const aboutPictures = [
  {
    id: '1',
    name: 'chill basecamp',
    img: './src/about/chill basecamp.JPEG',
    description: 'In my spare time, I enjoy hiking. Recently I hiked the fourteener "quandary peak"'
  },
  {
    id: '2',
    name: 'Jon in a Band',
    img: './src/about/Jon In a Band.jpg',
    description: 'I used to be in a band called "Kona the Band". We are on spotify if you are curious'
  },
  {
    id: '3',
    name: 'nice photo',
    img: './src/about/Nice Mountain Picture.jpg',
    description: "- life is like a box of chocolates, you never know what you're gonna get"
  },
  
]


const goToPageHandler = (initialLoad = false) => {
  return (() => {
    if(initialLoad){
      newSectionName = 'about'
    }
    else{
      newSectionName = event.target.id.replace('-nav','') //converts button name to 'about', 'projects' ect..
    }
    newSection = document.getElementById(newSectionName+'-section') //identifies the new section's name
    $currentSection.className = 'do-not-display' //hides the old current selection
    $currentSection = newSection // updates the current selection
    $currentSection.className = '' //undoes the do-not-display
    addSlideShow(newSectionName)
  })()
}

const addSlideShow = (section) => {
  const isSlideShow = {
    about:true,
    projects: false,
    skills: false,
    contact: false,
  }

  if(isSlideShow[section]){
    const $slideShow = document.getElementById(section + '-slideshow')
    const aboutSlides = aboutPictures.map( picture => createSlide( picture, $slideShow) )
    aboutSlides.forEach(slide => $slideShow.append(slide))
    $slideShow.innerHTML = $slideShow.innerHTML + 
      `<a 
        class="prev"
        onclick="plusSlides(-1)"
      >
        &#10094;
      </a>
      <a
        class="next"
        onclick="plusSlides(1)"
      >
        &#10095;
      </a>`
  }
}

const createSlide = ( image, slideshow) => {
  let $div = document.createElement('div')
  let $caption = document.createElement('div')
  let $numberText = document.createElement('div')
  let $image = document.createElement('img')

  $numberText.className = 'numbertext'
  $numberText.innerText = image.id
  $image.src = image.img
  $caption.className = 'text'
  $caption.innerText = image.description

  $div.className = 'mySlides fade'
  $div.append($numberText)
  $div.append($image)
  $div.append($caption)

  return $div
  
}

var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// // Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log('hit')
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
document.addEventListener('DOMContentLoaded',() => {
  goToPageHandler(true)
  showSlides(1)
})

