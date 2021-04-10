export const requiredInput = (input) => (input ? undefined : `Требуется ввод`);

export const correctInput = (input) =>
  input !== "Виктор" ? "Неправильное имя пользователя" : undefined;

export const correctPassword = (input) =>
  input !== "1111" ? "Неверный пароль" : undefined;