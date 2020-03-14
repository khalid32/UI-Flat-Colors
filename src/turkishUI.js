import getIntNumber from './getOpacityNumber';

export const Turkish = (value) => {
    const opacity = getIntNumber(value);
    return {
        lightYellow: `rgba(255, 250, 101,${opacity})`, // UNMELLOW YELLOW
        yellow: `rgba(255, 242, 0,${opacity})`,    // DORN YELLOW
        gray: `rgba(75, 75, 75,${opacity})`,   // SHADOWED STEEL
        black: `rgba(61, 61, 61,${opacity})`,  // BALTIC SEA

        lightOrange: `rgba(255, 175, 64,${opacity})`,  // MANDARIN SORBET
        orange: `rgba(255, 159, 26,${opacity})`,   // RADIANT YELLOW
        lightBlue: `rgba(125, 95, 255,${opacity})`,    // LIGHT SLATE BLUE
        blue: `rgba(113, 88, 226,${opacity})`, // LIGHT INDIGO

        lightRed: `rgba(255, 77, 77,${opacity})`,  // LIGHT RED
        red: `rgba(255, 56, 56,${opacity})`,   // RED ORANGE
        lightCyan: `rgba(24, 220, 255,${opacity})`,    // NEON BLUE
        cyan: `rgba(23, 192, 235,${opacity})`, // SPIRO DISCO BALL

        lightPink: `rgba(255, 204, 204,${opacity})`,   // PRETTY PLEASE
        pink: `rgba(255, 184, 184,${opacity})`,    // YOUNG SALMON
        lightSky: `rgba(126, 255, 245,${opacity})`,    // ELECTRIC BLUE
        sky: `rgba(103, 230, 220,${opacity})`, // HAMMAM BLUE

        lightPurple: `rgba(205, 132, 241,${opacity})`, // BRIGHT LILAC
        purple: `rgba(197, 108, 240,${opacity})`,  // LIGHT PURPLE
        lightGreen: `rgba(50, 255, 126,${opacity})`,   // WINTERGREEN
        green: `rgba(58, 227, 116,${opacity})` // WEIRD GREEN
    }
}