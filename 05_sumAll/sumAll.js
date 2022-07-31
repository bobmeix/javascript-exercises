const sumAll = function (numStart, numEnd) {
    if (numStart < 0
        || numEnd < 0
        || !Number.isInteger(numStart)
        || !Number.isInteger(numEnd)) {
        return 'ERROR'
    }
    let sum = 0;
    for (let i = Math.min(numStart, numEnd);
        i <= Math.max(numStart, numEnd); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
