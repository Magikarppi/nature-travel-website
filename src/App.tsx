import { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import syksyHiking from './images/syksyHikingCrop.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tervo Travels</h1>
        <img
          src={syksyHiking}
          alt="syksyinen vaellus"
          className="LandingImage"
        />
      </div>
    );
  }
}

export default App;
