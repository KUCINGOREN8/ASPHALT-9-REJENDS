const mobileTrigger = document.querySelector(".mobile-trigger");
const navElement = document.querySelector(".navbar");

mobileTrigger.addEventListener("click", () => {
  navElement.classList.toggle("open");
});

window.addEventListener("click", (e) => {
  if (e.target.closest(".navbar")) return;
  navElement.classList.remove("open");
});
