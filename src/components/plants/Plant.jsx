import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class Plant extends React.PureComponent {

  render() {

    return (
      <div>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.name} </td>

        <td>{this.props.categorySlug}</td>



      </div>
    )
  }

}

Plant.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Plant;