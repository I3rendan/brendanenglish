import React, { Component } from 'react';
import Parallax from 'parallax-js';

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
      <section id="wrap-home">

        <div id="wrap-home-top" ref={el => this.scene = el}>

          <div className="bg-home-wrap layer" data-depth="0.125">
            <div className="bg-home"></div>
          </div>

          <h2>
            <div className="layer" data-depth="0.5">
              <div className="layer" data-depth="0.15">Creative Director</div>
            </div>
            <div className="layer" data-depth="0.33">
              <div className="layer" data-depth="0.15">Product Designer</div>
            </div>
            <div className="layer" data-depth="0.25">
              <div className="layer" data-depth="0.15">Developer</div>
            </div>
          </h2>

        </div>

        <div id="wrap-home-bottom">

          <h2 className="sans">Some projects from the last few years...</h2>

        </div>

      </section>
    );
  }
}