const NUM_CONFETTI = 350;
const COLORS = [[85,71,106], [174,61,99], [219,56,83], [244,92,68], [248,182,70]];
const PI_2 = 2 * Math.PI;
let w = window.innerWidth;
let h = window.innerHeight;
let xpos = 0.5;
let confetti = [];
let animationRunning = false;
let canvas;
let context;

function initConfetti() {
    canvas = document.createElement("canvas");
    canvas.id = "world";
    document.body.appendChild(canvas);
    context = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;

    window.addEventListener('resize', () => {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    });

    const range = (a, b) => (b - a) * Math.random() + a;

    const drawCircle = (x, y, r, style) => {
        context.beginPath();
        context.arc(x, y, r, 0, PI_2, false);
        context.fillStyle = style;
        context.fill();
    };

    document.onmousemove = (e) => {
        xpos = e.pageX / w;
    };

    class Confetti {
        constructor() {
            this.style = COLORS[~~range(0, 5)];
            this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
            this.r = ~~range(2, 6);
            this.r2 = 2 * this.r;
            this.replace();
        }

        replace() {
            this.opacity = 0;
            this.dop = 0.03 * range(1, 4);
            this.x = range(-this.r2, w - this.r2);
            this.y = range(-20, h - this.r2);
            this.xmax = w - this.r;
            this.ymax = h - this.r;
            this.vx = range(0, 2) + 8 * xpos - 5;
            this.vy = 0.7 * this.r + range(-1, 1);
        }

        draw() {
            this.x += this.vx;
            this.y += this.vy;
            this.opacity += this.dop;
            if (this.opacity > 1) {
                this.opacity = 1;
                this.dop *= -1;
            }
            if (this.opacity < 0 || this.y > this.ymax) {
                this.replace();
            }
            if (!(0 < this.x && this.x < this.xmax)) {
                this.x = (this.x + this.xmax) % this.xmax;
            }
            drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
        }
    }

    for (let i = 0; i < NUM_CONFETTI; i++) {
        confetti.push(new Confetti());
    }

    const titleElement = document.getElementById('title');
    titleElement.addEventListener("click", () => {
        animationRunning = !animationRunning;
        if (animationRunning) {
            step();
        } else {
            context.clearRect(0, 0, w, h);
        }
    });

    const step = () => {
        if (!animationRunning) return;
        requestAnimationFrame(step);
        context.clearRect(0, 0, w, h);
        confetti.forEach(c => c.draw());
    };
}

window.addEventListener('load', initConfetti);