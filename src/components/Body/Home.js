import React, { Component } from 'react';
import Parallax from 'parallax-js';
import { Link } from 'react-router-dom';
export default class Home extends Component {

  displayName: 'Home';

  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    return (
      <section id="home">

        <div id="wrap-home-top" ref={el => this.scene = el}>

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

          <div className="home-intro layer" data-depth="0.33">
            <h1>Creating things since <span>1999</span></h1>
            <Link to="/work" className="btn btn-accent">View my work</Link>
          </div>

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
          </div>

        </div>

        <div id="wrap-home-bottom">
          <div className="wrap-inner">

            <h2>Hello!</h2>
            <h3 className="sans">I'm a creative director, product designer, and developer.</h3> 

            <Link to="/work" className="btn btn-accent">
              View my work
            </Link>
            <Link to="/about" className="btn btn-accent">
              More about me
            </Link>

          </div>
        </div>

      </section>
    );
  }
}