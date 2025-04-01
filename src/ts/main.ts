import {settings} from "./settings";
import {Background} from "./Background";
import {Ground} from "./Ground";

const flappyBird = {
    init() {
        this.canvas = document.getElementById(settings.canvasID);
        this.ctx = this.canvas.getContext("2d");
        this.sprite = new Image();
        this.sprite.src = settings.spriteSRC;
        this.background = new Background(this.ctx, this.sprite);
        this.ground = new Ground(this.ctx, this.sprite, this.canvas);
        this.addEventListeners();
    },
    addEventListeners() {
        this.sprite.addEventListener("load", () => {
            this.animate();
        });
    },
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw();
        this.ground.animate();
        requestAnimationFrame(this.animate.bind(this));

    }
}
flappyBird.init();