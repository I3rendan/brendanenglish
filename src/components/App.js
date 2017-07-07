import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Parallax from 'parallax-js';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Body/Home';
import Work from './Body/Work';
import About from './Body/About';
import Contact from './Body/Contact';
import NotFound from './Body/NotFound';

class App extends Component {

  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div id="app-wrap" ref={el => this.scene = el}>

          <div className="bg-stars-wrap bg-wrap layer" data-depth="0.075">
            <div className="bg-stars bg"></div>
          </div>

          <div className="star-field field-1 layer" data-depth="0.125">
            <span className="star ring"></span>
            <span className="star"></span>
            <span className="star ring"></span>
            <span className="star"></span>
          </div>

          <div className="star-field field-2 layer" data-depth="0.15">
            <span className="star ring"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </div>

          <Switch onUpdate={ window.scrollTo(0,0) }>
            <Route exact path='/' component={Home} />
            <Route path='/work' component={Work} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='*' component={NotFound} />
          </Switch>

          <div className="star-field field-3 layer" data-depth="0.33">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star ring"></span>
            <span className="star ring"></span>
          </div>

          <div className="star-field field-4 layer" data-depth="0.75">
            <span className="star"></span>
            <span className="star ring"></span>
            <span className="star ring"></span>
            <span className="star"></span>
            <span className="star ring"></span>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;