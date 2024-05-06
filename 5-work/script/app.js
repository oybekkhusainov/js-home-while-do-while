function number(massive) {

    return massive.filter(item => typeof item === 'number');

}

const mixedArray = [51, 98, "d", 64, 15, "t", 30, "l",45, 23];

const resultArray = number(mixedArray);

document.write(resultArray);