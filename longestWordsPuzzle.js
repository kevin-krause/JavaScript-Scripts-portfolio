// Search for the Longest Word between one or more words. It could be numbers too :)

function LongestWord(sen) {
  var words = sen.match(/\w+/g)

  var longest = words[0]

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i]
    }
  }

  return longest
}

console.log(LongestWord(readline()))
