import React, { Component } from 'react';
import config from 'react-global-configuration';
import Parallax from 'parallax-js';
import classNames from 'classnames';
import BodyClassName from 'react-body-classname';
import Lightbox from 'react-image-lightbox';
import { SectionsContainer, Section } from 'react-fullpage';
export default class Work extends Component {

  displayName: 'Work';

  constructor(props) {
    super(props);
    this.state = {
      current: config.get('workNum'),
      active: 'false',
      photoIndex: 0,
      isOpen: false,
      images: [],
      projects: [
        {
          id: "brendans-world",
          year: "1999",
          name: "Brendan's World",
          description: "This is where it all began... my very first site. There's a space background. It has iframes. It has a spinning earth gif (the pinnacle of web technology at the time). It's riddled with embarrassing content and grammatical errors. It's truly special. I was 14 when I created this so go easy...",
          images: [
            require('../../images/work/brendans-world-1.jpg'),
            require('../../images/work/brendans-world-2.jpg'),
            require('../../images/work/brendans-world-3.jpg')
          ]
        },{
          id: "nebula",
          year: "2001",
          name: "Nebula Web Designs",
          description: "Welcome to the wonderful age of Flash! I loved Flash... superfluous animations, bad graphics, and universal compatibility. This was the company name I designed under for almost 10 years. Lots of good times...",
          images: [
            require('../../images/work/nebula-v1-1.jpg'),
            require('../../images/work/nebula-v1-2.jpg'),
            require('../../images/work/nebula-v1-3.jpg')
          ]
        },{
          id: "milk",
          year: "2004",
          name: "Milk Productions",
          description: "I loved this one... really minimal, interesting animations, and a new design approach for me (look, a <em>white</em> background!). This was for a small production company who were willing to take a chance on a young web designer.",
          images: [
            require('../../images/work/milk-1.jpg'),
            require('../../images/work/milk-2.gif'),
            require('../../images/work/milk-3.jpg'),
            require('../../images/work/milk-4.jpg')
          ]
        },{
          id: "kourthouse",
          year: "2005",
          name: "Kourthouse Media",
          description: "A Flash site I built for an aspiring film agency. I remember being proud of the avant-garde design for this one (even though the proportions are not super helpful).",
          images: [
            require('../../images/work/kourthouse-1.jpg'),
            require('../../images/work/kourthouse-2.jpg')
          ]
        },{
          id: "greene-street",
          year: "2006",
          name: "Greene Street Club",
          description: "I worked here for a few years while in college. I designed their logo, built and maintained their site (featuring AJAX content and advanced Flash scripting). I also designed all their posters, flyers, and general marketing. This was a huge opportunity for me and I learned a great deal here.",
          images: [
            require('../../images/work/greene-street-1.jpg'),
            require('../../images/work/greene-street-2.jpg'),
            require('../../images/work/greene-street-3.jpg'),
            require('../../images/work/greene-street-4.jpg'),
            require('../../images/work/greene-street-5.jpg'),
            require('../../images/work/greene-street-6.jpg'),
            require('../../images/work/greene-street-7.jpg')
          ]
        },{
          id: "nebula-v5",
          year: "2007",
          name: "Nebula Web Designs - v5",
          description: "By the 5th iteration of Nebula, I was getting regular design work, learning object-oriented programming, and honing-in on user experience. This site is still active (www.nebulawebdesigns.com -- though you'll need Flash to run it).",
          images: [
            require('../../images/work/nebula-v5-1.jpg'),
            require('../../images/work/nebula-v5-2.jpg'),
            require('../../images/work/nebula-v5-3.jpg'),
            require('../../images/work/nebula-v5-4.jpg'),
            require('../../images/work/nebula-v5-5.jpg')
          ]
        },{
          id: "ave-maria",
          year: "2008",
          name: "Ave Maria University",
          description: "This was one of my first projects for Blackbaud. It was a really cool brick memorial locator. The user found their donation and the application zoomed-into a blue print of the church, then overlaid the memorial text on a brick texture. I won the Innovator of the Year award for this guy.",
          images: [
            require('../../images/work/ave-maria-1.jpg'),
            require('../../images/work/ave-maria-2.gif'),
            require('../../images/work/ave-maria-3.jpg'),
            require('../../images/work/ave-maria-4.jpg'),
            require('../../images/work/ave-maria-5.jpg')
          ]
        },{
          id: "kidney",
          year: "2008",
          name: "Kidney Foundation of Canada",
          description: "Another Blackbaud project -- this was a full site redesign for the foundation. It featured some dynamic Flash content player, slideshows, and interesting 3D design.",
          images: [
            require('../../images/work/kidney-1.jpg'),
            require('../../images/work/kidney-2.jpg')
          ]
        },{
          id: "spca",
          year: "2009",
          name: "Louisiana SPCA",
          description: "Another Blackbaud project -- this was another full site redesign for the Louisiana SPCA. More dynamic Flash content and slideshows. I was also starting to explore more open and saturated layouts.",
          images: [
            require('../../images/work/spca-1.jpg'),
            require('../../images/work/spca-2.jpg'),
          ]
        },{
          id: "aha",
          year: "2009",
          name: "American Heart Association",
          description: "This one was a lot of fun. It was another Blackbaud project that showed realtime donation amounts on an interactive Flash map of the country. Users could click on the map, zoom-in and see donations for the Heart Walk by city and state and contribute themselves.",
          images: [
            require('../../images/work/aha-1.jpg'),
            require('../../images/work/aha-2.jpg')
          ]
        },{
          id: "wwo",
          year: "2010",
          name: "Worldwide Orphans Foundation",
          description: "Another Blackbaud project -- a full site redesign for the organization. It featured some dynamic Flash content player, slideshows, and one of my favorite designs of the Blackbaud days.",
          images: [
            require('../../images/work/wwo-1.jpg'),
            require('../../images/work/wwo-2.jpg')
          ]
        },{
          id: "citadel",
          year: "2010",
          name: "Citadel Foundation",
          description: "I had a great time working with the people here -- I spent time on the campus and with their leadership to understand the aesthetic and users of the site I redesigned. There's also some dynamic Flash news content (pulled from a CMS).",
          images: [
            require('../../images/work/citadel-1.jpg'),
            require('../../images/work/citadel-2.jpg'),
            require('../../images/work/citadel-3.jpg')
          ]
        },{
          id: "eig",
          year: "2011",
          name: "Michael J Eig & Assoc.",
          description: "This was a freelance project for a law firm in Maryland specializing in education law for children. They have a great mission and I loved working with them. I built an admin area for this site in ExpressionEngine to help manage forms.",
          images: [
            require('../../images/work/eig-1.jpg'),
            require('../../images/work/eig-2.jpg')
          ]
        },{
          id: "blackbaud",
          year: "2011",
          name: "Blackbaud",
          description: "By 2011, I had moved to the marketing division of Blackbaud and was working directly with the Creative Director. I was the lead designer responsible for the redesign and maintenance of the corporate site. This was built in the Blackbaud CMS and had a hundred pages or so to consider. I also created a custom lead-generation system using Eloqua.",
          images: [
            require('../../images/work/blackbaud-1.jpg'),
            require('../../images/work/blackbaud-2.jpg'),
            require('../../images/work/blackbaud-3.jpg'),
            require('../../images/work/blackbaud-4.jpg'),
            require('../../images/work/blackbaud-5.jpg')
          ]
        },{
          id: "bbcon",
          year: "2012",
          name: "BBCON",
          description: "This custom Wordpress site was built for the Blackbaud Conference that year. By this point, I was working with a few other Wordpress sites as freelance projects.",
          images: [
            require('../../images/work/bbcon-1.jpg'),
            require('../../images/work/bbcon-2.jpg'),
            require('../../images/work/bbcon-3.jpg')
          ]
        },{
          id: "tom-carter",
          year: "2012",
          name: "Tom Carter Photography",
          description: "A freelance project for a local photographer friend -- this site featured a custom Flash gallery built with SlideshowPro. This was one of the final Flash projects I worked on as the industry started to make way for new Javascript frameworks.",
          images: [
            require('../../images/work/tom-carter-1.jpg'),
            require('../../images/work/tom-carter-2.jpg')
          ]
        },{
          id: "mink",
          year: "2012",
          name: "Mink Letterpress",
          description: "Another freelance project I did for a friend with a letterpress design business in Asheville. She does amazing work and I really liked this site -- it's built in Wordpress, had a responsive gallery, and I used a single scrolling page design.",
          images: [
            require('../../images/work/mink-1.jpg'),
            require('../../images/work/mink-2.jpg'),
            require('../../images/work/mink-3.jpg'),
            require('../../images/work/mink-4.jpg')
          ]
        },{
          id: "brendan-english",
          year: "2013",
          name: "BrendanEnglish.com",
          description: "This is my old portfolio site. I had moved away from the Nebula name and was looking for a new challenge for work. I built this using responsive styles, parallax scrolling, and all the new stuff I was learning at the time. You can see the full site <a href='http://www.brendanenglish.com/archive/site-2013' target='_blank'>here</a>.",
          images: [
            require('../../images/work/brendan-english-1.jpg'),
            require('../../images/work/brendan-english-2.jpg'),
            require('../../images/work/brendan-english-3.jpg'),
            require('../../images/work/brendan-english-4.jpg')
          ]
        },{
          id: "carnegie",
          year: "2013",
          name: "Carnegie Learning",
          description: "One of my first projects for Learning Objects. I worked on a variety of projects including instructional and learning applications, an eBook, and an Admin product. I really delved into the world of product design and user experience for this client.",
          images: [
            require('../../images/work/carnegie-1.jpg'),
            require('../../images/work/carnegie-2.jpg'),
            require('../../images/work/carnegie-3.jpg'),
            require('../../images/work/carnegie-4.jpg'),
            require('../../images/work/carnegie-5.jpg'),
            require('../../images/work/carnegie-6.jpg')
          ]
        },{
          id: "saylor",
          year: "2013",
          name: "Saylor Academy",
          description: "This was a really cool organization I worked with at Learning Objects. They're dedicated to providing free competency-based education. I led the design initiative to build a learning platform and marketing site to capture student goals.",
          images: [
            require('../../images/work/saylor-1.jpg'),
            require('../../images/work/saylor-2.jpg')
          ]
        },{
          id: "campuspack",
          year: "2013",
          name: "Campus Pack",
          description: "This is the original Learning Objects product -- a blog, wiki, and journal tool marketed to institutions. I redesigned the system to bring it up-to-date and helped with the development effort.",
          images: [
            require('../../images/work/campuspack-1.jpg'),
            require('../../images/work/campuspack-2.jpg'),
            require('../../images/work/campuspack-3.jpg')
          ]
        },{
          id: "difference-engine",
          year: "2014",
          name: "Difference Engine",
          description: "The Learning Objects development platform -- I redesigned the marketing site for the new product marketed towards higher education institutions. DE was the backbone to building learning and teaching products.",
          images: [
            require('../../images/work/de-1.jpg'),
            require('../../images/work/de-2.jpg'),
            require('../../images/work/de-3.jpg')
          ]
        },{
          id: "delivery",
          year: "2014",
          name: "LO Delivery",
          description: "The Learning Objects student content delivery product. I designed, prototyped, tested, and helped build the core delivery platform for students. The product has evolved over the course of my time at LO to include instructor and admin tools, along with various other learning features.",
          images: [
            require('../../images/work/delivery-1.jpg'),
            require('../../images/work/delivery-2.jpg'),
            require('../../images/work/delivery-3.jpg'),
            require('../../images/work/delivery-4.jpg'),
            require('../../images/work/delivery-5.jpg'),
            require('../../images/work/delivery-6.jpg')
          ]
        },{
          id: "crew",
          year: "2015",
          name: "Looking for Crew",
          description: "This was an app I created to help match boat captains with potential crew members. I also designed the logo and branding. This never really got off the ground, but it was a great venture into app development and user testing. This is an Angular app and is designed to be responsive.",
          images: [
            require('../../images/work/crew-1.jpg'),
            require('../../images/work/crew-2.jpg'),
            require('../../images/work/crew-3.jpg'),
            require('../../images/work/crew-4.jpg'),
            require('../../images/work/crew-5.jpg')
          ]
        },{
          id: "learning-objects",
          year: "2015",
          name: "Learning Objects",
          description: "I started here in 2013 and have worked as a Product Designer and Creative Director. Along with working on the designs of all of LO's products, I also redesigned the marketing site for LO. The site was responsive and included updated branding that would live-on in the <a href='/work#lo-styleguide'>styleguide</a>. I also built some cool CSS effects + parallax.",
          images: [
            require('../../images/work/lo-1.jpg'),
            require('../../images/work/lo-2.gif'),
            require('../../images/work/lo-3.jpg'),
            require('../../images/work/lo-4.jpg'),
            require('../../images/work/lo-5.jpg'),
            require('../../images/work/lo-6.jpg'),
            require('../../images/work/lo-7.gif'),
            require('../../images/work/lo-8.jpg'),
            require('../../images/work/lo-9.jpg')
          ]
        },{
          id: "lo-styleguide",
          year: "2015",
          name: "LO StyleGuide",
          description: "I developed the company StyleGuide and Application Design Guide to help standardize and inform the creative direction of the company and products. The StyleGuide featured brand and design guidelines and the Application Design Guide included the design methodologies for products.",
          images: [
            require('../../images/work/lo-style-1.jpg'),
            require('../../images/work/lo-style-2.jpg'),
            require('../../images/work/lo-style-3.jpg'),
            require('../../images/work/lo-style-4.jpg'),
            require('../../images/work/lo-style-5.jpg')
          ]
        },{
          id: "resume",
          year: "2016",
          name: "Pathbrite Résumé",
          description: "Pathbrite is a well known portfolio system we acquired. To best help students find careers, I designed and prototyped a résumé product to tie-in to competencies, portfolios, and a new way to imagine the résumé. You can find mine <a href='/about#resume'>here</a>.",
          images: [
            require('../../images/work/resume-1.jpg'),
            require('../../images/work/resume-2.jpg'),
            require('../../images/work/resume-3.jpg')
          ]
        },{
          id: "byu",
          year: "2016",
          name: "BYU",
          description: "I designed a prototype for a goal capture product for BYU and The Church of LDS. This project was pitched to help understand student goals and how that ties-in to the competency-based learning products.",
          images: [
            require('../../images/work/byu-1.jpg'),
            require('../../images/work/byu-2.jpg'),
            require('../../images/work/byu-3.jpg')
          ]
        },{
          id: "ftpC",
          year: "2017",
          name: "For the People Creative",
          description: "I created this site for a newly formed LLC that I own with my friend Joe. It's aimed at serving nonprofits and small businesses in the DC area. We partner to build applications, products, websites, and marketing materials. My most up-to-date work can be found here...",
          images: [
            require('../../images/work/ftpC-1.jpg'),
            require('../../images/work/ftpC-2.jpg'),
            require('../../images/work/ftpC-3.jpg'),
            require('../../images/work/ftpC-4.jpg'),
            require('../../images/work/ftpC-5.jpg'),
            require('../../images/work/ftpC-6.jpg')
          ]
        }
      ]
    };
  }

  componentDidMount() {
    if (window.innerWidth > 920){
      this.parallax = new Parallax(this.scene);

      setTimeout(function(){
        this.setState({ active: 'true' });
      }.bind(this), 500);
    }
  }

  componentWillUnmount() {
    if (window.innerWidth > 920){
      this.parallax.disable();
    }
  }

  render() {

    const anchorList = [];

    for (var i = 0; i < this.state.projects.length; i++){
      anchorList.push(this.state.projects[i].id);
    }

    const {current} = this.state;

    const {
      photoIndex,
      isOpen,
      images
    } = this.state;

    const options = {
      verticalAlign: true,
      delay: 500,
      anchors: anchorList,
      scrollCallback: (states) => {
        this.setState({ current: states.activeSection });
        config.set({ workNum: states.activeSection });      
      }
    };

    const projectList = this.state.projects.map((project, index) => {
      return (
        <Section className={classNames('work-item-wrap', {'active': current === index})} key={project.id}>
          <div className="work-item"
            onClick={() => {
              this.setState({
                photoIndex: 0,
                isOpen: true,
                images: this.state.projects[index].images
              });
            }}>
            <div className="work-name">
              <p className="work-year">{project.year}</p>
              <h3 className="sans"><span>{project.name}</span></h3>
              <h4 className="sans">
                <span dangerouslySetInnerHTML={{ __html: project.description }}></span>
              </h4>
              <button className="btn btn-accent">
                Take a look
              </button>
            </div>
            <div className={classNames("work-img", project.id)}></div>
          </div>
        </Section>
      );
    });

    const projectListSlim = this.state.projects.map((project, index) => {
      return (
        <div className="work-item-wrap" key={project.id}>
          <div className="work-item"
            onClick={() => {
              this.setState({
                photoIndex: 0,
                isOpen: true,
                images: this.state.projects[index].images,
                current: index
              });
            }}>
            <div className="work-name">
              <p className="work-year">{project.year}</p>
              <h3 className="sans">{project.name}</h3>
            </div>
            <div className={classNames("work-img", project.id)}></div>
          </div>
        </div>
      );
    });

    return (
      <BodyClassName className="work">
        <section id="work">
            
            {window.innerWidth > 920 ? 
              <div id="wrap-work-top" className={this.state.active} ref={el => this.scene = el}>
                <div className="work-wrap layer" data-depth="0.25">
                  <SectionsContainer {...options} activeSection={current}>
                    {projectList}
                  </SectionsContainer>
                </div>
              </div> :
              <div id="wrap-work-top">
                <div className="work-mobile">
                  {projectListSlim.reverse()}
                </div>
              </div>
            }

            {isOpen &&
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                imageCaption={this.state.projects[current].description}

                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() => this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                })}
                onMoveNextRequest={() => this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                })}
              />
            }

        </section>
      </BodyClassName>
    );
  }
}