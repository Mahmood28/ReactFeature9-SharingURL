import { useState } from "react";
import { createProduct } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setProduct({
      name: "",
      price: 0,
      description: "",
      image: "",
    });
  };

  const handleSubmit = (event) => {
    console.log(product);
    event.preventDefault();
    dispatch(createProduct(product));
    resetForm();
    history.push("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Porduct Name. </small>
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Porduct Price. </small>
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Porduct Description. </small>
      </div>

      <div className="form-group">
        <label>Image</label>
        <input
          type="url"
          className="form-control"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Porduct Image. </small>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
