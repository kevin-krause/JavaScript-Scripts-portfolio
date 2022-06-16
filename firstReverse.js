// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

function FirstReverse(string) {
  return string.split('').reverse().join('')
}

FirstReverse(readline())
