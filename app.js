
/// declare page variables
let $currentSection = document.getElementById('about-section')
let $currentSlideshow = document.getElementById('about-slideshow')
let newSection
let newSectionName
let slides
let dots
let slideIndex = 1;

const range = ( start, end ) => {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}
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
const soundcloudEmbed = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1029461755&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/higgzmadethebeat" title="HIGGZ (Humblegawwd)" target="_blank" style="color: #cccccc; text-decoration: none;">HIGGZ (Humblegawwd)</a> · <a href="https://soundcloud.com/higgzmadethebeat/sets/i-got-impatient" title="I Got Impatient" target="_blank" style="color: #cccccc; text-decoration: none;">I Got Impatient</a></div>`


let $soundcloud = document.createElement('div')
$soundcloud.innerHTML = soundcloudEmbed

const skillsTopics = ['Live Performance', "Music Production", "Photography", "Software Development", "Videography"]
let skills = {}

const getExamples = ( skillTopic ) => {
  let examples = []
  for( let i = 1 ; i< 7; i++ ){
    examples.push({
      img: `./src/skills/${skillTopic}/${i}.jpg`,
      description: skillTopic + '-' + 'image'+ '-' + i,
      id: i,
      name: 'picture'
    })
  }
  return examples
}

skillsTopics.forEach( skillTopic => {
  skills[skillTopic] = getExamples(skillTopic)
})

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
    loadSection(newSectionName)()
    
  })()
}
function loadSection(section){ 
  return {
    about: loadAbout,
    projects: loadProjects,
    skills: loadSkills,
    contact: loadContact
  }[section]
}

const loadAbout = () => {
  addSlideShow('about', aboutPictures)
}
const loadProjects = () => {
}

const loadSkills = () => {
  clearSlides()
  clearDropDown()
  addSlideShow('skills', skills.Photography)
  addDropDown('skills-section', Object.keys(skills ))
}
const clearDropDown = () => {
  if(document.getElementById('dropdown-section')){
    document.querySelector('#dropdown-section').remove()
  }
}
const addDropDown = (parentNodeID, items) => {
  // 
  let $parentNode = document.getElementById(parentNodeID)
  let $dropDown = document.createElement('div')
  let $button = document.createElement('button')
  let $myDropDown = document.createElement('div')

  $button.className = "dropbtn"
  $button.addEventListener('click', showDropDown )
  $button.innerText = "Check out my other skills "
  $myDropDown.className = 'dropdown-content'
  $myDropDown.id = 'myDropdown'
  items.forEach(item => {
    $myDropDown.innerHTML += `<a href="#" onclick="showSkill('${item}')">${item}</a>`
  })
  $dropDown.append($button,$myDropDown)
  $dropDown.id = 'dropdown-section'
  $parentNode.append($dropDown)
}

function showSkill(item){
  return {
    "Live Performance": () => console.log('Live performance'),
    "Music Production": () => showMusic(),
    "Photography": () => console.log('photography'),
    "Software Development":() => console.log('Software Development'),
    "Videography":()=> console.log('Videography')
  }[item]()
}

function showMusic(){
  clearSlides()
  let $container = document.querySelector('.slideshow-container')
  $container.innerHTML += soundcloudEmbed
}

function showDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
const loadContact = () => {
  console.log('loading Contact')
}

const addSlideShow = (section, array) => {
  const $slideShow = document.getElementById(section + '-slideshow')
    const slides = array.map( picture => createSlide( picture, $slideShow) )
    slides.forEach(slide => {$slideShow.append(slide)
    })
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
    showSlides(1)
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


// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// // Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function clearSlides(){
  range(0,slides.length - 1).forEach( () => {
    const slide = document.querySelector(".mySlides");
    slide.remove()
  })
}

function showSlides(n){
  let i;
  slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

document.addEventListener('DOMContentLoaded',() => {
  goToPageHandler(true)
  showSlides(1)
})

