const indicatorContainer = document.querySelector(".slider-indicator");

const sliderContainer = document.querySelector(".slider-container");

const slideLength = sliderContainer.querySelectorAll("li").length;

const sliderWidth = sliderContainer.getBoundingClientRect().width;

let activeIndicator = 0;

indicatorContainer.innerHTML = "";
for (let i = 0; i < slideLength; i++) {
  indicatorContainer.insertAdjacentHTML(
    "afterbegin",
    `<div class="indicator"></div>`
  );
}

function updateIndicator() {
  const indicators = Array.from(document.querySelectorAll(".indicator"));
  indicators.forEach((item, i) => {
    item.classList.remove("active");
    if (i === activeIndicator) item.classList.add("active");
  });
}

sliderContainer.addEventListener("scroll", (e) => {
  const scrollLeft = e.target.scrollLeft;
  const maxScrollLeft = e.target.scrollWidth - e.target.clientWidth;

  const scrollPercent = scrollLeft / maxScrollLeft;
  activeIndicator = Math.round(scrollPercent * (slideLength - 1));

  updateIndicator();
});
