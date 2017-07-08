import React, { Component } from 'react';
import config from 'react-global-configuration';
import Parallax from 'parallax-js';
import classNames from 'classnames';
import BodyClassName from 'react-body-classname';
import { Link } from 'react-router-dom';
import {SectionsContainer, Section} from 'react-fullpage';
export default class Work extends Component {

  displayName: 'Work';

  constructor(props) {
    super(props);

    this.state = {
      previous: 0,
      current: config.get('workNum'),
      direction: '',
      projects: [
        {
          id: "brendans-world",
          year: "1999",
          name: "Brendan's World",
          description: "This is where it all began... my very first site. There's a space background. It has iframes. It has a spinning earth gif (the pinnacle of web technology at the time). It's riddled with embarrassing content and grammatical errors. It's truly special. I was 14 when I created this so go easy..."
        },{
          id: "nebula-v1",
          year: "2001",
          name: "Nebula Web Designs - v1",
          description: "Welcome to the wonderful age of Flash! Oh how I loved Flash... superfulious animations, bad graphics, and great compatibility. This was the company name I designed under for almost 10 years. Lots of good times..."
        },{
          id: "milk",
          year: "2004",
          name: "Milk Productions",
          description: "I loved this one... really minimal, interesting animations, and a new design approach for me (look, a <em>white</em> background!!). This was for a small production company who were willing to take a chance on a young web designer."
        },{
          id: "kourthouse",
          year: "2005",
          name: "Kourthouse Media",
          description: "A Flash site I built for an aspiring film agency. I remember being proud of the avant garde design for this one (even though the proportions are a bit off). Here you can see where I'm starting to invest in interaction design. "
        },{
          id: "greene-street",
          year: "2006",
          name: "Greene Street Club",
          description: "I worked here for a few years while in college. I designed their logo, built and maintained their site (featuring AJAX content and advanced Flash scripting). I also designed all their posters, flyers, and general marketing. This was a huge opportunity for me and I learned a great deal here."
        },{
          id: "nebula-v5",
          year: "2007",
          name: "Nebula Web Designs - v5",
          description: "By the 5th iteration of Nebula, I was making a decent living (for a college student) and rounding-out. I was getting regular design work, mastering object-oriented programming, honing-in on user interactions, and realizing I could turn my passion into a career. <a href=''>Full archive here</a>"
        }
      ]
    };
  }

  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {

    const anchorList = [];

    for (var i = 0; i < this.state.projects.length; i++){
      anchorList.push(this.state.projects[i].id);
    }

    const {previous} = this.state;
    const {current} = this.state;
    const {direction} = this.state;

    const options = {
      verticalAlign: true,
      delay: 500,
      anchors: anchorList,
      scrollCallback: (states) => {
        
        this.setState({ previous: current });
        this.setState({ current: states.activeSection });

        if (previous !== current){
          this.setState({ direction: '' });
          config.set({ workNum: states.activeSection });

          if (previous > current){
            setTimeout(function(){
              this.setState({ direction: 'up' });
            }.bind(this), 10);
            
          } else if (previous < current) {
            setTimeout(function(){
              this.setState({ direction: 'down' });
            }.bind(this), 10);
          }

        }        
      }
    };
    const projectList = this.state.projects.map(function(project, index) {
      return (
        <Section className={classNames('work-item-wrap', {'active': current === index})} key={project.id}>
          <div className="work-item">
            <div className="work-name">
              <p className="work-year">{project.year}</p>
              <h3 className="sans">{project.name}</h3>
              <h4 className="sans" dangerouslySetInnerHTML={{ __html: project.description }}></h4>
              <Link className="btn btn-accent" to="/">
                Take a look
              </Link>
            </div>
            <div className={classNames("work-img", project.id)}></div>
          </div>
        </Section>
      );
    });
    return (
      <BodyClassName className={"work " + direction + " work" + current}>
        <section id="work">
          <div id="wrap-work-top" ref={el => this.scene = el}>
            <div className="work-wrap layer" data-depth="0.25">
              <SectionsContainer {...options} activeSection={current}>
                {projectList}
              </SectionsContainer>
            </div>
          </div>
        </section>
      </BodyClassName>
    );
  }
}