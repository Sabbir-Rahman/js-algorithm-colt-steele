// max sum of n elemnts in an array
function maxSumArray(arr,n){
  
  if (arr.length < n){
    return null
  }

  let max = -999999
  let prevSum = 0;
  for( let i=0;i<n;i++){
    prevSum += arr[i]
  }

  max = prevSum

  for(let i=n;i<arr.length;i++){
    prevSum = prevSum - arr[i-n] + arr[i]
    if (max<prevSum){
      max = prevSum
    }
  } 

  return max
}

console