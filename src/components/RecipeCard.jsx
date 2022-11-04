import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="detail">
      <p>{data.recipe.label}</p>
      <img src={data.recipe.image} alt="" />
      <button
        onClick={() => {
          navigate("/details", { state: data.recipe });
        }}
      >
        details
      </button>
    </div>
  );
};

export default RecipeCard;
