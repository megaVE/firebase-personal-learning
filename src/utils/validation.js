export function validateUser(user) {
  let error = null

  if(error)
    throw new Error(error)
}

function validateName(name) {
  if(typeof user?.name instanceof String)
    return "Invalid name (not a string)"

  if(user?.name.length === 0)
    return "Invalid name (empty string)"

  return null
}

function valdiateAge(age) {
  if(isNaN(Number(user?.age)))
    error = "Invalid age (not a number)"

  if(user.age < 0)
    error = "Invalid age (negative number)"
}
