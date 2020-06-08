
/// declare page variables
let $currentSection = document.getElementById('about-section')

const goToPage = () => {
  const newSectionName = event.target.id.replace('-nav','') //converts button name to 'about', 'projects' ect..
  const newSection = document.getElementById(newSectionName+'-section') //identifies the new section's name
  $currentSection.className = 'do-not-display' //hides the old current selection
  $currentSection = newSection // updates the current selection
  $currentSection.className = '' //undoes the do-not-display
}

const redirectTo = () => {
  console.log(event.target.altText)
  // window.location.href = "https://doomtyper.web.app/"

}

