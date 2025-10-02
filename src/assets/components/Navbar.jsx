import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import WishListCount from "./WishListCount";
import CartListCount from "./CartListCount";
import useBookContext from "../contexts/BookContext";

const Navbar = () => {
  const { searchInput, searchBarHandler } = useBookContext();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <NavLink
            to="/"
            className="navbar-brand ms-md-2 ms-lg-2 ms-lg-2 ps-lg-1 "
          >
            <h1 className="display-5 fw-semibold fst-italic text-dark">
              <i className="bi bi-book-half ms-3 me-2"></i>
              Book<span className="text-secondary">Readers</span>
            </h1>
          </NavLink>
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto flex-row ms-sm-5 ps-sm-5 mx-md-auto ms-lg-5 ps-lg-5 ms-xl-0 ps-xl-0 ">
              <li className="nav-item ms-5 ms-md-5 ps-md-5  ms-lg-5 ps-lg-5 ms-xl- ">
                <NavLink to="/books" className="nav-link">
                  <strong>Books</strong>
                  <i className="bi bi-book-fill ms-1"></i>
                </NavLink>
              </li>
              <li className="nav-item ms-3 ms-md-3 ps-md-3 ms-lg-3 ps-lg-3 ">
                <NavLink to="/wishList-page" className="nav-link">
                  <strong>Wishlist</strong>
                  <span className="position-relative">
                    <FontAwesomeIcon icon={faHeart} />
                    <span
                      className="position-absolute top-0 start-100 translate-middle p-1 badge text-bg-secondary border border-light rounded-circle"
                      style={{
                        width: "20px",
                        height: "20px",
                        padding: "0.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <WishListCount />{" "}
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item ms-2 ms-md-3 ps-md-3 ms-lg-3 ps-lg-3">
                <NavLink to="/cart-page" className="nav-link">
                  <strong>Cart</strong>
                  <span className="position-relative">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span
                      className="position-absolute top-0 start-100 translate-middle p-1 badge text-bg-secondary border border-light rounded-circle"
                      style={{
                        width: "20px",
                        height: "20px",
                        padding: "0.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CartListCount />{" "}
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item ms-3 ms-md-3 ps-md-3 ms-lg-3 ps-lg-3">
                <NavLink to="/profile-page" className="nav-link">
                  <strong>Profile</strong>
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </li>
            </ul>

            <div className="ms-md-6 col-sm-12 col-md-6 ms-lg-6">
              <div className="container d-flex align-item-between">
                <i className="bi bi-search py-2"></i>
                <input
                  className="mx-3 form-control"
                  type="search"
                  placeholder="Search books..."
                  aria-label="Search"
                  onChange={(e) => searchBarHandler(e.target.value)}
                  value={searchInput}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <br />
    </>
  );
};

export default Navbar;
