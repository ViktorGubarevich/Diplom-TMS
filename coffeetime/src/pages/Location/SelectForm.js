import React, { useState } from "react";
import Select from "../../components/Select";
import "./style.scss";

const SelectForm = (props) => {
  let [state, setState] = useState({
    newUser: {
      place: "",
    },
  });

  placeForMainPageForm = state.newUser.place;

  let placeOptions = [
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
  ];

  function handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    setState({
      newUser: {
        [name]: value,
      },
    });
  }

  const handleSubmit = props.handleSubmit;

  return (
    <main className="main">
      <div className="main-data">
        <div className="main-data-personal">
          <Select
            title={"Place"}
            name={"place"}
            options={placeOptions}
            value={state.newUser.place}
            placeholder={"Выберите торговый объект"}
            handleChange={(e) => handleInput(e)}
          />
        </div>
        <button
          className="button"
          type="submit"
          onClick={() => handleSubmit(state.newUser.place)}
        >
          Открыть смену
        </button>
      </div>
    </main>
  );
};

export let placeForMainPageForm;

export default SelectForm;

// class SelectForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       newUser: {
//         place: "",
//       },

//       placeOptions: [
//         {
//           id: 1,
//           name: "Мстиславца, 8",
//           rout: "mstislavca",
//         },
//         {
//           id: 2,
//           name: "Пр. Победителей, 7",
//           rout: "pobeditelei7",
//         },
//       ],
//     };
//   }

//   handleInput(e) {
//     let value = e.target.value;
//     let name = e.target.name;
//     this.setState((prevState) => ({
//       newUser: {
//         ...prevState.newUser,
//         [name]: value,
//       },
//     }));
//   }

//   render() {
//     const { handleSubmit } = this.props;
//     return (
//       <main className="main">
//         <div className="main-data">
//           <div className="main-data-personal">
//             <Select
//               title={"Place"}
//               name={"place"}
//               options={this.state.placeOptions}
//               value={this.state.newUser.place}
//               placeholder={"Выберите торговый объект"}
//               handleChange={(e) => this.handleInput(e)}
//             />
//           </div>
//           <button
//             className="button"
//             type="submit"
//             onClick={() => handleSubmit(this.state.newUser.place)}
//           >
//             Открыть смену
//           </button>
//         </div>
//       </main>
//     );
//   }
// }
