// import { useEffect } from 'react';
import useBookContext from '../contexts/BookContext';
import BookList from '../components/BookList'
import FilterPanel from '../components/FilterPanel';
import Navbar from '../components/Navbar';
import './books.css';


const Books = () => {
  const { books, loading, error }  = useBookContext();

  

  return (
    <main>
      <div className="container">
      <div className='row'>
      <div className="col-md-3">
      <div className="card py-3">
          <FilterPanel/>
      </div>
      </div>
      
      <div className="col-md-9">
      <div className="container">
          <BookList/>
      </div>
      </div>
    </div>
    </div>
    </main>
  );
};

export default Books;
