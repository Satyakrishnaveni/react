
import React, { useState } from "react";
import Products from "./products";

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const app_id = "a59cf150";
  const app_key = "d0cee1780021f6fe6567bb1c5f5cc0bc";

  const submitHandler = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setError("Please enter a food name.");
      return;
    }

    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${app_id}&app_key=${app_key}&from=0&to=20`
    )
      .then((res) => {
        if (!res.ok) throw new Error("API request failed or credentials invalid.");
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setData(result.hits);
        setError(result.hits.length === 0 ? "No recipes found." : null);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div>
      <center>
        <h3> Food Recipe App</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search recipes (e.g., pizza, chicken, veg)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search"
          />
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {data.length > 0 && <Products recipes={data} />}
      </center>
    </div>
  );
};

export default App;
