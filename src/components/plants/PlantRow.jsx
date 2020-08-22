import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';
import Plant from 'models/Plant';

class PlantRow extends React.PureComponent {

  render() {

    /**
     * @type Plant
     */
    const plant = this.props.plant;

    return (
      <tr>
        <td>{ plant.id }</td>
        <td>{ plant.name }</td>
        <td>{ plant.category }</td>
        <td>{ plant.wateringInterval }</td>
        <td>{ plant.fertilizingInterval }</td>
        <td>{ plant.requiredExposure }</td>
        <td>{ plant.requiredHumidity }</td>
        <td>{ plant.requiredTemperature }</td>
        <td>{ plant.difficulty }</td>
        <td>{ plant.lastWatered }</td>
        <td>{ plant.lastFertilized }</td>
      </tr>
    );
  }

}

PlantRow.propTypes = {
  plant: PropTypes.instanceOf(Plant).isRequired,
};

export default PlantRow;