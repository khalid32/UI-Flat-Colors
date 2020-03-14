import getIntNumber from './getOpacityNumber';

export const Spanish = (value) => {
    const opacity = getIntNumber(value);
    return {
        lightGreen: `rgba(51, 217, 178,${opacity})`,   // CELESTIAL GREEN
        green: `rgba(33, 140, 116,${opacity})`,    // PALM SPRINGS SPLASH
        lightYellow: `rgba(255, 218, 121,${opacity})`, // SPICED BUTTERNUT
        grayYellow: `rgba(204, 174, 98,${opacity})`,   // DESERT

        lightSky: `rgba(52, 172, 224,${opacity})`, // SUMMER SKY
        sky: `rgba(34, 112, 147,${opacity})`,  // DEVIL BLUE
        yellow: `rgba(255, 177, 66,${opacity})`,   // MANDARIN SORBET
        darkYellow: `rgba(204, 142, 53,${opacity})`,   // ALAMEDA OCHRE

        white: `rgba(247, 241, 227,${opacity})`,   // SWAN WHITE
        darkGray: `rgba(170, 166, 157,${opacity})`,    // HOT STONE
        lightGray: `rgba(209, 204, 192,${opacity})`,   // CROCODILE TOOTH
        black: `rgba(132, 129, 122,${opacity})`,   // GREY PORCELAIN

        lightBlue: `rgba(112, 111, 211,${opacity})`,   // C64 PURPLE
        blue: `rgba(71, 71, 135,${opacity})`,  // LIBERTY
        darkBlue: `rgba(64, 64, 122,${opacity})`,  // JACKSONS PURPLE
        darkerBlue: `rgba(44, 44, 84,${opacity})`, // LUCKY POINT

        lightOrange: `rgba(255, 121, 63,${opacity})`,  // SYNTHETIC PUMPKIN
        orange: `rgba(205, 97, 51,${opacity})`,    // CHILEAN FIRE
        lightRed: `rgba(255, 82, 82,${opacity})`,  // FLUORESCENT RED
        red: `rgba(179, 57, 57,${opacity})`    // EYE OF NEWT
    }
}