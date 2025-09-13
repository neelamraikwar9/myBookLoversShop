import React from "react";
import CategoryFilter from '../components/CategoryFilter';
import RatingButtons from '../components/RatingButtons';
import SortPrice from '../components/SortPrice';
import PriceSlider from "./PriceSlider";

const FilterPanel = () => {
  
  
  return (
    <div className="container">   
    
    <div className="d-flex  align-items-center">
      <h2 className="mb-0">Filters</h2>
      <button type="button" class="btn btn-outline-dark  mx-auto">Clear</button>
    </div>
      
       {/* Price Slider */}
       <PriceSlider />

       <br/>

      {/* Category filter */}
      <CategoryFilter   /> 


      {/* Ratings: A slider for ratings. */}
      <RatingButtons />

      {/* A button to clear filters from where you can clear all the applied filters. */}
      <SortPrice/>
      {/* I will create her./ */}
     
    </div>
  );
};

export default FilterPanel;
