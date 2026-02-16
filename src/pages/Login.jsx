import { useNavigate } from "react-router-dom";
import "./../styles/login.css";
export default function Login({ onLclose }) {
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    nav("/Services");
  };

  return (
    <div className="signup-overlay" onClick={onLclose}>
      <div className="signup-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onLclose}>✖</button>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
