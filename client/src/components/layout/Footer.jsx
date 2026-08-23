import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img
          className="logo"
          src="/img/Anime.png"
          alt="Anime Store"
        />

        <h4>About</h4>

        <Link to="/about">
          About Us
        </Link>

        <Link to="/privacy">
          Privacy Policy
        </Link>

        <Link to="/terms">
          Terms & Conditions
        </Link>

        <Link to="/contact">
          Contact Us
        </Link>
      </div>

      <div className="col">
        <h4>My Account</h4>

        <Link to="/profile">
          My Profile
        </Link>

        <Link to="/wishlist">
          Wishlist
        </Link>

        <Link to="/cart">
          Shopping Cart
        </Link>

        <Link to="/login">
          Login
        </Link>
      </div>
    </footer>
  );
};

export default Footer;