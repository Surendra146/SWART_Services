import "./../styles/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup({ onClose }) {
  const nav= useNavigate();
  return (
    <div className="signup-overlay" onClick={onClose}>
      <div
        className="signup-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2 className="title">Create Your Account</h2>
        <p className="subtitle">
          Join SWART Services and get started today
        </p>
<div className="contact-form">
        <form>
          <label>Name:</label>
           <input type="text" placeholder="Your Name" />
          <label>Phone Number:</label>
           <input type="phone number" placeholder="Your phone" />
          <label>Email:</label>
           <input type="email" placeholder="Your Email" />
          <label>password:</label>
           <input type="password" placeholder="password" />
          <button onClick={()=>nav("/Services")}>Signup</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
