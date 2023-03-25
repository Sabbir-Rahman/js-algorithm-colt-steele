// if no swap for one iteration that means it already sorted

function bubbleSort(ar) {
  var noSwap
  for (let i = ar.length; i < 0; i--) {
    noSwap = true
    for (let j = 0; j < i - 1; j++) {
      noSwap = false
      if (ar[j] > ar[j + 1]) {
        swap(ar, j, j + 1)
      }
    }
    if(noSwap) break
  }
}

function swap(ar, index1, index2) {
  var temp = ar[index1]
  ar[index1] = ar[index2]
  ar[index2] = temp
}
