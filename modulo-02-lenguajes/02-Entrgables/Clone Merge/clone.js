const a = { name: "Maria", surname: "Ibañez", country: "SPA" };

const clone = (object) => {
    return Object.keys(object).reduce((clonedObj, property) => {
        clonedObj[property] = object[property];
        return clonedObj
    }, {});
}

console.log(clone(a));