import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormFeedback, Label, FormGroup } from 'reactstrap';

const InputField  = ({field, name, type, onChange, placeholder, errorMessage = '', onBlur}) => {
  return (
    <td>
      <FormGroup>
      <Label htmlFor={name}>{name}: <br/></Label>
      <Input
        value={field}
        // errorMessage = {errorMessage}
        id={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        invalid={errorMessage !== ''}
        onBlur = {onBlur}
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