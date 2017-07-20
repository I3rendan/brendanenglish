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

    const loadingIndicator = (<div className="loading">Loading...</div>);

    const images = [
      '../images/work/ftpC-1.jpg',
      '../images/work/byu-1.jpg',
      '../images/work/resume-1.jpg',
      '../images/work/brendans-world.png',
      '../images/work/nebula-1.jpg',
      '../images/work/milk-1.png',
      '../images/work/kourthouse.png',
      '../images/work/resume-1.jpg',
      '../images/work/lo-style-1.jpg',
      '../images/work/lo-1.jpg',
      '../images/work/delivery-1.jpg',
      '../images/work/nebula-5.jpg',
      '../images/work/ave-maria.jpg',
      '../images/work/kidney.jpg',
      '../images/work/spca.jpg',
      '../images/work/aha-1.jpg',
      '../images/work/wwo.jpg',
      '../images/work/citadel.jpg',
      '../images/work/eig-1.jpg',
      '../images/work/blackbaud-1.jpg',
      '../images/work/bbcon.jpg',
      '../images/work/tom-carter.jpg',
      '../images/work/mink-1.jpg',
      '../images/work/brendan-english.jpg',
      '../images/work/carnegie-1.jpg',
      '../images/work/saylor-1.jpg',
      '../images/work/campuspack.jpg',
      '../images/work/de-1.jpg'    
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