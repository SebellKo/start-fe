const createAvg = (...arg) => {
    let num = arg.flat();
    let sum = 0;
    let devideNum = 0;
    for (let i = 0; i < num.length; i++) {
        if (isNaN(num[i])) {
            num[i] = 0;
            devideNum--;
        }
        sum += num[i];
        devideNum++;
    }
    return sum / devideNum;

}

export default createAvg;