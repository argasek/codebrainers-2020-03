import React, { useState } from 'react';
import PlantForm from './plant-form/PlantForm';
import { Card, CardBody, CardHeader } from 'reactstrap';

const PlantCreate = (props) => {
  const [ plantName, setPlantName ] = useState('');
  const plantNameArr = plantName.split(', ');

  return (
    <Card className="mb-4" color="light">
      <CardHeader>
        Create Plant: <span className="font-weight-semibold">{ plantNameArr[0] }</span>
      </CardHeader>
      <CardBody>
        <h3 className="mb-4">Create plant</h3>
        <PlantForm onPlantNameChange={ (plantName) => setPlantName(plantName) }
                   plantDifficultyChange={ plantNameArr[plantNameArr.length - 1] }
                   plantUpdateName={ plantNameArr[0] }{ ...props } />
      </CardBody>
    </Card>
  );
};

PlantCreate.propTypes = {};

export default PlantCreate;
