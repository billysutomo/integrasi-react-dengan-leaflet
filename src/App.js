import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let L = window.L;     // import leaflet dari native javascript
let map = window.map; // declare variable global untuk menampung peta hasil dari leaflet 

class App extends Component {

  componentDidMount() {
    this.initializeMap();
  }

  initializeMap = () => {
    map = L.map("map", {                // "map" adalah id dari element html
      center: [-6.175239, 106.827204],  // posisi fokus peta pertama kali dibuka
      zoom: 14,                         // level zoom peta pertama kali dibuka
    });
                        
    L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png"
    ).addTo(map); // fungsi untuk menambahkan layer peta ke dalam leaflet
                  // daftar link peta http://leaflet-extras.github.io/leaflet-providers/preview/
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="map" /> {/* elemeny yang digunakan leaflet untuk load map */}
      </div>
    );
  }
}

export default App;
