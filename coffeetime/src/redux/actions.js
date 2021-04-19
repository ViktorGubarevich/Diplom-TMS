import { ADD_ORDER, TOGGLE_ORDER } from "./actionTypes";

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
