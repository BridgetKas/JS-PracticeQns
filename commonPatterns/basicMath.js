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
    // Solution one
    // while(n>0) {
    //     lastDigit = n % 10
    //     console.log(lastDigit)
    //     reversedNumber +=lastDigit
    //     n = Math.floor (n/10)
    // }
    // console.log('rev',+reversedNumber)
    // return Number(reversedNumber)

    // Solution two
    while (n>0) {
        lastDigit = n % 10
        reversedNumber = (reversedNumber * 10) + lastDigit
        n= Math.floor(n/10)
    }
    return reversedNumber
}

// console.log(reverseNumber(7789000))

// Check for palindromne
function palindromneCheck(n) {
    let duplicateNumber = n
    let reversedNumber = 0

    while (n>0) {
        lastDigit = n % 10
        reversedNumber = (reversedNumber * 10) + lastDigit
        n= Math.floor(n/10)
    }
    return (reversedNumber === duplicateNumber) ? "True" :"False"
}

// console.log (palindromneCheck(121))

// ArmStrong number is a number that is equal to the cuberoot of its digits for example

function armStrong(n){
    let duplicateNumber = n
    let reversedNumber = 0

    while (n>0) {
        lastDigit = n % 10
        reversedNumber = reversedNumber + (lastDigit*lastDigit*lastDigit)
        n= Math.floor(n/10)
    }
    return (reversedNumber === duplicateNumber) ? "True" :"False"

}

// console.log(armStrong(371))

function primeNumber(n) {
    // Brute force
    let count = 0

    for (let i=1; i<=n ; i++) {
        if(n % i === 0) {
            count ++
        }
    }

    return (count === 2) ? 'Prime number':"Not Prime Number"

    // Optimized solution
    
    if(n === 1) {
        return 'Not a prime number'
    }
    for (let i=1; i<= Math.sqrt(n) ; i++) {
        if(n % i === 0) {
            count ++
        }
        if(n % (n/i) === 0) {
            count ++
        }
    }
    return (count === 2) ? 'Prime number ye':"Not Prime Number"

}

// console.log (primeNumber(1))

function divisors(n) {
    const divisorsArray = []

    // Brute force

    for (let i=1; i<=n ; i++) {
        if(n % i === 0) {
            divisorsArray.push(i)
        }
    }
    // return divisorsArray

    // Optimized Solution
    for (let i=1; i<= Math.sqrt(n) ; i++) {
        if(n % i === 0) {
            divisorsArray.push(i)
        }
        if(n % (n/i) === 0){
            if( i !== (n/i)) {
                divisorsArray.push((n/i))
            }
        }
    }
    return divisorsArray

}

console.log (divisors(36))