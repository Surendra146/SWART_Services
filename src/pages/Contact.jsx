
import "./../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Have questions or need service? Reach out to us:</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> support@skservices.com</p>
        <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
      </div>

      <div className="contact-form">
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />

          <label>Email:</label>
          <input type="email" placeholder="Your Email" />

          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
