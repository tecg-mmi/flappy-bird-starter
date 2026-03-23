export class Loop {
    private readonly _callback: () => void;
    private _handlerID: number;


    constructor(callback: () => void) {
        this._callback = callback;
    }

    start() {
        this._handlerID = requestAnimationFrame(() => {
            this._animate();
        });
    }

    private _animate() {
        this._callback();

        this._handlerID = requestAnimationFrame(() => {
            this._animate()
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