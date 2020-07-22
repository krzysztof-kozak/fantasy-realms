import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import GoogleFontLoader from 'react-google-font-loader';
import LandingPage from './landingPage';
import Play from './play';
import Rules from './rules';
import About from './about';
import NotFound from './notFound';

const App = () => (
  <HashRouter>
    <GoogleFontLoader
      fonts={[
        {
          font: 'Pacifico',
          weights: [400],
        },
      ]}
    />
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/play' component={Play} />
      <Route path='/rules' component={Rules} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default App;
