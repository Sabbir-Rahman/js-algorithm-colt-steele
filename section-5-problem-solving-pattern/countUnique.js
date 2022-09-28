// space O(1) time O(n)
function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length == 0) {
    return 0
  }

  let count = 1
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      count += 1
    }
  }

  return count
}
