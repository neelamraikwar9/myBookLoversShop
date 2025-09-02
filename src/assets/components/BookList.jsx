// import { useEffect } from 'react';
import useBookContext from '../contexts/BookContext';


const BookList = () => {
  const {filteredBooks, books, loading, error, bookCartHandler }  = useBookContext();
  console.log(books)
  console.log(filteredBooks, "Checking filtered books in book list.")

  return (
    <>
      <h1>Books</h1>
      {console.log(books)}
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching books.</p>}
        {filteredBooks && filteredBooks?.length > 0 ? (
          <div className="row">
            {filteredBooks && filteredBooks?.map((book) => (
              <div key={book._id} className="col-md-4 container py-3">
                <div className="card h-100">
                  <div className="bg-body-secondary">
                    <img
                      src={book.image}
                      alt={book.name}
                      className="img-fluid object-fit-cover border rounded"
                    />
                  </div>
                  <br />
                  <h5 className="text-center">
                    {book.name} by {book.author}
                  </h5>
                  <h4 className="text-center"><strong>{book.price}</strong></h4>
                  <h5 className="text-center">⭐⭐⭐⭐⭐{book.rating}</h5>
                  <button className="btn btn-primary" onClick={() => bookCartHandler(book._id)}>🛒Add to Cart</button>
                  <br/>
                  <button className="btn btn-primary">🩷Add to Wishlist</button>
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
