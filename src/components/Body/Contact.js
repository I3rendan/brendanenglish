import React, { Component } from 'react';
import Parallax from 'parallax-js';
import BodyClassName from 'react-body-classname';
import { Link } from 'react-router-dom';
export default class Contact extends Component {

  displayName: 'Contact';

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      hasSent: false,
      hasError: false
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
    if (!this.state.email || !this.state.name || !this.state.message){
      this.setState({
        hasError: true
      });
    } else {
      fetch('sendEmail.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: 'brendan@brendanenglish.com', 
          name: this.state.name, 
          email: this.state.email, 
          subject: 'BrendanEnglish.com Message', 
          message: this.state.message
        })
      })
      .then((response) => response.text())
      .then((responseData) => {
        this.setState({
          hasSent: true
        });
      })
      .catch((error) => {
        console.warn(error);
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
                  <Link to="mailto:brendan@brendanenglish.com" target="_blank"><i className="icon icon-email" /></Link>
                  <Link to="https://www.linkedin.com/in/brendan-english-a7230631" target="_blank"><i className="icon icon-linkedin" /></Link>
                  <Link to="https://github.com/I3rendan" target="_blank"><i className="icon icon-github" /></Link>
                  <Link to="https://www.facebook.com/I3rendan" target="_blank"><i className="icon icon-facebook" /></Link>
                </div>

                <form id="contact-form" className={this.state.hasSent} onSubmit={this.handleSubmit}>
                  <h2>Sent!</h2>
                  <p className={this.state.hasError}>
                    Please fill-out all inputs before sending!
                  </p>
                  <input type="text" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Your name..." />
                  <input type="text" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email..." />
                  <textarea id="message" cols="4" value={this.state.message}  onChange={this.handleChange} placeholder="Your message..." />
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