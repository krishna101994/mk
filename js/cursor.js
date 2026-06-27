/* =====================================================
   MK PORTFOLIO V2.0
   CURSOR.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";

    });

    function animateCursor() {

        outlineX += (mouseX - outlineX) * 0.18;
        outlineY += (mouseY - outlineY) * 0.18;

        outline.style.left = outlineX + "px";
        outline.style.top = outlineY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    const hoverItems = document.querySelectorAll(
        "a, button, .btn, .card, .project-card, .tech-card"
    );

    hoverItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            outline.style.width = "70px";
            outline.style.height = "70px";
            outline.style.borderColor = "#22D3EE";

        });

        item.addEventListener("mouseleave", () => {

            outline.style.width = "40px";
            outline.style.height = "40px";
            outline.style.borderColor = "rgba(34,211,238,.5)";

        });

    });

});
