import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/PorductDetail';
import ProductList from './components/ProductList/ProductList';

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
    <Route path="/product/:id" exact component={ProductDetail} />
    <Route path="/" exact component={ProductList} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Routes;
