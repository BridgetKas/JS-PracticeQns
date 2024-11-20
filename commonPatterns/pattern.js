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
printT(5)
printTi(5)