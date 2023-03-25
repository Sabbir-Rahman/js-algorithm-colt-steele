// if data is given dynamically or data ar nearly sorted insertion sort is good

function insertionSort(ar){
  for (let i=1;i<ar.length;i++){
    var currentval = ar[i]
    for(var j=i-1;i>=0 && ar[j]>currentval;j--){
      ar[j+1]= ar[j]
    }
    ar[j+1] = currentval
  }
}

const arr = [2, 3, 1, 4, 6, 8, 10, 0, -2]
insertionSort(arr)
console.log(arr)
