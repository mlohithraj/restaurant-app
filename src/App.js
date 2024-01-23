
import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment className="App">
          <Cart/>
        <Header/>
        <Meals/>
    </Fragment>
  );
}

export default App;
