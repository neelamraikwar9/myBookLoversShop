// import { useEffect } from 'react';
// import useBookContext from '../contexts/BookContext';
import BookList from '../components/BookList'
import FilterPanel from '../components/FilterPanel';
import Navbar from '../components/Navbar';
import './books.css';


const Books = () => {
  // const { books, loading, error }  = useBookContext();

  

  return (
    <>
      <div className="home">
      <Navbar />

      <div className="panelListWrap">
        <div className="filterPanelWrap">
          <FilterPanel/>
          {/* // Category vise filter
    //genre vise filter
    //slidebar of rating 
    // Buton to clear filter */}
        </div>

        <div className="listWrap">
          <BookList/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Books;
