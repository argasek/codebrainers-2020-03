import React from 'react';

import './Room.scss';

class Rooms extends React.PureComponent {

  render() {

    return (
      <div>
        <p>{this.props.id} {' '} {this.props.name}</p>
      </div>
    )
  }

}


export default Rooms;