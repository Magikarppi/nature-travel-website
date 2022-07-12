import { Component } from 'react';
import Fishing from './contentSections/Fishing';
import Hiking from './contentSections/Hiking';
import syksyHiking from '../images/syksyHiking.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <div>
          <img
            src={syksyHiking}
            alt="syksyinen vaellus"
            className="LandingImage"
          />
        </div>
        <Fishing />
        <Hiking />
      </>
    );
  }
}
