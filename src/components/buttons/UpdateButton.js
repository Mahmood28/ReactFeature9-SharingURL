import { Link } from "react-router-dom";
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ product }) => {
  return (
    <Link to={`/products/${product.slug}/edit`}>
      <UpdateButtonStyled>Edit</UpdateButtonStyled>
    </Link>
  );
};

export default UpdateButton;
