import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// const LoginPage = React.lazy(() => import('./pages/Login'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));
const TestPage = React.lazy(() => import('./pages/Test'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/send" component={TestPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect exact from="/" to="/send" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
