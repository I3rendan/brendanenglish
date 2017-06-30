import React, { Component } from 'react';
import Parallax from 'parallax-js';
import { Link } from 'react-router-dom';
import {SectionsContainer, Section} from 'react-fullpage';
export default class Home extends Component {

  displayName: 'Home';

  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  onLeave() {
    alert('leave');
  }

  render() {

    const options = {
      verticalAlign: true,
      delay: 500,
      touchSensitivity: 15,
      anchors: ['BrendansWorld', 'NebulaV1', 'Milk', 'Kourthouse', 'GreeneSt', 'NebulaV5']
    };

    return (
      <section id="wrap-home">

        <div id="wrap-home-top" ref={el => this.scene = el}>

          <div className="bg-home-wrap layer" data-depth="0.125">
            <div className="bg-home"></div>
          </div>

          <div className="home-intro layer" data-depth="0.33">
            <h1>Creating things since <span>1999</span></h1>
            <button onClick={this.props.addClass} className="btn btn-accent">View my work</button>
          </div>

          <div id="work" className="layer" data-depth="0.25">

            <SectionsContainer {...options}>

              <Section className="work-item-wrap">

                <div className="work-item">

                  <div className="work-name">
                    <p className="work-year">1999</p>
                    <h3 className="sans">Brendan's World</h3>
                    <h4 className="sans">
                      This is where it all began... my very first site. Yes, there's a space background. Yes, it has tables and iframes. Yes, it has a spinning earth gif (the pinnacle of web technology at the time). And yes, it's riddled with embarrassing content and grammatical errors. I was only 14 when I created this so go easy...
                    </h4>
                    <Link className="btn btn-accent work-slides" to="/about">
                      Check it out
                    </Link>
                  </div>

                  <div className="work-img brendans-world"></div>

                </div>

              </Section>

              <Section className="work-item-wrap">

                <div className="work-item">

                  <div className="work-name">
                    <p className="work-year">2001</p>
                    <h3 className="sans">Nebula Web Designs &ndash; v1</h3>
                    <h4 className="sans">
                      Welcome to the wonderful age of Flash! Oh how I loved Flash... superfulious animations, bad graphics, and loads of awesomeness. This was the company name I designed under for almost 10 years. Lots of good times...
                    </h4>
                    <Link className="btn btn-accent work-slides" to="/about">
                      Check it out
                    </Link>
                  </div>

                  <div className="work-img nebula-1"></div>

                </div>

              </Section>

              <Section className="work-item-wrap">

                <div className="work-item">

                  <div className="work-name">
                    <p className="work-year">2004</p>
                    <h3 className="sans">Milk Productions</h3>
                    <h4 className="sans">
                    I loved this one... really minimal, interesting animations, and a new design approach for me (look, a <em>white</em> background!!). This was for a small production company who were willing to take a chance on a young web designer.
                    </h4>
                    <Link className="btn btn-accent work-slides" to="/about">
                      Check it out
                    </Link>
                  </div>

                  <div className="work-img milk"></div>

                </div>

              </Section>

              <Section className="work-item-wrap">

                <div className="work-item">

                  <div className="work-name">
                    <p className="work-year">2005</p>
                    <h3 className="sans">Kourthouse Media</h3>
                    <h4 className="sans">
                      A Flash site I built for an aspiring film agency. I remember being proud of the avant garde design for this one (even though the proportions are a bit off). Here you can see where I'm starting to invest in interaction design. 
                    </h4>
                    <Link className="btn btn-accent work-slides" to="/about">
                      Check it out
                    </Link>
                  </div>

                  <div className="work-img kourthouse"></div>

                </div>

              </Section>

              <Section className="work-item-wrap">

                <div className="work-item">

                  <div className="work-name">
                    <p className="work-year">2006</p>
                    <h3 className="sans">Greene Street Club</h3>
                    <h4 className="sans">
                      I worked here for a few years while in college. I designed their logo, built and maintained their site (featuring AJAX content and advanced Flash scripting). I also designed all their posters, flyers, and general marketing. This was a huge opportunity for me and I learned a great deal here.
                    </h4>
                    <Link className="btn btn-accent work-slides" to="/about">
                      Check it out
                    </Link>
                  </div>

                  <div className="work-img greene-street"></div>

                </div>

              </Section>

              <Section className="work-item-wrap">

                <div className="work-item">

                  <div className="work-name">
                    <p className="work-year">2007</p>
                    <h3 className="sans">Nebula Web Designs &ndash; v5</h3>
                    <h4 className="sans">
                      By the 5th iteration of Nebula, I was really starting to round-out my portfolio and making a decent living (for a college student). I was getting regular design work, mastering object-oriented programming, honing-in on user interactions, and realizing I could turn my passion into a career. <a href="">Full Nebula archive here</a>
                    </h4>
                    <Link className="btn btn-accent work-slides" to="/about">
                      Check it out
                    </Link>
                  </div>

                  <div className="work-img nebula-5"></div>

                </div>

              </Section>

            </SectionsContainer>

          </div>

        </div>

        <div id="wrap-home-bottom">
          <div className="wrap-inner">

            <h2>Hello!</h2>
            <h3 className="sans">I'm a creative director, product designer, and developer.</h3> 

            <button onClick={this.props.addClass} className="btn btn-accent">
              View my work
            </button>
            <Link to="/contact" className="btn btn-accent">
              More about me
            </Link>

          </div>
        </div>

      </section>
    );
  }
}