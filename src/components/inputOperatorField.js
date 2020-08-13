import React from 'react';
import PropTypes from 'prop-types';

const InputOperatorField = ({ value, onChange }) => {
  return (
    <input
      value={ value }
      placeholder="Enter: *, /, +, -"
      style={ { margin: '0 20px' } }
      type="text"
      onChange={ onChange }
    />
  )
};

InputOperatorField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputOperatorField;