const container = document.getElementById("container");
const overlay = document.getElementById("overlay");

// Background images
const images = ["dr11.jpg", "ds12.jpg", "ds13.jpg", "ds15.jpg"];
// Corresponding texts
const texts = [
  "Doctor Strange",
  "The Sorcerer Supreme",
  "Master of the Mystic Arts",
  "Protector of Earth",
  "The Multiverse Defender"
];

let i = 0;

// Show initial image & text
container.style.backgroundImage = `url('${images[i]}')`;
overlay.innerText = texts[i];

// Function to update background & overlay text
function updateBackground() {
  container.style.backgroundImage = `url('${images[i]}')`;
  overlay.innerText = texts[i];
}

// Change image with arrows
function changeimg(next = true) {
  if(next){
    i = (i + 1) % images.length;
  } else {
    i = (i - 1 + images.length) % images.length;
  }
  updateBackground();
}

// Change image with thumbnails
function showmini(index) {
  i = index;
  updateBackground();
}

// Attach click events to arrows
document.getElementById("arrow1").onclick = () => changeimg(false);
document.getElementById("arrow2").onclick = () => changeimg(true);

// Auto slideshow: change every 4 seconds
let slideshow = setInterval(() => {
  i = (i + 1) % images.length;
  updateBackground();
}, 4000);

// Optional: reset slideshow on user interaction
function resetSlideshow() {
  clearInterval(slideshow);
  slideshow = setInterval(() => {
    i = (i + 1) % images.length;
    updateBackground();
  }, 4000);
}

// Reset slideshow on interaction
document.getElementById("arrow1").onclick = () => { changeimg(false); resetSlideshow(); };
document.getElementById("arrow2").onclick = () => { changeimg(true); resetSlideshow(); };
document.querySelectorAll(".mini img").forEach((img, idx) => {
  img.onclick = () => { showmini(idx); resetSlideshow(); };
});
