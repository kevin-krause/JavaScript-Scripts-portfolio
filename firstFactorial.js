// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.

function FirstFactorial(num) {
  return num === 1 ? 1 : num * FirstFactorial(num - 1)
}

FirstFactorial(readline())
