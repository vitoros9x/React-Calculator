import './assets/App.scss';
import { useReducer } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import { reducer } from './store';

function App() {
  const [state, dispatch] = useReducer(reducer, {})
  const { currentOperand, prevOperand, operation } = state

  return (
    <div className="App">
      <Header currentOperand={currentOperand} prevOperand={prevOperand} />
      <Body dispatch={dispatch} />
    </div>
  );
}

export default App;