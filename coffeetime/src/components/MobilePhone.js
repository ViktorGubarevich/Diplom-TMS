import React from "react";

// import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "../pages/TakeOrder/style.scss";

class MobilePhone extends React.Component {
  state = { phone: "" };

  handleOnChange = (value) => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };
  render() {
    return (
      <div className="number-phone">
        <PhoneInput
          name="Номер телефона"
          type="text"
          country={"by"}
          enableAreaCodes={true}
          onlyCountries={["by"]}
          areaCodes={{ by: ["375"] }}
          inputProps={{
            name: "phone",
            country: "by",
            required: true,
            autoFocus: true,
          }}
          value={this.state.phone}
          onChange={this.handleOnChange}
          inputStyle={{
            background: "#fa8f21",
            width: "140%",
            color: "white",
          }}
          required
        />
        <button className="number-phone-button">Применить скидку</button>
      </div>
    );
  }
}

export default MobilePhone;
