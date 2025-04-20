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
menu.classList.remove("hidden"); // ochish
menu.classList.add("hidden");    // yopish

// script.js
const toggleBtn = document.getElementById('toggleBtn');
const html = document.documentElement; // <html> element

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
});
