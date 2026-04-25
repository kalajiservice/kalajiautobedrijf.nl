// =========================
// LEGAL PAGES SCRIPT
// (privacy + voorwaarden)
// =========================


// Smooth scroll (optioneel netjes gevoel)
document.documentElement.style.scrollBehavior = "smooth";


// Header links altijd veilig (geen errors als elementen ontbreken)
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // gewoon clean gedrag, geen extra JS nodig
  });
});


// Scroll naar boven functie (optioneel handig)
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ESC key → sluit eventueel menu (future proof)
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    document.querySelector(".lang-menu")?.classList.remove("active");
  }
});


// Zorg dat pagina clean blijft (geen homepage effects)
document.querySelectorAll(".active, .flipped").forEach(el => {
  el.classList.remove("active");
  el.classList.remove("flipped");
});
