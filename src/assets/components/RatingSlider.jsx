import React from 'react'
import { useState } from 'react';
import useBookContext from '../contexts/BookContext';

const RatingSlider = () => {
  const {allData, books, setBooks} = useBookContext();

  const [checkRadio, setCheckRadio] = useState(false);

 

  // const [selectedRating, setSelectedRating] = useState(null);

  function ratingChangeHandler(event){
    setCheckRadio(event.target.check)
    
      const filteredItem = allData?.filter((item) => item.rating >= value);
  console.log(books, "checking books")
  console.log(filteredItem, "checking filteredd items")
    
  };


  
  return (
    
    <>
       <div className="container py-3">
    <h5 className="">Rating</h5>
    <label htmlFor="4"></label>
    <input type="radio" name="rating" id="4" value="4"  onChange={ratingChangeHandler}/>⭐⭐⭐⭐ and above
    <br/>
    <label htmlFor="3"></label>
    <input type="radio" name="rating" id="3" value="3"  onChange={ratingChangeHandler}/>⭐⭐⭐ and above
    <br/>
    <label htmlFor="2"></label>
    <input type="radio" name="rating" id="2" value="2"  onChange={ratingChangeHandler}/>⭐⭐ and above
    <br/>
    <label htmlFor="1"></label>
    <input type="radio" name="rating" id="1" value="1"  onChange={ratingChangeHandler}/>⭐ and above
    </div>
    </>

//  checked={selectedRating == 1} onChange={ratingChangeHandler}
  )
}

export default RatingSlider;

//  <div className="container py-3">
//     <h5 className="">Rating</h5>
//     <label htmlFor="4"></label>
//     <input type="radio" name="rating" id="4" value="4" checked={selectedRating == 4} onChange={ratingChangeHandler}/>⭐⭐⭐⭐ and above
//     <br/>
//     <label htmlFor="3"></label>
//     <input type="radio" name="rating" id="3" value="3" checked={selectedRating == 3} onChange={ratingChangeHandler}/>⭐⭐⭐ and above
//     <br/>
//     <label htmlFor="2"></label>
//     <input type="radio" name="rating" id="2" value="2" checked={selectedRating == 2} onChange={ratingChangeHandler}/>⭐⭐ and above
//     <br/>
//     <label htmlFor="1"></label>
//     <input type="radio" name="rating" id="1" value="1" checked={selectedRating == 1} onChange={ratingChangeHandler}/>⭐ and above
//     </div>


// onChange={(event) => ratingChangeHandler(event.target.value)}
// checked={selectedRating == 4}