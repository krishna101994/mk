/* =====================================================
   MK PORTFOLIO V2.0
   TYPING.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const element = document.getElementById("typing-text");

    if (!element) return;

    const roles = [

        "Web Developer",

        "AI Engineer",

        "Machine Learning Engineer",

        "Business Solutions Consultant",

        "Telecom Specialist",

        "Freelance Developer"

    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            element.textContent = currentRole.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;
            }

        } else {

            element.textContent = currentRole.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length) {

                    roleIndex = 0;

                }

            }

        }

        const speed = deleting ? 45 : 90;

        setTimeout(typeEffect, speed);

    }

    typeEffect();

});
