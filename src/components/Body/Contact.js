import React, { Component } from 'react';
import Parallax from 'parallax-js';
import BodyClassName from 'react-body-classname';
import { firebase } from '../../firebase';
export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      hasError: false,
      emailSent: false,
      emailSending: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    if (!email || !name || !message){
      this.setState({
        hasError: true
      });
    } else {
      this.setState({
        emailSending: true
      }, () => {
        firebase.sendContactEmail({ to: 'brendan@brendanenglish.com', from: 'contact@brendanenglish.com', name: name, email: email, message: message }).then(() => {
          this.setState({
            name: '',
            email: '',
            message: '',
            hasError: false,
            emailSent: true
          });
        });
      });
    }
  }

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
                  <a href="mailto:brendan@brendanenglish.com" target="_blank" rel="noopener noreferrer"><i className="icon icon-email" /></a>
                  <a href="https://www.linkedin.com/in/brendan-english-a7230631" target="_blank" rel="noopener noreferrer"><i className="icon icon-linkedin" /></a>
                  <a href="https://github.com/I3rendan" target="_blank" rel="noopener noreferrer"><i className="icon icon-github" /></a>
                </div>

                <form id="contact-form" className={`${this.state.emailSent ? 'sent' : ''} ${this.state.emailSending ? 'sending' : ''}`} onSubmit={this.handleSubmit}>
                  <h2>Sent<span>I'll be in touch soon!</span></h2>
                  <p className={this.state.hasError}>
                    Please fill-out all inputs before sending!
                  </p>
                  <input autoFocus type="text" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Your name..." />
                  <input type="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email..." />
                  <textarea id="message" cols="4" value={this.state.message}  onChange={this.handleChange} placeholder="Your message..." />
                  <button type="submit" id="submit" className="btn btn-accent">
                    <span className="submit-text">Send message</span>
                    <span className="submit-loading" />
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