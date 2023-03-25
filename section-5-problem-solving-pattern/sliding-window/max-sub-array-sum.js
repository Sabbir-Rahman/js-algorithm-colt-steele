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

    function minSubArrayLen(nums, sum) {
      let total = 0
      let start = 0
      let end = 0
      let minLen = Infinity

      while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if (total < sum && end < nums.length) {
          total += nums[end]
          end++
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window
        else if (total >= sum) {
          minLen = Math.min(minLen, end - start)
          total -= nums[start]
          start++
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
          break
        }
      }

      return minLen === Infinity ? 0 : minLen
    }