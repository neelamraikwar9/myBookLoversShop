import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";  
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import useBookContext from "../contexts/BookContext";



const Navbar = () => {
  // const {reloadHandler} = useBookContext();
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <NavLink to="/" className="navbar-brand ms-md-5 ms-lg-5 ms-lg-5 ps-lg-5 ">
            📚BookLovers
          </NavLink>
          <button
            className="navbar-toggler"
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
              <li className="nav-item ms-5 ms-md-5 ps-md-5  ms-lg-5 ps-lg-5">
                <NavLink to="/books" className="nav-link">
                <i className="bi bi-book-fill me-1"></i>
                  Books
                </NavLink>
              </li>
              <li className="nav-item ms-3 ms-md-5 ps-md-5 ms-lg-5 ps-lg-5">
                <NavLink to="/wishList-page" className="nav-link">
                  <FontAwesomeIcon icon={faHeart} />
                  Wishlist
                </NavLink>
              </li>
              <li className="nav-item ms-4 ms-md-5 ps-md-5 ms-lg-5 ps-lg-5">
                <NavLink to="/cart-page" className="nav-link">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Cart
                </NavLink>
              </li>
              <li className="nav-item ms-4 ms-md-5 ps-md-5 ms-lg-5 ps-lg-5">
                <NavLink to="/login-page" className="nav-link">
                  <FontAwesomeIcon icon={faUser} />
                  Profile
                </NavLink>
              </li>
            </ul>
            <div className="d-flex justify-content-center me-lg-5">
            <i className="bi bi-search left-align"></i>
              <input 
                className="mx-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </nav>
      </header>
      <br />
    </>
  );
};

export default Navbar;
