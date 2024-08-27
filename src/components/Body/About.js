import React, { Component } from "react";
import Parallax from "parallax-js";
import BodyClassName from "react-body-classname";
import Moment from "react-moment";
import elementClass from "element-class";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import imgProfile from "../../images/headshot.png";
import imgUNCG from "../../images/uncg.png";
import imgLO from "../../images/logo-lo.png";
import imgCapOne from "../../images/logo-capone.png";
import imgBlackbaud from "../../images/logo-blackbaud.png";
import imgNebula from "../../images/logo-nebula.png";
import imgFishbowl from "../../images/logo-fishbowl.png";
import imgILC from "../../images/logo-ilc.svg";
export default class About extends Component {
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
          <div id="wrap-about-top" ref={(el) => (this.scene = el)}>
            <div className="layer" data-depth="0.33">
              <div className="wrap-about-content">
                <h1>
                  I design and build products, websites, and applications.
                </h1>
                <h2 className="sans">
                  I'm currently a Senior Product Design Manager at&nbsp;
                  <a
                    href="http://www.ilclassroom.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Imagine Learning Classroom
                  </a>
                  . I freelance too so <Link to="/contact">let me know</Link> if
                  you have a project with which I can help!
                </h2>
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
                    <p className="resume-role">
                      Senior Product Design Manager at&nbsp;
                      <a
                        href="https://www.ilclassroom.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Imagine Learning Classroom
                      </a>
                    </p>
                    <p className="resume-contact">
                      <a
                        href="mailto:brendan@brendanenglish.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        brendan@brendanenglish.com
                      </a>{" "}
                      &ndash;{" "}
                      <a
                        href="https://www.linkedin.com/in/brendan-english-a7230631"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="resume-inner">
                <div className="resume-exp">
                  <h3 className="sans">Relevant Experience</h3>
                  <div className="resume-content">
                    <ul>
                      <li
                        className="resume-exp-item exp1"
                        onClick={() =>
                          elementClass(
                            document.querySelector(".resume-exp-item.exp1")
                          ).toggle("active")
                        }
                      >
                        <span className="exp exp1"></span>
                        <p>Product Design and Strategy</p>
                        <span className="duration">
                          <Moment fromNow ago>
                            {new Date("June 12, 2008")}
                          </Moment>
                        </span>
                        <ul className="exp-description">
                          <li>
                            Worked on a variety of products and platforms as a
                            design director, creative director, UI/UX designer,
                            and developer.
                          </li>
                          <li>
                            Responsible for user testing features and managing
                            how to transition feedback into feature
                            enhancements.
                          </li>
                          <li>
                            Worked with various team sizes where we have
                            incorporated Scrum and the Agile Development
                            process.
                          </li>
                        </ul>
                      </li>
                      <li
                        className="resume-exp-item exp2"
                        onClick={() =>
                          elementClass(
                            document.querySelector(".resume-exp-item.exp2")
                          ).toggle("active")
                        }
                      >
                        <span className="exp exp2"></span>
                        <p>UI/UX Design</p>
                        <span className="duration">
                          <Moment fromNow ago>
                            {new Date("June 1, 1999")}
                          </Moment>
                        </span>
                        <ul className="exp-description">
                          <li>
                            Led the full design lifecycle for dozens of
                            products, applications, and websites.
                          </li>
                          <li>
                            Owned all facets of the creative process as well as
                            selling visions to stakeholders.
                          </li>
                          <li>
                            Responsible for conducting user tests and the design
                            evolution based on feedback.
                          </li>
                          {
                            //<li>(Sidenote: We didn't call it "UI/UX" back in 1999. Then it was just "web design" but the UI/UX principles still applied.)</li>
                          }
                        </ul>
                      </li>
                      <li
                        className="resume-exp-item exp3"
                        onClick={() =>
                          elementClass(
                            document.querySelector(".resume-exp-item.exp3")
                          ).toggle("active")
                        }
                      >
                        <span className="exp exp3"></span>
                        <p>Frontend Development</p>
                        <span className="duration">
                          <Moment fromNow ago>
                            {new Date("June 1, 1999")}
                          </Moment>
                        </span>
                        <ul className="exp-description">
                          <li>
                            Owned the end-to-end development responsibilities
                            for dozens of products, websites, and applications.
                          </li>
                          <li>
                            Evolved my skillset over the years to include a
                            variety of frontend development languages including
                            HTML, CSS (including SASS, Tailwind), Javascript
                            libraries (React / Vue / Angular), PHP (Wordpress),
                            to name a few.
                          </li>
                          <li>
                            Worked on large development teams to build robust
                            products while utilizing platforms like Jira /
                            Confluence, Github, Slack, and Trello to manage
                            workloads and responsibilities.
                          </li>
                        </ul>
                      </li>
                      <li
                        className="resume-exp-item exp4"
                        onClick={() =>
                          elementClass(
                            document.querySelector(".resume-exp-item.exp4")
                          ).toggle("active")
                        }
                      >
                        <span className="exp exp4"></span>
                        <p>React / Vue / Angular</p>
                        <span className="duration">
                          <Moment fromNow ago>
                            {new Date("May 12, 2013")}
                          </Moment>
                        </span>
                        <ul className="exp-description">
                          <li>
                            Developed these languages to better inform design
                            decisions and to adapt to the latest frontend
                            technology for progressive web applications.
                          </li>
                          <li>
                            Owned the full development duties for creating and
                            deploying web applications built around these
                            technologies.
                          </li>
                          <li>
                            Worked on development teams to share the roles and
                            responsibilities of mature products and
                            applications.
                          </li>
                        </ul>
                      </li>
                      <li
                        className="resume-exp-item exp5"
                        onClick={() =>
                          elementClass(
                            document.querySelector(".resume-exp-item.exp5")
                          ).toggle("active")
                        }
                      >
                        <span className="exp exp5"></span>
                        <p>Graphic Design and Branding</p>
                        <span className="duration">
                          <Moment fromNow ago>
                            {new Date("February 20, 2002")}
                          </Moment>
                        </span>
                        <ul className="exp-description">
                          <li>
                            Responsible for creating custom logos and brands and
                            managing all stakeholder feedback and revisions.
                          </li>
                          <li>
                            Designed, implemented, and enforced organizational
                            brand and style guides for large companies.
                          </li>
                          <li>
                            Authored design and UX methodologies to aid in the
                            development and creative direction of products and
                            applications.
                          </li>
                        </ul>
                      </li>
                      <li
                        className="resume-exp-item exp6"
                        onClick={() =>
                          elementClass(
                            document.querySelector(".resume-exp-item.exp6")
                          ).toggle("active")
                        }
                      >
                        <span className="exp exp6"></span>
                        <p>Wireframing, Prototyping, and Visioning</p>
                        <span className="duration">
                          <Moment fromNow ago>
                            {new Date("August 8, 2010")}
                          </Moment>
                        </span>
                        <ul className="exp-description">
                          <li>
                            Responsible for the creative vision and direction of
                            an entire line of products and applications.
                          </li>
                          <li>
                            Utilized tools like Sketch, Photoshop, Balsamiq, and
                            Illustrator to facilitate user testing and selling
                            vision to stakeholders.
                          </li>
                          <li>
                            Created live-code prototypes to more fully user test
                            concepts and detailed interactions and for better
                            hand-off to development teams.
                          </li>
                        </ul>
                      </li>
                      <li
                        className="resume-exp-item exp7"
                        onClick={() =>
                          elementClass(
                            document.querySelector(".resume-exp-item.exp7")
                          ).toggle("active")
                        }
                      >
                        <span className="exp exp7"></span>
                        <p>Artificial Intelligence</p>
                        <span className="duration">
                          <Moment fromNow ago>
                            {new Date("August 1, 2023")}
                          </Moment>
                        </span>
                        <ul className="exp-description">
                          <li>
                            Leveraging Midjourney and Stable Diffusion for
                            custom, AI-driven imagery and design assets.
                          </li>
                          <li>
                            Experimenting with Gemini AI models + API for in-app
                            dynamic content.
                          </li>
                          <li>
                            Utilizing OpenAI solutions for content + asset
                            generation, efficiency, and troubleshooting.
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <div className="resume-timeline">
                      <h3 className="sans">Timeline</h3>
                      <div className="experience-graph">
                        <Chart
                          chartType="Timeline"
                          data={[
                            ["ID", "Experience", "Start", "End"],
                            [
                              "1",
                              "Product Design and Strategy",
                              new Date("June 12, 2008"),
                              new Date(),
                            ],
                            [
                              "2",
                              "UI/UX Design",
                              new Date("June 1, 1999"),
                              new Date(),
                            ],
                            [
                              "3",
                              "Frontend Development",
                              new Date("June 1, 1999"),
                              new Date(),
                            ],
                            [
                              "4",
                              "React / Vue / Angular",
                              new Date("July 12, 2013"),
                              new Date(),
                            ],
                            [
                              "5",
                              "Graphic Design and Branding",
                              new Date("February 20, 2002"),
                              new Date(),
                            ],
                            [
                              "6",
                              "Wireframing, Prototyping, & Visioning",
                              new Date("August 8, 2010"),
                              new Date(),
                            ],
                            ["7", "AI", new Date("August 1, 2023"), new Date()],
                          ]}
                          options={{
                            legend: "none",
                            backgroundColor: "#181b1e",
                            colors: [
                              "#38CDD8",
                              "#8B60B4",
                              "#F39B1E",
                              "#85C226",
                              "#CE3B19",
                              "#5173E3",
                              "#df279c",
                            ],
                            timeline: {
                              showRowLabels: false,
                              colorByRowLabel: true,
                              barLabelStyle: {
                                fontName: "Source Sans Pro",
                                fontSize: 12,
                              },
                            },
                          }}
                          graph_id="ExpTimeline"
                          width="100%"
                          height="24em"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="resume-work">
                  <h3 className="sans">Work History</h3>

                  <div className="resume-content">
                    <h4 className="sans">
                      <a
                        href="https://www.ilclassroom.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={imgILC} alt="Imagine Learning" />
                      </a>
                      <span>Washington, DC</span>
                    </h4>
                    <div className="resume-work-date today">
                      <p className="date">Today</p>
                      <p className="date">
                        <span>Nov</span>2021
                      </p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">Senior Product Design Manager</h5>
                      <p>
                        I lead the design team at Imagine Learning Classroom to
                        build engaging and delightful experiences for K-12
                        students, teachers, and administrators.
                      </p>
                      <ul>
                        <li>
                          Manage a team of designers and act as an individual
                          contributor for all features of our learning product.
                        </li>
                        <li>
                          Collaborate with stakeholders, product managers, and
                          executives, to align design strategies with overall
                          business goals.
                        </li>
                        <li>
                          Led the effort to establish personas, user testing
                          strategy, and UXR functions to help validate product
                          direction.
                        </li>
                        <li>
                          Oversee the entire design process, from concept to
                          implementation. Ensure that design solutions meet user
                          needs, business requirements, and industry standards.
                        </li>
                        <li>
                          Mentor and develop the skills of team members. Foster
                          a culture of continuous learning and professional
                          growth within the design team.
                        </li>
                        <li>
                          Manage the allocation of resources, including budget
                          and personnel, to ensure the team can meet project
                          deadlines and objectives.
                        </li>
                        <li>
                          Stay informed about UX design trends and best
                          practices. Ensure that the team is creating
                          user-friendly and intuitive product designs.
                        </li>
                        <li>
                          Ensure that design deliverables meet quality
                          standards. Conduct design reviews and assessments to
                          identify areas for improvement.
                        </li>
                      </ul>
                    </div>
                    <div className="resume-work-exp">
                      <ul>
                        <li>
                          <span className="exp exp1"></span>Product Design and
                          Strategy
                        </li>
                        <li>
                          <span className="exp exp2"></span>UI/UX Design
                        </li>
                        <li>
                          <span className="exp exp3"></span>Frontend Development
                        </li>
                        <li>
                          <span className="exp exp4"></span>React / Vue
                        </li>
                        <li>
                          <span className="exp exp5"></span>Graphic Design and
                          Branding
                        </li>
                        <li>
                          <span className="exp exp6"></span>Wireframing,
                          Prototyping, &amp; Visioning
                        </li>
                        <li>
                          <span className="exp exp7"></span>Artificial
                          Intelligence
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="resume-content">
                    <h4 className="sans">
                      <a
                        href="http://www.fishbowl.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={imgFishbowl} alt="Fishbowl Marketing" />
                      </a>
                      <span>Alexandria, VA</span>
                    </h4>
                    <div className="resume-work-date">
                      <p className="date">
                        <span>Nov</span>2021
                      </p>
                      <p className="date">
                        <span>Feb</span>2018
                      </p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">Design Director</h5>
                      <ul>
                        <li>
                          Oversee and contribute to all aspects of design and UX
                          for all core products.
                        </li>
                        <li>
                          Design and prototype all product features to establish
                          overall design direction and UX.
                        </li>
                        <li>
                          Continuously contribute to the frontend development of
                          products through our core platform and framework.
                        </li>
                        <li>
                          Collaborate with our development and support teams to
                          help inform the technical direction of our products.
                        </li>
                        <li>
                          Conduct empathy research and user testing for all
                          products and features.
                        </li>
                        <li>
                          Helped implement a product framework by establishing
                          design patterns, styling, and design documentation.
                        </li>
                        <li>
                          Collaborate with product owners to manage product
                          releases and development efforts.
                        </li>
                        <li>
                          Continuously gather feedback from clients and
                          stakeholders to aid in the evolution of product
                          features.
                        </li>
                        <li>
                          Communicate product vision and concepts to users,
                          internal teams, and clients.
                        </li>
                      </ul>
                    </div>
                    <div className="resume-work-exp">
                      <ul>
                        <li>
                          <span className="exp exp1"></span>Product Design and
                          Strategy
                        </li>
                        <li>
                          <span className="exp exp2"></span>UI/UX Design
                        </li>
                        <li>
                          <span className="exp exp3"></span>Frontend Development
                        </li>
                        <li>
                          <span className="exp exp4"></span>React
                        </li>
                        <li>
                          <span className="exp exp5"></span>Graphic Design and
                          Branding
                        </li>
                        <li>
                          <span className="exp exp6"></span>Wireframing,
                          Prototyping, &amp; Visioning
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="resume-content">
                    <h4 className="sans">
                      <a
                        href="http://www.capitalone.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={imgCapOne} alt="Capital One" />
                      </a>
                      <span>McLean, VA</span>
                    </h4>
                    <div className="resume-work-date">
                      <p className="date">
                        <span>Jan</span>2018
                      </p>
                      <p className="date">
                        <span>Sep</span>2017
                      </p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">
                        Principal UI/UX Designer (contractor)
                      </h5>
                      <ul>
                        <li>
                          Led designs of features and applications around credit
                          cards for small businesses.
                        </li>
                        <li>
                          Conducted empathy research and user testing for
                          banking products and features.
                        </li>
                        <li>
                          Worked closely with a full cross-disciplinary team to
                          devise research, strategy, and designs that establish
                          the future vision of customer experience.
                        </li>
                        <li>
                          Led projects from research and strategy through
                          detailed wireframe and UI execution.
                        </li>
                        <li>
                          Responsible for designing storyboards, user flows,
                          process flows, and experience journey maps.
                        </li>
                        <li>
                          Coordinated and conducted Design Workshops to
                          synthesize feedback into product design.
                        </li>
                      </ul>
                    </div>
                    <div className="resume-work-exp">
                      <ul>
                        <li>
                          <span className="exp exp1"></span>Product Design and
                          Strategy
                        </li>
                        <li>
                          <span className="exp exp2"></span>UI/UX Design
                        </li>
                        <li>
                          <span className="exp exp3"></span>Frontend Development
                        </li>
                        <li>
                          <span className="exp exp5"></span>Graphic Design and
                          Branding
                        </li>
                        <li>
                          <span className="exp exp6"></span>Wireframing,
                          Prototyping, &amp; Visioning
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="resume-content">
                    <h4 className="sans">
                      <a
                        href="http://www.learningobjects.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={imgLO} alt="Learning Objects" />
                      </a>
                      <span>Washington, DC</span>
                    </h4>
                    <div className="resume-work-date">
                      <p className="date">
                        <span>Sep</span>2017
                      </p>
                      <p className="date">
                        <span>May</span>2013
                      </p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">Creative Director</h5>
                      <ul>
                        <li>
                          Defined and maintain brand with a consistent
                          methodology, aesthetic, and user experience.
                        </li>
                        <li>
                          Created the company StyleGuide and Application Design
                          guide to define creative vision and direction.
                        </li>
                        <li>
                          Implemented accessibility standards and best practices
                          throughout all product lines and applications.
                        </li>
                        <li>
                          Designed and built the company website
                          (www.learningobjects.com) and marketing materials.
                        </li>
                        <li>
                          Created and communicated vision and concepts to users,
                          internal teams, and clients.
                        </li>
                        <li>
                          Establish creative direction for the entire line of
                          products and services.
                        </li>
                        <li>
                          Enforce consistent design quality of products, custom
                          solutions, and marketing materials.
                        </li>
                        <li>
                          Oversee all creative output and design high quality,
                          compelling user experiences.
                        </li>
                        <li>
                          Led product vision through conception and testing and
                          maintain market awareness.
                        </li>
                      </ul>
                    </div>
                    <div className="resume-work-exp">
                      <ul>
                        <li>
                          <span className="exp exp1"></span>Product Design and
                          Strategy
                        </li>
                        <li>
                          <span className="exp exp2"></span>UI/UX Design
                        </li>
                        <li>
                          <span className="exp exp3"></span>Frontend Development
                        </li>
                        <li>
                          <span className="exp exp4"></span>React / Angular
                        </li>
                        <li>
                          <span className="exp exp5"></span>Graphic Design and
                          Branding
                        </li>
                        <li>
                          <span className="exp exp6"></span>Wireframing,
                          Prototyping, &amp; Visioning
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="resume-content">
                    <h4 className="sans">
                      <a
                        href="http://www.blackbaud.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={imgBlackbaud} alt="Blackbaud" />
                      </a>
                      <span>Charleston, SC</span>
                    </h4>
                    <div className="resume-work-date">
                      <p className="date">
                        <span>Apr</span>2013
                      </p>
                      <p className="date">
                        <span>Jun</span>2008
                      </p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">Senior Interactive Developer</h5>
                      <ul>
                        <li>
                          Led the frontend design strategy and development for
                          the corporate website.
                        </li>
                        <li>
                          Responsible for the development and maintenance of
                          multiple corporate web presences which receive a
                          combined average of 357,116 visits per month.
                        </li>
                        <li>
                          Winner of the 2008 Innovator of the Year Award for
                          custom Flash applications.
                        </li>
                        <li>
                          Implemented a custom, AJAX-driven lead generation
                          system creating 4,380 leads in 2012.
                        </li>
                        <li>
                          Assisted with SEO initiatives and best practices for
                          the corporate web strategy.
                        </li>
                        <li>
                          Responsible for building custom Javascript / Flash
                          applications with database & CMS integration.
                        </li>
                        <li>
                          Developed custom site designs and HTML/CSS/JS/Flash
                          for a variety of nonprofit organizations.
                        </li>
                        <li>
                          Responsible for interfacing and developing client
                          relationships.
                        </li>
                      </ul>
                    </div>
                    <div className="resume-work-exp">
                      <ul>
                        <li>
                          <span className="exp exp1"></span>Product Design and
                          Strategy
                        </li>
                        <li>
                          <span className="exp exp2"></span>UI/UX Design
                        </li>
                        <li>
                          <span className="exp exp3"></span>Frontend Development
                        </li>
                        <li>
                          <span className="exp exp5"></span>Graphic Design and
                          Branding
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="resume-content">
                    <h4 className="sans">
                      <a
                        href="http://www.nebulawebdesigns.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={imgNebula} alt="Nebula Web Designs" />
                      </a>
                      <span>Annapolis, MD</span>
                    </h4>
                    <div className="resume-work-date">
                      <p className="date">
                        <span>Apr</span>2012
                      </p>
                      <p className="date">
                        <span>Feb</span>1999
                      </p>
                    </div>
                    <div className="resume-work-role">
                      <h5 className="sans">Freelance Web Designer</h5>
                      <ul>
                        <li>
                          Led and managed all projects and client relationships.
                        </li>
                        <li>
                          Designed, built, and maintained an extensive portfolio
                          of websites.
                        </li>
                        <li>
                          Created interactive websites and products utilizing
                          the latest web technologies.
                        </li>
                        <li>
                          Established brands, logos, prints, and marketing
                          materials.
                        </li>
                        <li>
                          Integrated custom designs with Wordpress and other
                          content management systems.
                        </li>
                        <li>
                          Built and maintained eCommerce sites and product
                          catalogs.
                        </li>
                        <li>
                          Designed and built interactive galleries, blogs, and
                          AJAX-driven content.
                        </li>
                      </ul>
                    </div>
                    <div className="resume-work-exp">
                      <ul>
                        <li>
                          <span className="exp exp1"></span>Product Design and
                          Strategy
                        </li>
                        <li>
                          <span className="exp exp2"></span>UI/UX Design
                        </li>
                        <li>
                          <span className="exp exp3"></span>Frontend Development
                        </li>
                        <li>
                          <span className="exp exp5"></span>Graphic Design and
                          Branding
                        </li>
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
                      <h4 className="sans">
                        B.S., Information Systems and Operations Management
                      </h4>
                      <h5 className="sans">
                        University of North Carolina at Greensboro, May 2008
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume-pdf">
                <span
                  className="btn btn-accent"
                  onClick={() => window.open("/BrendanEnglish.pdf", "_blank")}
                >
                  View as PDF
                </span>
              </div>
            </div>
          </div>
        </section>
      </BodyClassName>
    );
  }
}
