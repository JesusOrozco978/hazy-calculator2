function isNumber(numbers) {
  return !isNaN(numbers) && numbers !== ''
}
function isOk(numbers) {
  const operators = ['+', '-', '*', '/']

  return isNumber(numbers) || operators.includes(numbers)
}
function perfromCalculation(calculationSteps) {
  switch (calculationSteps[1]) {
    case '+':
      return Number(calculationSteps[0]) + Number(calculationSteps[2])

    case '-':
      return Number(calculationSteps[0]) - Number(calculationSteps[2])

    case '*':
      return Number(calculationSteps[0]) * Number(calculationSteps[2])

    case '/':
      return Number(calculationSteps[0]) / Number(calculationSteps[2])
    default:
      return NaN
  }
}


function calculate(incoming) {
  let calculationSteps = []

  incoming.forEach((math => {
    if (isOk(math)) {
      calculationSteps.push(math)
    }
  }))
  if (calculationSteps.length !== 3) return NaN

  return perfromCalculation(calculationSteps)
}














module.exports = calculate
