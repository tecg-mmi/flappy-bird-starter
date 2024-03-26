export const settings = {
    birdie: {
        maxFallSpeed: 7,
        gravity: 0.9,
        width: 34,
        height: 24,
        maxFrameInterval: 5,
        frames: [
            {sx: 6, sy: 982},
            {sx: 62, sy: 982},
            {sx: 118, sy: 982}
        ]
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
    tubes: {
        gap: 80,
        speed: 3,
        sw: 52,
        sh: 320,
        dx: 0,
        dy: 0,
        dw: 52,
        dh: 320,
        maxTubesPairs: 3,
        maxFrameInterval: {min: 80, max: 100},
        randomY: {min: -150, max: -30},
        horizontalGap: {min: 100, max: 200},
        top: {
            sx: 113,
            sy: 647,
        },
        bottom: {
            sx: 168,
            sy: 647,
        },


    },
}