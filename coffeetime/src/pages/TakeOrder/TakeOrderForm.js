import React from "react";
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import "./style.scss";

function TakeOrderForm() {
  return (
    <div className="main">
      <div className="newOrder">
        <div className="first-section">
          <AddTodo />
          <TodoList />
          <div className="first-section_basket">
            <div className="first-section_basket-products">
              <div className="first-section_basket-products_product">
                Капучино
              </div>
              <div className="first-section_basket-products_count">2</div>
              <div className="first-section_basket-products_calc">
                <button className="first-section_basket-products_calc-button">
                  +
                </button>
                <button className="first-section_basket-products_calc-button">
                  -
                </button>
                <button className="first-section_basket-products_calc-button">
                  del
                </button>
              </div>
              <div className="first-section_basket-products_price">Цена</div>
            </div>
          </div>
          <div className="bomba">
            <div className="first-section_href">Назад</div>
            <div className="first-section_href">Новый клиент</div>
            <div className="first-section_href">Оплатить</div>
            <div className="bomba-pay">
              <div className="first-section_total-cost">Итого к оплате:</div>
              <div className="first-section_total-cost">20 BYN</div>
            </div>
            <div className="first-section_discount">
              <input
                className="first-section_discount-input"
                type="text"
                placeholder="Номер телефона"
              />
              <button className="first-section_discount-button">
                Применить скидку
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeOrderForm;
