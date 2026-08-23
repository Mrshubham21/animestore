const ShippingForm = ({
  shippingAddress,
  handleChange,
}) => {
  return (
    <div className="shipping-form">
      <h2>Shipping Information</h2>

      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={shippingAddress.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={shippingAddress.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={shippingAddress.address}
          onChange={handleChange}
          rows="4"
          placeholder="House No, Street, Landmark"
          required
        />
      </div>

      <div className="checkout-row">
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={shippingAddress.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={shippingAddress.state}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="checkout-row">
        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={shippingAddress.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={shippingAddress.country}
            onChange={handleChange}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;