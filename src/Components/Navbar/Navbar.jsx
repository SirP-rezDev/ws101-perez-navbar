// src/Components/Navbar/Navbar.jsx
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="body">
      <div className="container">
        <div className="devname">
          <h3>SirP-rezDev</h3>
        </div>
        <div className="mynavs">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
