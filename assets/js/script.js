'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}





/**
 * navbar toggle
 */

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('toggle');
  });
});




/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);




document.addEventListener("DOMContentLoaded", function() {
  const updates = [
      { symbol: "💹", chart: "📈", rate: "1.1700", text: "EUR/USD", rateColor: "green" },
      { symbol: "🟡", chart: "📉", rate: "1785.50", text: "Gold", rateColor: "red" },
      { symbol: "💵", chart: "📈", rate: "94.30", text: "USD Index", rateColor: "green" },
      { symbol: "🛢️", chart: "📉", rate: "75.20", text: "Crude Oil", rateColor: "red" },
      { symbol: "💷", chart: "📈", rate: "1.3850", text: "GBP/USD", rateColor: "green" },
      { symbol: "📉", chart: "📉", rate: "3400.00", text: "Stock Market", rateColor: "red" },
      { symbol: "🇦🇺💲", chart: "📉", rate: "0.7250", text: "AUD/USD", rateColor: "red" },
      { symbol: "₿", chart: "📈", rate: "47,500", text: "Bitcoin", rateColor: "green" },
      { symbol: "💴", chart: "📈", rate: "110.50", text: "USD/JPY", rateColor: "green" },
      { symbol: "🌍", chart: "📉", rate: "1220.00", text: "Emerging Markets", rateColor: "red" },
      { symbol: "🏦", chart: "📉", rate: "0.25%", text: "Interest Rates", rateColor: "blue" },
      { symbol: "💹", chart: "📈", rate: "1.1700", text: "EUR/USD", rateColor: "green" },
      { symbol: "🟡", chart: "📉", rate: "1785.50", text: "Gold", rateColor: "red" },
      { symbol: "💵", chart: "📈", rate: "94.30", text: "USD Index", rateColor: "green" },
      { symbol: "🛢️", chart: "📉", rate: "75.20", text: "Crude Oil", rateColor: "red" },
      { symbol: "💷", chart: "📈", rate: "1.3850", text: "GBP/USD", rateColor: "green" },
      { symbol: "📉", chart: "📉", rate: "3400.00", text: "Stock Market", rateColor: "red" },
      { symbol: "🇦🇺💲", chart: "📉", rate: "0.7250", text: "AUD/USD", rateColor: "red" },
      { symbol: "₿", chart: "📈", rate: "47,500", text: "Bitcoin", rateColor: "green" },
      { symbol: "💴", chart: "📈", rate: "110.50", text: "USD/JPY", rateColor: "green" },
      { symbol: "🌍", chart: "📉", rate: "1220.00", text: "Emerging Markets", rateColor: "red" },
      { symbol: "🏦", chart: "📉", rate: "0.25%", text: "Interest Rates", rateColor: "blue" }
      // Add more updates as needed
  ];

  const carousel = document.querySelector(".carousel");

  updates.forEach(update => {
      const item = document.createElement("div");
      item.classList.add("carousel-item");
      item.innerHTML = `
          <div class="update-header">
              ${update.symbol} <strong>${update.text}</strong>
          </div>
          <div class="update-body">
              ${update.chart} | Rate: <strong style="color:${update.rateColor}">${update.rate}</strong>
          </div>
      `;
      carousel.appendChild(item);
  });

  function adjustAnimationSpeed() {
      const itemWidth = document.querySelector('.carousel-item').offsetWidth;
      const totalWidth = itemWidth * updates.length;
      const animationTime = totalWidth / 50; // Adjust the speed by changing the divisor
      document.querySelector('.carousel').style.animationDuration = `${animationTime}s`;
  }

  adjustAnimationSpeed();
  window.addEventListener('resize', adjustAnimationSpeed);
});

