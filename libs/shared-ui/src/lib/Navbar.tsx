import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hallbooking">Hallbooking</Link>
        </li>
        <li>
          <Link to="/photography">Photography</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
