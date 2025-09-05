// import { createContext, useContext, useState, useEffect } from "react";
// import useFetch from '../hook/useFetch';
// import useBookContext from "./BookContext";

// const FilterContext = createContext();

// const useFilterContext = () => useContext(FilterContext);

// export function FilterProvider({ children }){

//     const [catFil, setCatFil] = useState();

//     const { books } = useBookContext();

//   //   const { data, loading, error } = useFetch(
//   //   "https://selling-books-data.vercel.app/books"
//   // );
//   // console.log("Checking FilterContext data,,,", data);

//     // function updatedFilters(event){
//     // console.log(event.target.value, event.target.checked)
//     // if(event.target.checked){
//     //  const filtered = books?.filter((item) => item.category === value)    
//     //   setCatFil([...catFil, filtered])
//     //   console.log("filterd items", filtered)
//     // } else{
//     //   setCatFil([...catFil.filter((item) => item.category !== value)])
//     // }
//     // console.log("checking cat filter: ", catFil)
//   }




//     return <FilterContext.Provider value={ { updatedFilters } }>
//         {children}
//     </FilterContext.Provider>
// }

// export default useFilterContext;

