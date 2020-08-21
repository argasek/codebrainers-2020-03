import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class Plant extends React.PureComponent {

  render() {

    return (
      <div>
        <p>{this.props.id} {' '} {this.props.name}</p>
      </div>
    )
  }

}

Plant.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Plant;