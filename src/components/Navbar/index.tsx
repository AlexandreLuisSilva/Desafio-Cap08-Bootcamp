import { Link } from "react-router-dom";

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <Link to="/" className="nav-logo-text">
        <h6>Github API</h6>
      </Link>
    </nav>
  );
};

export default Navbar;
