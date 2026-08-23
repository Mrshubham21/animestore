import { useNavigate, useLocation } from "react-router-dom";
import "./LoginRequiredModal.css";

const LoginRequiredModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <div className="login-icon">🔒</div>

        <h2>Login Required</h2>

        <p>
          Please login to continue shopping and access your cart and wishlist.        </p>

        <div className="login-modal-buttons">
          <button
            className="login-btn"
            onClick={() => {
              onClose();

              navigate("/login", {
                state: {
                  from: location.pathname,
                },
              });
            }}
          >
            Login
          </button>

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRequiredModal;