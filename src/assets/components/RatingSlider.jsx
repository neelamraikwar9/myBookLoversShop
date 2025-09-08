import React from 'react'
import { useState } from 'react';
import useBookContext from '../contexts/BookContext';

const RatingSlider = () => {
  const {selectedRating, dataTo} = useBookContext;
  // console.log(dataTo, "checking dataget dkjfkdfjk")
  if(dataTo && dataTo.length > 0 ) {
    console.log(dataTo, "checing data to on rating ")
  }
  // const [selectedRating, setSelectedRating] = useState();

  // function ratingChangeHandler(event){
  //   setSelectedRating(event.target.value)
  // };

  // const filteredItem = selectedRating ? dataget?.filter((item) => item.rate >= selectedRating) : dataget;
  // console.log(filteredItem, "checking filteredd items")

  return (
    // <>
    //  {dataTo.length > 0 ? (
    //   <div>
    //     {dataTo.map((book) => 
    //     <div>
    //       <label htmlFor='book_id'>
    //         <input type="radio" name="rating" id={book._id} value={book.rating} checked={book} />
    //       </label>
    //     </div>
    //     )}
    //   </div>
    //  ) : (
    //   <p></p>
    //  )}
    // </>


    <>
       <div className="container py-3">
    <h5 className="">Rating</h5>
    <label htmlFor="4"></label>
    <input type="radio" name="rating" id="4" value="4" checked onChange/>⭐⭐⭐⭐ and above
    <br/>
    <label htmlFor="3"></label>
    <input type="radio" name="rating" id="3" value="3" checked onChange/>⭐⭐⭐ and above
    <br/>
    <label htmlFor="2"></label>
    <input type="radio" name="rating" id="2" value="2" checked onChange/>⭐⭐ and above
    <br/>
    <label htmlFor="1"></label>
    <input type="radio" name="rating" id="1" value="1" checked onChange/>⭐ and above
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