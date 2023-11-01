const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

const wave = document.querySelector(".wave")
const fact = document.querySelector(".fact");
const wave1 = document.querySelector(".wave1");
const wave2 = document.querySelector(".wave2");
const wave3 = document.querySelector(".wave3");
const wave4 = document.querySelector(".wave4");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting){
        fact.style.color = "#733e1d";
        wave1.style.backgroundImage = "url(assets/brown-wave.png)";
        wave2.style.backgroundImage = "url(assets/brown-wave.png)";
        wave3.style.backgroundImage = "url(assets/brown-wave.png)";
        wave4.style.backgroundImage = "url(assets/brown-wave.png)";
          
    } else{
        fact.style.color = "";
        wave1.style.backgroundImage = "";
        wave2.style.backgroundImage = "";
        wave3.style.backgroundImage = "";
        wave4.style.backgroundImage = "";
    }
});
});

observer.observe(wave)

menuToggle.classList.toggle("active")
menu.classList.toggle("active")
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});
