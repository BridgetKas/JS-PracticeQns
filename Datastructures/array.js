// Remove even numbers from an array
// function removeEven(arr) {
//     var odds = []
//     for (let number of arr) {
//         if (number % 2 != 0) // Check if the item in the array is not even
//             odds.push(number) // If it isn't even, append it to the odds array
//     }
//   return odds
// }

// solution two
// function removeEven(arr) {
//     return arr.filter((v => (v % 2) != 0))
// }

// Merge two sorted arrays


// Find the first non repeating interger in an array
// function firstNonRepeating(arr) {
//     let count = {};

//     // Count the occurrences of each element in the array
//     for (let num of arr) {
//         count[num] = (count[num] || 0) + 1;
//     }

//     // Find the first element with a count of 1
//     for (let num of arr) {
//         if (count[num] === 1) {
//             return num;
//         }
//     }

//     // If no non-repeating element is found, return null or -1
//     return null; 
// }
// console.log (firstNonRepeating([22,22,22,33,45,45]))

// solution two
// const test1 = [4, 5, 1, 2, 0, 4, 5]
// const test2 = [7, 7, 3, 9, 3, 2, 9]

// const isNonRepeat = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let isRepeat = false

//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j] && i !== j) {
//                 isRepeat = true
//             }
//         }

//         if (!isRepeat) {
//             return arr[i]
//         }
//     }
//     return null
// }
// console.log(isNonRepeat(test2))

// Maximum subarray
// function findMaxSumSubArray(nums) {
//     if (nums.length < 1) {
//         return 0;
//     }

//     let currMax = nums[0];
//     let globalMax = nums[0];
//     let lengtharray = nums.length;
//     for (let i = 1; i < lengtharray; i++) {
//         if (currMax < 0) {
//             currMax = nums[i];
//         } else {
//             currMax += nums[i];
//         }
//         if (globalMax < currMax) {
//             globalMax = currMax;
//         }
//     }
//     return globalMax;
// }


// Find the common items in multiple arrays
// function commonItems(...arrays) {
//     if(arrays.length === 0) return []

// //filter the items from the first array
//     return arrays[0].filter((item) => arrays.every((array) => array.includes(item)))
// }

// Flatten an array without using built in methods
function flattenArray(arr) {
    console.log(arr)
    // Initialize an empty array to hold the flattened result
    let result = [];//[1]
  
    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {//[1,[2,3],[[[4,5,6]]]]
      let element = arr[i];//1,[2,3]
  
      // Check if the current element is an array
      if (Array.isArray(element)) {
        // If it's an array, recursively flatten it and concatenate the result
        result = result.concat(flattenArray(element));
      } else {
        // If it's not an array, push the element directly to the result
        result.push(element);
      }
      
    }
   console.log('RES',result)
    return result;
  }

  flattenArray([1,[2,3],[[[4,5,6]]]])

  // Group items based on propertyies in an array
  const songs = [
    { title: 'Song A', genre: 'rock' },
    { title: 'Song B', genre: 'pop' },
    { title: 'Song C', genre: 'rock' },
    { title: 'Song D', genre: 'jazz' },
  ];

  function groupGenres(arr) {
  const groupedSongs = arr.reduce((groupedGenre,song) => {
    const genre = song.genre
    if(!groupedGenre[genre]){
      groupedGenre[genre] = []
    }
    groupedGenre[genre].push(song)
    return groupedGenre
  },{})
   console.log(groupedSongs)
  }

  groupGenres(songs)

  // Remove falsy values from an array

  function removeFalsyValues(arr) {
    const falsyValues = [0,'',false,null,undefined,NaN]
    const truthyValues = arr.filter((item) => (!falsyValues.includes(item)))
    return truthyValues
  }

 console.log( removeFalsyValues([1,2,0,"",5,false]))

//  Find the Nth largest element in an array
function NthLargest(arr,n) {
  let arrayLength = arr.length 
   if(n > arrayLength || typeof n !== 'number') return
   
   arr.sort((a,b) => b-a)
   return arr[n-1]
}

console.log(NthLargest([20,50,100,60],20))