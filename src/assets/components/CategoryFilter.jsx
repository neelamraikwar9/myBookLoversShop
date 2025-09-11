import React from 'react'
import useFetch from '../hook/useFetch';
import { useState, useEffect}  from 'react';
import useBookContext from '../contexts/BookContext';
import { useParams } from "react-router-dom";


const CategoryFilter = () => {
    const {allData, books, setBooks} = useBookContext();
    console.log(books,"books")

    const { data, loading, error } = useFetch(
    "https://category-data.vercel.app/categories"
  );
  console.log("Checking data", data)

  const [catData, setCatData] = useState();

  const [checkedCat, setCheckedCat] = useState(false);
  const { category } = useParams();
  console.log(category, "checking category useParams")
    // const  [newData, setNewData] = useState([]);

  
    useEffect(() => {
      if(data && data.length > 0){
       
        const addedNewKey = data.map((item) => ({
          ...item, isChecked : false
        }))
        //  setCatData(addedNewKey)

          // console.log(category, "chejkgvhtrfry", catData);
          const checkedCheck = addedNewKey?.map((b) => b.category === category ? 
        {...b, isChecked: true} : 
      {...b});
          console.log(checkedCheck, "chedkingedkedfiltere");

         setCatData(checkedCheck)
         console.log(addedNewKey, "Checking newData");

      }
      else{
        data
      }
    }, [data])
  
  console.log(catData, "Checking catData")



  function updatedFilter(event, category){
    setCheckedCat (event.target.checked);                                                             

    // console.log(books, "bjfjdkflk")
      const filtered = allData?.filter((b) => b.category === category)

    
      if(event.target.checked){
        setBooks([...books, ...filtered])
      } 

      else{
        setBooks([...books.filter((b) => b.category !== category)])
      }
      
      // console.log(event.target.checked, "kjdf")
    
       console.log(filtered, "dkfjdklf")
      
        const checkedCheck = catData?.map((b) => {
          console.log(
            "klfjddfkljs",
            category,
            b.category,
            b.category === category
          );

          return b.category == category ? { ...b, isChecked: !b.isChecked } : {...b};
        });

        console.log(checkedCheck, "chedkingedkedfiltere");
        
        setCatData(checkedCheck)
        // setBooks([...books, ...filtered])
        
        
      }
      console.log(books, "ckdjfdkljf")





  

   
  return (
    <>
    <div className="container">
    {loading && <p>Loading...</p>}
    {error && <p>An error occured while checking checkboxes.</p>}
    {data && data.length > 0 ? (
      <div>
      <h5>Category📙📘📗</h5>
      {catData?.map((cat) => 
      {
        console.log(JSON.stringify(cat), "checking cat")
        console.log(cat,'jeofiwoeiowfie')
        
        return(
      <label htmlFor={cat.category} key={cat.category} className="ms-3">
      <input type="checkbox" onChange={(e) => updatedFilter(e, cat.category)}  id={cat.category} value={true} name={cat.category}
      checked={cat?.isChecked}
       />  
      {cat.category}
       <br/>
      </label> 
      )}
      )
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