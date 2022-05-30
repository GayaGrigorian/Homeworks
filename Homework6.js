/* 1. Get array of node ids from tree (keys). */

let tree = {
  0: {
    1: {
      3: {},
      4: {
        6: {}
      }
    },
    2: {
      5: {}
    }
  }
}


function printArr(tree) {
  let result = []
  for (let key in tree) {
    result.push(Object.keys(tree))
    if (typeof tree[key] === 'object' && tree[key] !== null) {
      result.push(Object.keys(tree[key]))
    }
    for (let key1 in tree[key]) {
      result.push(Object.keys(tree[key][key1]))
      for (let key2 in tree[key][key1]) {
        result.push(Object.keys(tree[key][key1][key2]))
      }
    }
  }
  return result.reduce((a, b) => a.concat(b), [])
}

console.log(printArr(tree))



/* 2. Get array of nodes from tree. */

let tree = {
  0: {
    1: {
      3: {},
      4: {
        6: {}
      }
    },
    2: {
      5: {}
    }
  }
}


function arrNodes(tree) {
  let arr = {}
  let arr1 = {}
  let arr2 = {}
  let result = []
  for (let key in tree) {
    if (typeof tree[key] === 'object' && tree[key] !== null) {
      /*  arr[key]=tree[key] */
      arr.id = key;
      arr.children = Object.keys(tree[key])
    }
    for (let key1 in tree[key]) {
      if (typeof tree[key][key1] === 'object' && tree[key] !== null) {
        arr1.id = key1;
        arr1.children = Object.keys(tree[key][key1])
      }
      for (let key2 in tree[key][key1]) {
        if (typeof tree[key][key1][key2] === 'object' &&  tree[key][key1][key2]!=null) {
          arr2.id = key2;
          arr2.children = Object.keys(tree[key][key1][key2])
        }
      }
    }
  }
  return result.concat(arr, arr1, arr2)

}

console.log(arrNodes(tree))