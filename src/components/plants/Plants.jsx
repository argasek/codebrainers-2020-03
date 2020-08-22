import {Card, CardBody} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Plant from "components/plants/Plant";
import InProgress from "components/shared/InProgress";

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
      this.setState({inProgress: false});
    });
  }

  fetchPlants() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({inProgress: true});
    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      axios
        .get(requestUrl)
        .then((response) => {
          const data = response.data;
          // const plants = data.map((item) => (item.name));
          const plants = data.map(item => item);
          const successPlants = true;
          this.setState({plants, successPlants});
          resolve();
        })
        .catch((error) => {
          this.setState({successPlants: false});
          reject();
        });
    });
  }


  render() {
    const { plants, successPlants, inProgress } = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={inProgress} />
          {successPlants === false && <p>Nie udało się pobrać Kwiatow</p>}
          {successPlants && (
            <table className="plants">
              <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                {/*<th>url</th>*/}
                <th>category</th>
                {/*<th>category_slug</th>*/}
                <th>watering_interval</th>
                <th>fertilizing_interval</th>
                <th>required_exposure</th>
                <th>required_humidity</th>
                <th>required_temperature</th>
                {/*<th>blooming​</th>*/}
                <th>difficulty</th>
                {/*<th>room​</th>*/}
                <th>last_watered</th>
                <th>last_fertilized</th>
              </tr>
              </thead>
              {plants.map((plant, index, arr) => (
                <Plant
                  name={plant.name}
                  id={plant.id}
                  key={index}
                  url={plant.url}
                  category={plant.category}
                  // category_slug={plant.category_slug}
                  watering_interval={plant.watering_interval}
                  fertilizing_interval={plant.fertilizing_interval}
                  required_exposure={plant.required_exposure}
                  required_humidity={plant.required_humidity}
                  required_temperature={plant.required_temperature}
                  // blooming​=
                  difficulty={plant.difficulty}
                  // room​=
                  last_watered={plant.last_watered}
                  last_fertilized={plant.last_fertilized}
                />
              ))}
            </table>
          )}
        </CardBody>
      </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
