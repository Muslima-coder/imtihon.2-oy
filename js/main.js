var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuCloseBtn = document.querySelector(".menu-close-btn"); // bu yerda ham class nomi to‘g‘ri bo‘lishi kerak

// Menyu ochish
menuBtn.addEventListener("click", function () {
  menu.classList.add("show");
});

// Menyu yopish
menuCloseBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});