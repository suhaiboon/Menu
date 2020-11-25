import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterItems(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
      {/* <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button>
      <button className="filter-btn" onClick={() => filterItems("lunch")}>
        Lunch
      </button>
      <button className="filter-btn" onClick={() => filterItems("shakes")}>
        Shakes
      </button> */}
    </div>
  );
};

export default Categories;
