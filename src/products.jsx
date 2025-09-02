
import React from "react";

const Products = ({ recipes }) => {
  return (
    <div style={styles.container}>
      {recipes.map((item, index) => (
        <div key={index} style={styles.card}>
          <h4>{item.recipe.label}</h4>
          <img src={item.recipe.image} alt={item.recipe.label} style={styles.image} />
          <p><b>Calories:</b> {Math.round(item.recipe.calories)}</p>
          <a href={item.recipe.url} target="_blank" rel="noreferrer">View Recipe</a>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
    maxWidth: '1000px',
    margin: 'auto',
  },
  card: {
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '6px'
  }
};

export default Products;


