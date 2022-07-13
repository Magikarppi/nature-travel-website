import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

class MyHeader extends Component {
  render(): ReactNode {
    return (
      <div className="MyHeader">
        <div className="HeaderSection">
          <div className="HeaderSubSectionLeft">
            <div className="HeaderContentElement">
              <Link to="/yritys">Lisätietoa</Link>
            </div>
            <div className="HeaderContentElement">
              <Link to="/varaa">Varaa</Link>
            </div>
          </div>
        </div>
        <div className="HeaderSection">
          <Link to="/">
            <h1>Tervo Travels</h1>
          </Link>
        </div>
        <div className="HeaderSection">
          <p>TervoTravels@myspace.com</p>
          <p>+3586738639674</p>
        </div>
      </div>
    );
  }
}

export default MyHeader;
