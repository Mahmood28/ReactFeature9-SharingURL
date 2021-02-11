import axios from "axios";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId },
});

export const createProduct = (newProduct) => ({
  type: CREATE_PRODUCT,
  payload: { newProduct },
});

export const updateProduct = (updatedProduct) => ({
  type: UPDATE_PRODUCT,
  payload: { updatedProduct },
});
