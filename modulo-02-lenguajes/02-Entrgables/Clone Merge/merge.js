const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (...objects) => {
    return objects.reduce((merged, object) => {
        let keys = Object.keys(object);
        keys.forEach(key => merged[key] = object[key]);
        return merged;
    }, {})
}

console.log(merge(b, a));