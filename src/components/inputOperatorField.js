import React from 'react';

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

export default InputOperatorField;