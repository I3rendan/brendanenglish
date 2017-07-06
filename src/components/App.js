import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Body/Home';
import Work from './Body/Work';
import About from './Body/About';
import Contact from './Body/Contact';
import NotFound from './Body/NotFound';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch onUpdate={ window.scrollTo(0,0) }>
          <Route exact path='/' component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;