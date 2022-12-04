
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});




var min = document.getElementById("min")
var sec = document.getElementById("sec")

var s = 0
var m = 30

function countdownTimer() {
    s = s - 1

    if (s == -1) {
        s = 59
        m = m -1
    }

    min.innerHTML = m < 10 ? "0" + m : m
    sec.innerHTML = s < 10 ? "0" + s : s
    
} setInterval(countdownTimer, 1000)

