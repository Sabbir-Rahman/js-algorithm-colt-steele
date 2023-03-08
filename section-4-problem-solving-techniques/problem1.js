// Write a function that return the number of char for a string
// Ex :- "Hello " expected output: { h: 1, e: 1, l: 2, o: 1}

function charCount1(str) {
  var obj = {}

  for (var char of str){
    char = char.toLowerCase()
    if(/[a-z0-9]/.test(char)){
      if (obj[char] > 0) {
        obj[char] += 1
      } else {
        obj[char] = 1
      }
    }
  }
  return obj
}

function charCount2(str) {
  var obj = {}

  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}

function isAlphaNumeric(char){
  var code = char.charCodeAt(0)

  if ((code>=48 && code <=57)||(code>=97 && code <=122)||(code>=65 && code <=90)){
    return true
  }
  return false
}

console.log(charCount1("Hello "))
console.log(charCount2("Hello "))