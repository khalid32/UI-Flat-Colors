const getIntNumber = (getNumber) => {
    switch(getNumber){
        case 0:
            return 0.0; break;
        case 1:
            return 0.1; break;
        case 2:
            return 0.2; break;
        case 3:
            return 0.3; break;
        case 4:
            return 0.4; break;
        case 5:
            return 0.5; break;
        case 6:
            return 0.6; break;
        case 7:
            return 0.7; break;
        case 8:
            return 0.8; break;
        case 9:
            return 0.9; break;
        default:
            return 1.0;
    }
}

export default getIntNumber;