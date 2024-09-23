// Reload function
var logo = document.getElementById("logo");
function pageReload() {
  window.location.reload();
  console.log("Reload page!!");
}
logo.addEventListener("click", pageReload);

// TypeScript code
var typed = new Typed("#element", {
  strings: ["Web Developer", "Web designer"],
  typeSpeed: 50,
});
