import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

const InputOperatorField = ({ value, onChange, errorMessage = '', name }) => {
  return (
    <FormGroup>
      <Label for={ name }>Operator:</Label>
      <Input
        type="text"
        name={ name }
        id={ name }
        placeholder="*, /, +, -"
        value={ value }
        onChange={ onChange }
        invalid={ errorMessage !== '' }
      />
      <FormFeedback>{ errorMessage }</FormFeedback>
    </FormGroup>

  );
};

InputOperatorField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputOperatorField;