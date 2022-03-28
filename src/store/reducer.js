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
      const results = evaluate()

      return {
        ...state,
        operation: '',
        prevOperand: '',
        currentOperand: results
      }

    default:
      throw new Error('Action invalid')
  }
}

export default reducer