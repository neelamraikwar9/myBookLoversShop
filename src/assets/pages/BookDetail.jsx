import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";
import useBookContext from "../contexts/BookContext";

const BookDetail = () => {
    const {dataget} = useBookContext();
    console.log(dataget, "amm i getting dataget?")
    console.log(dataget, "checking data in detail page...")
  const { bookId } = useParams();
  console.log(bookId);

  const { data, loading, error } = useFetch(
    `https://selling-books-data.vercel.app/books/getBooks/${bookId}`
  );
  console.log(data);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured while fetching books.</p>}
      {data && data ? (
        <div>
          <div className="container mb-5">
            <div key={data?._id} >
             <div className="row">
            <div className="col-md-4 py-5">
              <div className="card">
                <div className="container p-3">
                  <img src={data?.image} alt={data?.name} className="img-fluid" />
                </div>
                <Link to="/wishList-page">
                  <button
                    className="btn btn-outline-secondary display-block w-100 mb-2"
                    onClick={() => handleMoveCart(data._id)}
                  >
                  Add to Wishlist
                  <i className="bi bi-suit-heart-fill ms-2"></i>
                  </button>
                </Link>
                <Link to="/cart-page">
                  <button
                    className="btn btn-outline-secondary display-block w-100"
                    onClick={() => wishListRemoveHandler(data._id)}
                  >
                    Add to Cart<i className="bi bi-cart4 ms-2"></i>
                  </button>
                </Link>
              </div>
              </div>
               <div className="col-md-8 ">
          <div className=" py-3 mt-5 container">
            <h3>{data?.name} - {data?.author}</h3>
            <p>{data?.rating}</p>
            <h2>{data?.salePrice} <del><span className="text-success">{data?.price}</span></del></h2>
            <h4 className="text-success">{data?.discount}</h4>
            <p>Quantity: </p>
            <hr/>
            <div className="container d-flex">
           <i className="bi bi-wallet-fill ms-5"></i>
            <span className="ms-2">Pay on Delivery</span>

           <i className="bi bi-truck-front-fill ms-5"></i>
           Free Delivery

           <i className="bi bi-file-lock-fill ms-5"></i>
           Secure Payment
            </div>
            <hr/>
            <h5>Book Details:-</h5>
            <br/>
            <p>Book Name: <strong>{data?.name}</strong></p>
            <p>Author: <strong>{data?.author}</strong></p>
            <p>Category: <strong>{data?.category}</strong></p>
            <p>Genre: <strong>{data?.genre}</strong></p>
            <p>ISBN: <strong>{data?.isbn}</strong></p>
            <p>Language: <strong>{data?.language}</strong></p>
            <p>Pages: <strong>{data?.pages}</strong></p>
            <p>Publish Year: <strong>{data?.publishYear}</strong></p>
            <p>Publisher: <strong>{data?.publisher}</strong></p>
            <p>Sub Genre: <strong>{data?.subGenre}</strong></p>
            <p>Summary of the book: <strong>{data?.summary}</strong></p>
          </div>
          </div>
          </div>
          </div>
          <hr/>
          <h3>More books you may like in our store</h3>
          { dataget && dataget.length > 0 ? (
            <div>
            <div className="row">
            {dataget.map((book) => 
                <div key={book._id} className="col-md-3 container d-flex mb-5">
                    <div className="card h-100">
                    <div className="container p-3">
                       <img src={book.image} alt={book.name} className="img-fluid"/> 
                    </div>
                    <h5 className="text-center">{book.name} - {book.author}</h5>
                    <h4 className="text-center">{book.salePrice}</h4>
                    <div className="mt-auto">
                     <Link to="/wishList-page">
                  <button
                    className="btn btn-outline-secondary display-block w-100 mb-2"
                    onClick={() => handleMoveCart(data._id)}
                  >
                  Add to Wishlist
                  <i className="bi bi-suit-heart-fill ms-2"></i>
                  </button>
                </Link>
                <Link to="/cart-page">
                  <button
                    className="btn btn-outline-secondary display-block w-100"
                    onClick={() => wishListRemoveHandler(data._id)}
                  >
                    Add to Cart<i className="bi bi-cart4 ms-2"></i>
                  </button>
                </Link>
                </div>
                
                </div>
            </div>
            )}
             </div>
            </div>
          ) : (
            <p></p>
          )}
          </div>
        </div>
      ) : (
        <p></p>  
      )}
    </>
  );
};

export default BookDetail;


{/* Book Detail Not Found. */}
