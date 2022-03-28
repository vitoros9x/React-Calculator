import './assets/App.scss';
import { useReducer } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import StateProvider from './components/StateProvider';

function App() {

  return (
    <StateProvider>
      <div className="App">
        <Header />
        <Body />
      </div>
    </StateProvider>
  );
}

export default App;