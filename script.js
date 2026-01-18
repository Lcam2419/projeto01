$(document).ready(function() {
    $('.top-bar').text('Bem-vindo ao nosso site! Aproveite sua visita.');
    $('.home-content p').css('font-size', '18px');
    $('.home-content h1').css('font-size', '36px');
    $('.top-bar').css({
        'padding': '5px 0',
        'text-align': 'center',
        'font-size': '14px',
        'color': '#000'
    });
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // fecha o menu no mobile
    navLinks.classList.remove('active');
  });
});
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("🍔 Produto adicionado ao carrinho!");
  });
  let cartCount = 0;
const cartSpan = document.getElementById("cart-count");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    if (cartSpan) {
      cartSpan.textContent = cartCount;
    }
  });
});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

});
