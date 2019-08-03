import getIntNumber from './getOpacityNumber';

const aussie = (value) => {
    const opacity = getIntNumber(value);
    return {
        white: `rgba(223, 249, 251, ${opacity})`,   // COASTAL BREEZE
        gray: `rgba(199, 236, 238, ${opacity})`,    // HINT OF ICE PACK
        darkGray: `rgba(149, 175, 192, ${opacity})`,    // SOARING EAGLE
        black: `rgba(83, 92, 104, ${opacity})`, // WIZARD GREY

        lightGreen: `rgba(186, 220, 88, ${opacity})`,   //JUNE BUD
        green: `rgba(106, 176, 76, ${opacity})`,    // PURE APPLE
        deepBlue: `rgba(48, 51, 107, ${opacity})`,  // DEEP KOAMARU
        deepDarkBlue: `rgba(19, 15, 64, ${opacity})`,   // DEEP COVE

        lightRed: `rgba(255, 121, 121, ${opacity})`,    // PINK GLAMOUR
        red: `rgba(235, 77, 75, ${opacity})`,   // CARMINE PINK
        lightBlue: `rgba(104, 109, 224, ${opacity})`,   // EXODUS FRUIT
        blue: `rgba(72, 52, 212, ${opacity})`,  // BLURPLE

        lightOrange: `rgba(255, 190, 118, ${opacity})`, // SPICED NECTARINE
        orange: `rgba(240, 147, 43, ${opacity})`,   // QUINCE JELLY
        lightPink: `rgba(224, 86, 253, ${opacity})`,    // HELIOTROPE
        pink: `rgba(190, 46, 221, ${opacity})`, // STEEL PINK

        lightYellow: `rgba(246, 229, 141, ${opacity})`, // BEEKEEPER
        yellow: `rgba(249, 202, 36, ${opacity})`,   // TURBO
        lightSky: `rgba(126, 214, 223, ${opacity})`,    // MIDDLE BLUE
        sky: `rgba(34, 166, 179, ${opacity})`   // GREENLAND GREEN
    }
}

export default aussie;