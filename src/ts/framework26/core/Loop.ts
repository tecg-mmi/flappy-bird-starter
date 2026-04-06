export class Loop {
    private readonly _callback: () => void;
    private _handlerID: number;
    private readonly _targetFPS: number;
    private readonly _frameInterval: number;
    private _lastFrameTime: number;

    constructor(callback: () => void, fps: 30 | 60 | 120 = 60) {
        this._callback = callback;
        this._targetFPS = fps;
        this._frameInterval = 1000 / this._targetFPS;
        this._lastFrameTime = 0;
    }

    start() {
        this._lastFrameTime = performance.now();
        this._handlerID = requestAnimationFrame((currentTime) => {
            this._animate(currentTime);
        });
    }

    private _animate(currentTime: number) {
        const deltaTime = currentTime - this._lastFrameTime;

        if (deltaTime >= this._frameInterval) {
            this._lastFrameTime = currentTime - (deltaTime % this._frameInterval);
            this._callback();
        }

        this._handlerID = requestAnimationFrame((time) => {
            this._animate(time);
        });
    }

    stop() {
        cancelAnimationFrame(this._handlerID)
        this._handlerID = null;
    }

    isLooping() {
        return (this._handlerID)!!;
    }
}