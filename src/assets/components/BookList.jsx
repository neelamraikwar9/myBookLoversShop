// import { useEffect } from 'react';
import useBookContext from '../contexts/BookContext';


const BookList = () => {
  const { books, loading, error }  = useBookContext();
  console.log(books)

  return (
    <>
      <h1>Books</h1>
      {console.log(books)}
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching books.</p>}
        {books && books?.length > 0 ? (
          <div className="row">
            {books && books?.map((book) => (
              <div key={book._id} className="col-md-4 container py-3">
                <div className="card">
                  <div className="bg-body-secondary">
                    <img
                      src={book.image}
                      alt={book.name}
                      className="img-fluid"
                    />
                  </div>
                  <br />
                  <h5 className="text-center">
                    {book.name} by {book.author}
                  </h5>
                  <h4 className="text-center"><strong>{book.price}</strong></h4>
                  <h5 className="text-center">⭐⭐⭐⭐⭐{book.rating}</h5>
                  <button className="btn btn-primary">🛒Add to Cart</button>
                  <br/>
                  <button className="btn btn-primary">🩷Add to WishList</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default BookList;
