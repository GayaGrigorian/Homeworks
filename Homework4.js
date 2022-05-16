/* 2.   Write a JavaScript function to get all possible subsets of given length of the given array. Assume that all elements in the array are unique. */

function getSubsets (arr, length){
   let result = [[]];
   for (let i=0; i<arr.length; i++){
     if (result.length<length){
       result[i]=arr[i]
     }
   }
   return result
}
console.log (getSubsets ([1, 2, 3, 4], 2))


/* 3.  Write a recursive function to determine whether all digits of the number are odd or not. */

function oddNum(number) {
  if ((number % 10) % 2==0) {
    return false
  }
  else if ((number / 10) >9) {
    return oddNum((number-number%10)/10)
  }
  else{
  return true
  }
}
console.log(oddNum(7791))


/* 4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․ */

function minPosElem(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min && arr[i] >= 0) {
      min = arr[i];
    }
    else if (min<0){
     return -1
    }
  }
  return min
}
console.log(minPosElem([56, -9, 87, -23, 0, -105, 55, 1]))

