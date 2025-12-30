import { NavLink, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();

  // 🔹 Common links (always visible)
  const commonLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header className="header">
      <div className="CPN">
        <h1>SWART</h1>
      </div>

      <ul className="ul">
        {/* Always visible links */}
        {commonLinks.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {/* 🔥 Services appears ONLY on /Services page */}
        {location.pathname === "/Services" && (
          <li>
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Services
            </NavLink>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Navbar;
