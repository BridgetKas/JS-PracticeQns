// Write a js program that prints a rectangle

function printRectangle(rows,columns) {
    for (let i = 0; i<rows; i++) {
        let rectangle = ""
        for(let j = 0; j<columns; j++) {
            rectangle += "*"
        }
        console.log(rectangle)
    }
}

// printRectangle(5,5)

// Write a js program that prints a triangle

function printTraingle(columns) {
    for(let i = 0; i<columns; i++) {
        let triangle = ""
        for(let j = 0; j<=i; j++) {
            triangle += "*"
        }
        console.log(triangle)
    }
}

// printTraingle(6)

function printTraingle(columns) {
    for(let i = 1; i<=columns; i++) {
        let triangle = ""
        for(let j = 1; j<=i; j++) {
            triangle += j
        }
        console.log(triangle)
    }
}

// printTraingle(6)

function printInvertedTraingle(columns) {
    for(let i = 1; i<=columns; i++) {
        let triangle = ""
        for(let j = 1; j<=columns-i+1; j++) {
            triangle += "*"
        }
        console.log(triangle)
    }
}

// printInvertedTraingle(6)

// 

function printT(n) {
    for(let i=0;i<n;i++){
        let output = " "
        for(let j=0;j<n-i-1;j++) {
            output += " "
        }
        for(let j=0;j<2*i+1;j++){
            output += "*"
        }
        for(let j=0;j<n-i-1;j++) {
            output += " "
        }
        console.log(output)
    }
}

// printT(5)

function printTi(n) {
    for(let i=0;i<n;i++){
        let output = " "
        for(let j=0;j<i;j++) {
            output += " "
        }
        for(let j=0;j< 2*n -(2*i+1);j++){
            output += "*"
        }
        for(let j=0;j<i;j++) {
            output += " "
        }
        console.log(output)
    }
}
// printT(5)
// printTi(5) 

function numbers(n) {
    let k =1;
    for(let i=0; i<n; i++) {
        let output = ""
        for (let j=0; j<=i; j++) {
            output += k
            // k = k + 1
            k++
        }
        console.log(output)
    }
}

// numbers(5)

// function printAlphabet(n) {
//     for(let i=0; i<n; i++){
//         let output=""
//         for(let j=0; j<=i; j++){
//             output += String.fromCharCode(65 + j)
//         }
//         console.log (output)
//     }
// }
// printAlphabet(5)

function printAlphabet(n) {
    for(let i=0; i<n; i++){
        let output=""
        for(let j=0; j<=i; j++){
            output += String.fromCharCode(65 + i)
        }
        console.log (output)
    }
}

function printTriangleOfAlphabets(n) {
    for(let i = 0; i<n; i++){
        let output = ""
        // spaces
        for(let j=0; j<=n-i-1; j++) {
            output += "*"
        }

        // alphabets
        for(let j=0; j<2*i+1; j++) {
            output += String.fromCharCode(65 + i)
        }

        // spaces
        for(let j=0; j<=n-i-1; j++) {
            output += "*"
        }
        console.log(output)
    }
}

// printTriangleOfAlphabets(5)

// Important question
function printRightTriangle() {
    const starChar = 'E'
    const startCode = starChar.charCodeAt(0)

    for(let i=0; i<5; i++) {
        let row = ''
        for(let j=i; j>=0;j--){
            row += String.fromCharCode(startCode - j)
        }
        console.log(row)
    }
}

printRightTriangle(5)

// Print hollowSquare important question
function printHollowSquare(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            // Print '*' for the boundary, otherwise print ' '
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row); // Print each row
    }
}

// Example usage:
printHollowSquare(5); 