// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useParams, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const product = useSelector((state) => state.products).find(
    (product) => product.slug === productSlug
  );
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
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default ProductDetail;
