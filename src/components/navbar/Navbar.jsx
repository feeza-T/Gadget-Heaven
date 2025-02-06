import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types"; // ✅ Import PropTypes

const Navbar = ({ cartList, wishList }) => {
  const location = useLocation();

  const isWhiteNavbar =
    location.pathname.startsWith("/gadgets/") ||
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/statistics");

  return (
    <div
      className={`navbar w-full shadow-sm ${
        isWhiteNavbar ? "bg-white text-black" : "bg-purple-600 text-white rounded-t-3xl"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Gadget Heaven
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        <Link to="/dashboard" className="mr-4">
          <FaShoppingCart className="text-2xl" />
          {cartList.length}
        </Link>
        <Link to="/dashboard" className="mr-4">
          <FaHeart className="text-2xl" />
          {wishList.length}
        </Link>
      </div>
    </div>
  );
};

// ✅ Add Prop Types Validation
Navbar.propTypes = {
  cartList: PropTypes.array,
  wishList: PropTypes.array,
};

// ✅ Default Props
Navbar.defaultProps = {
  cartList: [],
  wishList: [],
};

export default Navbar;
