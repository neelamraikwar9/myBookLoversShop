import React from "react";
import CategoryFilter from '../components/CategoryFilter';
import RatingButtons from '../components/RatingButtons';
import SortPrice from '../components/SortPrice';
import PriceSlider from "./PriceSlider";
import { useState } from 'react';


const FilterPanel = () => {
    const [checkedTrue, setCheckedTrue] = useState([]);
    const [price, setPrice] = useState(100); 
    const [ratingg, setRatingg] = useState("0");
    const [sortOrder, setSortOrder] = useState("Default");
    const [catData, setCatData] = useState([]);
    const [newData, setNewData] = useState([]);
     
      const datafromcat = (data) => {
    console.log(data,'fweifjowei')
    setNewData(data)
    // return data
  }
  

  function clearFilters(){
    setCheckedTrue([])
    setPrice(100)
    setRatingg("0")
    setSortOrder("Default")
    setBooks(allData)
    // const data1 = datafromcat()

    //  const addedNewKey = newData.map((item) => ({
    //     ...item,
    //     isChecked: false,
    //   }));
    console.log(newData,'dfjowiefowefwf')
    const checkedCheck = newData?.map((b) => {
      return { ...b, isChecked: false };
    });
    setCatData(checkedCheck)
    console.log(checkedCheck, "kjhfg")

  }


  
  return (
    <div className="container">   
    
    <div className="d-flex align-items-center">
      <h2>Filters</h2>
      <button type="button" className="btn btn-outline-dark  ms-auto" onClick={clearFilters}>Clear</button>
    </div>
      
       {/* Price Slider */}
       <PriceSlider price={price} setPrice={setPrice}/>
       
       <br/>

      {/* Category filter */}
      <CategoryFilter datafromcat={datafromcat}  checkedTrue={checkedTrue} 
  setCheckedTrue={setCheckedTrue} catData={catData} setCatData={setCatData} /> 


      {/* Ratings: A slider for ratings. */}
      <RatingButtons ratingChangeHandler ratingg={ratingg} setRatingg={setRatingg}/>

      {/* A button to clear filters from where you can clear all the applied filters. */}
      <SortPrice sortOrder={sortOrder} setSortOrder={setSortOrder}/>
      {/* I will create her./ */}
     
    </div>
  );
};

export default FilterPanel;
