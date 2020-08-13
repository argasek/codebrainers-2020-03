import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormFeedback, Label, FormGroup } from 'reactstrap';

const InputNumberField = ({ value, onChange, validate, errorMessage = '', name }) => {
  return (
    <FormGroup>
      <Label for={ name }>Some number:</Label>
      <Input
        type="text"
        name={name}
        id={ name }
        placeholder="Enter number"
        value={ value }
        onChange={ onChange }
        onBlur={ validate }
        invalid={errorMessage !== ''}
      />
      <FormFeedback>{ errorMessage }</FormFeedback>
    </FormGroup>

  );
};

InputNumberField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumberField;