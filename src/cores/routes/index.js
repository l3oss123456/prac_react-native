import React from 'react';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Home from '../../containers/home/index';
import FormTemplate from '../../containers/home/components/FormTemplate/index';

const Routes = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addUser" component={FormTemplate} />
        <Route exact path="/editUser" component={FormTemplate} />
      </Switch>
    </NativeRouter>
  );
};

export default Routes;
