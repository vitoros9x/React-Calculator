import ACTIONS from './actions'
import evaluate from '../assets/eluavate'

function reducer(state, { type, payload }) {

  console.log(type, payload);
  switch (type) {
    case ACTIONS.ADD_DIGITS:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.degit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (!state.currentOperand) {
        return {
          ...state,
          operation: payload,
          prevOperand: state.prevOperand,
          currentOperand: ""
        }
      }

      return {
        ...state,
        operation: payload,
        prevOperand: state.currentOperand,
        currentOperand: ""
      }

    case ACTIONS.EVALUATE:
      if (!state.prevOperand) return state

      const results = evaluate(state)

      return {
        ...state,
        operation: '',
        prevOperand: '',
        currentOperand: results
      }

    case ACTIONS.CLEAR:
      return {
        operation: '',
        prevOperand: '',
        currentOperand: ''
      }

    case ACTIONS.DELETE_DIGITS:
      const current = state.currentOperand.toString()

      return {
        ...state,
        currentOperand: current.slice(0, current.length - 1)
      }

    default:
      throw new Error('Action invalid')
  }
}

export default reducer