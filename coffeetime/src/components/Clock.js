import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  render() {
    return (
      <div className="header-data_user">Смена открыта: {this.state.time}.</div>
    );
  }
}

export default Clock;
