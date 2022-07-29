const hamburgerLines = document.querySelector(".hamburgerLines")
const links = document.querySelector(".links");

hamburgerLines.addEventListener("click", () => {
    hamburgerLines.classList.toggle("active");
    links.classList.toggle("active");
})