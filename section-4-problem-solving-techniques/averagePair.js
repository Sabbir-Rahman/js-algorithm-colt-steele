// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
function averagePair(arr, avg) {
  for (let j = arr.length - 1, i = 0; j > 0; j--) {
    let tempAvg = 0
    while (tempAvg < avg) {
      tempAvg = (arr[j] + arr[i]) / 2
      if (tempAvg == avg) {
        return true
      }
      i += 1
    }
  }
  return false
}

console.log(averagePair([], 4))
