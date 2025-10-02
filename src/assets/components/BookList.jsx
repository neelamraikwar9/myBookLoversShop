import { useEffect } from "react";
import useBookContext from "../contexts/BookContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const BookList = () => {
  const {
    allData,
    loading,
    error,
    books,
    setBooks,
    bookCartHandler,
    addToWishlist,
    cart,
    list,
  } = useBookContext();
  console.log(books, "jhkjhkjhkjhkj");

  const { category } = useParams();
  console.log(category, "checking category on bookCOntext");

  useEffect(() => {
    if (category) {
      const filterBooks = allData?.filter((book) => book.category === category);
      setBooks(filterBooks);
    } else {
      setBooks(allData);
    }
  }, [allData, category]);

  // const renderButton = () => {
  //   return(

  //   )
  // }

  return (
    <>
      <h1 className="py-2">Books[{books?.length}]</h1>
      <div>
        {loading && (
          <h3 className="py-3">
            <i>Books are Loading...📙📘📗📙</i>
          </h3>
        )}
        {error && <p>An error occured while fetching books.</p>}
        {books && books?.length > 0 ? (
          <div className="row row-cols-lg-4 row-col">
            {books &&
              books?.map((book) => (
                <div
                  key={book?._id}
                  className="col-md-4 container px-auto py-3 d-flex"
                >
                  <div className="card px-1 py-2 d-flex justify-content-between">
                    <div className="bg-body-secondary">
                      <Link to={`/book/${book?._id}`}>
                        <img
                          src={book?.image}
                          alt={book?.name}
                          className="img-fluid object-fit-cover border rounded"
                        />
                      </Link>
                    </div>
                    <br />
                    <h5 className="text-center">{book?.name}</h5>
                    <h6 className="text-center">by {book?.author}</h6>
                    <p className="text-center">
                      <strong>{book?.salePrice}</strong>
                    </p>
                    <p className="text-center">⭐⭐⭐⭐⭐{book?.rating}</p>

                    <div className="">
                      <div key={book?._id} className="d-flex flex-column px-3">
                        {cart?.find((car) => car?._id === book?._id) ? (
                          <Link
                            to="/cart-page"
                            className="btn btn-success w-100"
                          >
                            Go to Cart
                            <i className="bi bi-cart4 ms-1"></i>
                          </Link>
                        ) : (
                          <div className="d-md-flex">
                            <button
                              className="btn btn-primary w-100 px-md-0"
                              onClick={() => bookCartHandler(book?._id)}
                            >
                              Add to Cart
                              <i className="bi bi-cart4 ms-1"></i>
                            </button>
                          </div>
                        )}

                        <br />
                      </div>
                      <div key={book?._id} className="d-flex flex-column px-3">
                        {list.find((li) => li?._id === book?._id) ? (
                          <div className="d-md-flex px-md-0">
                            <Link
                              to="/wishList-page"
                              className="btn btn-outline-success w-100 d-inline-flex justify-content-center px-0 px-md-0"
                            >
                              Go to Wishlist
                              {/* <i className="bi bi-suit-heart-fill ms-1"></i> */}
                            </Link>
                          </div>
                        ) : (
                          <div className=" align-items-center justify-content-center ">
                            <button
                              className="btn btn-primary w-100 pe-0 ps-0"
                              onClick={() => addToWishlist(book?._id)}
                            >
                              Add to Wishlist
                              {/* <i className="bi bi-suit-heart-fill ms-1"></i> */}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
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
