import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const Form = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const [data, setData] = useState("");
  const APP_ID = "d29e4050";
  const APP_KEY = "8d6d264b65a8080efafd1c994087a1f2	";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getApi = async () => {
    const res = await axios(url);
    // console.log(res.data.hits);
    setData(res.data.hits);
  };

  useEffect(() => {
    getApi();
  },[]);

  return (
    <>
      <div className="forminput">
        <input
          type="text"
          placeholder="food.."
          onChange={(e) => setQuery(e.target.value)}
        />
        <select name="" id="" onChange={(e) => setMeal(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
        <button onClick={() => getApi()}>Search</button>
      </div>
      <div className="recipes">
        {data && data?.map((item, idx) => <RecipeCard data={item} id={idx} />)}
      </div>
    </>
  );
};

export default Form;
