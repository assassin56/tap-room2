export default (state = {}, action) => {
  const { name, brand, price, abv, quantity, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand, 
        price: price,
        abv: abv,
        quantity: quantity,
        id: id
      }
    });
  default:
    return state;
  }
};