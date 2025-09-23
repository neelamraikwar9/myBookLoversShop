import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";
import useBookContext from "../contexts/BookContext";

const BookDetail = () => {
  const {
    allData,
    handleAddToWish,
    handleAddToCart,
    handleAddWish,
    handleAddCart,
  } = useBookContext();
  console.log(allData, "amm i getting allData?");
  console.log(allData, "checking data in detail page...");
  const { bookId, category } = useParams();
  console.log(bookId);

  const { data, loading, error } = useFetch(
    `https://selling-books-data.vercel.app/books/getBooks/${bookId}`
  );
  console.log(data);

  // const {data2} = useFetch(`https://selling-books-data.vercel.app/books/${category}`)
  // console.log(data2, "outr")

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured while fetching books.</p>}
      {data && data ? (
        <div>
          <div className="container mb-5">
            <div key={data?._id}>
              <div className="row">
                <div className="col-md-4 py-5">
                  <div className="card">
                    <div className="container p-3">
                      <img
                        src={data?.image}
                        alt={data?.name}
                        className="img-fluid"
                      />
                    </div>
                    <Link to="/wishList-page">
                      <button
                        className="btn btn-outline-secondary display-block w-100 mb-2"
                        onClick={() => handleAddToWish(data._id)}
                      >
                        Add to Wishlist
                        <i className="bi bi-suit-heart-fill ms-2"></i>
                      </button>
                    </Link>
                    <Link to="/cart-page">
                      <button
                        className="btn btn-outline-secondary display-block w-100"
                        onClick={() => handleAddToCart(data._id)}
                      >
                        Add to Cart<i className="bi bi-cart4 ms-2"></i>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-8 ">
                  <div className=" py-3 mt-5 container">
                    <h3>
                      {data?.name} - {data?.author}
                    </h3>
                    <h5>
                      Rating:{" "}
                      <i>
                        <strong>{data?.rating}</strong>
                      </i>
                    </h5>
                    <h2>
                      {data?.salePrice}{" "}
                      <del>
                        <span className="text-success">{data?.price}</span>
                      </del>
                    </h2>
                    <h4 className="text-success">{data?.discount}</h4>
                    <p>Quantity: </p>
                    <hr />
                    <div className="container d-flex">
                      <i className="bi bi-wallet-fill ms-5"></i>
                      <span className="ms-2">Pay on Delivery</span>
                      <i className="bi bi-truck-front-fill ms-5"></i>
                      Free Delivery
                      <i className="bi bi-file-lock-fill ms-5"></i>
                      Secure Payment
                    </div>
                    <hr />
                    <h5>Book Details:-</h5>
                    <br />
                    <p>
                      <strong>Book Name: </strong> <i>{data?.name}</i>
                    </p>
                    <p>
                      <strong>Author: </strong> <i>{data?.author}</i>
                    </p>
                    <p>
                      <strong>Category: </strong> <i>{data?.category}</i>
                    </p>
                    <p>
                      <strong>Genre: </strong> <i>{data?.genre}</i>
                    </p>
                    <p>
                      <strong>ISBN: </strong> <i>{data?.isbn}</i>
                    </p>
                    <p>
                      <strong>Language: </strong> <i>{data?.language}</i>
                    </p>
                    <p>
                      <strong>Pages: </strong> <i>{data?.pages}</i>
                    </p>
                    <p>
                      <strong>Publish Year: </strong>
                      <i>{data?.publishYear}</i>
                    </p>
                    <p>
                      <strong>Publisher: </strong>
                      <i>{data?.publisher}</i>
                    </p>
                    <p>
                      <strong>Sub Genre: </strong>
                      <i>{data?.subGenre}</i>
                    </p>
                    <p>
                      <strong>Summary of the book: </strong>
                      <i>{data?.summary}</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h3>More books you may like in our store</h3>
            <br />
            {allData && allData.length > 0 ? (
              <div>
                <div className="row">
                  {allData.map((book) => (
                    <div
                      key={book._id}
                      className="col-md-3 container d-flex mb-5"
                    >
                      <div className="card h-100">
                        <div className="container p-3">
                          <img
                            src={book.image}
                            alt={book.name}
                            className="img-fluid"
                          />
                        </div>
                        <h5 className="text-center">
                          {book.name} - {book.author}
                        </h5>
                        <h4 className="text-center">{book.salePrice}</h4>
                        <div className="mt-auto">
                          <Link to="/wishList-page">
                            <button
                              className="btn btn-outline-secondary display-block w-100 mb-2"
                              onClick={() => handleAddWish(book._id)}
                            >
                              Add to Wishlist
                              <i className="bi bi-suit-heart-fill ms-2"></i>
                            </button>
                          </Link>
                          <Link to="/cart-page">
                            <button
                              className="btn btn-outline-secondary display-block w-100"
                              onClick={() => handleAddCart(book._id)}
                            >
                              Add to Cart<i className="bi bi-cart4 ms-2"></i>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
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

{
  /* Book Detail Not Found. */
}
