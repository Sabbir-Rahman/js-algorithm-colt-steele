// the function should find the first pair where sum is zero

function sorted_sum_first_zero_pair(ar){
  let left = 0
  let right = ar.length - 1
  while(left<right){
    const sum = ar[left]+ ar[right]

    if (sum == 0) return [ar[left],ar[right]]
    else if (sum < 0) left ++
    else right --
  }
}

console.log(sorted_sum_first_zero_pair([-4, -3, -2, -1, 0, 1, 2, 3, 10]))