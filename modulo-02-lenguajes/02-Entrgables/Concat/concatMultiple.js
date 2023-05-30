const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const arrayC = [7, 8, 9];


const concat = (...array) => {
    return array.reduce((acc, data) => [...acc, ...data]);
}

console.log(concat(arrayA, arrayB, arrayC));