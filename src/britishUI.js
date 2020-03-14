import getIntNumber from './getOpacityNumber';

export const British = (value) => {
    const opacity = getIntNumber(value);
    return {
        blue: `rgba(72, 126, 176, ${opacity})`, // SEAROOK
        navalBlue: `rgba(64, 115, 158, ${opacity})`,    // NAVAL
        blackOne: `rgba(53, 59, 72, ${opacity})`,   // BLUE NIGHTS
        blackTwo: `rgba(47, 54, 64, ${opacity})`,   // ELECTROMAGNETIC

        green: `rgba(76, 209, 55, ${opacity})`, // DOWNLOAD PROGRESS
        darkGreen: `rgba(68, 189, 50, ${opacity})`, // SKIRRET GREEN
        deepBlue: `rgba(39, 60, 117, ${opacity})`,  // MAZARINE BLUE
        deepDarkBlue: `rgba(25, 42, 86, ${opacity})`,   // PICO VOID

        lightYellow: `rgba(251, 197, 49, ${opacity})`,  // RISE-N-SHINE
        yellow: `rgba(225, 177, 44, ${opacity})`,   // NANOHANACHA GOLD
        grayBlue: `rgba(127, 143, 166, ${opacity})`,    // BLUEBERRY SODA
        darkGrayBlue: `rgba(113, 128, 147, ${opacity})`,    // CHAIN GANG GREY

        lightPurple: `rgba(156, 136, 255, ${opacity})`, // PERIWINKLE
        purple: `rgba(140, 122, 230, ${opacity})`,  // MATT PURPLE
        white: `rgba(245, 246, 250, ${opacity})`,   // LYNX WHITE
        darkWhite: `rgba(220, 221, 225, ${opacity})`,   // HINT OF PENSIVE

        lightSky: `rgba(0, 168, 255, ${opacity})`,  // PROTOSS PYLON
        sky: `rgba(0, 151, 230, ${opacity})`,   // VANADYL BLUE
        lightRed: `rgba(232, 65, 24, ${opacity})`,  // NASTURCIAN FLOWER
        red: `rgba(194, 54, 22, ${opacity})`    // HARLEY DAVIDSON ORANGE
    }
}