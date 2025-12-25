
import "./../styles/Signup.css";

function Signup() {


  return (
    <div className="signup-bg">
      <div className="signup-card">

        <h2 className="title">Create Your Account</h2>
        <p className="subtitle">Join SK Services and get started today</p>

        <form>
          <div className="input-group">
            <label>First Name</label>
            <input type="text" required placeholder="Enter first name" />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input type="text" required placeholder="Enter last name" />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" required placeholder="Enter mobile number" />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input type="text" required placeholder="Enter address" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" required placeholder="Enter email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" required placeholder="Create a password" />
          </div>

          <button className="signup-btn" type="submit">Sign Up</button>
        </form>

      </div>
    </div>
  );
}

export default Signup;
