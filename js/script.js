document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu-icon");
    menu.addEventListener("click", function() {
      menu.querySelector("i").classList.toggle("fa-times");
      document.querySelector("header").classList.toggle("toggle");
    });
    window.addEventListener("scroll", function() {
        document.getElementById("menu").classList.remove("fa-times");
        document.querySelector("header").classList.remove("toggle");
      });
      
    window.addEventListener("load", function() {
        document.getElementById("menu").classList.remove("fa-times");
        document.querySelector("header").classList.remove("toggle");
    });

    /* ================================= Smoth Scroling =================================*/

    document.querySelectorAll('a[href*="#"]').forEach(function(element) {
        element.addEventListener('click', function(event) {
          event.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          const targetPos = target.getBoundingClientRect().top + window.pageYOffset;
          window.scroll({
            top: targetPos,
            behavior: 'smooth'
          });
        });
    });
});


/* ================================= theme light and dark mode =================================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    const ScrollDay = document.querySelector(".alternate-style1");
    const ScrollNight = document.querySelector(".alternate-style2");
    if(document.body.classList.contains("dark"))
    {
        ScrollNight.removeAttribute("disabled");
        ScrollDay.setAttribute("disabled", "true");
    }
     else
    {
        ScrollNight.setAttribute("disabled", "true");
        ScrollDay.removeAttribute("disabled");
    }
    })

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})