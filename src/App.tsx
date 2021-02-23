import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '@views/Login';
import Main from '@layout/Main';
import Routes from '@utils/getRoutes';
import '@css/index.normal.less';

const Entry = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Main>{Routes}</Main>
      </Switch>
    </BrowserRouter>
  );
};

export default Entry;
