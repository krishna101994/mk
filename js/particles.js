/* =====================================================
   MK PORTFOLIO V2.0
   PARTICLES.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.createElement("canvas");
    canvas.id = "particles";

    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    class Particle {

        constructor() {

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.radius = Math.random() * 2 + 1;

            this.dx = (Math.random() - .5) * .4;
            this.dy = (Math.random() - .5) * .4;

        }

        update() {

            this.x += this.dx;
            this.y += this.dy;

            if (this.x < 0 || this.x > canvas.width)
                this.dx *= -1;

            if (this.y < 0 || this.y > canvas.height)
                this.dy *= -1;

        }

        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = "rgba(34,211,238,.35)";
            ctx.fill();

        }

    }

    for (let i = 0; i < 80; i++) {

        particles.push(new Particle());

    }

    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(p => {

            p.update();
            p.draw();

        });

        requestAnimationFrame(animate);

    }

    animate();

});
