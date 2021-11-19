let thumbnail = document.getElementsByClassName("thumbnail");
let slide = document.getElementById("slide");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");
buttonLeft.addEventListener("click", () => {
  slide.scrollLeft -= 125;
});
buttonRight.addEventListener("click", () => {
  // slide.scrollRight += 125;
  slide.scrollLeft += 125;
});
const maxScrollLeft = slide.scrollWidth - slide.clientWidth;
function autoPlay() {
  if (slide.scrollLeft > maxScrollLeft - 1) {
    slide.scrollLeft -= maxScrollLeft;
  } else {
    slide.scrollLeft += 1;
  }
}
let play = setInterval(autoPlay, 50);
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    }
  };
  updateCounter();
});
const nav1 = document.querySelector("nav1");
window.addEventListener("scroll", function () {
  let nav1 = document.querySelector("nav1");
  nav1.classList.toggle("sticky", window.screenY > 0);
});
