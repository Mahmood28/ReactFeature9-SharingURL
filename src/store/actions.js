export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId: productId },
});

export const createProduct = (newProduct) => ({
  type: CREATE_PRODUCT,
  payload: { newProduct },
});
