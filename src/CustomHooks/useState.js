import { useReducer } from 'react'
import { reducer } from '../store'

function useState() {
  const [state, dispatch] = useReducer(reducer, {})

  return [state, dispatch]
}

export default useState