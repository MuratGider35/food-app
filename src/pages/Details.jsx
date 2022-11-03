import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { state: detail } = useLocation();
  return (
    <div className="recipe">
      <div>
        <h3>Nutriens:</h3>
        <ul>
          <li>Calcium: {detail.digest[5].total.toFixed()}mg</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}g</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}mg</li>
          <li>Energy: {detail.calories.toFixed()}kcal</li>
          <li>Fat: {detail.digest[0].total.toFixed()}</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}</li>
          <li>Protein: {detail.digest[2].total.toFixed()}</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}</li>
        </ul>
      </div>

      <div>
        <h3>{detail?.label}</h3>
        <img src={detail?.image} alt="" />
      </div>

      <div>
        <h3>Recipe:</h3>
        {detail.ingredientLines.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Details;
