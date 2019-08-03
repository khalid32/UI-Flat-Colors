import getIntNumber from './getOpacityNumber';

const french = (value) => {
    const opacity = getIntNumber(value);
    return {
        lightGreen: `rgba(184, 233, 148,${opacity})`,  // PARADISE GREEN
        green: `rgba(120, 224, 143,${opacity})`,   // AURORA GREEN
        lightCyan: `rgba(56, 173, 169,${opacity})`,    // WATERFALL
        cyan: `rgba(7, 153, 146,${opacity})`,  // REEF ENCOUNTER

        lightSky: `rgba(130, 204, 221,${opacity})`,    // SPRAY
        sky: `rgba(96, 163, 188,${opacity})`,  // DUPAIN
        darkSky: `rgba(60, 99, 130,${opacity})`,   // GOOD SAMARITAN
        darkerSky: `rgba(10, 61, 98,${opacity})`,  // FOREST BLUES

        lightBlue: `rgba(106, 137, 204,${opacity})`,   // LIVID
        blue: `rgba(74, 105, 189,${opacity})`, // AZRAQ BLUE
        darkBlue: `rgba(30, 55, 153,${opacity})`,  // YUE GUAND LAN BLUE
        darkerBlue: `rgba(12, 36, 97,${opacity})`, // DARK SAPPHIRE

        lightRed: `rgba(248, 194, 145,${opacity})`,    // MELON MELODY
        red: `rgba(229, 80, 57,${opacity})`,   // MANDARIN RED
        darkRed: `rgba(235, 47, 6,${opacity})`,    // TOMATO RED
        pink: `rgba(183, 21, 64,${opacity})`,  // JALAPENO RED

        lightYellow: `rgba(250, 211, 144,${opacity})`, // FLAT FLESH
        yellow: `rgba(246, 185, 59,${opacity})`,   // SQUASH BLOSSOM
        lightOrange: `rgba(250, 152, 58,${opacity})`,  // ICELAND POPPY
        orange: `rgba(229, 142, 38,${opacity})`    // CARROT ORANGE
    }
}

export default french;