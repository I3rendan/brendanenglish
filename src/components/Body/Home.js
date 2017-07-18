import React, { Component } from 'react';
import Parallax from 'parallax-js';
import BodyClassName from 'react-body-classname';
import { Link } from 'react-router-dom';
export default class Home extends Component {

  displayName: 'Home';

  componentDidMount() {
    if (window.innerWidth > 920){
      this.parallax = new Parallax(this.scene);
    }
  }

  componentWillUnmount() {
    if (window.innerWidth > 920){
      this.parallax.disable();
    }
  }

  render() {
    return (
      <BodyClassName className="home">
        <section id="home">

          {window.innerWidth > 920 ? 
            <div id="wrap-home-top" ref={el => this.scene = el}>
              <div className="home-intro layer" data-depth="0.33">
                <h1>Creating things since <Link to="/work#brendans-world">1999</Link></h1>
                <Link to="/work" className="btn btn-accent">View my work</Link>
              </div>
            </div> :
            <div id="wrap-home-top">
              <div className="home-intro">
                <h1>Creating things since <Link to="/work#brendans-world">1999</Link></h1>
                <Link to="/work" className="btn btn-accent">View my work</Link>
              </div>
            </div>
          }

          <div id="wrap-home-bottom">
            <div className="wrap-inner">

              <h2>Hello!</h2>
              <h3 className="sans">I'm a creative director, designer, and developer.</h3> 

              <Link to="/work" className="btn btn-accent">
                View my work
              </Link>
              <Link to="/about" className="btn btn-accent">
                More about me
              </Link>

            </div>
          </div>
        </section>
      </BodyClassName>
    );
  }
}