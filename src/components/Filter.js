// Filter.js
import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <div className="filter">
      <select name="filter" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        {/* Add more categories if needed */}
      </select>
    </div>
  );
}

export default Filter;
