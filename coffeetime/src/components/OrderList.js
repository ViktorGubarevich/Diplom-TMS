import React from "react";
import { connect } from "react-redux";
import Order from "./Order";

import { getOrders } from "../redux/selectors";

const OrderList = ({ orders }) => (
  <ul className="todo-list">
    {orders && orders.length
      ? orders.map((order) => {
          return <Order key={`todo-${order.id}`} order={order} />;
        })
      : ""}
  </ul>
);

const mapStateToProps = (state) => {
  const orders = getOrders(state);
  return { orders };
};

//для чего нам нужен mapStateToProps, чтобы кусочек state передать в props нашего компонента.

export default connect(mapStateToProps)(OrderList);
