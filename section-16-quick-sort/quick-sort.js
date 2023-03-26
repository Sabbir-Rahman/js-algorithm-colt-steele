function quickSort(arr,left=0,right=arr.length){
  if(left<right){
    let pivotIndex = pivotHelper(arr,left,right)
    quickSort(arr,left,pivotIndex-1)
    quickSort(arr,pivotIndex+1,right)
  }
  return arr
}

function pivotHelper(arr,start=0,end=arr.length-1){
  let pivot = arr[start]
  let swapIdx = start
  for (let i= start +1;i<arr.length;i++){
    if(pivot>arr[i]){
      swapIdx++
      swap(arr,swapIdx,i)
    }
  }
  swap(arr,start,swapIdx)
  return swapIdx
}

function swap(arr,idx1,idx2){
  var temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

const ar = [3, 2, 1, 4, 5, 8, 10]
const ar2 = quickSort(ar, 0, ar.length)
console.log(ar2)