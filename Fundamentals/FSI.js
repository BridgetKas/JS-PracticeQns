// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

function compareObj (obj1,obj2) {
    const key1 = Object.keys(obj1)
    const key2 = Object.keys(obj2)

    if(key1.length !== key2.length) {
        return false
    }

    for(const key of key1){
        if(!key2.includes(key)){
            return false
        }

        if(obj2[key] !== obj1[key]){
            return false
        }
    }

    return true;
}

const obj1 = { name: "John", age: 30, city: "New York" };
const obj2 = { name: "John", age: 30, city: "New York" };
const obj3 = { name: "Jane", age: 25, city: "San Francisco" };

console.log( compareObj(obj1,obj2))
console.log( compareObj(obj1,obj3))

// // **** Takeaway from this question 
// // Object.hasOwnProperty checks whether a particular object has the property in question.

// // 2.Write a javascript program to copy a string to a clipboard?

function copyStr (text) {
    // Create a textarea
    let textarea = document.createElement('textarea');
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    // Copy the selected text to the clipboaard
    document.execCommand("copy")
    // Remove the textarea from the DOM
    document.body.removeChild(textarea)
    console.log("The text was sucesfully copied to the clipboard")

}


// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.
// A CSV string is a plain text format that is used to represent tabular data.

function cSVtoArr (str) {
    let DArr= [];
    // split method returns an array. It takes a separator that will be used to separate the items in a string or an array.
    let splitArr = str.split('\n');

    for(let i = 0; i< splitArr.length;i++) {
        let splitItem = splitArr[i].split(',')
        DArr.push(splitItem)
    }
    return DArr;
}

console.log(cSVtoArr('a,b\nc,d'));