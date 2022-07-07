import { Component, ReactNode } from 'react';

class MyHeader extends Component {
  render(): ReactNode {
    return (
      <div className="MyHeader">
        <div className="HeaderSection">
          <div className="HeaderSubSectionLeft">
            <div className="HeaderContentElement">Lisätietoa</div>
            <div className="HeaderContentElement">Eräpalvelut</div>
          </div>
        </div>
        <div className="HeaderSection">
          <h1>Tervo Travels</h1>
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
