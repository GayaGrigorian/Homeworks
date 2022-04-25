/* 1.   Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated. */

let arr=[2, 12, 15, 48, 64]

let result=arr.findIndex(function(el, i, arr) {
  if (arr[i] < arr[i-1]) {
    return arr[i]
  }
})

console.log (result)



/* 2. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array */


let arr = [[1], [2], [3], [4]]
let sum = []

arr.map(function(el, i, arr) {
  if (Array.isArray(arr[i])) {
    if (arr[i].length > 0) {
     let rowSum=[]
       rowSum.push(+arr[i])
       sum.push(+rowSum)
    } else {
      sum.push(+arr[i])
    }
  }
  return sum;
})

console.log(sum)



/* 3.   Given an array of integers. Write a function that return new array from first array, where removed even numbers, and odd numbers was multiplied with new array length */


let arr = [5, 4, 78, 0, -3, 7]
let newArr = []


arr.filter(function(el, i, arr) {
  if (el % 2 != 0) {
    newArr.push(arr[i])
  }
  return newArr
})

let result=newArr.map(function(el,i,arr){
    return (el*arr.length)
})

console.log (result)



/* 	4. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result. */

let number = 29
let digits = []

function toDigits(number) {
  if (number > 9) {
    number += ''
    number.split('')
  }
  for (let i = 0; i < number.length; i++) {
    digits.push(+number[i])
  }
  return digits
}

console.log(toDigits(number))

let sum = 0

digits.map(function(el) {
  if (Array.isArray(digits)) {
    sum += el
  }
  return sum

})

console.log(sum)



/* 5. Write a recursive function which receives a number as arguments and returns the fibonacci sequence as array. */

function fibonacci(nums) {
  let fibonacci = []
  fibonacci[0] = 1
  fibonacci[1] = 1

  if (nums <= 0) {
    fibonacci = []
  }

  for (let i = 1; i < nums-1; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  }
  return fibonacci
}

console.log(fibonacci(10))