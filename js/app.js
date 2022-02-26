const allSections = document.querySelectorAll("section"); // get all sections from document
const navbarList = document.getElementById("navbar__list"); // get 'ul' element by id
const fragment = document.createDocumentFragment(); // create new fragment it is good for performance
// DOMContentLoaded event
document.addEventListener("DOMContentLoaded", (evt) => {
  // loop for each section (nav)
  allSections.forEach((section) => {
    const liElement = document.createElement("li");
    // create 'li' element

    const anchorElement = document.createElement("a");
    // ctreate 'a' element
    anchorElement.classList.add("menu__link");
    // add the class to 'a' element
    anchorElement.textContent = section.getAttribute("data-nav");
    // get the name of the section
    anchorElement.href = `#${section.id}`;
    // get the id of the section

    liElement.appendChild(anchorElement); // add 'a' element to every 'li' element

    fragment.appendChild(liElement); // add 'li' to the fragment
  });
  navbarList.appendChild(fragment); // add fragment to 'ul' element
});

// scroll event
document.addEventListener("scroll", (evt) => {
  // loop for each section to active the class when we scrolling down
  allSections.forEach((section) => {
    let getBounding = section.getBoundingClientRect().top; // to get information about the size from the top
    const equNavLink = document.querySelector(
      `[href="#${section.getAttribute("id")}"]`
    ); // to link nav to sections by id
    // condition to know when the class active when we scrolling down
    if (getBounding > 0 && getBounding <= 200) {
      section.classList.add("your-active-class");
      equNavLink.classList.add("active-li");
    } else {
      equNavLink.classList.remove("active-li");
      section.classList.remove("your-active-class");
    }
  });
});

// click event
document.addEventListener("click", (evt) => {
  evt.preventDefault();
  allSections.forEach((section) => {
    // condtion if we click around the links
    if (evt.target.classList.contains("menu__link")) {
      const equSecLink = document.getElementById(
        evt.target.getAttribute("href").substring(1)
      ); // to link sections to nav by href
      // object to do behavior and block
      equSecLink.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// to get the icon of hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");
// to get the nav bar
const nav = document.querySelector(".navbar__menu");
//when we click on hamburger menu
hamburgerMenu.addEventListener("click", (evt) => {
  // toggle the class to close the menu and open it too
  nav.classList.toggle("active-hum");
});
// when we select a section then the menu closed
nav.addEventListener("click", (evt) => {
  nav.classList.toggle("active-hum");
});
