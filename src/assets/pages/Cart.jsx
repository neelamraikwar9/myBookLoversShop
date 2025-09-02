import React from "react";
import useBookContext from "../contexts/BookContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, cartRemoveHandler } = useBookContext();
  console.log(cart, "cart checking on cart page....");
  return (
    <>
      <h1>My Cart()</h1>
      <br />
      <br />
      <div>
        {cart && cart.length === 0 ? (
          <div className="card col-md-5 mx-auto">
            <h3>Cart is empty!</h3>
            <img
              src="https://i.imghippo.com/files/sFg1101IhI.jpg"
              alt="Empty Cart"
              className="img-fluid"
            />
            <Link to="/books">
              <button className="btn btn-primary">Shop Now</button>
            </Link>
          </div>
        ) : (
          <div className="container bg-dark">
          <div className="row ">
            <div>
              {cart &&
                cart?.map((car) => (
                  <div className="row">
                  <div
                    key={car._id}
                    className="card mb-3"
                    style={{ maxWidth: "450px" }}
                  >
                    <div className="row g-0">
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
                          <h5>{car.price}</h5>
                          <p>Quantity: </p>
                          <button
                            className="btn btn-secondary mb-3"
                            onClick={() => cartRemoveHandler(car._id)}
                          >
                            Remove From Cart
                          </button>
                          <button className="btn btn-outline-secondary">
                            {" "}
                            Move to Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* <div className="col-md-6">
            <div class="card text-center mb-3" style={{ width: "20rem" }}>
              <div class="card-body">
                <h5 class="card-title">PRICE DETAILS</h5>
                <hr/>
                <p class="card-text">Price() {}</p>
              </div>
            </div>
            </div> */}

                  </div>
                
                ))}
            </div>
           {/* <div className="col-md-6">
            <div class="card text-center mb-3" style={{ width: "20rem" }}>
              <div class="card-body">
                <h5 class="card-title">PRICE DETAILS</h5>
                <hr/>
                <p class="card-text">Price() {}</p>
              </div>
            </div>
            </div> */}

          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
