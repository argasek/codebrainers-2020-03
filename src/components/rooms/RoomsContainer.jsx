import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import RoomItem from "components/rooms/RoomItem";
import InProgress from "components/shared/InProgress";
import PropTypes from "prop-types";
import { roomsPropTypes } from "proptypes/CommonPropTypes";
import OperationFailed from "components/shared/OperationFailed";

class RoomsContainer extends React.PureComponent {
  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    const { rooms, roomsErrorMessage, roomsInProgress, roomsSuccess } = this.props;

    return (
      <Card>
        <CardBody>
          <div className="app-container">
            <InProgress inProgress={roomsInProgress} />
            <OperationFailed isFailed={roomsSuccess === false}>
              <strong>Failed to fetch rooms.</strong>
              {" Reason: "}
              {roomsErrorMessage}
            </OperationFailed>
            {roomsSuccess && (
              <ListGroup className="rooms">
                {rooms.map((room) => (
                  <RoomItem room={room} key={room.id} />
                ))}
              </ListGroup>
            )}
          </div>
        </CardBody>
      </Card>
    );
  }
}

RoomsContainer.propTypes = {
  rooms: roomsPropTypes,
  roomsErrorMessage: PropTypes.string.isRequired,
  roomsInProgress: PropTypes.bool.isRequired,
  roomsSuccess: PropTypes.bool,
  fetchRooms: PropTypes.func.isRequired,
};

export default withRooms(RoomsContainer);
