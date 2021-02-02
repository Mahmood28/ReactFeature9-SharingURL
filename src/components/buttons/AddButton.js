import { AddButtonStyled } from "../../styles";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const AddButton = (props) => {
  return (
    <Link to="/form">
      <AddButtonStyled>
        Add Product <IoIosAddCircleOutline />
      </AddButtonStyled>
    </Link>
  );
};

export default AddButton;
