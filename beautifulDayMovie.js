function beautifulDays(i, j, k) {
    let count = 0;
    for (let x = i; x <= j; x++) {
        if (isBeautifulDay(x, k)) {
            count++;
        }
    }
    return count;
}

function isBeautifulDay(x, k) {
    return differenceOfReverse(x) % k === 0;
}

function differenceOfReverse(x) {
    let reversedX = parseInt(
        x
            .toString()
            .split('')
            .reverse()
            .join('')
    );
    return Math.abs(x - reversedX);
}
