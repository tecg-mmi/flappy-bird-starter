export const settings = {
    canvasID: "game",
    spriteURL: "src/img/sprite.png",
    birdie: {
        frames: [
            {
                sx: 6,
                sy: 982,
                sw: 35,
                sh: 35,
                dx: 72,
                dy: 200,
                dw: 35,
                dh: 35
            },
            {
                sx: 62,
                sy: 982,
                sw: 35,
                sh: 35,
                dx: 72,
                dy: 200,
                dw: 35,
                dh: 35
            },
            {
                sx: 118,
                sy: 982,
                sw: 35,
                sh: 35,
                dx: 72,
                dy: 200,
                dw: 35,
                dh: 35
            }
        ],
        maxFallSpeed: 10,
        gravity: 3,
        dxRatio: 0.25,
        maxFrameRate: 5,

    },
    background: {
        frame: {
            sx: 0,
            sy: 0,
            sw: 288,
            sh: 511,
            dx: 0,
            dy: 0,
            dw: 288,
            dh: 511
        }
    },
    ground: {
        frame: {
            sx: 584,
            sy: 0,
            sw: 336,
            sh: 112,
            dx: 0,
            dy: 0,
            dw: 336,
            dh: 112
        },
    },
    tubesPair: {
        tubesMinGap: -100,
        tubesMaxGap: 100,
        top: {
            sx: 110,
            sy: 645,
            sw: 55,
            sh: 325,
            dx: 200,
            dy: -150,
            dw: 55,
            dh: 325
        },
        bottom: {
            sx: 166,
            sy: 645,
            sw: 55,
            sh: 325,
            dx: 200,
            dy: 280,
            dw: 55,
            dh: 325
        }
    },
    gravity: 0.2
}