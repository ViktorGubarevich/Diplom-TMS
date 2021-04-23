import { ADD_ORDER, TOGGLE_ORDER } from "../actionTypes";

const initialState = [];

export default function orders(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER: {
      const { id, content } = action.payload;
      return [...state, { id, content }];
    }

    case TOGGLE_ORDER: {
      const { id } = action.payload;
      const orders = state.slice();
      const order = orders.find((order) => order.id === id);

      return orders;
    }
    default:
      return state;
  }
}
