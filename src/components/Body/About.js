import React, { Component } from 'react';
import Parallax from 'parallax-js';
import BodyClassName from 'react-body-classname';
import TimeAgo from 'timeago-react';
import elementClass from 'element-class';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import imgProfile from '../../images/me.jpg';
import imgUNCG from '../../images/uncg.png';
import imgLO from '../../images/logo-lo.png';
import imgBlackbaud from '../../images/logo-blackbaud.png';
import imgNebula from '../../images/logo-nebula.png';
import pdfResume from '../../docs/BrendanResume.pdf';
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
                <h2 className="sans">I'm currently the Creative Director at an education-technology company in DC. I freelance too so <Link to="/contact">let me know</Link> if you have a project with which I can help!</h2>
              </div>            
            </div>
            <div className="resume-link layer" data-depth="0.15">
              My résumé
              <span className="anim-scroll">
                <span></span>
                <span></span>
                <span></span>
              </span>
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
                    <p className="resume-contact"><Link to="mailto:brendan@brendanenglish.com" target="_blank">brendan@brendanenglish.com</Link> &ndash; <Link to="https://www.linkedin.com/in/brendan-english-a7230631" target="_blank">LinkedIn</Link></p>
                  </div>
                </div>
              </div>

              <div className="resume-inner">
                <div className="resume-exp">
                  <h3 className="sans">Relevant Experience</h3>
                  <div className="resume-content">
                    <ul>
                      <li className="resume-exp-item exp1"
                        onClick={() => elementClass(document.querySelector('.resume-exp-item.exp1')).toggle('active') }>
                        <span className="exp exp1"></span>
                        <p>Product Design, UX, and Strategy</p>
                        <span className="duration">
                          <TimeAgo datetime={new Date('June 12, 2008')} />
                        </span>
                        <ul className="exp-description">
                          <li>I've worked on a variety of products and platforms as a creative director, designer (frontend and UX), and developer.</li>
                          <li>I've been responsible for user testing features and managing how to transition feedback into feature enhancements.</li>
                          <li>I've worked with various team sizes where we have incorporated Scrum and the Agile Development process.</li>
                        </ul>
                      </li>
                      <li className="resume-exp-item exp2"
                        onClick={() => elementClass(document.querySelector('.resume-exp-item.exp2')).toggle('active') }>
                        <span className="exp exp2"></span>
                        <p>Frontend UI Design</p>
                        <span className="duration">
                          <TimeAgo datetime={new Date('June 1, 1999')} />
                        </span>
                        <ul className="exp-description">
                          <li>I've led the full design lifecycle for dozens of products, applications, and websites.</li>
                          <li>I've owned all facets of the creative process as well as selling visions to stakeholders and product owners.</li>
                          <li>I've been responsible for conducting user tests and the design evolution based on feedback.</li>
                        </ul>
                      </li>
                      <li className="resume-exp-item exp3"
                        onClick={() => elementClass(document.querySelector('.resume-exp-item.exp3')).toggle('active') }>
                        <span className="exp exp3"></span>
                        <p>Frontend Development</p>
                        <span className="duration">
                          <TimeAgo datetime={new Date('June 1, 1999')} />
                        </span>
                        <ul className="exp-description">
                          <li>I've been the owner of end-to-end development responsibilities for dozens of websites, applications, and products.</li>
                          <li>I've evolved my skillset over the years to include a variety of frontend development languages including HTML, Javascript, PHP, AJAX, jQuery, Actionscript, Angular, React (to name a few).</li>
                          <li>I've worked on large development teams to build robust products while utilizing platforms like Jira, Github, Stash, and Trello to manage workloads.</li>
                        </ul>
                      </li>
                      <li className="resume-exp-item exp4"
                        onClick={() => elementClass(document.querySelector('.resume-exp-item.exp4')).toggle('active') }>
                        <span className="exp exp4"></span>
                        <p>Angular and React JS</p>
                        <span className="duration">
                          <TimeAgo datetime={new Date('May 12, 2013')} />
                        </span>
                        <ul className="exp-description">
                          <li>I've picked-up these languages to better inform design decisions and to adapt to the latest frontend technology for progressive web applications.</li>
                          <li>I've owned the full development duties for creating and deploying web applications built around these technologies.</li>
                          <li>I've also worked on development teams to share the roles and responsibilities of mature products and applications.</li>
                        </ul>
                      </li>
                      <li className="resume-exp-item exp5"
                        onClick={() => elementClass(document.querySelector('.resume-exp-item.exp5')).toggle('active') }>
                        <span className="exp exp5"></span>
                        <p>Graphic Design and Branding</p>
                        <span className="duration">
                          <TimeAgo datetime={new Date('February 20, 2002')} />
                        </span>
                        <ul className="exp-description">
                          <li>I've been responsible for creating custom logos and brands and managing all stakeholder feedback and revisions.</li>
                          <li>I've designed, implemented, and enforced organizational brand and style guides for large companies.</li>
                          <li>I've authored design and UX methodologies to aid in the development and creative direction of products and applications.</li>
                        </ul>
                      </li>
                      <li className="resume-exp-item exp6"
                        onClick={() => elementClass(document.querySelector('.resume-exp-item.exp6')).toggle('active') }>
                        <span className="exp exp6"></span>
                        <p>Wireframing, Prototyping, and Visioning</p>
                        <span className="duration">
                          <TimeAgo datetime={new Date('August 8, 2010')} />
                        </span>
                        <ul className="exp-description">
                          <li>I've been responsible for the creative vision and direction of an entire line of products and applications.</li>
                          <li>I've used tools like Sketch, Photoshop, Balsamiq, and Illustrator to facilitate user testing and selling vision to stakeholders.</li>
                          <li>I've created live-code prototypes to more fully user test concepts and detailed interactions and for better hand-off to development teams.</li>
                        </ul>
                      </li>
                    </ul>

                    <div className="resume-timeline">
                      <h3 className="sans">Timeline</h3>
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
                          height="20em"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="resume-work">
                  <h3 className="sans">Work History</h3>

                  <div className="resume-content">
                    <h4 className="sans">
                      <Link to="http://www.learningobjects.com" target="_blank"><img src={imgLO} alt="Learning Objects" /></Link>
                      <span>Washington, DC</span>
                    </h4>
                    <div className="resume-work-date">
                      <p className="date today">Today</p>
                      <p className="date"><span>May</span>2013</p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">Creative Director</h5>
                      <ul>
                        <li>Define and maintain brand with a consistent methodology, aesthetic, and user experience.</li>
                        <li>Created the company StyleGuide and Application Design guide to define creative vision and direction.</li>
                        <li>Implemented accessibility standards and best practices throughout all product lines and applications.</li>
                        <li>Designed and built the company website (www.learningobjects.com) and marketing materials.</li>
                        <li>Sell vision and concepts to users, internal teams, and clients.</li>
                        <li>Establish creative direction for the entire line of products and services.</li>
                        <li>Enforce consistent design quality of products, custom solutions, and marketing materials.</li>
                        <li>Oversee all creative output and design high quality, compelling user experiences.</li>
                        <li>Lead product vision through conception and testing and maintain market awareness.</li>
                      </ul>
                    </div>
                    <div className="resume-work-exp">
                      <ul>
                        <li><span className="exp exp1"></span>Product Design, UX, and Strategy</li>
                        <li><span className="exp exp2"></span>Frontend UI Design</li>
                        <li><span className="exp exp3"></span>Frontend Development</li>
                        <li><span className="exp exp4"></span>React and Angular JS</li>
                        <li><span className="exp exp5"></span>Graphic Design and Branding</li>
                        <li><span className="exp exp6"></span>Wireframing, Prototyping, &amp;  Visioning</li>
                      </ul>
                    </div>
                  </div>

                  <div className="resume-content">
                    <h4 className="sans">
                      <Link to="http://www.blackbaud.com" target="_blank"><img src={imgBlackbaud} alt="Blackbaud" /></Link>
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
                    </div>
                    <div className="resume-work-exp">
                      <ul>
                        <li><span className="exp exp1"></span>Product Design, UX, and Strategy</li>
                        <li><span className="exp exp2"></span>Frontend UI Design</li>
                        <li><span className="exp exp3"></span>Frontend Development</li>
                        <li><span className="exp exp5"></span>Graphic Design and Branding</li>
                      </ul>
                    </div>
                  </div>

                  <div className="resume-content">
                    <h4 className="sans">
                      <Link to="http://www.nebulawebdesigns.com" target="_blank"><img src={imgNebula} alt="Nebula Web Designs" /></Link>
                      <span>Annapolis, MD</span>
                    </h4>
                    <div className="resume-work-date">
                      <p className="date"><span>Apr</span>2012</p>
                      <p className="date"><span>Jun</span>2002</p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">Freelance Web Designer</h5>
                      <ul>
                        <li>Led and managed all projects and client relationships.</li>
                        <li>Designed, built, and maintained an extensive portfolio of websites.</li>
                        <li>Created interactive websites and products utilizing the latest web technologies.</li>
                        <li>Established brands, logos, prints, and marketing materials.</li>
                        <li>Integrated custom designs with Wordpress and other content management systems.</li>
                        <li>Built and maintained eCommerce sites and product catalogs.</li>
                        <li>Designed and built interactive galleries, blogs, and AJAX-driven content.</li>
                        <li>Produced maybe the most amazing <Link to="http://www.nebulawebdesigns.com/archive/v1" target="_blank">Flash site intro ever</Link> back in 1999.</li>
                      </ul>
                    </div>
                    <div className="resume-work-exp">
                      <ul>
                        <li><span className="exp exp1"></span>Product Design, UX, and Strategy</li>
                        <li><span className="exp exp2"></span>Frontend UI Design</li>
                        <li><span className="exp exp3"></span>Frontend Development</li>
                        <li><span className="exp exp5"></span>Graphic Design and Branding</li>
                      </ul>
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

              <div className="resume-pdf">
                <Link to={pdfResume} target="_blank" className="btn btn-accent">View as PDF</Link>
              </div>

            </div>

          </div>
        </section>
      </BodyClassName>
    );
  }
}