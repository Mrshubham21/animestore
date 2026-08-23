const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <div className="payment-method">
      <h2>Payment Method</h2>

      <label className="payment-option">
        <input
          type="radio"
          name="paymentMethod"
          value="COD"
          checked={paymentMethod === "COD"}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
        />

        Cash on Delivery
      </label>

      <label className="payment-option">
        <input
          type="radio"
          name="paymentMethod"
          value="Razorpay"
          checked={paymentMethod === "Razorpay"}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
        />

        Razorpay (Online Payment)
      </label>
    </div>
  );
};

export default PaymentMethod;