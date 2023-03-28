
function exec(array) {
    const map = new Map();

    for (let i = 0; i < array.length; ++i) {
        let key1 = `${array[i] - 1},${array[i]}`;
        let key2 = `${array[i]},${array[i] + 1}`;

        let value1 = map.has(key1) ? [...map.get(key1), array[i]] : [array[i]];
        map.set(key1, value1);

        let value2 = map.has(key2) ? [...map.get(key2), array[i]] : [array[i]];
        map.set(key2, value2);
    }
    return map;
}

function main() {
    let array = [1, 1, 4, 4, -1, -2, 3, 2, 2, 5, 5, 5, 3, 0];
    let rs = exec(array);
    let max = 0;
    for (let value of rs.values()) {
        if (value.length > max) {
            max = value.length;
        }
    }
    return max;
}

console.log(`max length of subarray: ${main()}`);