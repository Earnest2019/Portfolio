// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

let myBtn = document.getElementById("btt");

function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myBtn.style.display = "block";
      } else {
        myBtn.style.display = "none";
      }
}
window.onscroll = function() {
  scrollFunction();
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Add your javascript here
