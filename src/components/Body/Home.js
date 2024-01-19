import React, { Component } from "react";
import Parallax from "parallax-js";
import BodyClassName from "react-body-classname";
import { Link } from "react-router-dom";
import WebGLView from "./webgl/WebGLView";
import GUIView from "./gui/GUIView";

export default class Home extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene);
    window.app = new ParticleApp();
    window.app.init();
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    return (
      <BodyClassName className="home">
        <section id="home">
          <div id="wrap-home-top" ref={(el) => (this.scene = el)}>
            <div className="home-intro layer" data-depth="0.33">
              <h1>
                Creating things since{" "}
                <Link to="/work#brendans-world">1999</Link>
              </h1>
              <Link to="/work" className="btn btn-accent">
                View my work
              </Link>
            </div>
          </div>

          <div id="wrap-home-bottom">
            <div className="wrap-inner">
              <h2>Hello!</h2>
              <h3 className="sans">
                I'm a design manager, UI/UX designer, and developer.
              </h3>
              <Link to="/work" className="btn btn-accent-dark">
                View my work
              </Link>
              <Link to="/about" className="btn btn-accent-light">
                More about me
              </Link>
            </div>
          </div>

          <div id="wrap-home-portrait">
            <div className="portrait-wrap">
              <div className="portrait" />
            </div>
          </div>
        </section>
      </BodyClassName>
    );
  }
}

export class ParticleApp {
  init() {
    this.initWebGL();
    this.initGUI();
    this.addListeners();
    this.animate();
    this.resize();
  }

  initWebGL() {
    this.webgl = new WebGLView(this);
    document
      .querySelector(".portrait")
      .appendChild(this.webgl.renderer.domElement);
  }

  initGUI() {
    this.gui = new GUIView(this);
  }

  addListeners() {
    this.handlerAnimate = this.animate.bind(this);

    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("keyup", this.keyup.bind(this));

    const el = this.webgl.renderer.domElement;
    el.addEventListener("click", this.click.bind(this));
  }

  animate() {
    this.update();
    this.draw();
    this.raf = requestAnimationFrame(this.handlerAnimate);
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update() {
    if (this.gui.stats) this.gui.stats.begin();
    if (this.webgl) this.webgl.update();
    if (this.gui) this.gui.update();
  }

  draw() {
    if (this.webgl) this.webgl.draw();
    if (this.gui.stats) this.gui.stats.end();
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (this.webgl) this.webgl.resize();
  }

  keyup(e) {
    if (e.keyCode === 71) {
      if (this.gui) this.gui.toggle();
    }
  }

  click(e) {
    this.webgl.next();
  }
}
