import React from 'react';
import PropTypes from 'prop-types';

const InputNumberField = ({ value, onChange }) => {
  return (
    <input
      value={ value }
      placeholder="enter the value"
      type="text"
      onChange={ onChange }
    />
  )
};

InputNumberField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumberField;