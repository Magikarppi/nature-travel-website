import { Component } from 'react';
import './App.css';
import Fishing from './components/contentSections/Fishing';
import MyHeader from './components/MyHeader';
import syksyHiking from './images/syksyHikingCrop.jpg';

class App extends Component {
  render() {
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
      </div>
    );
  }
}

export default App;
