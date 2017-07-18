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
            <div className="layer" data-depth="0.25">
              <div className="wrap-contact-content">

                <div className="contact-social">
                  <Link to="https://www.linkedin.com/in/brendan-english-a7230631" target="_blank"><i className="icon icon-linkedin" /></Link>
                  <Link to="https://github.com/I3rendan" target="_blank"><i className="icon icon-github" /></Link>
                  <Link to="https://www.facebook.com/I3rendan" target="_blank"><i className="icon icon-facebook" /></Link>
                </div>

                <form id="contact-form">
                  <input type="text" id="name" placeholder="Your name..." />
                  <input type="text" id="email" placeholder="Your email..." />
                  <textarea id="message" cols="4" placeholder="Your message..." />
                  <button type="submit" id="submit" className="btn btn-accent">
                    Send message
                  </button>
                </form>

              </div>
            </div>
          </div>
        </section>
      </BodyClassName>
    );
  }
}