// SHOW MENU
const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("nav__toggle"),
  navClose = document.getElementById("nav__close");

// show menu
if (navToggle) {
  navToggle.onclick = () => {
    navMenu.classList.add("show-menu");
  };
}
//hide menu
if (navClose) {
  navClose.onclick = () => {
    navMenu.classList.remove("show-menu");
  };
}

// REMOVE MENU MOBILE
const navLinks = document.querySelectorAll(".nav__link");

function linkActionCloseMenu() {
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", linkActionCloseMenu)
);

// HOME SWIPER

let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// CHANGE HEADER BACKGROUND
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// NEW SWIPER

let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
});

//NAV ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

//SHOW SCROLL-UP
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 460) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// SCROLL REVEAL

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });
