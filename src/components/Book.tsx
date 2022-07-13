import { Component } from 'react';

export default class Book extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p>Varaussivu</p>
      </div>
    );
  }
}
