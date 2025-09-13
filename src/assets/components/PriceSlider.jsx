import React from 'react'
import { useState } from 'react';
import useBookContext from '../contexts/BookContext'

const PriceSlider = () => {
    const {allData, books, setBooks } = useBookContext();

    const [price, setPrice] = useState(50); 

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
        const dragSlider =  allData.filter((b) => parsePrice(b.salePrice) <= price);
        console.log(dragSlider, "dfkj6789");
        setBooks(dragSlider)


        
    }


  return (
    <div className="container">
    <h5>Price Slider{price}</h5>
    <label html="ran">
    <input type="range" id="ran" defaultValue={price} onChange={handlePriceChange}  min={50} max={1500} step={100} />
    </label>

    </div>
  )
}

export default PriceSlider