import React from "react";
import MobilePhone from "./MobilePhone";
import { Link } from "react-router-dom";

const OrderLinks = () => (
  <div className="order-links">
    <Link to="../mstislavca" className="order-links-button">
      Назад
    </Link>
    <Link to="/" className="order-links-button">
      Оплатить
    </Link>
    <Link to="../mstislavca/takeorder/newclient" className="order-links-button">
      Новый клиент
    </Link>
    <div className="order-links-pay">
      Итого к оплате:
      <input className="order-links-pay-cost" type="number"></input>
    </div>
    <div className="first-section_discount">
      <MobilePhone />
    </div>
  </div>
);

export default OrderLinks;
