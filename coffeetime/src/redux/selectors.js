export const getOrder = (state) => state.orders;

export const getOrders = (state) => {
  const allOrders = getOrder(state);
  return allOrders;
};
