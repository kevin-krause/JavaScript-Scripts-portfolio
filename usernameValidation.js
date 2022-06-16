// Validate usernames for login purposes

function CodelandUsernameValidation(str) {
  const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/
  const valid_length = str => str.length >= 4 && str.length <= 25
  return valid_length(str), valid_reg.test(str)
}

console.log(CodelandUsernameValidation(readline()))
