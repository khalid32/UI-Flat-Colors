import getIntNumber from './getOpacityNumber';

const russian = (value) => {
    const opacity = getIntNumber(value);
    return {
        darkPink: `rgba(207, 106, 135,${opacity})`,    // OLD GERANIUM
        darkerPink: `rgba(196, 69, 105,${opacity})`,   // DEEP ROSE
        gray: `rgba(89, 98, 117,${opacity})`,  // PENCIL LEAD
        black: `rgba(48, 57, 82,${opacity})`,  // BISCAY

        lightRed: `rgba(231, 127, 103,${opacity})`,    // BREWED MUSTARD
        red: `rgba(225, 95, 65,${opacity})`,   // TIGERLILY
        pinker: `rgba(234, 134, 133,${opacity})`,  // APPLE VALLEY
        // Sorry!! :( I have no unique names in my head!
        pink: `rgba(230, 103, 103,${opacity})`,    // PORCELAIN ROSE

        lightBlue: `rgba(119, 139, 235,${opacity})`,   // SOFT BLUE
        blue: `rgba(84, 109, 229,${opacity})`, // CORNFLOWER
        lightSky: `rgba(99, 205, 218,${opacity})`, // SQUEAKY
        sky: `rgba(61, 193, 211,${opacity})`,  // BLUE CURACAO

        lightYellow: `rgba(247, 215, 148,${opacity})`, // ROSY HIGHLIGHT
        yellow: `rgba(245, 205, 121,${opacity})`,  // SUMMERTIME
        lighterPink: `rgba(248, 165, 194,${opacity})`, // ROGUE PINK
        lightPink: `rgba(247, 143, 179,${opacity})`,   // FLAMINGO PINK

        lightOrange: `rgba(243, 166, 131,${opacity})`, // CREAMY PEACH
        orange: `rgba(241, 144, 102,${opacity})`,  // SAWTOOTH AAK
        lightPurple: `rgba(120, 111, 166,${opacity})`, // PURPLE MOUNTAIN MAJESTY
        purple: `rgba(87, 75, 144,${opacity})` // PURPLE CORALLITE
    }
}

export default russian;