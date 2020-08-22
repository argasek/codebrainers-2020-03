import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class Plant extends React.PureComponent {

  render() {

    return (
      // <div>
      //   <p>{ this.props.id } { this.props.name }</p>
      // </div>

                        // name={plant}
                  // id={id}
                  // key={index}
                  // url={url}
                  // category=
                  // category_slug=
                  // watering_interval=
                  // fertilizing_interval=
                  // required_exposure=
                  // required_humidity=
                  // required_temperature=
                  // // blooming​=
                  // difficulty=
                  // // room​=
                  // last_watered=
                  // last_fertilized=

      <tbody>
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
      </tbody>
    )
  }

}

Plant.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Plant;