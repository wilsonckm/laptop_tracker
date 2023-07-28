import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
  return (
    <nav className="blue">
      <span> Laptops Co</span>
      {/* <Link to="/laptops">All Laptops</Link> */}
      &nbsp; | &nbsp;
      {/* <Link to="/laptops/new">New Laptop</Link> */}
      &nbsp;&nbsp;
      <span>Welcome, {user}</span>
      &nbsp;&nbsp;
    </nav>
  );
}
