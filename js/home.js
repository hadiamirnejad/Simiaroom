// #region Fit Cards

$(".suggest-old").addClass("d-none");
const toggleClicked = (id) => {
  const ele = document.getElementById(id);
  let otherBtn;
  if (id === "btn-toggle-1") {
    otherBtn = document.getElementById("btn-toggle-2");
    ele.style.setProperty("background-position", "left");
    ele.style.setProperty("color", "var(--color-1)");
    otherBtn.style.setProperty("background-position", "left");
    otherBtn.style.setProperty("color", "var(--color-3)");

    $(".suggest-new").removeClass("d-none");
    $(".suggest-old").addClass("d-none");
  } else {
    ele.style.setProperty("background-position", "right");
    ele.style.setProperty("color", "var(--color-1)");
    otherBtn = document.getElementById("btn-toggle-1");
    otherBtn.style.setProperty("background-position", "right");
    otherBtn.style.setProperty("color", "var(--color-3)");

    $(".suggest-old").removeClass("d-none");
    $(".suggest-new").addClass("d-none");
  }
};
// #endregion

// const customers = document.querySelectorAll(".customers-content");
// maxHeight = 0;
// customers.forEach(ele => {
//     if (ele.clientHeight > maxHeight) maxHeight = ele.clientHeight;
// })

// customers.forEach(ele => {
//     ele.style.height = `${maxHeight}px`;
// })

// =====================================
// let items = document.querySelectorAll(".carousel .carousel-item");

// items.forEach((el) => {
//   const minPerSlide = 5;
//   let next = el.nextElementSibling;
//   for (var i = 1; i < minPerSlide; i++) {
//     if (!next) {
//       // wrap carousel by using first child
//       next = items[0];
//     }
//     let cloneChild = next.cloneNode(true);
//     el.appendChild(cloneChild.children[0]);
//     next = next.nextElementSibling;
//   }
// });

let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

// Auto hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("nav").css("top", "0");
  } else {
    $("nav").css("top", `-5rem`);
  }
  prevScrollpos = currentScrollPos;
};

// #region SIDEBAR
$("section").click(function (e) {
  $(".sidebar-menu").css("right", "-18rem");
});
$(".menu-btn").click(function () {
  $(".sidebar-menu").css("right", "0");
});

$(".close-btn").click(function () {
  $(".sidebar-menu").css("right", "-18rem");
});
// #endregion

$(".accordion-button").click(function () {
  if (
    $(
      `.qa-expand[data-bs-target='${$(this).attr("data-bs-target")}']`
    ).hasClass("fa-plus")
  ) {
    $(
      `.qa-expand[data-bs-target='${$(this).attr("data-bs-target")}']`
    ).removeClass("fa-plus");
    $(
      `.qa-expand[data-bs-target='${$(this).attr("data-bs-target")}']`
    ).addClass("fa-minus");
  } else {
    $(
      `.qa-expand[data-bs-target='${$(this).attr("data-bs-target")}']`
    ).removeClass("fa-minus");
    $(
      `.qa-expand[data-bs-target='${$(this).attr("data-bs-target")}']`
    ).addClass("fa-plus");
  }
});
