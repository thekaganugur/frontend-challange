import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './containers/HomePage';
import MoviesPage from './features/movies/MoviesPage';
import SeriesPage from './features/series/SeriesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/Series">
            <SeriesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
