snail = function(array) {
    let result = []
    let width = array[0].length
    let height = array.length

    while (width > 0 && height > 0) {
        for (let i = 0; i < width; i++) {
            let num = array[0].shift()
            result.push(num)
        }
        array.shift();
        height -= 1;
        for (let i = 0; i < height; i++) {
            let num = array[i].pop();
            result.push(num)
        }
        width -= 1
        for (let i = width - 1; i >= 0; i--) {
            let num = array[height - 1].pop()
            result.push(num)
        }
        array.pop()
        height -= 1
        for(let i = height - 1; i >= 0; i--) {
            let num = array[i].shift();
            result.push(num)
        }
        width -= 1
    }
    return result
}

console.log(snail([[1,2,3], [4,5,6], [7,8,9]]))