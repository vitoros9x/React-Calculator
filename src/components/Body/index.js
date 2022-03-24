import './style.scss'
import { useReducer } from 'react'
import OperationButton from '../OperationButton'
import DegitButton from '../DegitButton'
import { reducer } from '../../store'

function Body() {
  const [{ currentOperation, prevOperation }, dispatch] = useReducer(reducer, {})

  return (
    <div className="body grid">
      <button className="span-2">AC</button>
      <button>DEL</button>
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
      <DegitButton degit="8" dispatch={dispatch} />
      <DegitButton degit="9" dispatch={dispatch} />
      <button className='span-2'>=</button>
    </div>
  )
}

export default Body