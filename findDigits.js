function findDigits(n) {
    let divisibleNumber = 0;
    let testNumber = n.toString().split('');
    for (let i = 0; i < testNumber.length; i++) {
        if (n % testNumber[i] == 0) {
            divisibleNumber++;
        }
    }
    return divisibleNumber;
}