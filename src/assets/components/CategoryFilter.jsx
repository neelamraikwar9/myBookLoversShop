import React from 'react'
import useFetch from '../hook/useFetch';
import { useState, useEffect}  from 'react';
import useBookContext from '../contexts/BookContext';

const CategoryFilter = () => {
    const { updatedFilter } = useBookContext();

    const { data, loading, error } = useFetch(
    "https://category-data.vercel.app/categories"
  );
  console.log("Checking data", data)

  const [catData, setCatData] = useState();
  
    useEffect(() => {
      if(data && data.length > 0){
        setCatData(data)
      }
      else{
        data
      }
    }, [data])
  
  console.log(catData, "Checking catData")


  return (
    <>
    <div className="container">
    {loading && <p>Loading...</p>}
    {error && <p>An error occured while checking checkboxes.</p>}
    {data && data.length > 0 ? (
      <div>
      <h5>Category📙📘📗</h5>
      {catData?.map((cat, index) => (
      <label htmlFor={cat.category} key={cat.category} className="ms-3">
      <input onChange={updatedFilter} type="checkbox" id={cat.category} value={cat.category} name="Fiction"/>  
      {cat.category}
      </label> ))
      }
      </div>
      ) : (
        <p>No categories found.</p>
        )
      }
    </div>
    </>
  )
}

export default CategoryFilter;