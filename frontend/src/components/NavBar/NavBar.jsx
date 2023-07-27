import { Link } from "react-router-dom";

export default function NavBar() {
  const userName = "Wilson";
  return (
    <nav>
      <Link to="/laptops">All Laptops</Link>
      &nbsp; | &nbsp;
      <Link to="/laptops/new">New Laptop</Link>
      &nbsp;&nbsp;
      <span>Welcome, {userName}</span>
      &nbsp;&nbsp;
    </nav>
  );
}
