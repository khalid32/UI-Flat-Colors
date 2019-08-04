import getIntNumber from './getOpacityNumber';

const canadian = (value) => {
    const opacity = getIntNumber(value);
    return {
        lightGreen: `rgba(29, 209, 161, ${opacity})`,   // WILD CARIBBEAN GREEN
        green: `rgba(16, 172, 132, ${opacity})`,    // DARK MOUNTAIN MEADOW
        gray: `rgba(87, 101, 116, ${opacity})`, // FUEL TOWN
        black: `rgba(34, 47, 62, ${opacity})`,  // IMPERIAL PRIMER

        white: `rgba(131, 149, 167, ${opacity})`,   // LIGHT BLUE BALLERINA
        lightGray: `rgba(200, 214, 229, ${opacity})`,   // STORM PETREL
        sky: `rgba(10, 189, 227, ${opacity})`,  // CYANITE
        lightSky: `rgba(72, 219, 251, ${opacity})`, // MEGAMAN

        lightRed: `rgba(255, 107, 107, ${opacity})`,    // PASTEL RED
        red: `rgba(238, 82, 83, ${opacity})`,   // AMOUR
        lightPurple: `rgba(95, 39, 205, ${opacity})`,   // NASU PURPLE
        purple: `rgba(52, 31, 151, ${opacity})`,    // BLUEBELL

        lightYellow: `rgba(254, 202, 87, ${opacity})`,  // CASANDORA YELLOW
        yellow: `rgba(255, 159, 67, ${opacity})`,   // DOUBLE DRAGON SKIN
        lightBlue: `rgba(84, 160, 255, ${opacity})`,    // JOUST BLUE
        blue: `rgba(46, 134, 222, ${opacity})`, // BLEU DE FRANCE

        lightPink: `rgba(255, 159, 243, ${opacity})`,   // JIGGLYPUFF
        pink: `rgba(243, 104, 224, ${opacity})`,    // LIAN HONG LOTUS PINK
        // below two colors are look similar to sky-blue...
        lightCyan: `rgba(0, 210, 211, ${opacity})`, // JADE DUST
        cyan: `rgba(1, 163, 164, ${opacity})`   // AQUA VELVET
    }
}

export default canadian;