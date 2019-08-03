import getIntNumber from './getOpacityNumber';

const chinese = (value) => {
    const opacity = getIntNumber(value);
    return {
        darkGray: `rgba(87, 96, 111, ${opacity})`,  // GRISAILE
        black: `rgba(47, 53, 66,${opacity})`,  // PRESTIGE BLUE
        darkWhite: `rgba(223, 228, 234,${opacity})`,   // CITY LIGHTS
        darkerWhite: `rgba(206, 214, 224,${opacity})`, // TWINKLE BLUE

        lightGray: `rgba(164, 176, 190,${opacity})`,   // PEACE
        gray: `rgba(116, 125, 140,${opacity})`,    // BAY WHARF
        lightWhite: `rgba(255, 255, 255,${opacity})`,  // ...
        white: `rgba(241, 242, 246,${opacity})`,   // ANTI-FLASH LIGHT

        lightPink: `rgba(255, 107, 129,${opacity})`,   // WILD WATERMELON
        pink: `rgba(255, 71, 87,${opacity})`,  // WATERMELON
        lightBlue: `rgba(83, 82, 237,${opacity})`, // SATUATED SKY
        blue: `rgba(55, 66, 250,${opacity})`,  // BRIGHT GREEK

        lightRed: `rgba(255, 127, 80,${opacity})`, // CORAL
        red: `rgba(255, 99, 72,${opacity})`,   // BRUSCHETTA TOMATO
        lightCyan: `rgba(112, 161, 255,${opacity})`,   // FRENCH SKY BLUE
        cyan: `rgba(30, 144, 255,${opacity})`, // CLEAR CHILL

        lightOrange: `rgba(236, 204, 104,${opacity})`, // GOLDEN SAND
        orange: `rgba(255, 165, 2,${opacity})`,    // ORANGE
        lightGreen: `rgba(123, 237, 159,${opacity})`,  // LIME SOAP
        green: `rgba(46, 213, 115,${opacity})` // UFO GREEN
    }
}

export default chinese;