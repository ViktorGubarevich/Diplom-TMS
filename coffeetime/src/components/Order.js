import React from "react";
import { connect } from "react-redux";
import { toggleOrder } from "../redux/actions";
import Counter from "./Counter";

const Order = ({ order, toggleOrder }) => (
  <div className="order">
    <li className="order-item" onClick={() => toggleOrder(order.id)}>
      <div className="order-item-orders">
        <div className="order-item-orders__content">{order.content}</div>
        <Counter />
      </div>
    </li>
  </div>
);

export default connect(null, { toggleOrder })(Order);
