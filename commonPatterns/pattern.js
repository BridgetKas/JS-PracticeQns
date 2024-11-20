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

printInvertedTraingle(6)