import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class Plant extends React.PureComponent {

  render() {

    return (
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          {/*<td>{this.props.url}</td>*/}
          <td>{this.props.category}</td>
          {/*<td>{this.props.category_slug}</td>*/}
          <td>{this.props.watering_interval}</td>
          <td>{this.props.fertilizing_interval}</td>
          <td>{this.props.required_exposure}</td>
          <td>{this.props.required_humidity}</td>
          <td>{this.props.required_temperature}</td>
          {/*<td>{blooming​}</td>*/}
          <td>{this.props.difficulty}</td>
          {/*<td>{room​}</td>*/}
          <td>{this.props.last_watered}</td>
          <td>{this.props.last_fertilized}</td>
        </tr>
    )
  }

}

Plant.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Plant;