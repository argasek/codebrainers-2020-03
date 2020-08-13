import React from 'react';

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

export default InputNumberField;