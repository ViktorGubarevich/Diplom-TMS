import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import "../pages/TakeOrder/style.scss";

function MobilePhone() {
  const [value, setValue] = useState();

  return (
    <div className="number-phone">
      <PhoneInput
        placeholder="Номер телефона"
        value={value}
        onChange={setValue}
        error={
          value
            ? isValidPhoneNumber(value)
              ? undefined
              : "Invalid phone number"
            : "Phone number required"
        }
      />
      <button className="number-phone-button">Применить скидку</button>
    </div>
  );
}

export default MobilePhone;
