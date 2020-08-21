import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Rooms from "components/rooms/Rooms";
import InProgress from "components/shared/InProgress";

const Rooms_FETCH_DELAY = 250;

class Room extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            room: [],
            successRoom: undefined,
            inProgress: false,
        };
    }

    componentDidMount() {
        this.fetchRoom().finally(() => {
            this.setState({ inProgress: false });
        });
    }

    fetchRoom() {
        const requestUrl = "http://gentle-tor-07382.herokuapp.com/rooms/";
        this.setState({ inProgress: true });
        return this.props.delayFetch(Rooms_FETCH_DELAY, (resolve, reject) => {
            axios
                .get(requestUrl)
                .then((response) => {
                    debugger
                    const data = response.data;
                    const room = data.map((item) => {
                        const { id, name } = item;
                        return { id, name };
                    });
                    const successRoom = true;
                    this.setState({ room: room, successRoom: successRoom });
                    resolve();
                })
                .catch((error) => {
                    this.setState({ successRoom: false });
                    reject();
                });
        });
    }

    render() {
        const { room, successRoom, inProgress } = this.state;

        return (
            <Card className="mb-4">
                <CardBody>
                    <InProgress inProgress={inProgress} />
                    {successRoom === false && <p>Nie udało się pobrać Pokoi</p>}
                    {successRoom && (
                        <div className="room">
                            {room.map((room, index, arr) => (
                                <Rooms name={room.name} key={index} />
                            ))}
                        </div>
                    )}
                </CardBody>
            </Card>
        );
    }
}

Room.propTypes = {
    delayFetch: PropTypes.func.isRequired,
};

export default Room;
