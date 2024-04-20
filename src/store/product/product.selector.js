export const selectProducts = (state) =>
  state.product.categories;
  
  // .reduce((acc, products) => {
  //   const { title, items } = products;
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
