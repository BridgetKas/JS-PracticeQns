// Write a javascript function that counts the number of digits in an interger

function countDigits(n) {
    let counter = 0
    let lastDigit
    let entireNumber = n

    while(entireNumber>0) {
        lastDigit = n % 10
        counter = counter + 1
        entireNumber = Math.floor (entireNumber/10)
    }
    console.log('COUNT',counter)
}

// countDigits(7789)

function reverseNumber(n) {
    let reversedNumber = 0
    // while(n>0) {
    //     lastDigit = n % 10
    //     console.log(lastDigit)
    //     reversedNumber +=lastDigit
    //     n = Math.floor (n/10)
    // }
    // console.log('rev',+reversedNumber)
    // return Number(reversedNumber)

    while (n>0) {
        lastDigit = n % 10
        reversedNumber = (reversedNumber * 10) + lastDigit
        n= Math.floor(n/10)
    }
    return reversedNumber
}

console.log(reverseNumber(7789000))