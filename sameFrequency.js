function sameFrequency(num1, num2) {
  const str1 = String(num1)
  const str2 = String(num2)

  if (str1.length != str2.length) {
    return false
  }

  let obj1 = {}
  let obj2 = {}

  for (value of str1) {
    obj1[value] = (obj1[value] || 0) + 1
  }

  for (value of str2) {
    obj2[value] = (obj2[value] || 0) + 1
  }

  for (key in obj1) {
    if (!(key in obj2)) {
      return false
    }

    if (obj1[key] != obj2[key]) {
      return false
    }
  }

  return true
}

console.log(sameFrequency(22,222))
