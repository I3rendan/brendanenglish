import React, { Component } from 'react';
import Parallax from 'parallax-js';
import BodyClassName from 'react-body-classname';
import { Link } from 'react-router-dom';
export default class About extends Component {

  displayName: 'About';

  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    return (
      <BodyClassName className="about">
        <section id="about">
          <div id="wrap-about-top" ref={el => this.scene = el}>
            <div className="layer" data-depth="0.33">
              <div className="wrap-about-content">

                <Link to="/" onClick={this.props.addClass} className="btn btn-accent">
                  View my work
                </Link>

                <Link to="/contact" className="btn btn-accent">
                  Contact me
                </Link>

              </div>
            </div>
          </div>
          <div id="wrap-about-bottom">
            <h2>My resume</h2>
          </div>
        </section>
      </BodyClassName>
    );
  }
}