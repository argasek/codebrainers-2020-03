import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class Plant extends React.PureComponent {

  render() {
    const {plant} = this.props;

    return (
        <tr>
          <td>{plant.id}</td>
          <td>{plant.name}</td>
          {/*<td>{plant.url}</td>*/}
          <td>{plant.category}</td>
          {/*<td>{plant.category_slug}</td>*/}
          <td>{plant.watering_interval}</td>
          <td>{plant.fertilizing_interval}</td>
          <td>{plant.required_exposure}</td>
          <td>{plant.required_humidity}</td>
          <td>{plant.required_temperature}</td>
          {/*<td>{blooming​}</td>*/}
          <td>{plant.difficulty}</td>
          {/*<td>{room​}</td>*/}
          <td>{plant.last_watered}</td>
          <td>{plant.last_fertilized}</td>
        </tr>
    )
  }

}

Plant.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Plant;