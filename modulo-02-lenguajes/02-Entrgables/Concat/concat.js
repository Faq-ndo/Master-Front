const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];


const concat = (arrayA, arrayB) => {
    return [...arrayA, ...arrayB]
}

console.log(concat(arrayA, arrayB));