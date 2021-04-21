import {
  ADD_ORDER,
  TOGGLE_ORDER,
  // INCREMENT,
  // DECREMENT,
  // RESET,
} from "./actionTypes";

let nextOrderId = 0;

export const addOrder = (content) => ({
  type: ADD_ORDER,
  payload: {
    id: ++nextOrderId,
    content,
  },
});

export const toggleOrder = (id) => ({
  type: TOGGLE_ORDER,
  payload: { id },
});

// export function increaseCount() {
//   return { type: INCREMENT };
// }

// export function decreaseCount() {
//   return { type: DECREMENT };
// }

// export function resetCount() {
//   return { type: RESET };
// }
