import getIntNumber from './getOpacityNumber';

const swedish = (value) => {
    const opacity = getIntNumber(value);
    return {
        lightGreen: `rgba(11, 232, 129,${opacity})`,   // MINTY GREEN
        green: `rgba(5, 196, 107,${opacity})`, // GREEN TEAL
        darkGray: `rgba(72, 84, 96,${opacity})`,   // GOOD NIGHT!
        black: `rgba(30, 39, 46,${opacity})`,  // BLACK PEARL

        gray: `rgba(128, 142, 155,${opacity})`,    // LONDON SQUARE
        white: `rgba(210, 218, 226,${opacity})`,   //HINT OF ELUSIVE BLUE
        lightCyan: `rgba(52, 231, 228,${opacity})`,    // FRESH TURQUOISE
        cyan: `rgba(0, 216, 214,${opacity})`,  // JADE DUST

        lightSky: `rgba(75, 207, 250,${opacity})`, // MEGAMAN
        sky: `rgba(15, 188, 249,${opacity})`,  // SPIRO DISCO BALL
        lightRed: `rgba(255, 94, 87,${opacity})`,  // SUNSET ORANGE
        red: `rgba(255, 63, 52,${opacity})`,   // RED ORANGE

        lightBlue: `rgba(87, 95, 207,${opacity})`, // DARK PERIWINKLE
        blue: `rgba(60, 64, 198,${opacity})`,  // FREE SPEECH BLUE
        lightYellow: `rgba(255, 221, 89,${opacity})`,  // YRIEL YELLOW
        yellow: `rgba(255, 211, 42,${opacity})`,   // VIBRANT YELLOW

        lightPink: `rgba(239, 87, 119,${opacity})`,    // HIGHLIGHTER PINK
        pink: `rgba(245, 59, 87,${opacity})`,  // SIZZLING RED
        lightOrange: `rgba(255, 192, 72,${opacity})`,  // NARENJI ORANGE
        orange: `rgba(255, 168, 1,${opacity})` // CHROME YELLOW
    }
}

export default swedish;