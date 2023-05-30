const data = [1, 2, 3, 4, 5];

const last = (array) => {
    const [lastElement] = array.reverse();
    return lastElement;
}

console.log(last(data));