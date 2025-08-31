import { createContext, useState } from "react";
import { useContext } from "react";
import { useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";

const BookContext = createContext();

const useBookContext = () => useContext(BookContext);

export function BookProvider({ children }){

  const { data, loading, error } = useFetch(
    "https://selling-books-data.vercel.app/books"
  );
  console.log(data);

  const [books, setBooks] = useState(data);
  
  const { category } = useParams();
  console.log("checking category", category);

  useEffect(() => {
    if(category){
    const filterBooks = data?.filter((book) => book.category === category);
    setBooks(filterBooks);
    }

    else{
        setBooks(data)
    }
  }, [data, category]);

  return <BookContext.Provider value={{books, loading, error}}>
       {children}
  </BookContext.Provider>
}

export default useBookContext;