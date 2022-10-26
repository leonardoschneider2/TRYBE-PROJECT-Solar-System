import React from 'react';
import PropTypes from 'prop-types';
import './styles/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, handlePlanet } = this.props;
    return (
      <div
        className="planet-content"
        data-testid="planet-card"
      >
        <button
          className="button"
          type="button"
          onClick={ () => {
            handlePlanet(planetName);
          } }
        >
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ `image-planet-${planetName}` }
          />
        </button>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
