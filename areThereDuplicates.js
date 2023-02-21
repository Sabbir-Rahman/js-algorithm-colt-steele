function areThereDuplicates() {
    let obj = {}
    for (let i= 0;i<arguments.length;i++){
      obj[arguments[i]] = (obj[arguments[i]] || 0) + 1
      if (obj[arguments[i]]>1){
        return true
      }
    }

    return false
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'))