

function shiftArray(arr, offset) {
    let result = [];
    if (offset === 0) {
        return arr;
    }
    else if (offset > 0) {
        offset = offset % arr.length;
        let index = arr.length - offset;
        for (let i = index; i < arr.length; ++i) {
            result.push(arr[i]);
        }
        for (let i = 0; i < index; ++i) {
            result.push(arr[i]);
        }
        return result;
    }
    else {
        offset = Math.abs(offset) % arr.length;
        let index = offset;
        for (let i = index; i < arr.length; ++i) {
            result.push(arr[i]);
        }
        for (let i = 0; i < index; ++i) {
            result.push(arr[i]);
        }
        return result;
    }
}
function display(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " ");
    }
}

function main() {
    let array = [1, 2, 3, 4, 5];
    display(shiftArray(array, -1));
}

main();