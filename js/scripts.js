function openMobileNav() {
  const mobileSidebar = document.querySelector("#mobile-nav");
  const iconBarsNav = document.querySelector("#icon-bar-nav");

  mobileSidebar.classList.remove("hidden");
  iconBarsNav.classList.add("hidden");
}

function closeMobileNav() {
  const mobileSidebar = document.querySelector("#mobile-nav");
  const iconBarsNav = document.querySelector("#icon-bar-nav");

  mobileSidebar.classList.add("hidden");
  iconBarsNav.classList.remove("hidden");
}

function bgNavBar() {
  const navbarBg = document.body.querySelector("#main-nav");
  if (!navbarBg) {
    return;
  }
  if (window.scrollY === 0) {
    navbarBg.classList.remove("bg-zinc-800");
  } else {
    navbarBg.classList.add("bg-zinc-800");
  }
}

bgNavBar();
document.addEventListener("scroll", bgNavBar);

document
  .querySelector("#icon-bar-nav")
  .addEventListener("click", openMobileNav);

document
  .querySelector("#icon-close-nav")
  .addEventListener("click", closeMobileNav);

document.querySelectorAll(".link-mobile").forEach((element) => {
  element.addEventListener("click", closeMobileNav);
});

document.querySelector("#mobile-nav").addEventListener("click", closeMobileNav);
