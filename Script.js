//Skapar funktionen toggle menu som då är ansvarig för ändringen mellan att ha allt där uppe
//och flytta allt under en hamburger bar
function toggleMenu() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
