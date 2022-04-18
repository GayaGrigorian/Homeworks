1.Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

let obj = {
  a: '1',
  b: '2',
  c: '2'
}

function inverse(obj) {
  let newObj = {};
  for (let key of Object.keys(obj)){
    const value = obj[key]
    if (newObj[value]) {
      if(Array.isArray(newObj[value])) {
        newObj[value].push(key)
      } else {
        newObj[value] = [newObj[value],key]
      }
    } else {
      newObj[value] = key
    }
  }
  return newObj
}

console.log(inverse(obj))



2. Given two objects. Write a function that performs shallow compare.

var a = { a: '1' };
var b = { a: '1', b:'2'};


function shallowCompare(a, b) {
  for (let key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }
  for (let key in b) {
    if (!(key in a)) {
      return false;
    }
  }
  return true;
}

console.log(shallowCompare(a, b))


3. Given an array. Determine whether it consists only from uniques or not.

function isUnique(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        return false
      }
    }
  }
  return true
}

console.log (isUnique([2, 5, 'a', 4, 6, 1,'c', 3, 9,11]))


4. Determine if a word or phrase is an isogram. 

function isIsogram(word) {
  for (let i = 0; i < word.length; ++i) {
    if (word.indexOf(word[i], i + 1) != -1)
      return false;
  }
  return true;
}

console.log(isIsogram('spring'))
