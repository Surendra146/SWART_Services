import { useState } from "react";
import Signup from "./Signup";
import "./../styles/home.css";

const Home = () => {
const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="container">

      {/* HERO SECTION */}
      <section className="banner">
        <div className="text">
          <h2 className="hero-title">
            Professional Washing Machine Repair Services
          </h2>
          <p>
            SWART is SMART CHOICE for HOME appliance.
          </p>
          <p>
            SWART provides reliable, affordable, and certified home appliance
            repair services across your city.
          </p>
          <button className="primary-btn" onClick={() => setShowSignup(true)}>Book Service</button>
        
        </div>

        <div className="hero-image">
          <img src="/washing.jpg" alt="Washing Machine Service" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service-card">Front Load Repair</div>
          <div className="service-card">Top Load Repair</div>
          <div className="service-card">Semi-Automatic Service</div>
          <div className="service-card">Installation Support</div>
          <div className="service-card">Annual Maintenance</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose SWART?</h2>

        <div className="why-grid">
          <div className="why-card">✔ Certified Technicians</div>
          <div className="why-card">✔ Quick Turnaround</div>
          <div className="why-card">✔ Transparent Pricing</div>
          <div className="why-card">✔ 24/7 Support</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Need Immediate Assistance?</h2>
        <p>Call us now and get same-day service support.</p>
        <button className="secondary-btn">Call Now</button>
      </section>


      {showSignup && (
        <Signup onClose={() => setShowSignup(false)} />
      )}
    </div>
    
  );
};

export default Home;
