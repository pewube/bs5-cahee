// bootstrap scrollspy fix

function hotfixScrollSpy() {
  var dataSpyList = [].slice.call(
    document.querySelectorAll('[data-bs-spy="scroll"]')
  );
  let curScroll = getCurrentScroll();
  dataSpyList.forEach(function (dataSpyEl) {
    let offsets = bootstrap.ScrollSpy.getInstance(dataSpyEl)["_offsets"];
    for (let i = 0; i < offsets.length; i++) {
      offsets[i] += curScroll;
    }
  });
}

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

window.onload = function () {
  hotfixScrollSpy();
  window.scrollBy(0, 1);
};

// navbar-collapse

const navbarCollapse = document.getElementById("navbarCollapse");
const navbarTogglerBtn = document.querySelector(".navbar-toggler");
const navbarCollapseLinks = document.querySelectorAll(
  "#navbarCollapse .nav-link"
);

navbarCollapseLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("collapse", "show");
    navbarCollapse.classList.add("collapse");
    navbarTogglerBtn.classList.add("collapsed");
    navbarTogglerBtn.setAttribute("aria-expanded", "false");
  });
});

// gallery modal/carousel

const buttons = [...document.querySelectorAll(".gallery__pictures  button")];
const carouselItems = [...document.querySelectorAll(".carousel-item")];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (item of carouselItems) {
      item.classList.remove("active");
    }

    carouselItems[
      buttons.indexOf(btn) >= 0 ? buttons.indexOf(btn) : 0
    ].classList.add("active");
  });
});
