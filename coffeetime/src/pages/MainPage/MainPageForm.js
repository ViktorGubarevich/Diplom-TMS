import React from "react";
import Button from "../../components/Button";
import Clock from "../../components/Clock";
import { Link } from "react-router-dom";

import { placeForMainPageForm } from "../Location/SelectForm";
import "./style.scss";

function MainPageForm() {
  function placeObject() {
    if (placeForMainPageForm === "mstislavca") {
      return "Текущий объект: Мстиславца, 8";
    }
    if (placeForMainPageForm === "pobeditelei7") {
      return "Текущий объект: Пр. Победителей, 7";
    }
  }

  return (
    <div>
      <header className="header">
        <div className="header-data">
          <div className="header-data_user">
            {placeObject(placeForMainPageForm)}
          </div>
          <div className="header-data_user">Текущий пользователь: Виктор</div>
          <Clock />
        </div>
      </header>
      <div className="grid">
        <div id="admin">
          <div>
            <Link to="../place/mstislavca/takeorder" className="grid-button">
              Принять заказ
            </Link>
          </div>
          <div>
            <Link to="/" className="grid-button">
              Учет рабочего времени
            </Link>
          </div>
          <Button type="submit">Закрыть смену</Button>
          <div>
            <Link to="/" className="grid-button">
              Закрытые заказы
            </Link>
          </div>
          <div>
            <Link to="/" className="grid-button">
              Меню
            </Link>
          </div>
          <div>
            <Link to="/" className="grid-button">
              Отчет
            </Link>
          </div>
          <div id="admin-box7">
            <Link to="/" className="grid-button">
              Склад
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageForm;
