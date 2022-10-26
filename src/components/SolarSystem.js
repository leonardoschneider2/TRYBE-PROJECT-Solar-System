import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './styles/SolarSystem.css';

class SolarSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      planet: 'SELECT AN PLANET',
    };
  }

  // handle
  handlePlanet = (planet) => {
    this.setState({
      planet,
    });
  }

  render() {
    const { planet } = this.state;
    return (
      <div data-testid="solar-system">
        <Title
          className="title"
          headline="Planetas"
          planet={ planet }
        />

        <div className="planets">
          {
            planets.map((planetObj) => {
              const { name, image } = planetObj;

              return (
                <PlanetCard
                  key={ name }
                  handlePlanet={ this.handlePlanet }
                  planetName={ name }
                  planetImage={ image }
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
