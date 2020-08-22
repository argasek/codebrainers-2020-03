import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';
import Plant from 'models/Plant';
import { plantDifficultyLevels } from 'constants/PlantConstants';

class PlantRow extends React.PureComponent {

  getDifficultyLabel(difficulty) {
    const plantDifficulty = plantDifficultyLevels.find(plantDifficulty => plantDifficulty.value === difficulty);
    return plantDifficulty.label;
  }

  render() {

    /**
     * @type Plant
     */
    const plant = this.props.plant;

    const difficultyLabel = this.getDifficultyLabel(plant.difficulty);

    return (
      <tr>
        {/*<td>{ plant.id }</td>*/}
        <td>{ plant.name }</td>
        <td>{ plant.category }</td>
        <td>{ plant.wateringInterval }</td>
        <td>{ plant.fertilizingInterval }</td>
        <td>{ plant.requiredExposure }</td>
        <td>{ plant.requiredHumidity }</td>
        <td>{ plant.requiredTemperature }</td>
        <td>{ difficultyLabel }</td>
        {/*<td>{ plant.lastWatered }</td>*/}
        {/*<td>{ plant.lastFertilized }</td>*/}
      </tr>
    );
  }

}

PlantRow.propTypes = {
  plant: PropTypes.instanceOf(Plant).isRequired,
};

export default PlantRow;