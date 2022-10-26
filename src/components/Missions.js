import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './styles/Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div className="missions" data-testid="missions">
          {
            missions.map((mission) => {
              const { name, year, country, destination } = mission;
              return (
                <MissionCard
                  key={ name }
                  name={ name }
                  year={ year }
                  country={ country }
                  destination={ destination }
                />
              );
            })
          }
        </div>
      </>
    );
  }
}

export default Missions;
