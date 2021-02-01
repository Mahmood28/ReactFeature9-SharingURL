import { useDispatch } from "react-redux";
import { AddButtonStyled } from "../../styles";
import { IoIosAddCircleOutline } from "react-icons/io";
const AddButton = (props) => {
  const dispatch = useDispatch();
  return (
    <AddButtonStyled to="/form">
      Add Product
      <h1>
        <IoIosAddCircleOutline />{" "}
      </h1>
    </AddButtonStyled>
  );
};

export default AddButton;
