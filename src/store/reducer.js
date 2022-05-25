import ACTIONS from './actions'
import evaluate from '../assets/eluavate'

function reducer(state, { type, payload }) {
  const { prevOperand, currentOperand, overwrite } = state

  switch (type) {
    case ACTIONS.ADD_DIGITS:
      if (overwrite) {
        return {
          ...state,
          currentOperand: payload.degit,
          overwrite: false
        }
      }

      if (currentOperand === '.') {
        return {
          ...state,
          currentOperand: `0.${payload.degit}`
        }
      }

      return {
        ...state,
        currentOperand: `${currentOperand || ''}${payload.degit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (!prevOperand && !currentOperand) {
        return {
          ...state,
          operation: payload,
          prevOperand: '0',
          currentOperand: ""
        }
      }

      if (!currentOperand) {
        return {
          ...state,
          operation: payload,
          prevOperand: prevOperand,
          currentOperand: ""
        }
      }

      if (prevOperand && currentOperand) {
        const results = evaluate(state)

        return {
          ...state,
          operation: payload,
          prevOperand: results,
          currentOperand: "",
        }
      }

      return {
        ...state,
        operation: payload,
        prevOperand: currentOperand,
        currentOperand: "",
        overwrite: false
      }

    case ACTIONS.EVALUATE:
      if (!prevOperand) return state

      const results = evaluate(state)

      return {
        ...state,
        operation: '',
        prevOperand: '',
        currentOperand: results,
        overwrite: true
      }

    case ACTIONS.CLEAR:
      return {
        operation: '',
        prevOperand: '',
        currentOperand: ''
      }

    case ACTIONS.DELETE_DIGITS:
      const current = currentOperand.toString()

      if (overwrite) {
        return {
          ...state,
          currentOperand: '',
          overwrite: false
        }
      }

      return {
        ...state,
        currentOperand: current.slice(0, current.length - 1)
      }

    default:
      throw new Error('Action invalid')
  }
}

export default reducer