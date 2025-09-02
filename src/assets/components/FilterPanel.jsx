import React from "react";
import CategoryFilter from '../components/CategoryFilter';
// import SliderRating from '../SliderRating';

const FilterPanel = () => {
  
  return (
    <div className="container">
      <h2>Filters</h2>
      {/* Category filter */}
      <CategoryFilter   /> 

      {/* Ratings: A slider for ratings. */}
      {/* <SliderRating /> */}

      {/* A button to clear filters from where you can clear all the applied filters. */}
      {/* I will create her./ */}
    </div>
  );
};

export default FilterPanel;
