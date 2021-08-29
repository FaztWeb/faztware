import { Link } from "react-router-dom";
import { useAuth, useCart } from "../../context";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const { totalItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          FaztWare
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <>
                <Link className="nav-link" to="/products/new">
                  New Product
                </Link>
                <Link className="nav-link" to="/" onClick={logout}>
                  Logout
                </Link>
              </>
            ) : (
              <Link className="nav-link" to="/auth/signup">
                Signup
              </Link>
            )}

            <Link
              className="nav-link active d-flex align-items-center"
              to="/cart"
            >
              <BiCart size={20} className="me-1" />
              <span>Cart</span>
              <span className="badge bg-secondary ms-2">{totalItems}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
