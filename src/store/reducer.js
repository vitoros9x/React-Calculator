import ACTIONS from './actions'

function reducer(state, { type, payload }) {

  console.log(payload);
  switch (type) {
    case ACTIONS.ADD_DIGITS:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.degit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        operation: payload
      }

    default:
      throw new Error('Action invalid')
  }
}

export default reducer