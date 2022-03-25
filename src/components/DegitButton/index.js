import { ACTIONS } from "../../store"

function DegitButton({ degit, dispatch }) {
  return (
    <button onClick={() => dispatch({ payload: { degit }, type: ACTIONS.ADD_DIGITS })}>{degit}</button>
  )
}

export default DegitButton