import { createContext } from "react"
import useState from "../CustomHooks/useState"

const StateProvider = createContext()

function Provider({ children }) {
  const [state, dispatch] = useState()
  const { currentOperand, prevOperand, operation } = state

  return (
    <StateProvider.Provider value={[state, dispatch]}>
      {children}
    </StateProvider.Provider>
  )
}