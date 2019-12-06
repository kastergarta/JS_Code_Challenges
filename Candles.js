function birthdayCakeCandles(arr) {
    let max = 0;
    let counter = 0;

    arr.forEach(item => {
        if (item > max) {

            max = item;
            counter = 1;

        } else if (item === max) {
            counter++;
        }
    });

    return counter;
}


function birthdayCakeCandles(arr) {
    let max = Math.max(...arr);
    return arr.filter(item => item === max).length;
}
