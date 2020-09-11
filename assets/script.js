document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#home");
  var headerHeight = header.clientHeight;
  /* HAMBURGER MENU TOGGLE */
  const menuIcon = document.querySelector(".hamburger-menu");
  const myNavbar = document.querySelector(".my-navbar");

  menuIcon.addEventListener("click", () => {
    myNavbar.classList.toggle("change");
  });

  window.addEventListener("scroll", () => {
    changeHamburgerColor();
    showButtonUp();
  });

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
