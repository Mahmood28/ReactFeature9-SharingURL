// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useParams, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProductDetail = (props) => {
  const { productSlug } = useParams();
  const products = props.products;
  const product = products.find((product) => product.slug === productSlug);
  return !product ? (
    <Redirect to="/products" />
  ) : (
    <DetailWrapper>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.name} />
      </Helmet>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
