import React, { Component } from 'react';
import Parallax from 'parallax-js';
import { Link } from 'react-router-dom';
export default class Contact extends Component {

  displayName: 'Contact';

  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    return (
      <section id="contact">

        <div id="wrap-contact-top" ref={el => this.scene = el}>

          <div className="layer" data-depth="0.075">

            <div className="bg-contact-wrap bg-wrap">
              <div className="bg-contact bg"></div>
            </div>

            <div className="wrap-contact-content">

              <Link to="/" onClick={this.props.addClass} className="btn btn-accent">
                View my work
              </Link>

            </div>

          </div>

        </div>

      </section>
    );
  }
}