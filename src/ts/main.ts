import {Background} from "./Background";
import {settings} from "./settings";
import {Ground} from "./Ground";

const flappyBird = {
    init() {
        this.canvas = document.getElementById(settings.canvasID);
        this.ctx = this.canvas.getContext("2d");
        this.sprite = new Image();
        this.sprite.src = settings.spriteURL;
        this.addEventListeners();
        this.background = new Background(this.sprite, this.ctx);
        this.ground = new Ground(this.sprite, this.ctx, this.canvas);
    },
    addEventListeners() {
        this.sprite.addEventListener("load", () => {
            this.animate();
        })
    },
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw();
        this.ground.update();
        this.ground.draw();
        requestAnimationFrame(this.animate.bind(this));
    },
};

flappyBird.init();