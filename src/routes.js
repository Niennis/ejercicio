// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import User from './components/user/user';
import Recharge from './components/recharge/recharge';
import Caja from './components/recharge/cajavecina/cajaVecina';
import RechargeHistory from './components/rechargehistory/rechargeHistory';
import Services from './components/services/services';
import ShopHistory from './components/shophistory/shopHistory';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/user" component={User}/>
      <Route path="/recharge" component={Recharge}/>
      <Route path="/caja" component={Caja}/>
      <Route path="/history" component={RechargeHistory}/>
      <Route path="/services" component={Services}/>
      <Route path="/shopping" component={ShopHistory}/>
      <Route path="/" component={User}/>      
    </Switch>
  </App>

export default AppRoutes;