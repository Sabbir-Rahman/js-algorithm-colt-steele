// write a function that will input two array and output true if one array is exact square of other array both as number and quantity
// ex [1,2] [1,9,4] => false
// ex [1,2,3] [1,9,4] => true
// ex [1,2,3] [1,4,4] => false

// O(n^2)


function naiveCompare(arr1, arr2) {
  // approach
  // if two array is not equal false
  // if square of first array element is present in the second array then remove the element
  // iff element is not found then return false

  if (arr1.length != arr2.length) {
    return false
  }

  for (i of arr1) {
    const index = arr2.indexOf(arr[i] ** 2)
    if (index == -1) {
      return false
    }
    arr2.splice(index, 1)
  }
  return true
}

// console.log(naiveCompare([1, 2], [1, 9, 4]))


function refactorCompare(arr1, arr2) {
  // approach
  // if two array is not equal return false
  // count the number of elemnt in the two array
  // then check square of arr1 elemnt is present in arr2 or not. Can be done with key compare. If not found return false
  // then check frequency of arr2 squared element is same as it's pair arr1 element. If not then return false
  
  if ( arr1.length != arr2.length ) {
    return false
  }

  const obj1 = {}
  const obj2 = {}

  for ( value of arr1 ){
    obj1[value] = ( obj1[value] || 0) + 1
  }

  for (value of arr2) {
    obj2[value] = (obj2[value] || 0) + 1
  }

  for ( key in arr1){
    if (!(key**2 in obj2)){
      return false
    }

    if (obj2[2**key]!=obj1[key]){
      return false
    }
  }

  return true
}

console.log(refactorCompare([1, 2, 3, 2, 1], [1, 4, 9, 4, 9]))