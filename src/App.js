import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Timeline from './Timeline';

class App extends Component {
  state = { width: window.innerWidth }
  componentWillMount() {
    this.updateWidth();
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }
  updateWidth = () => this.setState({ width: window.innerWidth })
  render() {
    if (this.state.width < 770) {
      return (
        <div>
          <Header />
          <About />
          <Projects />
          <Timeline />
        </div>
      );
    }
    return (
      <div>
        <Header />
        <div className="row">
          <div className="left-col">
            <About />
            <Timeline />
          </div>
          <div className="right-col">
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
