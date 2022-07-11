import { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <a href="/tietoa">Tietoa</a>
        <a href="/yhteys">Ota yhteyttä</a>
        <a href="/youtubelinkki">Youtube</a>
      </div>
    );
  }
}
