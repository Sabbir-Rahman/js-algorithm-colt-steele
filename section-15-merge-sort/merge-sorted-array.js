function mergeArray(leftAr, rightAr) {
  const sorted = []
  let i = 0
  let j = 0
  while (i < leftAr.length && j < rightAr.length) {
    if (leftAr[i] < rightAr[j]) {
      sorted.push(leftAr[i])
      i++
    } else {
      sorted.push(rightAr[j])
      j++
    }
  }
  // console.log(sorted,i,j)
  while (i < leftAr.length) {
    sorted.push(leftAr[i])
    i++
  }
  while (j < rightAr.length) {
    sorted.push(rightAr[j])
    j++
  }

  return sorted
}
