import getIntNumber from './getOpacityNumber';

const flatUI = (value) => {
    const opacity = getIntNumber(value);
    return {
        black: `rgba(52, 73, 94, ${opacity})`,  // WET ASPHALT
        darkBlack: `rgba(44, 62, 80, ${opacity})`, // MIDNIGHT BLUE
        gray: `rgba(149, 165, 166, ${opacity})`, // CONCRETE
        darkGray: `rgba(127, 140, 141, ${opacity})`, // ASBESTOS

        lightGray: `rgba(189, 195, 199, ${opacity})`, // SILVER
        white: `rgba(236, 240, 241, ${opacity})`, // CLOUDS
        purple: `rgba(155, 89, 182, ${opacity})`, // WISTERIA
        darkPurple: `rgba(142, 68, 173, ${opacity})`, // AMETHYST

        blue: `rgba(52, 152, 219, ${opacity})`, // PETER RIVER
        darkBlue: `rgba(41, 128, 185, ${opacity})`, // BELIZE HOLE
        red: `rgba(231, 76, 60, ${opacity})`, // ALIZARIN
        darkRed: `rgba(192, 57, 43, ${opacity})`, // POMEGRANATE

        green: `rgba(46, 204, 113, ${opacity})`, // EMERALD
        darkGreen: `rgba(39, 174, 96, ${opacity})`, // NEPHRITIS
        orange: `rgba(230, 126, 34, ${opacity})`, // CARROT
        darkOrange: `rgba(211, 84, 0, ${opacity})`, // PUMPKIN

        cyan: `rgba(26, 188, 156, ${opacity})`, // TURQUOISE
        darkCyan: `rgba(22, 160, 133, ${opacity})`, // GREEN SEA
        yellow: `rgba(241, 196, 15, ${opacity})`, // SUN FLOWER
        darkYellow: `rgba(243, 156, 18, ${opacity})` // ORANGE
    }
}

export default flatUI;