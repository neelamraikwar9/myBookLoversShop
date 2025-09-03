import { createContext, useContext, useState, useEffect } from "react";
import useFetch from '../hook/useFetch';

const FilterContext = createContext();

const useFilterContext = () => useContext(FilterContext);

export function FilterProvider({ children }){

    const { data, loading, error } = useFetch(
    "https://selling-books-data.vercel.app/books"
  );
  console.log(data);

    function updatedFilters(event){
    console.log(event.target.value, event.target.checked)
    if(event.target.checked){
     const filtered = data?.filter((item) => item.category === value)    
      setCatFil([...catFil, filtered])
    } else{
      setCatFil([...catFil.filter((item) => item.category !== value)])
    }
  }



    return <FilterContext.Provider value={ { } }>
        {children}
    </FilterContext.Provider>
}

export default useFilterContext;