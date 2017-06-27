import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Body/Home';
import NotFound from './Body/NotFound';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;