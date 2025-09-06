import React from 'react'
import useFetch from '../hook/useFetch';
import { useState, useEffect}  from 'react';
import useBookContext from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';

const CategoryFilter = () => {
    const {dataget, books, setBooks } = useBookContext();

    const { data, loading, error } = useFetch(
    "https://category-data.vercel.app/categories"
  );
  console.log("Checking data", data)

  const [catData, setCatData] = useState();
  // const [catFil, setCatFil] = useState([])
  
    useEffect(() => {
      if(data && data.length > 0){
        setCatData(data)
      }
      else{
        data
      }
    }, [data])
  
  console.log(catData, "Checking catData")

   const navigate = useNavigate();

  // const handleOnCheck = ( category ) => {
  //   navigate(`/books/${category}`);
  // };
  // console.log("checkding handlecategrory fucti", handleCategoryClick);


   function updatedFilter(event){
    const {checked, value} = event.target;
    console.log(checked, "checking checked on fun")
    
      console.log(dataget, "checing data at funciton")
      console.log(value, "checing valie at funciton")
      const filtered = dataget?.filter((item) => item.category === value)   
      setBooks(filtered)

      navigate(`/books/${value}`)

      // setCatFil([filtered])
      console.log("checking at funct books", books)
  }

   


  return (
    <>
    <div className="container">
    {loading && <p>Loading...</p>}
    {error && <p>An error occured while checking checkboxes.</p>}
    {data && data.length > 0 ? (
      <div>
      <h5>Category📙📘📗</h5>
      {catData?.map((cat) => (
      <label htmlFor={cat.category} key={cat.category} className="ms-3">
      <input type="checkbox" onChange={updatedFilter} id={cat.category} value={cat.category} name="Fiction"/>  
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