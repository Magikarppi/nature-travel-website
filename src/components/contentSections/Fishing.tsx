import React, { Component } from 'react';
import kalastus from '../../images/kalastus1.jpg';

export default class Fishing extends Component {
  render() {
    return (
      <div className="ContentSectContainer">
        <div className="ContentSectText">
          <h2>Kalastuskokemus</h2>
          <p>
            Curabitur quis nisi eget erat varius semper sit amet vel odio.
            Vivamus vel libero efficitur, laoreet augue id, vulputate arcu.
            Aenean ut purus at augue pharetra auctor varius eget ex. Etiam non
            magna vitae libero dapibus ullamcorper a non mi. Integer
            pellentesque id diam a ornare. Nulla facilisi.
          </p>
        </div>
        <img src={kalastus} alt="mies kalastamassa" className="ContentImage" />
      </div>
    );
  }
}
