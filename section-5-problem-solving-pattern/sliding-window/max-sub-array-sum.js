// calculate the max sum for subarray
// for example (1,2,5,2,8,1,5),2 will 10

function maxSubArraySum(ar,subArLen){
  // calculate the first subArrayLen sum first
  let sum = 0
  let max = -99999
  for (let i=0;i<subArLen;i++){
    sum += ar[i]
  }

  for (let i=subArLen;i<ar.length;i++){
    sum = sum - ar[i-subArLen] + ar[i]
    if (sum>max) max = sum
  }
  return max
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5],2))