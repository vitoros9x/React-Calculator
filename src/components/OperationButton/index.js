import { ACTIONS } from "../../store"

const OperationButton = ({ operator, dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: operator })}>{operator}</button>
  )
}

export default OperationButton