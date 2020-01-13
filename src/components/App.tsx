import React from 'react';
import { Switch, Route } from 'react-router-dom';

const LoginPage = React.lazy(() => import('./pages/Login'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/404" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
