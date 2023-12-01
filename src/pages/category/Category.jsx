import React from 'react';
import './category.css'; // Import your CSS file for styling
import { useParams } from 'react-router-dom';
function Category() {
  const {name}=useParams()
  return (
    <div className="category-container">
      <div className="category-item">
        <img src="/co3.webp" alt="Meat" />
        <h2>{name}</h2>
        <p>Explore our delicious meat options.</p>
      </div>

      <div className="category-item">
        <img src="/co2.webp" alt="Chicken" />
        <h2>{name}</h2>
        <p>Discover our mouthwatering chicken dishes.</p>
      </div>

      <div className="category-item">
        <img src="/co1.webp" alt="Fish" />
        <h2>{name}</h2>
        <p>Delve into our fresh and flavorful fish varieties.</p>
      </div>
    </div>
  );
}

export default Category;
