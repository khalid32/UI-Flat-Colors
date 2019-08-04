import getIntNumber from './getOpacityNumber';

const dutch = (value) => {
    const opacity = getIntNumber(value);
    return {
        pink: `rgba(237, 76, 103,${opacity})`, // BARA RED
        darkPink: `rgba(181, 52, 113,${opacity})`, // VERY BERRY
        purple: `rgba(131, 52, 113,${opacity})`,   // HOLLYHOCK
        darkerPurple: `rgba(111, 30, 81,${opacity})`,    // MAGENTA PURPLE

        // this color is new to me...
        lighterPink: `rgba(253, 167, 223,${opacity})`, // LAVENDER ROSE
        lightPink: `rgba(217, 128, 250,${opacity})`,   // LAVENDER TEA
        lightPurple: `rgba(153, 128, 250,${opacity})`, // FORGOTTEN PURPLE
        darkPurple: `rgba(87, 88, 187,${opacity})`,    // CIRCUMORBITAL RING

        lightSky: `rgba(18, 203, 196,${opacity})`, // BLUE MARTINA
        lightCyan: `rgba(18, 137, 167,${opacity})`,    // MEDITERRANEAN SEA
        sky: `rgba(6, 82, 221,${opacity})`,    // MERCHANT MARINE BLUE
        darkBlue: `rgba(27, 20, 100,${opacity})`,  // 20000 LEAGUES UNDER THE SEA

        lighterGreen: `rgba(196, 229, 56,${opacity})`, // ENERGOS
        lightGreen: `rgba(163, 203, 56,${opacity})`,   // ANDROID GREEN
        green: `rgba(0, 148, 50,${opacity})`,  // PIXELATED GRASS
        cyan: `rgba(0, 98, 102,${opacity})`,   // TURKISH AQUA

        lighterOrange: `rgba(255, 195, 18,${opacity})`,    // SUNFLOWER
        lightOrange: `rgba(247, 159, 31,${opacity})`,  // RADIANT YELLOW
        orange: `rgba(238, 90, 36,${opacity})`,    // PUFFINS BILL
        red: `rgba(234, 32, 39,${opacity})`    // RED PIGMENT
    }
}

export default dutch;