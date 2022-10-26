import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline, planet } = this.props;
    return (
      <>
        <h2>{ headline }</h2>
        <h3>{ planet }</h3>
      </>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
  planet: PropTypes.string.isRequired,
};

export default Title;
