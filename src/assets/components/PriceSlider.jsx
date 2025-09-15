import React from 'react'
// import { useState } from 'react';
import  useBookContext  from '../contexts/BookContext';
import { useParams } from 'react-router-dom';

const PriceSlider = ({price, setPrice}) => {
    const {allData, books, setBooks} = useBookContext();
    const { category } = useParams();
    console.log(category, "fkdgkdfs")
    // console.log( books && books.length, books, "uyeri")

    // const [price, setPrice] = useState(100); 

    const boooks = allData?.filter((b) => b.category == category)
    console.log(boooks, "hirek")

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
         console.log(books, "kvcklityjdsfklj")
        const dragSlider =  boooks?.filter((b) => parsePrice(b.salePrice) <= price);
        console.log(dragSlider, "dfkj6789");
        console.log(books, "kvckljdsfklj")

        setBooks(dragSlider) 
        console.log(books, "kdjhf")
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

export default PriceSlider;