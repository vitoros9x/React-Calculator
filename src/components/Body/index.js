import './style.scss'
import OperationButton from '../OperationButton'
import DegitButton from '../DegitButton'
import { ACTIONS } from '../../store'
import { useContext } from 'react'
import { StoreContext } from '../../store'


function Body() {
  const [state, dispatch] = useContext(StoreContext)

  return (
    <div className="body grid">
      <button className="span-2" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGITS })}>DEL</button>
      <OperationButton operator="÷" dispatch={dispatch} />
      <DegitButton degit="1" dispatch={dispatch} />
      <DegitButton degit="2" dispatch={dispatch} />
      <DegitButton degit="3" dispatch={dispatch} />
      <OperationButton operator="*" dispatch={dispatch} />
      <DegitButton degit="4" dispatch={dispatch} />
      <DegitButton degit="5" dispatch={dispatch} />
      <DegitButton degit="6" dispatch={dispatch} />
      <OperationButton operator="+" dispatch={dispatch} />
      <DegitButton degit="7" dispatch={dispatch} />
      <DegitButton degit="8" dispatch={dispatch} />
      <DegitButton degit="9" dispatch={dispatch} />
      <OperationButton operator="-" dispatch={dispatch} />
      <DegitButton degit="." dispatch={dispatch} />
      <DegitButton degit="0" dispatch={dispatch} />
      <button className='span-2' onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
    </div>
  )
}

export default Body