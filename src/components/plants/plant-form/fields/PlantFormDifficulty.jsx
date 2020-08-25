import React from "react";
import { FormGroup } from "reactstrap";
import { Field } from "formik";
import { plantDifficultyOptions } from "constants/PlantConstants";
import PlantasticRadioNoFeedback from 'components/shared/form/PlantasticRadioNoFeedback';

const plantDifficultyId = "plantDifficulty";

const plantDifficultyOption = (item) => (
  <Field
    id={ plantDifficultyId + item.id }
    key={ item.id }
    value={ item.id }
    name="difficultyLevel"
    type="radio"
    label={ item.name }
    component={ PlantasticRadioNoFeedback }
    className="custom-control-inline-responsive"
  />
);

const PlantFormDifficulty = (props) => (
  <FormGroup tag="fieldset">
    <legend className="col-form-label">
      Difficulty:
      <span className="asterisk" />
    </legend>
    {
      plantDifficultyOptions.map(plantDifficultyOption)
    }
  </FormGroup>
);

PlantFormDifficulty.propTypes = {};

export default PlantFormDifficulty;
