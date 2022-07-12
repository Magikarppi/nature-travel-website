import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Book from './components/Book';
import Fishing from './components/contentSections/Fishing';
import Hiking from './components/contentSections/Hiking';
import Footer from './components/Footer';
import Home from './components/Home';
import MyHeader from './components/MyHeader';

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
      <BrowserRouter>
        <div className="App">
          <MyHeader />

          <Routes>
            <Route path="/varaa" element={<Book />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
