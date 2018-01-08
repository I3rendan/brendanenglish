import React, { Component } from 'react';
import config from 'react-global-configuration';
import { Switch, Route } from 'react-router-dom';
import Parallax from 'parallax-js';
import Header from './Header/Header';
import Home from './Body/Home';
import Work from './Body/Work';
import About from './Body/About';
import Contact from './Body/Contact';
import NotFound from './Body/NotFound';

import imgFTP from '../images/work/ftpC-1-min.jpg';
import imgMink2 from '../images/work/mink-v2-1-min.jpg';
import img3dates from '../images/work/3dates-1-min.jpg';
import imgQuantum from '../images/work/quantum-1-min.jpg';
import imgLISC from '../images/work/lisc-1-min.jpg';
import imgSocialBooth from '../images/work/socialbooth-1-min.jpg';
import imgBrendansWorld from '../images/work/brendans-world-1-min.jpg';
import imgNebula1 from '../images/work/nebula-v1-1-min.jpg';
import imgMoodFood from '../images/work/moodfood-1-min.jpg';
import imgTomCarter2 from '../images/work/tom-carter-v2-1-min.jpg';
import imgBYU from '../images/work/byu-1-min.jpg';
import imgResume from '../images/work/resume-1-min.jpg';
import imgMilk from '../images/work/milk-1-min.jpg';
import imgKourthouse from '../images/work/kourthouse-1-min.jpg';
import imgStyle from '../images/work/lo-style-1-min.jpg';
import imgLO from '../images/work/lo-1-min.jpg';
import imgCrew from '../images/work/crew-1-min.jpg';
import imgDelivery from '../images/work/delivery-1-min.jpg';
import imgNebula5 from '../images/work/nebula-v5-1-min.jpg';
import imgAveMaria from '../images/work/ave-maria-1-min.jpg';
//import imgKidney from '../images/work/kidney-1-min.jpg';
import imgSPCA from '../images/work/spca-1-min.jpg';
import imgAHA from '../images/work/aha-1-min.jpg';
import imgWWO from '../images/work/wwo-1-min.jpg';
import imgCitadel from '../images/work/citadel-1-min.jpg';
import imgEIG from '../images/work/eig-1-min.jpg';
import imgBlackbaud from '../images/work/blackbaud-1-min.jpg';
//import imgBBCON from '../images/work/bbcon-1-min.jpg';
//import imgTomCarter from '../images/work/tom-carter-1-min.jpg';
//import imgMink from '../images/work/mink-1-min.jpg';
import imgBrendanEnglish from '../images/work/brendan-english-1-min.jpg';
import imgCarnegie from '../images/work/carnegie-1-min.jpg';
//import imgSaylor from '../images/work/saylor-1-min.jpg';
//import imgCampusPack from '../images/work/campuspack-1-min.jpg';
//import imgDE from '../images/work/de-1-min.jpg';

import Preload from 'react-preload';
class App extends Component {

  constructor(props) {
    super(props);
    config.set({ workNum: 27 },{ freeze: false });
  }

  componentDidMount() {
    if (window.innerWidth > 920){
      this.parallax = new Parallax(this.scene);
    }
  }

  componentWillUnmount() {
    if (window.innerWidth > 920){
      this.parallax.disable();
    }
  }

  render() {

    const loadingIndicator = (<div className="loading"></div>);

    const images = [
      imgFTP,
      imgMink2,
      img3dates,
      imgQuantum,
      imgLISC,
      imgSocialBooth,
      imgMoodFood,
      imgTomCarter2,
      imgBYU,
      imgResume,
      imgBrendansWorld,
      imgNebula1,
      imgMilk,
      imgKourthouse,
      imgStyle,
      imgLO,
      imgCrew,
      imgDelivery,
      imgNebula5,
      imgAveMaria,
      //imgKidney,
      imgSPCA,
      imgAHA,
      imgWWO,
      imgCitadel,
      imgEIG,
      imgBlackbaud,
      //imgBBCON,
      //imgTomCarter,
      //imgMink,
      imgBrendanEnglish,
      imgCarnegie
      //imgSaylor
      //imgCampusPack,
      //imgDE    
    ];

    return (
      
      <div className="app">

          <Header />

          <div className="app-inner" ref={el => this.scene = el}>

            {window.innerWidth > 920 ? 
              <div id="star-bg" className="bg-stars-wrap bg-wrap layer" data-depth="0.05">
                <div className="bg-stars bg"></div>
              </div> :
              <div id="star-bg" className="bg-stars-wrap bg-wrap">
                <div className="bg-stars bg"></div>
              </div>
            }

            {window.innerWidth > 920 ? 
              <div className="star-field field-1 layer" data-depth="0.125">
                <span className="star ring"></span>
                <span className="star"></span>
                <span className="star ring"></span>
                <span className="star"></span>
              </div> :
              <div className="star-field field-1">
                <span className="star ring"></span>
                <span className="star"></span>
                <span className="star ring"></span>
                <span className="star"></span>
              </div>
            }

            {window.innerWidth > 920 ? 
              <div className="star-field field-2 layer" data-depth="0.15">
                <span className="star ring"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
              </div> :
              <div className="star-field field-2">
                <span className="star ring"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
              </div>
            }

            <Preload
              loadingIndicator={loadingIndicator}
              images={images}
              autoResolveDelay={1000}
              onError={this._handleImageLoadError}
              onSuccess={this._handleImageLoadSuccess}
              resolveOnError={true}
              mountChildren={true}
              >
              {
                <Switch onUpdate={ window.scrollTo(0,0) }>
                  <Route exact path='/' component={Home} />
                  <Route path='/work' component={Work} />
                  <Route path='/about' component={About} />
                  <Route path='/contact' component={Contact} />
                  <Route path='*' component={NotFound} />
                </Switch>
              }
            </Preload>

            {window.innerWidth > 920 ? 
              <div className="star-field field-3 layer" data-depth="0.33">
                <span className="star"></span>
                <span className="star"></span>
                <span className="star ring"></span>
                <span className="star ring"></span>
              </div> :
              <div className="star-field field-3">
                <span className="star"></span>
                <span className="star"></span>
                <span className="star ring"></span>
                <span className="star ring"></span>
              </div>
            }

            {window.innerWidth > 920 ? 
              <div className="star-field field-4 layer" data-depth="0.75">
                <span className="star"></span>
                <span className="star ring"></span>
                <span className="star ring"></span>
                <span className="star"></span>
                <span className="star ring"></span>
              </div> :
              <div className="star-field field-4">
                <span className="star"></span>
                <span className="star ring"></span>
                <span className="star ring"></span>
                <span className="star"></span>
                <span className="star ring"></span>
              </div>
            }

          </div>

      </div>
    );
  }
}

export default App;