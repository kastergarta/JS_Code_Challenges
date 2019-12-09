function createPhoneNumber(arr) {
    let str = arr.join('');
    return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
}
