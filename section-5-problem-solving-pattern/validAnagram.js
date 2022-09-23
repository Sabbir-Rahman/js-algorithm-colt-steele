// examples
    // validAnagram('', '') // true
    // validAnagram('aaz', 'zza') // false
    // validAnagram('anagram', 'nagaram') // true
    // validAnagram("rat","car") // false) // false
    // validAnagram('awesome', 'awesom') // false
    // validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
    // validAnagram('qwerty', 'qeywrt') // true
    // validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length != str2.length) {
    return false
  }

  let obj1 = {}
  let obj2 = {}

  for (let value of str1) {
    obj1[value] = (obj1[value] || 0) + 1
  }
  for (let value of str2) {
    obj2[value] = (obj2[value] || 0) + 1
  }

  for (let key in obj1) {
    if (obj1[key] != obj2[key]) {
      return false
    }
  }

  return true
}
