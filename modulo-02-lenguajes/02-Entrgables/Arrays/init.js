const data = [1, 2, 3, 4, 5];

const init = (array) => {
    return array.slice(0, array.length - 1);
}

console.log(init(data));
console.log(data);