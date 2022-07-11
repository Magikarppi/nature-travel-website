import { Component } from 'react';
import './App.css';
import Fishing from './components/contentSections/Fishing';
import Hiking from './components/contentSections/Hiking';
import MyHeader from './components/MyHeader';
import syksyHiking from './images/syksyHiking.jpg';

interface State {
  lastScroll: number;
}

const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
class App extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      lastScroll: 0,
    };
  }

  // for hiding header on scroll down and showing on scroll up
  trackScroll = () => {
    const body = document.body;
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
    }

    // scrolling down
    if (
      currentScroll > this.state.lastScroll &&
      !body.classList.contains(scrollDown)
    ) {
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    }

    // scrolling up
    if (
      currentScroll < this.state.lastScroll &&
      !body.classList.contains(scrollUp)
    ) {
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }

    this.setState({ lastScroll: currentScroll });
  };

  render() {
    window.addEventListener('scroll', this.trackScroll);
    return (
      <div className="App">
        <MyHeader />
        <div>
          <img
            src={syksyHiking}
            alt="syksyinen vaellus"
            className="LandingImage"
          />
        </div>
        <Fishing />
        <Hiking />
      </div>
    );
  }
}

export default App;
