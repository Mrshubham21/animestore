import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setMenuOpen(false);
      setProfileOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  return (
    <section id="header">

      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img
          src="/img/Anime.png"
          alt="Anime Store"
          className="logo"
          width="130"
        />
      </Link>

      {/* Navigation */}
      <div>
        <ul
          id="navbar"
          className={menuOpen ? "active" : ""}
        >

          {/* Main Navigation */}

          <li>
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/anime-merch"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Anime Merch
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/upcoming"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Upcoming
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Contact
            </NavLink>
          </li>

          {/* Cart */}

          <li className="cart-nav-item">
            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              🛒
              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </li>

          {/* Wishlist */}

          <li className="wishlist-nav-item">
            <NavLink
              to="/wishlist"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              ❤️
              {wishlistCount > 0 && (
                <span className="wishlist-badge">
                  {wishlistCount}
                </span>
              )}
            </NavLink>
          </li>

          {/* User */}

          {!user ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  Signup
                </NavLink>
              </li>
            </>
          ) : (
            <li className="profile-menu">

              <button
                type="button"
                className="profile-button"
                onClick={() =>
                  setProfileOpen(!profileOpen)
                }
              >
                👤 Profile
                <span className="profile-arrow">
                  {profileOpen ? "▲" : "▼"}
                </span>
              </button>

              {profileOpen && (
                <div className="profile-dropdown">

                  <NavLink
                    to="/profile"
                    onClick={closeMenu}
                  >
                    Profile
                  </NavLink>

                  <NavLink
                    to="/orders"
                    onClick={closeMenu}
                  >
                    My Orders
                  </NavLink>

                  {user?.role === "admin" && (
                    <NavLink
                      to="/admin"
                      onClick={closeMenu}
                    >
                      Admin Panel
                    </NavLink>
                  )}

                  <button
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                </div>
              )}
            </li>
          )}

        </ul>
      </div>

      {/* Mobile Menu */}

      <div id="mobile">
        <i
          id="bar"
          className={`fa-solid ${
            menuOpen
              ? "fa-xmark"
              : "fa-bars"
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        ></i>
      </div>

    </section>
  );
};

export default Navbar;