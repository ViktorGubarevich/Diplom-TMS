import React from "react";
import AddOrder from "../../components/AddOrder";
import OrderList from "../../components/OrderList";
import OrderLinks from "../../components/OrderLinks";
import "./style.scss";

function TakeOrderForm() {
  return (
    <div className="main">
      <div className="newOrder">
        <div className="first-section">
          <AddOrder />
          <OrderList />
          <OrderLinks />
        </div>
      </div>
    </div>
  );
}

export default TakeOrderForm;
