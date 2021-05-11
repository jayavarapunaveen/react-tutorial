import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import SignIn from './components/Signin/Singin'

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
    <Route path="/signin" component={SignIn} />
    <Route path="/" exact component={App} />
    <Route path="*" component={PageNotFound}/>
  </Switch>
);

export default Routes;
