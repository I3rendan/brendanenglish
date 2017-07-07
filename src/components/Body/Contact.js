import React, { Component } from 'react';
import Parallax from 'parallax-js';
import BodyClassName from 'react-body-classname';
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
      <BodyClassName className="contact">
        <section id="contact">
          <div id="wrap-contact-top" ref={el => this.scene = el}>
            <div className="layer" data-depth="0.33">
              <div className="wrap-contact-content">

                <Link to="/" onClick={this.props.addClass} className="btn btn-accent">
                  View my work
                </Link>

              </div>
            </div>
          </div>
        </section>
      </BodyClassName>
    );
  }
}