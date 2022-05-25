import './assets/App.scss';
import { useReducer } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import { StoreProvider } from './store'

function App() {

  return (
    <StoreProvider>
      <div className="App">
        <Header />
        <Body />
      </div>
    </StoreProvider>
  );
}

export default App;