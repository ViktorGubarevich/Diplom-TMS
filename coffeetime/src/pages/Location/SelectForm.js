import React, { Component } from "react";
import Select from "../../components/Select";
import "./style.scss";

class SelectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        place: "",
      },

      placeOptions: ["Мстиславца, 8", "Пр. Победителей, 7"],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState((prevState) => ({
      newUser: {
        ...prevState.newUser,
        [name]: value,
      },
    }));
  }

  handleClick(e) {
    e.preventDefault();

    this.context.router.transitionTo("/location/place");
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <main className="main">
        <form onSubmit={handleSubmit}>
          <div className="main-data">
            <div className="main-data-personal">
              <Select
                title={"Place"}
                name={"place"}
                options={this.state.placeOptions}
                value={this.state.newUser.place}
                placeholder={"Выберите ТО"}
                handleChange={this.handleInput}
              />
            </div>
            <button
              className="button"
              type="button"
              // label="submit"
              onClick={this.handleClick}
            >
              Открыть смену
            </button>
          </div>
        </form>
      </main>
    );
  }
}

export default SelectForm;
