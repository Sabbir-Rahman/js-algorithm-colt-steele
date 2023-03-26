function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
  if (num == 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function maxDigit(numAr) {
  let maxCount = 0
  for (num of numAr) {
    maxCount = Math.max(maxCount, digitCount(num))
  }
  return maxCount
}

function radixSort(nums){
  let maxDigitCount = maxDigit(nums)
  for (let k=0;k<maxDigitCount;k++){
    let digitBuckets = Array.from({length:10},()=> [])
    for (let i=0;i<nums.length;i++){
      let digit = getDigit(nums[i],k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

const arr = [1,2,34,5,6,22,554,32,5543,23,43]
const arr2 = radixSort(arr)
console.log(arr2)