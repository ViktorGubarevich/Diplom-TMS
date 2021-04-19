import { ADD_ORDER, TOGGLE_ORDER } from "../actionTypes";

const initialState = [];

export default function orders(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER: {
      const { id, content } = action.payload;
      return [...state, { id, content, completed: false }];
    }
    case TOGGLE_ORDER: {
      const { id } = action.payload;
      const orders = state.slice();
      const orderIndex = orders.findIndex((order) => order.id === id);
      const order = orders[orderIndex];
      const changeOrder = { ...order, completed: !order.completed };
      orders.splice(orderIndex, 1, changeOrder);

      return orders;
    }
    default:
      return state;
  }
}
