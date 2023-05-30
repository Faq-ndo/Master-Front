const data = [1, 2, 3, 4, 5];

const tail = (array) => {
    const [firstElement, ...rest] = array;
    return rest;
}

console.log(tail(data));