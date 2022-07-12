import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import vaellusImg from '../../images/hikingSummer1.jpg';

export default class Hiking extends Component {
  render() {
    return (
      <div className="ContentSectContainer">
        <img
          src={vaellusImg}
          alt="Ihmisiä vaeltamassa kesällä"
          className="ContentImage"
        />
        <div className="ContentSectText">
          <h2>Vaelluselämys</h2>
          <p>
            Curabitur quis nisi eget erat varius semper sit amet vel odio.
            Vivamus vel libero efficitur, laoreet augue id, vulputate arcu.
            Aenean ut purus at augue pharetra auctor varius eget ex. Etiam non
            magna vitae libero dapibus ullamcorper a non mi. Integer
            pellentesque id diam a ornare. Nulla facilisi.
          </p>
          <Link to="/varaa">Lue lisää ja varaa</Link>
        </div>
      </div>
    );
  }
}
