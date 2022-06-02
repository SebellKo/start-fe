const createRandom = (min, max) => {
    if (max == undefined) {
        max = min;
        min = 0;
    }
    if (isNum(min) == true || isNum(max) == true) {
        return -1;
    }
    else {
        return Math.floor((Math.random() * (max - min + 1)) + min)
    }
}

const isNum = (num) => {
    if (isNaN(num)) {
        return true;
    }
    else{
        return false;
    }
}

export default createRandom;