import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

// export const correctInput = (input) => ({
//   type: CORRECT_INPUT,
//   input !== "Виктор" ? "Неправильное имя пользователя" : undefined,
// })

// export const correctPassword = (input) =>
//   input !== "1111" ? "Неверный пароль" : undefined;
