import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Portfolio } from 'pages';

class App extends Component {
   render() {
      return (
         <Switch>
            <Route path="/portfolio/:index" component={Portfolio} />
            <Route path="/" component={Home} />
         </Switch>
      );
   }
}

export default App;
