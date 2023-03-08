var header = document.querySelector("header");
window.onscroll = function () {
  header.style.backgroundColor = "rgba(64, 78, 237, 0.9)";
  header.style.transition = "ease 0.5s";
};
window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    header.style.backgroundColor = "rgba(64, 78, 237, 1)";
    header.style.transition = "ease 0.5s";
  }
});
