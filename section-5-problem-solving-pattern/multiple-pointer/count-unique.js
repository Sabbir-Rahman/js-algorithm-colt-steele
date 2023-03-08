// count unique values for sorted an array
function count_unique_values(ar){
  let count = 1
  for(let i=0,j=1;j<ar.length;j++){
    if(ar[i]!==ar[j]){
      count ++
      i = j
    }
  }

  return count 
}

console.log(count_unique_values([1, 1, 2]))