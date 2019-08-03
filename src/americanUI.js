import getIntNumber from './getOpacityNumber';

const american = (value) => {
    const opacity = getIntNumber(value);
    return {
        white: `rgba(223, 230, 233, ${opacity})`, // CITY LIGHTS
        gray: `rgba(178, 190, 195, ${opacity})`, // SOOTHING BREEZE
        darkGray: `rgba(99, 110, 114, ${opacity})`, // AMERICAN RIVER
        black: `rgba(45, 52, 54, ${opacity})`, // DRACULA ORCHID

        lightPurple: `rgba(162, 155, 254, ${opacity})`, // SHY MOMENT
        purple: `rgba(108, 92, 231, ${opacity})`, // EXODUS FRUIT
        lightPink: `rgba(253, 121, 168, ${opacity})`, // PICO-8 PINK
        pink: `rgba(232, 67, 147, ${opacity})`, // PRUNUS AVIUM

        lightBlue: `rgba(116, 185, 255, ${opacity})`, // GREEN DARNER TAIL
        blue: `rgba(9, 132, 227, ${opacity})`, // ELECTRON BLUE
        lightRed: `rgba(255, 118, 117, ${opacity})`, // PINK GLAMOUR
        red: `rgba(214, 48, 49, ${opacity})`, // CHI-GONG

        lightSky: `rgba(129, 236, 236, ${opacity})`, // FADED POSTER
        sky: `rgba(0, 206, 201, ${opacity})`, // ROBIN'S EGG BLUE
        lightOrange: `rgba(250, 177, 160, ${opacity})`, // FIRST DATE
        orange: `rgba(225, 112, 85, ${opacity})`, // ORANGEVILLE

        lightGreen: `rgba(85, 239, 196, ${opacity})`, // LIGHT GREENISH BLUE
        green: `rgba(0, 184, 148, ${opacity})`, // MINT LEAF
        lightYellow: `rgba(255, 234, 167, ${opacity})`, // SOUR LEMON
        yellow: `rgba(253, 203, 110, ${opacity})` // BRIGHT YARROW
    }
}

export default american;