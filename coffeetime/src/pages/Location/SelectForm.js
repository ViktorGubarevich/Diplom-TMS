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

      placeOptions: [
        {
          id: 1,
          name: "Мстиславца, 8",
          rout: "mstislavca",
        },
        {
          id: 2,
          name: "Пр. Победителей, 7",
          rout: "pobeditelei7",
        },
      ],
    };

    this.handleInput = this.handleInput.bind(this);
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

  render() {
    const { handleSubmit } = this.props;
    return (
      <main className="main">
        <div className="main-data">
          <div className="main-data-personal">
            <Select
              title={"Place"}
              name={"place"}
              options={this.state.placeOptions}
              value={this.state.newUser.place}
              placeholder={"Выберите торговый объект"}
              handleChange={this.handleInput}
            />
          </div>
          <button
            className="button"
            type="submit"
            onClick={() => handleSubmit(this.state.newUser.place)}
          >
            Открыть смену
          </button>
        </div>
      </main>
    );
  }
}

export default SelectForm;
