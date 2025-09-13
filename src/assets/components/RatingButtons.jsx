import React from 'react'
import { useState } from 'react';
import useBookContext from '../contexts/BookContext';
import { useParams } from 'react-router-dom';

const RatingButtons = () => {
  const {category} = useParams();
  
  const {allData, books, setBooks} = useBookContext();

  const [ratingg, setRatingg] = useState("0");



  // const [selectedRating, setSelectedRating] = useState(null);

  function ratingChangeHandler(event){
    const selectedRate = event.target.value
    console.log(selectedRate, "uyr4", books)
    setRatingg(selectedRate)


    const updateRating = allData.filter((b) => b.category === category);
  // console.log(updateRating, "dlkfj")

    
  const filteredItem = updateRating?.filter((item) => {
    // console.log(
    //   item.rating, 
    //   rate,
    //   item.rating, rate,
    //    "outi")

    console.log(Number(selectedRate), Number(item.rating), 'diofjoweifwo')
    return Number(item.rating) >= Number(selectedRate)});
  
  console.log(filteredItem, "checking filteredd items");
  setBooks([...filteredItem]);
    
  };


  
  return (
    
    <>
    <div className="container py-3">
    <h5 className="">Rating</h5>
    {/* <label htmlFor="5"></label> */}
    {/* <input type="radio" name="rating" id="5" value="5" checked={rating === "5"}  onChange={ratingChangeHandler}/>⭐⭐⭐⭐ and above */}
    {/* <br/> */}
    
    <input type="radio" name="rating" id="four" value="4" checked={ratingg === "4"}  onChange={ratingChangeHandler}/>
    <label htmlFor="four">⭐⭐⭐⭐ and above</label>
    <br/>
    
    <input type="radio" name="rating" id="three" value="3" checked={ratingg === "3"}  onChange={ratingChangeHandler}/>
    <label htmlFor="three">⭐⭐⭐ and above</label>
    <br/>
    
    <input type="radio" name="rating" id="two" value="2" checked={ratingg === "2"}  onChange={ratingChangeHandler}/>
    <label htmlFor="two">⭐⭐ and above</label>
    <br/>
    
    <input type="radio" name="rating" id="one" value="1" checked={ratingg === "1"}  onChange={ratingChangeHandler}/>
    <label htmlFor="one">⭐ and above</label>
    </div>
    </>

//  checked={selectedRating == 1} onChange={ratingChangeHandler}
  )
}

export default RatingButtons;

