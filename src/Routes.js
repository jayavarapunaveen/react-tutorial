import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Cart from './components/Cartlist/Cart';
import ProductDetail from './components/ProductDetail/PorductDetail';
import ProductList from './components/ProductList/ProductList';
import Singin from './components/Signin/Singin';
import FirstContainer from './components/Website/FirstContainer';

function PageNotFound(props) {
  return (
    <div>
      No such route go to
      <Link to='/signin'>SignIn</Link>
      <Link to='/'>Home Page</Link>
    </div>
  );
}

const Routes = () => (
  <Switch>
    <Route path="/signin" exact component={Singin} />
    <Route path="/cart" component={Cart} />
    <Route path="/product/:productId" exact component={ProductDetail} />
    <Route path="/" exact component={ProductList} />
    <Route path="/website" exact component={FirstContainer} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Routes;
