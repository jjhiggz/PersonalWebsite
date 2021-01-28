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

const soundcloudEmbed = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1029461755&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/higgzmadethebeat" title="HIGGZ (Humblegawwd)" target="_blank" style="color: #cccccc; text-decoration: none;">`;
const videographyEmbed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ESZ74OzpG7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
