import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Loader } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

// lazy load the app, so we can redirect to login page asap
const App = React.lazy(() => import('./components/App'));

// todo use React.StrictMode some day (styled-components >= 5)

const root = document.getElementById('root');

if (!root || !App) {
  // eslint-disable-next-line no-alert
  alert('Can\'t initialize the app');
} else {
  render(
    <Suspense fallback={<Loader active />}>
      <Router>
        <App />
      </Router>
    </Suspense>,
    root,
  );
}
// Learn more about service workers: http://bit.ly/CRA-PWA
// temporary disabling due to production issues with nginx
// serviceWorker.register();
