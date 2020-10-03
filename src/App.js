import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import PageNotFound from './components/PageNotFound';
import Model from './components/Model';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route exact path='/details' component={Details}/>
          <Route exact path='/cart' component={Cart}/>
          <Route component={PageNotFound}/>
        </Switch>
        <Model />
      </React.Fragment>
  );
}

export default App;
