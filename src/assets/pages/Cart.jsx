import React from "react";
import useBookContext from "../contexts/BookContext";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Cart = () => {
  const { cart, cartRemoveHandler, handleMoveWishlist, quantity} = useBookContext();
  console.log(cart, "cart checking on cart page....");
  return (
    <main className="container">
      <h1 className="text-center">My Cart()</h1>
      <br />
      <br />
      <div className="container">
        {cart && cart.length === 0 ? (
          <div className='container-fluid'>
          <div className="row justify-content-center">
          <div className="col-4">
          <div className="card ">
            <h3 className="text-center py-3">Cart is empty!</h3>
            <img
              src="https://i.imghippo.com/files/sFg1101IhI.jpg"
              alt="Empty Cart"
              className="img-fluid"
            />
            <Link to="/books">
              <button className="btn btn-primary display-block w-100 ">Shop Now </button>
            </Link>
          </div>
          </div>
          </div>
          </div>
        ) : (
          <div className="container  bg-dark ">
          <div className="">
          <div className="row justify-content-center ms-lg-5 ps-lg-5">
           <div className="col-md-6">

            <div className="card text-center mb-3">        
            {/* style={{ width: "20rem" }} */}
              <div className="card-body">
                <h5 className="card-title">PRICE DETAILS</h5>
                <hr/>
                  <div className="container">
                  {cart && cart.length > 0 ? (
                    <div>
                  <p className="card-text">Price() {cart?.price}</p>
                  <p>Discount -{cart?.discountPrice}</p>
                  <p>Delivery Charges {cart?.deliveryCharges}</p>
                  <h4>Total Amount {cart?.price - cart?.discountPrice}</h4>
                  <p>You will save {cart?.discount} on this order</p>
                  </div>
                  ): (
                    <p>Price Details is not found.</p>
                  )}
                 
                  </div>
              </div>
            </div>
            </div>
            </div>

            <div className="container">
              {cart &&
                cart?.map((car) => (
                  <div
                    key={car._id}
                    className="card mb-3"
                    style={{ maxWidth: "450px" }}
                  >
                    <div className=" row g-0">
                      <div className="col-md-4 py-5">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5>{car.name}</h5>
                          <h6>by {car.author}</h6>
                          <p><strong className="fw-medium">{car.salePrice}</strong> <del><span className="text-success">{car.price}</span></del></p>
                          <p className="text-success">{car.discount}</p>
                          <p>Quantity: {quantity()}</p>
                          <div className="container">
                           <Link to="/wishList-page">
                          <button className="btn btn-outline-secondary " onClick={() => handleMoveWishlist(car._id)}>
                            {" "}
                            Move to Wishlist <i className="bi bi-suit-heart-fill ms-2"></i>
                          </button>
                          </Link>

                          <button
                            className="btn btn-secondary mb-3"
                            onClick={() => cartRemoveHandler(car._id)}
                          >
                            Remove From Cart   <i className="bi bi-cart4"></i>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>  
                  </div>
                ))}
            </div>
          </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
