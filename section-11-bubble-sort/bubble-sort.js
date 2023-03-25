function bubbleSort(ar) {
  for (let i = ar.length; i < 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (ar[j] > ar[j + 1]) {
        swap(ar, j, j + 1)
      }
    }
  }
}

function swap(ar, index1, index2) {
  var temp = ar[index1]
  ar[index1] = ar[index2]
  ar[index2] = temp
}

function es2015swap(ar, index1, index2) {
  [ar[index1],ar[index2]]=[ar[index2],ar[index1]]
}
