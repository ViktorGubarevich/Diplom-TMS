import React from "react";
import AddOrder from "../../components/AddOrder";
import OrderList from "../../components/OrderList";
import "./style.scss";
import MobilePhone from "../../components/MobilePhone";
import { Link } from "react-router-dom";

function TakeOrderForm() {
  return (
    <div className="main">
      <div className="newOrder">
        <div className="first-section">
          <AddOrder />
          <OrderList />
          <div className="bomba">
            <Link to="../mstislavca" className="first-section_href">
              Назад
            </Link>
            <Link
              to="../mstislavca/takeorder/newclient"
              className="first-section_href"
            >
              Оплатить
            </Link>
            <Link
              to="../mstislavca/takeorder/newclient"
              className="first-section_href"
            >
              Новый клиент
            </Link>
            <div className="bomba-pay">
              <div className="first-section_total-cost">
                Итого к оплате: <input type="number"></input>
              </div>
            </div>
            <div className="first-section_discount">
              <MobilePhone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeOrderForm;
