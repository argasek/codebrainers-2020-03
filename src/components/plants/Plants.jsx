import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import PlantRow from "components/plants/PlantRow";
import InProgress from "components/shared/InProgress";
import { Table } from 'reactstrap';
import Plant from 'models/Plant';

const PLANTS_FETCH_DELAY = 250;

class Plants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      successPlants: undefined,
      inProgress: false,
    };
  }

  componentDidMount() {
    this.fetchPlants().finally(() => {
      this.setState({ inProgress: false });
    });
  }

  fetchPlants() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({ inProgress: true });
    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      axios
        .get(requestUrl)
        .then((response) => {
          const data = response.data;
          const plants = data.map(item => {
            const plant = new Plant();
            plant.fromPlain(item);
            return plant;
          });
          const successPlants = true;
          this.setState({ plants, successPlants });
          resolve();
        })
        .catch((error) => {
          this.setState({ successPlants: false });
          reject();
        });
    });
  }


  render() {
    const { plants, successPlants, inProgress } = this.state;
    const titles = [ '#', 'name', 'CategorySlug' ]
    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={ inProgress }/>
          { successPlants === false && <p>Nie udało się pobrać Kwiatow</p> }
          { successPlants && (
            <Table striped>
              <thead>
              <tr>
                {/*<th>id</th>*/}
                <th>Name</th>
                {/*<th>url</th>*/ }
                <th>Category</th>
                {/*<th>category_slug</th>*/ }
                <th>Watering interval</th>
                <th>Fertilizing interval</th>
                <th>Exposure</th>
                <th>Humidity</th>
                <th>Temperature</th>
                {/*<th>blooming​</th>*/ }
                <th>Difficulty</th>
                {/*<th>room​</th>*/ }
                {/*<th>last_watered</th>*/}
                {/*<th>last_fertilized</th>*/}
              </tr>
              </thead>
              <tbody>
              {
                plants.map((plant, index, arr) => (
                  <PlantRow
                    plant={ plant }
                    key={ index }
                  />
                ))
              }
              </tbody>
            </Table>
          ) }
        </CardBody>
      </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
