import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Body/Home';
import NotFound from './Body/NotFound';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {workOn: false};
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }

  addClass() {
    this.setState({
      workOn: true
    });
  }

  removeClass() {
    this.setState({
      workOn: false
    });
  }

  render() {
    return (
      <div className={classNames('app', {'work': this.state.workOn})}>
        <Header addClass={this.addClass} removeClass={this.removeClass} />
        <Switch>
          <Route exact path='/' render={props => (<Home addClass={this.addClass} />)} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;