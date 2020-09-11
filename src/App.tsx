import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          {/* <Route path="/movies"></Route>
          <Route path="/Series"></Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
