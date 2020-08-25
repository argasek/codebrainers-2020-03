import React from "react";
import { Table } from "reactstrap";
import Plant from "components/plants/Plant";
import { categoriesPropTypes, plantsPropTypes } from 'proptypes/CommonPropTypes';

/**
 * This is an example of JSDoc comment.
 *
 * @param {array} plants Array of plants
 * @param {array} categories Array of categories
 * @returns {*}
 * @constructor
 */
const Plants = ({ plants, categories }) => {
  return (
    <Table hover striped responsive>
      <thead className="thead-dark">
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Exposure</th>
        <th>Humidity</th>
        <th>Temperature</th>
        <th>Blooming</th>
        <th>Difficulty</th>
        <th>Room</th>
        <th>Last Fertilized</th>
        <th>Last Watered</th>
      </tr>
      </thead>
      <tbody>
      {
        plants.map((plant) => (
          <Plant
            plant={ plant }
            plantCategories={ categories }
            key={ plant.id }
          />
        ))
      }
      </tbody>
    </Table>
  );
};

Plants.propTypes = {
  plants: plantsPropTypes,
  categories: categoriesPropTypes,
};

export default Plants;
