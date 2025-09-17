import React from 'react'
import useBookContext from '../contexts/BookContext';
import  { useEffect } from 'react';


const SortPrize = ({sortOrder, setSortOrder}) => {
  const {allData, books, setBooks} = useBookContext();

  // const [sortOrder, setSortOrder] = useState("Default");    //uplifted this state to Filter Panel.


  const sortByPrice = (event) => {
    // const selectedRadio = event.target.value;
    setSortOrder(event.target.value);
  }



    function parsePrice(price) {
    if (typeof price === "string") {
      price = price.replace(/[^0-9.-]+/g, "");
    }
    const parsed = Number(price);
    return isNaN(parsed) ? 0 : parsed;
  }


    useEffect(() => {
      const safeAllData = books || [];
      // console.log(allData, "fdjk")

      let sortedBooks = [...safeAllData];
      // console.log(sortedBooks, "547fkj")

       if(sortOrder === "Default"){
        console.log(safeAllData, "dkljdf")
        sortedBooks = [...safeAllData];
        }
        else if(sortOrder === "Low to High"){
          // console.log(sortedBooks, "jkdfl")
          sortedBooks.sort((a, b) => parsePrice(a.salePrice) - parsePrice(b.salePrice));
          console.log(sortedBooks, "jkdfl")

        }
        else if (sortOrder === "High to Low"){
          sortedBooks.sort((a, b) => parsePrice(b.salePrice) - parsePrice(a.salePrice));
        }
        
        console.log(sortedBooks, 'sortedBooks')
        setBooks(sortedBooks)
      }, [sortOrder, allData]);
      
      
  return (
    <div className="container">
    <h5>Sort Books by Price</h5>

    <label htmlFor = "default">
        <input type="Radio" id='default' name="sortByPrice" value="Default" checked={sortOrder === "Default"} onChange={sortByPrice} />Price - Default
    </label>
    <br/>
    <label htmlFor = "LowToHigh">
        <input type="Radio" id='LowToHigh' name="sortByPrice" value="Low to High" checked={sortOrder === "Low to High"} onChange={sortByPrice} />Price - Low to High
    </label>
    <br/>
    <label htmlFor= "HightToLow">
        <input type="Radio" id="HighToLow" name="sortByPrice" value="High to Low" checked={sortOrder === "High to Low"} onChange={sortByPrice} />Price - High to Low
    </label>
    </div>
  )
}

export default SortPrize;