// src/components/DeleteRecipeButton.jsx
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect to home or another page after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired,
};

export default DeleteRecipeButton;
