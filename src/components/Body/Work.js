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
      previous: 0,
      current: config.get('workNum'),
      active: 'false',
      direction: '',
      photoIndex: false,
      projects: [
        {
          id: "brendans-world",
          year: "1999",
          name: "Brendan's World",
          description: "This is where it all began... my very first site. There's a space background. It has iframes. It has a spinning earth gif (the pinnacle of web technology at the time). It's riddled with embarrassing content and grammatical errors. It's truly special. I was 14 when I created this so go easy...",
          images: [
            'images/brendans-world.png'
          ]
        },{
          id: "nebula",
          year: "2001",
          name: "Nebula Web Designs",
          description: "Welcome to the wonderful age of Flash! I loved Flash... superfulious animations, bad graphics, and universal compatibility. This was the company name I designed under for almost 10 years. Lots of good times...",
          images: [
            'images/nebula-1.png'
          ]
        },{
          id: "milk",
          year: "2004",
          name: "Milk Productions",
          description: "I loved this one... really minimal, interesting animations, and a new design approach for me (look, a <em>white</em> background!). This was for a small production company who were willing to take a chance on a young web designer.",
          images: [
            'images/milk-1.png',
            'images/mink-2.jpg'
          ]
        },{
          id: "kourthouse",
          year: "2005",
          name: "Kourthouse Media",
          description: "A Flash site I built for an aspiring film agency. I remember being proud of the avant garde design for this one (even though the proportions are not super helpful).",
          images: [
            'images/kourthouse.png'
          ]
        },{
          id: "greene-street",
          year: "2006",
          name: "Greene Street Club",
          description: "I worked here for a few years while in college. I designed their logo, built and maintained their site (featuring AJAX content and advanced Flash scripting). I also designed all their posters, flyers, and general marketing. This was a huge opportunity for me and I learned a great deal here.",
          images: [
            'images/greene-street.png'
          ]
        },{
          id: "nebula-v5",
          year: "2007",
          name: "Nebula Web Designs - v5",
          description: "By the 5th iteration of Nebula, I was getting regular design work, learning object-oriented programming, and honing-in on user experience. &nbsp;<a href=''>Full archive here</a>",
          images: [
            'images/nebula-5.png'
          ]
        },{
          id: "ave-maria",
          year: "2008",
          name: "Ave Maria University",
          description: "This was one of my first projects for <a href='/about#resume'>Blackbaud</a>. It was a really cool brick memorial locator. The user found their donation and the application zoomed-into a blue print of the church, then overlaid the memorial text on a brick texture. I won the Innovator of the Year award for this guy.",
          images: [
            'images/ave-maria.jpg'
          ]
        },{
          id: "kidney",
          year: "2008",
          name: "Kidney Foundation of Canada",
          description: "Another Blackbaud project &mdash; this was a full site redesign for the foundation. It featured some dynamic Flash content player, slideshows, and interesting 3D design.",
          images: [
            'images/kidney.jpg'
          ]
        },{
          id: "spca",
          year: "2009",
          name: "Louisiana SPCA",
          description: "Another Blackbaud project &mdash; this was another full site redesign for the Louisiana SPCA. More dynaimc Flash content and slideshows.",
          images: [
            'images/spca.jpg'
          ]
        },{
          id: "aha",
          year: "2009",
          name: "American Heart Association",
          description: "This one was cool &mdash; another Blackbaud project that showed realtime donation amounts on an interactive Flash map of the country. Users could click on the map to see donations for the Heart Walk by state and contribute themselves.",
          images: [
            'images/aha-1.jpg',
            'images/aha-2.jpg'
          ]
        },{
          id: "wwo",
          year: "2010",
          name: "Worldwide Orphans Foundation",
          description: "Another Blackbaud project &mdash; a full site redesign for the organization. It featured some dynamic Flash content player, slideshows, and one of my favorite designs of the Blackbaud days.",
          images: [
            'images/wwo.jpg'
          ]
        },{
          id: "citadel",
          year: "2010",
          name: "Citadel Foundation",
          description: "I had a great time working with the people here &mdash; I spent time on the campus and with their leadership to understand the aesthetic and users of the site I redesigned. There's also some dynamic Flash news content (pulled from a CMS).",
          images: [
            'images/citadel.jpg'
          ]
        },{
          id: "eig",
          year: "2011",
          name: "Michael J Eig & Assoc.",
          description: "This was a freelance project for a lawfirm in Maryland specializing in education law for children. They have a great mission and I loved working with them. I built an admin area for this site in ExpressionEngine to help manage forms.",
          images: [
            'images/eig-1.png',
            'images/eig-2.png'
          ]
        },{
          id: "blackbaud",
          year: "2011",
          name: "Blackbaud",
          description: "By 2011, I had moved to the marketing divison of Blackbaud and was working directly with the Creative Director. I lead designer responsible for the redesign of the corporate site. This was built in the Blackbaud CMS and had a hundred pages or so to consider. I also created a custom lead generation system using Eloqua.",
          images: [
            'images/xxx.png'
          ]
        },{
          id: "bbcon",
          year: "2012",
          name: "BBCON",
          description: "This custom Wordpress site was built for the Blackbaud Conference that year. By this point, I was working with a few other Wordpress sites as freelance projects.",
          images: [
            'images/blackbaud-1.jpg',
            'images/blackbaud-2.jpg',
            'images/blackbaud-3.jpg',
            'images/blackbaud-4.jpg',
            'images/blackbaud-5.jpg'
          ]
        },{
          id: "tom-carter",
          year: "2012",
          name: "Tom Carter Photography",
          description: "A freelance project for a local photographer friend &mdash; this site featured a custom Flash gallery built with SlideshowPro. We didn't know it yet, but Flash was about to die :( &nbsp; I was pretty bummed about that.",
          images: [
            'images/tom-carter.jpg'
          ]
        },{
          id: "mink",
          year: "2012",
          name: "Mink Letterpress",
          description: "Another freelance project I did for a friend with a letterpress design business in Asheville. She does amazing work and I really liked this site &mdash; it's built in Wordpress, had a Gallery, and I used a single page design.",
          images: [
            'images/mink-1.jpg',
            'images/mink-2.jpg',
            'images/mink-3.jpg',
            'images/mink-4.jpg'
          ]
        },{
          id: "brendan-english",
          year: "2013",
          name: "BrendanEnglish.com",
          description: "This is my old portfolio site. I had moved away from the Nebula name and was looking for a new challenge for work. I built this using responsive styles, parallax scrolling, and all the new stuff I was learning at the time.",
          images: [
            'images/brendan-english.png'
          ]
        },{
          id: "carnegie",
          year: "2013",
          name: "Carnegie Learning",
          description: "One of my first projects for Learning Objects. I worked on a variety of projects including instructional and learning applications, an eBook, and an Admin product.",
          images: [
            'images/carnegie-1.jpg',
            'images/carnegie-2.jpg',
            'images/carnegie-3.jpg',
            'images/carnegie-4.jpg',
            'images/carnegie-5.jpg',
            'images/carnegie-6.jpg'
          ]
        },{
          id: "saylor",
          year: "2013",
          name: "Saylor Academy",
          description: "This was a really cool organization I worked with at Learning Objects. They're dedicated to providing free competency-based education. I led the design initiative to build a learning platform and marketing site to capture student goals.",
          images: [
            'images/saylor-1.jpg',
            'images/saylor-2.jpg'
          ]
        },{
          id: "campuspack",
          year: "2013",
          name: "Campus Pack",
          description: "This is the original Learning Objects product &mdash; a blog, wiki, and journal tool marketed to institutions. I redesigned the system to bring it up-to-date and helped with the development effort.",
          images: [
            'images/campuspack.jpg'
          ]
        },{
          id: "difference-engine",
          year: "2014",
          name: "Difference Engine",
          description: "The Learning Objects development platform &mdash; I redesigned the marketing site for the new product marketed towards higher education institutions. DE was the backbone to building learning and teaching products.",
          images: [
            'images/de-1.jpg',
            'images/de-2.jpg'
          ]
        },{
          id: "delivery",
          year: "2014",
          name: "LO Delivery",
          description: "The Learning Objects student content delivery product. I designed, prototyped, tested, and help build the core delivery platform for students. The product has evolved over the course of my time at LO to include instructor and admin tools, along with various other learning features.",
          images: [
            'images/delivery-1.png',
            'images/delivery-2.jpg',
            'images/delivery-3.jpg',
            'images/delivery-4.jpg',
            'images/delivery-5.jpg',
            'images/delivery-6.jpg'
          ]
        },{
          id: "learning-objects",
          year: "2015",
          name: "Learning Objects",
          description: "I started here in 2013 and have worked as a Product Designer and Creative Director. Along with working on the designs of all of LO's products, I also redesigned the marketing site for LO. The site was responsive and included updated branding that would live-on in the <a href='/work#lo-styleguide'>styleguide</a>. I also built some cool CSS effects + parallax.",
          images: [
            'images/lo-1.jpg',
            'images/lo-2.jpg',
            'images/lo-3.jpg',
            'images/lo-4.jpg',
            'images/lo-5.jpg',
            'images/lo-6.jpg',
            'images/lo-7.jpg'
          ]
        },{
          id: "lo-styleguide",
          year: "2015",
          name: "LO StyleGuide",
          description: "I developed the company StyleGuide and Application Design Guide to help standardize and inform the creative direction of the company and products. The StyleGuide featured brand and design guidelines and the Application Design Guide included the design methodoligies for products.",
          images: [
            'images/xxx.png'
          ]
        },{
          id: "resume",
          year: "2016",
          name: "Pathbrite Résumé",
          description: "Pathbrite is a well known portfolio system we acquired. To best help students find careers, I designed and prototyped a résumé product to tie-in to competencies, portfolios, and a new way to imagine the résumé. You can find mine <a href='/about#resume'>here</a>.",
          images: [
            'images/lo-style-1.jpg',
            'images/lo-style-2.jpg',
            'images/lo-style-3.jpg',
            'images/lo-style-4.jpg'
          ]
        },{
          id: "byu",
          year: "2016",
          name: "BYU",
          description: "I designed a prototype for a goal capture product for BYU and The Church of LDS. This project was pitched to help understand student goals and how that ties-in to the competency-based learning products.",
          images: [
            'images/byu-1.jpg',
            'images/byu-2.jpg',
            'images/byu-3.jpg'
          ]
        },{
          id: "ftpC",
          year: "2017",
          name: "For the People Creative",
          description: "I created this site for a newly formed LLC that I own with my friend Joe. It's aimed at serving nonprofits and small businesses in the DC area. We partner to build applications, products, websites, and marketing materials. My most up-to-date work can be found here...",
          images: [
            'images/ftpC-1.png',
            'images/ftpC-2.png',
            'images/ftpC-3.png',
            'images/ftpC-4.png',
            'images/ftpC-5.jpg',
            'images/ftpC-6.png',
            'images/ftpC-7.png',
            'images/ftpC-8.png',
            'images/ftpC-9.jpg'
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
    const images = [];

    for (var i = 0; i < this.state.projects.length; i++){
      anchorList.push(this.state.projects[i].id);
    }

    const {previous} = this.state;
    const {current} = this.state;
    const {direction} = this.state;

    const {
      photoIndex,
      isOpen,
    } = this.state;

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
              <button className="btn btn-accent">
                Take a look
              </button>
            </div>
            <div className={classNames("work-img", project.id)}></div>
          </div>
        </Section>
      );
    });

    const projectListSlim = this.state.projects.map(function(project, index) {
      return (
        <div className="work-item-wrap" key={project.id}>
          <div className="work-item">
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
      <BodyClassName className={"work " + direction}>
        <section id="work">
            
            {window.innerWidth > 920 ? 
              <div id="wrap-work-top" className={this.state.active} ref={el => this.scene = el}>
                <div className="work-wrap layer" data-depth="0.25">
                  <SectionsContainer {...options} activeSection={current}>
                  <div onClick={() => {
 



                    // ADD IMAGES HERE



                    this.setState({ isOpen: true });

                    


                  }}>{projectList}</div>
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