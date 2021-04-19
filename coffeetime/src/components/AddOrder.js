import React from "react";
import { connect } from "react-redux";
import { addOrder } from "../redux/actions";

class AddOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddOrder = () => {
    this.props.addOrder(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="add-order">
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
          className="add-order_input"
        />
        <button className="add-order_button" onClick={this.handleAddOrder}>
          Добавить
        </button>
      </div>
    );
  }
}

export default connect(null, { addOrder })(AddOrder);
