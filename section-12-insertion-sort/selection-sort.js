// if swap is costly then selection sort is better than bubble sort

function insertionSort(ar) {
  let minIndex
  for (let i = 0; i < ar.length; i++) {
    minIndex = i
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[j] < ar[minIndex]) {
        minIndex = j
      }
    }
    if (i != minIndex) {
      swap(ar, i, minIndex)
    }
  }
}
function swap(ar, index1, index2) {
  var temp = ar[index1]
  ar[index1] = ar[index2]
  ar[index2] = temp
}

const arr = [2, 3, 1, 4, 6, 8, 10, 0, -2]
insertionSort(arr)
console.log(arr)
