import "./../styles/services.css";

const Services = () => {
  return (
<div className="sercontainer">
  <h1>Our Services</h1>
    <section class ="section-btn">
      <div>
      <a href="#wms"><button className="btn"><h2> washing Machine </h2></button> </a>
      <a href="#ac"><button className="btn"><h2> AC </h2></button></a> 
      <a href="#ref"><button className="btn"><h2> Refrigerator  </h2></button></a> 
      </div>
    </section>
     <section id="wms">
     <div>
     <h2>Washing Machine Services</h2>
     <p>Repairs are available for all major brands, including LG, Samsung, and Whirlpool.</p> 
      <ul>
         <li> <strong>Basic Checkup:</strong> Doorstep diagnosis for minor issues (power, noise) starts at ₹160 to ₹199.</li>
        <li><strong>Major Repairs:</strong> Detailed service for drum or motor issues typically ranges from ₹499 to ₹1,999, excluding spare parts.</li>
        <li><strong>Parts Replacement:</strong> Examples include drain pipes (₹200), capacitors (₹400), and wash motors (~₹1,500).</li> 
      </ul>
      </div>
      </section>

      <section id="ac">
      <div>
       <h2>Air Conditioner (AC) Services</h2>
       <p>Professional AC maintenance is recommended every 3–6 months for optimal efficiency. 
         </p><br></br>
       <ul>
        <li><strong>Basic Cleaning & Inspection:</strong> Range from ₹250 to ₹600. This includes filter cleaning, coil dusting, and drainage checks.</li>
        <li><strong>Deep Cleaning:</strong> High-pressure jet or foam jet cleaning costs between ₹499 and ₹1,200.</li>
        <li><strong>Gas Refilling:</strong> Depending on the gas type (e.g., R32, R410A) and AC tonnage, charges range from ₹1,999 to ₹5,000.</li>
        <li><strong>Installation:</strong> Rates for 2025 are approximately ₹800 to ₹1,800 for window ACs and ₹1,500 to ₹3,500 for split units. </li>
       </ul>
       </div>
       </section>

        <section id="ref">
        <div>
       <h2> Refrigerator Services</h2>
       <p>Professional AC maintenance is recommended every 3–6 months for optimal efficiency. 
         </p><br></br>
       <ul>
        <li><strong>Basic Cleaning & Inspection:</strong> Range from ₹250 to ₹600. This includes filter cleaning, coil dusting, and drainage checks.</li>
        <li><strong>Deep Cleaning:</strong> High-pressure jet or foam jet cleaning costs between ₹499 and ₹1,200.</li>
        <li><strong>Gas Refilling:</strong> Depending on the gas type (e.g., R32, R410A) and AC tonnage, charges range from ₹1,999 to ₹5,000.</li>
        <li><strong>Installation:</strong> Rates for 2025 are approximately ₹800 to ₹1,800 for window ACs and ₹1,500 to ₹3,500 for split units. </li>
       </ul>
      </div>
     </section>
    </div>
  );
};

export default Services;
