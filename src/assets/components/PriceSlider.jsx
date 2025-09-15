import React from 'react'
import { useState } from 'react';
import useBookContext from '../contexts/BookContext'

const PriceSlider = () => {
    const {allData, books, setBooks } = useBookContext();
    // console.log( books && books.length, books, "uyeri")

    const [price, setPrice] = useState(100); 

    function parsePrice(price) {
    if (typeof price === "string") {
      price = price.replace(/[^0-9.-]+/g, "");
    }
    const parsed = Number(price);
    return isNaN(parsed) ? 0 : parsed;
  }


    const handlePriceChange = (event) => {
        setPrice(event.target.value)
        console.log(price, "tioyui")
        const dragSlider =  allData?.filter((b) => parsePrice(b.salePrice) <= price);
        console.log(dragSlider, "dfkj6789");
        setBooks(dragSlider)


        
    }


  return (
    <div className="container">
    <h5>Price Slider</h5>
    <h6>₹100 - ₹{price}</h6>
    <label html="ran">
    <input type="range" id="ran" defaultValue={price} onChange={handlePriceChange}  min={100} max={1600} step={100} />
    </label>

    </div>
  )
}

export default PriceSlider