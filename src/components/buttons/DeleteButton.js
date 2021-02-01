// Styling
import { DeleteButtonStyled } from "../../styles";
import { deleteProduct } from "../../store/actions";
import { useDispatch } from "react-redux";

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled
      onClick={() => dispatch(deleteProduct(props.productId))}
    >
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
