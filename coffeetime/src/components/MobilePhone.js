import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "../pages/TakeOrder/style.scss";

const MobilePhone = () => {
  let [state, setState] = useState({
    phone: "",
  });

  return (
    <div className="number-phone">
      <PhoneInput
        name="Номер телефона"
        type="text"
        country={"by"}
        onlyCountries={["by"]}
        areaCodes={{ by: ["375"] }}
        inputProps={{
          name: "phone",
          country: "by",
        }}
        value={state.phone}
        inputStyle={{
          background: "#fa8f21",
          width: "140%",
          color: "white",
        }}
      />
      <button className="number-phone-button">Применить скидку</button>
    </div>
  );
};

export default MobilePhone;
