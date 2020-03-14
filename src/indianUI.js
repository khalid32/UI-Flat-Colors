import getIntNumber from './getOpacityNumber';

export const Indian = (value) => {
    const opacity = getIntNumber(value);
    return {
        white: `rgba(202, 211, 200,${opacity})`,   // FALLING STAR
        black: `rgba(44, 58, 71,${opacity})`,  // SHIP'S OFFICER
        lightPurple: `rgba(214, 162, 232,${opacity})`, // BRIGHT UBE
        purple: `rgba(130, 88, 159,${opacity})`,   // HIGHLIGHTER LAVENDER

        cyan: `rgba(85, 230, 193,${opacity})`, // SWEET GARDEN
        darkCyan: `rgba(88, 177, 159,${opacity})`, // KEPPEL
        lightCyan: `rgba(154, 236, 219,${opacity})`,   // OASIS STREAM
        // that's a new one!!
        grayYellow: `rgba(189, 197, 129,${opacity})`,  // PINE GLADE

        yellow: `rgba(234, 181, 67,${opacity})`,   // HONEY GLOW
        lightYellow: `rgba(248, 239, 186,${opacity})`, // SARAWAK WHITE PEPPER
        lightPink: `rgba(253, 114, 114,${opacity})`,   // GEORGIA PEACH
        pink: `rgba(252, 66, 123,${opacity})`, // SASQUATCH SOCKS

        lightSky: `rgba(37, 204, 247,${opacity})`, // SPIRO DISCO BAR
        sky: `rgba(27, 156, 252,${opacity})`,  // CLEAR CHILL
        blue: `rgba(59, 59, 152,${opacity})`,  // BLUEBELL
        darkBlue: `rgba(24, 44, 97,${opacity})`,   // ENDING NAVY BLUE

        lightOrange: `rgba(254, 164, 127,${opacity})`, // ORCHID ORANGE
        orange: `rgba(249, 127, 81,${opacity})`,   // RICH GARDENIA
        darkPink: `rgba(179, 55, 113,${opacity})`, // FIERY FUCHSIA
        darkerPink: `rgba(109, 33, 79,${opacity})` // MAGENTA PURPLE
    }
}