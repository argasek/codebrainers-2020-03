import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import InProgress from "components/shared/InProgress";
import Plants from "components/plants/Plants";
import { delay, PLANTS_FETCH_DELAY } from "shared/Debug";
import OperationFailed from "components/shared/OperationFailed";
import Api from "constants/Api";
import Plant from "models/Plant";
import { plainToClass } from "serializers/Serializer";
import Room from "models/Room";
import { withCategoriesPropTypes } from "proptypes/CommonPropTypes";
import withCategories from "components/categories/Categories";
import withRooms from "components/rooms/Rooms";

class PlantsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      plantsErrorMessage: undefined,
      plantsSuccess: undefined,
      plantsInProgress: false,
      allSuccess: undefined,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState, this.state);
  }

  componentDidMount() {
    const categoriesPromise = this.props.fetchCategories();
    const roomsPromise = this.props.fetchRooms();
    const plantsPromise = this.fetchPlantsDelayed();

    Promise.all([ categoriesPromise, roomsPromise, plantsPromise ])
      .then(() => this.setState({ allSuccess: true }))
      .catch(() => this.setState({ allSuccess: false }))
  }

  fetchPlants = (resolve, reject) => {
    return axios
      .get(Api.PLANTS)
      .then((response) => {
        const data = response.data;
        const plants = data.map((item) => plainToClass(Plant, item));

        const plantsErrorMessage = "";
        const plantsSuccess = true;
        this.setState({
          plants,
          plantsSuccess,
          plantsErrorMessage,
        });
        console.log("Fetched plants");
        resolve();
      })
      .catch((error) => {
        const plantsErrorMessage = error.message;
        const plantsSuccess = false;
        this.setState({
          plantsErrorMessage,
          plantsSuccess,
        });
        reject();
      });
  };

  fetchPlantsDelayed() {
    this.setState({ plantsInProgress: true });
    console.log("Method PlantsContainer.fetchPlantsDelayed() fired");
    return delay(PLANTS_FETCH_DELAY, this.fetchPlants);
  }

  render() {
    const { plants, plantsErrorMessage, plantsInProgress, plantsSuccess, allSuccess } = this.state;

    const { categories, rooms } = this.props;

    const totalPlants = plants.length;

    return (
      <Card className="mb-4">
        <CardBody>
          <h3 className="mb-3">List of plants</h3>
          <p>You have { totalPlants } plants in all your rooms.</p>

          <InProgress inProgress={ plantsInProgress } />

          <OperationFailed isFailed={ plantsSuccess === false }>
            <strong>Failed to fetch plants.</strong>
            { " Reason: " }
            { plantsErrorMessage }
          </OperationFailed>

          { allSuccess === true && <Plants plants={ plants } categories={ categories } rooms={ rooms } /> }
        </CardBody>
      </Card>
    );
  }
}

PlantsContainer.propTypes = {
  ...withCategoriesPropTypes,
  rooms: PropTypes.arrayOf(PropTypes.instanceOf(Room)).isRequired,
  fetchRooms: PropTypes.func.isRequired,
};

export default withRooms(withCategories(PlantsContainer));
