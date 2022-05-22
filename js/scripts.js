function openMobileNav() {
  const mobileSidebar = document.querySelector("#mobile-nav");
  const menuNav = document.querySelector("#menu-nav");

  mobileSidebar.classList.remove("hidden");
  menuNav.classList.add("hidden");
}

function closeMobileNav() {
  const mobileSidebar = document.querySelector("#mobile-nav");
  const menuNav = document.querySelector("#menu-nav");

  mobileSidebar.classList.add("hidden");
  menuNav.classList.remove("hidden");
}

document.querySelector("#menu-nav").addEventListener("click", openMobileNav);
document.querySelector("#close-nav").addEventListener("click", closeMobileNav);
document.querySelector("#mobile-nav").addEventListener("click", closeMobileNav);
