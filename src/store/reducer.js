import productsData from "../products";
import slugify from "react-slugify";

const initialState = {
  products: productsData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case "CREATE_PRODUCT":
      const { newProduct } = action.payload;
      newProduct.id = state.products[state.products.length - 1].id + 1;
      newProduct.slug = slugify(newProduct.name);

      return {
        ...state,
        products: [...state.products, newProduct],
      };
    case "UPDATE_PRODUCT":
      const { updatedProduct } = action.payload;
      updatedProduct.slug = slugify(updatedProduct.name);
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };
    default:
      return state;
  }
};
export default reducer;
