import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title
          className="title"
          headline="Planetas"
        />

        <div id="planets">
          {
            planets.map((planetObj) => {
              const { name, image } = planetObj;

              return (
                <PlanetCard
                  key={ name }
                  planetName={ name }
                  planetImage={ image }
                  className="planet"
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
