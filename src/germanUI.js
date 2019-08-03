import getIntNumber from './getOpacityNumber';

const german = (value) => {
    const opacity = getIntNumber(value);
    return {
        lightCyan: `rgba(43, 203, 186,${opacity})`,    // MAXIMUM BLUE GREEN
        cyan: `rgba(15, 185, 177,${opacity})`, // TURQUOISE TOPAZ
        darkGray: `rgba(119, 140, 163,${opacity})`,    // BLUE GREY
        black: `rgba(75, 101, 132,${opacity})`,    // BLUE HORIZON

        lightGray: `rgba(165, 177, 194,${opacity})`,   // INNUENDO
        white: `rgba(209, 216, 224,${opacity})`,   // TWINKLE BLUE
        lightGreen: `rgba(38, 222, 129,${opacity})`,   // REPTILE GREEN
        green: `rgba(32, 191, 107,${opacity})`,    // ALGAL FUEL

        lightYellow: `rgba(254, 211, 48,${opacity})`,  // FLIRTATIOUS
        yellow: `rgba(247, 183, 49,${opacity})`,   // NYC TAXI
        lightPurple: `rgba(165, 94, 234,${opacity})`,  // LIGHTER PURPLE
        purple: `rgba(136, 84, 208,${opacity})`,   // GLOOMY PURPLE

        lightOrange: `rgba(253, 150, 68,${opacity})`,  // ORANGE HIBISCUS
        orange: `rgba(250, 130, 49,${opacity})`,   // BENIUKON BRONZE
        lightBlue: `rgba(75, 123, 236,${opacity})`,    // C64 NTSC
        blue: `rgba(56, 103, 214,${opacity})`, // ROYAL BLUE

        lightRed: `rgba(252, 92, 101,${opacity})`, // FUSION RED
        red: `rgba(235, 59, 90,${opacity})`,   // DESIRE
        lightSky: `rgba(69, 170, 242,${opacity})`, // HIGH BLUE
        sky: `rgba(45, 152, 218,${opacity})`   // BOYZONE
    }
}

export default german;