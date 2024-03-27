function deepCopy(obj, hash = new WeakMap())
 {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    let result = Array.isArray(obj) ? [] : {};
    hash.set(obj, result);
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = deepCopy(obj[key], hash);
        }
    }
    return result;
}

const obj = {
    a: 1,
    b: { c: 2 },
    d: [3, 4],
};

const copiedObj = deepCopy(obj);
console.log(copiedObj); // Выведет скопированный объект