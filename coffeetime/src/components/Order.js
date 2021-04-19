import React from "react";
import { connect } from "react-redux";
import { toggleOrder } from "../redux/actions";

const Order = ({ order, toggleOrder }) => (
  <li className="todo-item" onClick={() => toggleOrder(order.id)}>
    <span>{order.content}</span>
  </li>
);

export default connect(null, { toggleOrder })(Order);
