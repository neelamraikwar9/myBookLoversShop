import React from "react";
import CategoryFilter from '../components/CategoryFilter';
import RatingSlider from '../components/RatingSlider';

const FilterPanel = () => {
  
  
  return (
    <div className="d-flex flex-column">   
    {/* flex-sm-column flex-lg-column */}
      <h2 className="container">Filters</h2>
      {/* Category filter */}
      <CategoryFilter   /> 


      {/* Ratings: A slider for ratings. */}
      <RatingSlider />

      

      {/* A button to clear filters from where you can clear all the applied filters. */}
      {/* I will create her./ */}
     
    </div>
  );
};

export default FilterPanel;
