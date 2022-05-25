function eluavate(state) {
  const { currentOperand, prevOperand, operation } = state
  const nextNum = +currentOperand
  const prevNum = +prevOperand

  switch (operation) {
    case "+":
      return prevNum + nextNum

    case '-':
      return prevNum - nextNum

    case '*':
      return prevNum * nextNum

    case '÷':
      return prevNum / nextNum

    default:
      break;
  }
}

export default eluavate;