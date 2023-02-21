// Write a function called isSubsequence which takes in two strings and checks whether 
// the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear 
// somewhere in the second string, without their order changing.
function isSubsequence(str1,str2) {
  // good luck. Add any arguments you deem necessary.
  let j =0
  let cnt = 0
  for (let i=0;i<str1.length;i++){
    while(j<str2.length){
      if (str1[i]==str2[j]){
        cnt +=1
        j += 1
        break
      }
      j+=1
    }
  }

  if (str1.length == cnt){
    return true
  }

  return false
}

console.log(isSubsequence('abc', 'abracadabra'))
