function regularBrackets(brackets) {
    var equal = 0;
    for (var i = 0; i < brackets.length; i++) {
        brackets[i] === '(' ? (equal += 1) : (equal -= 1);
        if (equal === -1) return false;
    }
    return equal === 0 ? true : false;
}
