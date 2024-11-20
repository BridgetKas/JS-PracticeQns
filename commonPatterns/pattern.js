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

printRectangle(5,5)