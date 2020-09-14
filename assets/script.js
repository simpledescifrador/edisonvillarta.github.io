document.onreadystatechange = function () {
  const loading = document.getElementById("loading");
  if (document.readyState === "complete") {
    var delayInMilliseconds = 1000; //1 second
    var fadeTarget = loading;
    setTimeout(function () {
      var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
        } else {
          clearInterval(fadeEffect);
        }
      }, 50);

      loading.remove(); //Remove the element
    }, delayInMilliseconds);
  }
};

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

  const btnUpId = document.getElementById("button-up");
  btnUpId.addEventListener("click", () => {
    navigateTo(btnUpId.getAttribute("data-nav"));
  });

  window.addEventListener("scroll", () => {
    changeHamburgerColor();
    showButtonUp();
  });

  navLinks.forEach((element) => {
    var section = element.getAttribute("data-nav");

    element.addEventListener("click", () => {
      navigateTo(section);
      // setActiveNavigation(element);
      toggleNavBar();
    });
  });

  //Hide Navbar when navlink is clicked
  function toggleNavBar() {
    myNavbar.classList.toggle("change");
  }

  // function setActiveNavigation(obj) {
  //   resetNavLinks(navLinks);
  //   obj.classList.add("is-active");
  // }

  // function resetNavLinks(navLinks) {
  //   navLinks.forEach(element => {
  //     element.classList.remove("is-active");
  //   });
  // }

  function navigateTo(id) {
    var obj = document.getElementById(id);
    window.scroll(0, findPosition(obj));
  }

  function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop];
    }
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
