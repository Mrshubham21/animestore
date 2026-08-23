import { useState } from "react";
import toast from "react-hot-toast";
import { sendMessage } from "../services/contactService";
import "../styles/contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await sendMessage(formData);

      toast.success(res.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">

      {/* Hero */}

      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or need help with your order?
          We'd love to hear from you.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="contact-info">

        <div className="info-card">
          <h3>📧 Email</h3>
          <p>support@animeotaku.com</p>
        </div>

        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="info-card">
          <h3>📍 Address</h3>
          <p>Haldwani, Uttarakhand</p>
        </div>

        <div className="info-card">
          <h3>🕒 Working Hours</h3>
          <p>Mon - Sat | 9 AM - 6 PM</p>
        </div>

      </div>

      {/* Contact Form */}

      <div className="contact-container">

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h2>Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : "Send Message"}
          </button>

        </form>

      </div>

      {/* FAQ */}

      <div className="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h4>How long does shipping take?</h4>
          <p>
            Orders are usually delivered within 3–7
            business days.
          </p>
        </div>

        <div className="faq-item">
          <h4>Can I return my order?</h4>
          <p>
            Yes. Returns are accepted within 7 days of
            delivery.
          </p>
        </div>

        <div className="faq-item">
          <h4>Are your products authentic?</h4>
          <p>
            We offer high-quality anime merchandise from
            trusted suppliers.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Contact;