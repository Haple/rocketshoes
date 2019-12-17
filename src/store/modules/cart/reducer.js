export default function cart(state = [], action) {
  console.log('STATE', state);

  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
