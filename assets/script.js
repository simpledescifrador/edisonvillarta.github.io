document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#home");
  var headerHeight = header.clientHeight;
  /* HAMBURGER MENU TOGGLE */
  const menuIcon = document.querySelector(".hamburger-menu");
  const myNavbar = document.querySelector(".my-navbar");

  const navLinks = document.querySelectorAll(".mynav-link");

  menuIcon.addEventListener("click", () => {
    toggleNavBar();
  });

  window.addEventListener("scroll", () => {
    changeHamburgerColor();
    showButtonUp();
  });

  //Hide Navbar when navlink is clicked
  navLinks.forEach((element) => {
    element.addEventListener("click", () => {
      toggleNavBar();
    });
  });

  function toggleNavBar() {
    myNavbar.classList.toggle("change");
  }

  function changeHamburgerColor() {
    const hamburgerLine = document.querySelectorAll(".line");

    for (let index = 0; index < hamburgerLine.length; index++) {
      var el = hamburgerLine[index];
      if (
        document.body.scrollTop > headerHeight ||
        document.documentElement.scrollTop > headerHeight
      ) {
        el.classList.remove("line-white");
        el.classList.add("line-primary");
      } else {
        el.classList.remove("line-primary");
        el.classList.add("line-white");
      }
    }
  }

  function showButtonUp() {
    var btnUp = document.querySelector("#button-up");
    if (
      document.body.scrollTop > headerHeight ||
      document.documentElement.scrollTop > headerHeight
    ) {
      btnUp.classList.add("show");
    } else {
      btnUp.classList.remove("show");
    }
  }
});
