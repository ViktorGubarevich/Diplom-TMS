import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { increaseCount, decreaseCount, resetCount } from "../redux/actions";

import plus from "../pages/TakeOrder/images/plus.png";
import minus from "../pages/TakeOrder/images/minus.png";
import update from "../pages/TakeOrder/images/update.png";

const Counter = (props) => {
  return (
    <Fragment>
      <div className="order-list-counter">
        <div className="order-list-counter__count">{props.count}</div>
        <button
          className="order-list-counter__count-button"
          onClick={props.handleIncrease}
        >
          <img
            className="order-list-counter__count-button-plus"
            src={plus}
            alt="plus"
          />
        </button>
        <button
          className="order-list-counter__count-button"
          onClick={props.handleDecrease}
        >
          <img
            className="order-list-counter__count-button-minus"
            src={minus}
            alt="minus"
          />
        </button>
        <button
          className="order-list-counter__count-button"
          onClick={props.handleReset}
        >
          <img
            className="order-list-counter__count-button-update"
            src={update}
            alt="update"
          />
        </button>
        <div className="order-list-counter__price">Цена: {props.count * 3}</div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return { count: state.counter.count };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleIncrease: increaseCount,
      handleDecrease: decreaseCount,
      handleReset: resetCount,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// export default connect(
//   mapStateToProps,
//   { increaseDispatch: increaseCount },
//   { decreaseDispatch: decreaseCount },
//   { resetDispatch: resetCount }
// )(Counter);

// class Counter extends Component {
//   state = { value: 1 };

//   increment = () => {
//     this.setState((prevState) => ({
//       value: prevState.value + 1,
//     }));
//   };

//   decrement = () => {
//     this.setState((prevState) => ({
//       value: Math.max(prevState.value - 1, 1),
//     }));
//   };

//   reset = () => {
//     this.setState(() => ({
//       value: 1,
//     }));
//   };

//   render() {
// return (
//   <div className="order-list-counter">
//     <div className="order-list-counter__count">{this.state.value}</div>
//     <button
//       className="order-list-counter__count-button"
//       onClick={this.increment}
//     >
//       <img
//         className="order-list-counter__count-button-plus"
//         src={plus}
//         alt="plus"
//       />
//     </button>
//     <button
//       className="order-list-counter__count-button"
//       onClick={this.decrement}
//     >
//       <img
//         className="order-list-counter__count-button-minus"
//         src={minus}
//         alt="minus"
//       />
//     </button>
//     <button
//       className="order-list-counter__count-button"
//       onClick={this.reset}
//     >
//       <img
//         className="order-list-counter__count-button-update"
//         src={update}
//         alt="update"
//       />
//     </button>
//     <div className="order-list-counter__price">
//       Цена: {this.state.value * 3}
//     </div>
//   </div>
// );
//   }
// }

// export default Counter;
