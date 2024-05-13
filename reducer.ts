// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_PRODUCT":
//       const existingProductIndex = state.findIndex(
//         (item) => item.id === action.product.id
//       );
//       if (existingProductIndex !== -1) {
//         // Product exists, increment the quantity
//         const newState = [...state];
//         newState[existingProductIndex].quantity += 1;
//         return newState;
//       } else {
//         // Product does not exist, add new with quantity 1
//         return [...state, { ...action.product, quantity: 1 }];
//       }
//     case "REMOVE_PRODUCT":
//       return state.filter((item) => item.id !== action.id);
//     case "CLEAR_CART":
//       return [];
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// };

// export { cartReducer };
interface SelectedProd {
  id: number;
  count: number;
}

type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET"; payload: number };

function reducer(state: SelectedProd[], action: Action) {
  switch (action.type) {
    case "INCREMENT": {
      const selectedProductIdx = state.findIndex(
        (p) => p.id === action.payload
      );

      if (selectedProductIdx === -1)
        return [...state, { id: action.payload, count: 1 }];

      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];
      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count + 1,
      };
      clone[selectedProductIdx] = updatedSelectedProduct;
      return clone;
    }
    case "DECREMENT": {
      const selectedProductIdx = state.findIndex(
        (p) => p.id === action.payload
      );

      if (selectedProductIdx === -1)
        return [...state, { id: action.payload, count: 1 }];

      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];
      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count - 1,
      };
      clone[selectedProductIdx] = updatedSelectedProduct;
      return clone;
    }
    case "RESET":
      return initialState;
  }
}
export default reducer;
