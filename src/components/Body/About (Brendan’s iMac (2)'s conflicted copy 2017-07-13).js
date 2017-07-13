import React, { Component } from 'react';
import Parallax from 'parallax-js';
import BodyClassName from 'react-body-classname';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import imgProfile from '../../images/me.png';
import imgUNCG from '../../images/uncg.png';
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

                <h1>I design and build websites, applications, and products.</h1>
                <h2>I'm <Link to="#resume">currently</Link> the Creative Director at an education-technology company in DC. I freelance too so <Link to="/contact">let me know</Link> if you have a project I can help with!</h2>

                <Link to="/work" className="btn btn-accent">
                  View my work
                </Link>

              </div>

              <Link to="#resume" className="resume-link">
              My résumé
              <span className="anim-scroll">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </Link>
            
            </div>
          </div>


          <div id="resume">

            <div className="wrap-resume">

              <div className="resume-head">
                <div className="wrap-inner">
                  <div className="resume-img">
                    <img src={imgProfile} alt="Brendan English" />
                  </div>
                  <div className="resume-info">
                    <h3 className="sans">Brendan English</h3>
                    <p className="resume-role">Creative Director at <Link to="http://www.learningobjects.com" target="_blank">Learning Objects</Link>, Washington DC</p>
                    <p className="resume-contact"><Link to="mailto:brendan@brendanenglish.com">brendan@brendanenglish.com</Link> &ndash; <Link to="">LinkedIn</Link></p>
                  </div>
                </div>
              </div>

              <div className="resume-inner wrap-inner">

                <div className="resume-exp">
                  <h3 className="sans">Relevant Experience</h3>
                  <div className="resume-content">
                    <ul>
                      <li>
                        <span className="exp exp1"></span>
                        <p>Product Design, UX, and Strategy</p>
                        <span className="duration">9 years</span>
                      </li>
                      <li>
                        <span className="exp exp2"></span>
                        <p>Frontend UI Design</p>
                        <span className="duration">18 years</span>
                      </li>
                      <li>
                        <span className="exp exp3"></span>
                        <p>Frontend Development</p>
                        <span className="duration">18 years</span>
                      </li>
                      <li>
                        <span className="exp exp4"></span>
                        <p>Angular and React JS</p>
                        <span className="duration">4 years</span>
                      </li>
                      <li>
                        <span className="exp exp5"></span>
                        <p>Graphic Design and Branding</p>
                        <span className="duration">15 years</span>
                      </li>
                      <li>
                        <span className="exp exp6"></span>
                        <p>Wireframing, Prototyping, and Creative Visioning</p>
                        <span className="duration">7 years</span>
                      </li>
                    </ul>

                    <div className="resume-timeline">
                      <h3 className="sans">Experience Timeline</h3>
                      <div className="experience-graph">
                        <Chart
                          chartType="Timeline"
                          data={[
                            ['ID','Experience', 'Start', 'End'],
                            ['1', 'Product Design, UX, and Strategy', new Date('June 12, 2008'), new Date()],
                            ['2', 'Frontend UI Design', new Date('June 1, 1999'), new Date()],
                            ['3', 'Frontend Development', new Date('June 1, 1999'), new Date()],
                            ['4', 'Angular & React JS', new Date('May 12, 2013'), new Date()],
                            ['5', 'Graphic Design and Branding', new Date('February 20, 2002'), new Date()],
                            ['6', 'Wireframing, Prototyping, & Visioning', new Date('August 8, 2010'), new Date()]
                          ]}
                          options={{
                            legend: 'none',
                            backgroundColor: '#181b1e',
                            colors: ['#38CDD8', '#8B60B4', '#F39B1E', '#85C226', '#CE3B19', '#5173E3'],
                            timeline: {
                              showRowLabels: false,
                              colorByRowLabel: true,
                              barLabelStyle: { fontName: 'Source Sans Pro', fontSize: 12 }
                            }
                          }}
                          graph_id="ExpTimeline"
                          width="100%"
                          height="15em"
                        />
                      </div>
                    </div>

                  </div>
                </div>

                

                <div className="resume-work">
                  <h3 className="sans">Work History</h3>

                  <div className="resume-content">
                    <h4 className="sans">
                      Learning Objects <Link to="http://www.learningobjects.com" target="_blank">www.learningobjects.com</Link>
                      <span>Wasgington, DC</span>
                    </h4>
                    <div className="resume-work-date">
                      <p className="date today">Today</p>
                      <p className="date"><span>May</span>2013</p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">Creative Director</h5>
                      <ul>
                        <li>Define and maintain brand with a consistent methodology, aesthetic, and user experience.</li>
                        <li>Sell vision and concepts to users, internal teams, and clients.</li>
                        <li>Establish creative direction for the entire line of products and services.</li>
                        <li>Enforce consistent design quality of products, custom solutions, and marketing materials.</li>
                        <li>Oversee all creative output and design high quality, compelling user experiences.</li>
                        <li>Lead product vision through conception and testing and maintain market awareness.</li>
                      </ul>
                      <div className="resume-work-exp">
                        <ul>
                          <li><span className="exp exp1"></span>Product Design, UX, and Strategy</li>
                          <li><span className="exp exp2"></span>Frontend UI Design</li>
                          <li><span className="exp exp3"></span>Frontend Development</li>
                          <li><span className="exp exp4"></span>React and Angular JS</li>
                          <li><span className="exp exp5"></span>Graphic Design and Branding</li>
                          <li><span className="exp exp6"></span>Wireframing, Prototyping, and Creative Visioning</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="resume-content">
                    <h4 className="sans">
                      Blackbaud <Link to="http://www.blackbaud.com" target="_blank">www.blackbaud.com</Link>
                      <span>Charleston, SC</span>
                    </h4>
                    <div className="resume-work-date">
                      <p className="date"><span>Apr</span>2013</p>
                      <p className="date"><span>Jun</span>2008</p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">Senior Interactive Developer</h5>
                      <ul>
                        <li>Led the frontend design strategy and development for the corporate website.</li>
                        <li>Responsible for the development and maintenance of multiple corporate web presences which receive a combined average of 357,116 visits per month.</li>
                        <li>Winner of the 2008 Innovator of the Year Award for custom Flash applications.</li>
                        <li>Implemented a custom, AJAX-driven lead generation system creating 4,380 leads in 2012.</li>
                        <li>Assisted with SEO initiatives and best practices for the corporate web strategy.</li>
                        <li>Responsible for building custom Javascript / Flash applications with database & CMS integration.</li>
                        <li>Developed custom site designs and HTML/CSS/JS/Flash for a variety of nonprofit organizations.</li>
                        <li>Responsible for interfacing and developing client relationships.</li>
                      </ul>
                      <div className="resume-work-exp">
                        <ul>
                          <li><span className="exp1"></span>Product Design, UX, and Strategy</li>
                          <li><span className="exp2"></span>Frontend UI Design</li>
                          <li><span className="exp3"></span>Frontend Development</li>
                          <li><span className="exp5"></span>Graphic Design and Branding</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="resume-education">
                  <h3 className="sans">Education</h3>
                  <div className="resume-content">
                    <div className="education-logo">
                      <img src={imgUNCG} alt="UNCG" />
                    </div>
                    <div className="education-info">
                      <h4 className="sans">B.S., Information Systems and Operations Management</h4>
                      <h5 className="sans">University of North Carolina at Greensboro, May 2008</h5>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
      </BodyClassName>
    );
  }
}