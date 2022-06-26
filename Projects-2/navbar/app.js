const navBtn = document.querySelector(".btn");
const links = document.querySelector(".links");

navBtn.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
