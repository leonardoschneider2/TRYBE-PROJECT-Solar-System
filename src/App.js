import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="solar-system-page">
        <Header />
        <div className="solar-system-content">
          <SolarSystem />
          <Missions />
        </div>
      </div>
    );
  }
}

export default App;
