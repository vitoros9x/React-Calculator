import ACTIONS from './actions'

function reducer(state, { type, payload }) {

  console.log(type, payload);
  switch (type) {
    case ACTIONS.ADD_DIGITS:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.degit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      // if (!state.currentOperand) {
      //   return {
      //     ...state,
      //     operation: payload,
      //     prevOperand: `${state.prevOperand || ''}${payload}`,
      //     currentOperand: ""
      //   }
      // }

      return {
        ...state,
        operation: payload,
        prevOperand: `${state.currentOperand || ''}${payload}`,
        currentOperand: ""
      }

    default:
      throw new Error('Action invalid')
  }
}

export default reducer