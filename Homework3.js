/* 1.Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...) */

function removeElement(arr, i = 0) {
  if (arr.length - 1 > i) {
    arr[i] = arr[i + 1];
    return removeElement(arr, i + 1);
  }
  arr.splice(-1) 
  return arr
}

console.log(removeElement([1,2,3,4,5,6,7,8]))



/* 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays). */

function flatten (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log (flatten ([1, [3, 4, [1, 2]], 10]))



/* 3. Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift()) */

function rotateArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.length-1 >= num){
        arr.unshift(arr.pop(i))
        rotateArray(arr, num+1)
    }
    return arr
  }
}

console.log (rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],3))



/* 4. Given the list of the following readers: Output the books sorted by the percent in descending order which readStatus is true. */

let books= [	
      { book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];

books.sort (function(a,b) {
       return b.percent - a.percent
})

const result = books.filter(function(books) {
    return books.readStatus===true
})

console.log (result)



/* 5.Implement “map” method for plain objects (same as Array map method.) */

