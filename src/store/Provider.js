import { useReducer } from "react"
import Context from "./Context"
import reducer from "./reducer"

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, {})
  console.log(state);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Provider