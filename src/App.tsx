import { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tervo Travels</h1>
        <NavigationBar />
      </div>
    );
  }
}

export default App;
