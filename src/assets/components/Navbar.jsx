import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" className="navbar-brand">
            📚BookLovers
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/books" className="nav-link">
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wishList-page" className="nav-link">
                  <FontAwesomeIcon icon={faHeart} />
                  Wishlist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart-page" className="nav-link">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login-page" className="nav-link">
                  <FontAwesomeIcon icon={faUser} />
                  Login
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 mx-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
      </header>
      <br />
    </>
  );
};

export default Navbar;
