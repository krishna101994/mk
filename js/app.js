/* =====================================================
   MK PORTFOLIO V2.0
   APP.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       NAVBAR SCROLL
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* ==========================================
       SCROLL PROGRESS
    ========================================== */

    const progress = document.querySelector(".progress-bar");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = (scrollTop / docHeight) * 100;

        progress.style.width = percent + "%";

    });

    /* ==========================================
       SCROLL TO TOP
    ========================================== */

    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================================
       REVEAL ON SCROLL
    ========================================== */

    const reveals = document.querySelectorAll(".card, .project-card, .tech-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.15

    });

    reveals.forEach(item => {

        item.classList.add("reveal");

        observer.observe(item);

    });

});
