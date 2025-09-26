import useBookContext from "../contexts/BookContext";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Cart = () => {
  const {
    cart,
    cartRemoveHandler,
    handleMoveWishlist,
    QuantityFunction,
    incrementQuantity,
    decrementQuantity,
    parsePrice,
  } = useBookContext();
  console.log(cart, "cartpage");

  const cartPrice = cart?.reduce(
    (acc, curr) => acc + parsePrice(curr?.price) * curr.quantity,
    0
  );

  console.log(cartPrice, "hri678");

  const cartDiscount = cart?.reduce((acc, curr) => {
    const calDiscount = acc + parsePrice(curr.discountPrice) * curr.quantity;
    console.log(calDiscount, "oikdf");
    return calDiscount;
  }, 0);
  console.log(cartDiscount, "yutiee");

  const totalAmount = cart?.reduce(
    (acc, curr) => acc + parsePrice(curr.salePrice) * Number(curr.quantity),
    0
  );

  const save = cart?.reduce(
    (acc, curr) => acc + parsePrice(curr.discountPrice) * Number(curr.quantity),
    0
  );

  const totalItems = cart.reduce((acc, curr) => acc + Number(curr.quantity), 0);

  return (
    <main className="container">
      <h1 className="text-center">My Cart({cart?.length})</h1>
      <br />
      <br />
      <div className="container">
        {cart && cart.length === 0 ? (
          <div className="container-fluid">
            <div className="container row justify-content-center text-align-center">
              <div className="col-md-4">
                <div className="card ">
                  <h3 className="text-center py-3">Cart is empty!</h3>
                  <img
                    src="https://i.imghippo.com/files/sFg1101IhI.jpg"
                    alt="Empty Cart"
                    className="img-fluid"
                  />
                  <Link to="/books">
                    <button className="btn btn-primary display-block w-100 ">
                      Shop Now{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" col-sm-row  d-md-flex justify-content-md-between border border-primary">
            <div className="container">
              {cart.length &&
                cart?.map((car) => (
                  <div key={car?._id} className="card mt-2 w-auto mt-auto mb-3">
                    <div className="row align-items-start justify-content-start">
                      <div className="col-md-6 col-ms-6 mt-3">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="img-fluid rounded-start mb-3"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body mt-3 py-3">
                          <h5>{car.name}</h5>
                          <h6>by {car.author}</h6>
                          <p>
                            <strong className="fw-medium">
                              {car.salePrice}
                            </strong>{" "}
                            <del>
                              <span className="text-success">{car.price}</span>
                            </del>
                          </p>
                          <p className="text-success">{car.discount}</p>

                          <QuantityFunction
                            quantity={car.quantity}
                            onIncrement={() => incrementQuantity(car._id)}
                            onDecrement={() => decrementQuantity(car._id)}
                          />

                          <div className="">
                            {/* <Link to="/wishList-page"> */}
                            <button
                              className="btn btn-outline-secondary "
                              onClick={() => handleMoveWishlist(car._id)}
                            >
                              {" "}
                              Move to Wishlist{" "}
                              <i className="bi bi-suit-heart-fill ms-2"></i>
                            </button>
                            {/* </Link> */}

                            <button
                              className="btn btn-secondary"
                              onClick={() => cartRemoveHandler(car._id)}
                            >
                              Remove From Cart <i className="bi bi-cart4"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="card  text-md-center mb-3">
                <div className="card-body">
                  <h5 className="card-title">PRICE DETAILS</h5>
                  <hr />
                  <div className="container">
                    <>
                      <div className="card._id">
                        <p className="card-text d-flex justify-content-between">
                          Price({totalItems}){" "}
                          <span className="text-end">₹{cartPrice}</span>
                        </p>
                        <p className="d-flex justify-content-between">
                          Discount{" "}
                          <span className="text-success">-{cartDiscount}%</span>
                        </p>
                        <p className="d-flex justify-content-between">
                          Delivery Charges <span className="text">Free</span>
                        </p>
                        <hr />
                        <h5 className="d-flex justify-content-between">
                          Total Amount{" "}
                          <span className="text-end">
                            <span>₹{totalAmount}</span>
                            {console.log(totalAmount, "tiuity")}
                          </span>
                        </h5>
                        <hr />
                        <p className="text-success">
                          You will save{" "}
                          <span>
                            <span>₹{save}</span>
                          </span>{" "}
                          on this order
                        </p>
                      </div>
                    </>
                    <Link to="/profile-page">
                      <button className="btn btn-primary w-100 text-uppercase">
                        Place Order
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
