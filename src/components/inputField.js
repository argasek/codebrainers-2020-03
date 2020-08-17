import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormFeedback, Label, FormGroup } from 'reactstrap';

const InputField  = ({field, name, type, onChange, placeholder, errorMessage = ''}) => {
  return (
    <td>
      <FormGroup>
      <Label htmlFor={name}></Label>
      <Input
        value={field}
        id={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        invalid={errorMessage !== ''}
      />
      <FormFeedback>{errorMessage}</FormFeedback>
      </FormGroup>
  </td>
  )
};

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default InputField;