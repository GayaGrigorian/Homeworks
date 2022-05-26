/* 2. Write a JavaScript function to get all possible subsets of given length of the given array. Assume that all elements in the array are unique.
 */

function getSubsets(array,num) {
    const subsets = [[]];
    
    for (const el of array) {
        const last = subsets.length-1;
        for (let i = 0; i <= last; i++) {
            subsets.push( [...subsets[i], el] );
        }
    }
   const uniqueSub= subsets.filter((subsets)=>{
         return subsets.length==num      
    }) 
    return uniqueSub
}

console.log (getSubsets ([1, 2, 3, 4, 5], 3))


/* 3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds. */

function fn() {
  console.log("asd")
}

function delay(fn, ms) {

  return function() {
    setTimeout(() => fn.apply(this, arguments), ms);
  }
}

let b= delay(fn, 1000)


/* 4. Implement Debounce decorator */

function fn() {
    console.log ("asd")
}

function delay(fn, ms) {
 let timeout
   return function () {
       clearTimeout(timeout)
       timeout= setTimeout(() => fn.apply(this, arguments), ms)
    }
}

let b= delay(fn,1000)
console.log (b())


console.log(b())

