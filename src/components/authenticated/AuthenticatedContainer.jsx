import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Routes from 'constants/Routes';
import PlantsContainer from 'components/plants/PlantsContainer';
import Categories from 'components/categories/Categories';
import Rooms from 'components/rooms/Rooms';
import PlantCreate from 'components/plants/PlantCreate';
import axios from 'axios';
import { CATEGORIES_FETCH_DELAY, ROOMS_FETCH_DELAY, delay } from 'shared/Debug';
import Api from 'constants/Api';
import AuthenticatedDashboard from 'components/authenticated/AuthenticatedDashboard';
import { plainToClass } from 'serializers/Serializer';
import Category from 'models/Category';
import CategoriesContainer from 'components/categories/CategoriesContainer';

class AuthenticatedContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      roomsErrorMessage: '',
      roomsInProgress: false,
      roomsSuccess: undefined,
      rooms: [],
    };
  }

  /**
   *
   * @param {function} resolve
   * @param {function} reject
   * @returns {Promise}
   */
  fetchRooms = (resolve, reject) => {
    return axios.get(Api.ROOMS)
      .then((response) => this.fetchRoomsSuccess(response, resolve))
      .catch((error) => this.fetchRoomsFailure(error, reject))
      .finally(this.fetchRoomsFinally);
  };

  fetchRoomsDelayed = () => {
    console.log('Method AuthenticatedContainer.fetchRoomsDelayed() fired');

    const rooms = [];
    const roomsInProgress = true;
    this.setState({ rooms, roomsInProgress });

    const promise = delay(ROOMS_FETCH_DELAY, this.fetchRooms);
    return promise;
  };

  fetchRoomsFailure = (error, reject) => {
    const roomsSuccess = false;
    const roomsErrorMessage = error.message;

    this.setState({
      roomsErrorMessage,
      roomsSuccess,
    });

    reject();
  };

  fetchRoomsFinally = () => {
    const roomsInProgress = false;
    this.setState({ roomsInProgress });
  };

  fetchRoomsSuccess = (response, resolve) => {
    const data = response.data;

    const rooms = data.map(item => plainToClass(Category, item));
    const roomsSuccess = true;
    const roomsErrorMessage = '';

    this.setState({
      rooms,
      roomsErrorMessage,
      roomsSuccess,
    });

    console.log('Fetched rooms');

    resolve();
  };

  render() {
    const {
      rooms,
      roomsErrorMessage,
      roomsInProgress,
      roomsSuccess,
    } = this.state;

    const fetchRooms = this.fetchRoomsDelayed;

    return (
      <Container>
        <Switch>
          <Route exact path={ Routes.ROOT }>
            <AuthenticatedDashboard/>
          </Route>
          <Route path={ Routes.PLANTS }>
            <PlantsContainer
              rooms={ rooms }
              fetchRooms={ fetchRooms }
            />
            <PlantCreate/>
          </Route>
          <Route path={ Routes.CATEGORIES }>
            <CategoriesContainer />
          </Route>
          <Route path={ Routes.ROOMS }>
            <Rooms
              rooms={ rooms }
              roomsErrorMessage={ roomsErrorMessage }
              roomsInProgress={ roomsInProgress }
              roomsSuccess={ roomsSuccess }
              fetchRooms={ fetchRooms }
            />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default AuthenticatedContainer;

AuthenticatedContainer.propTypes = {};
