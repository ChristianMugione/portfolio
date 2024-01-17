import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </ul>
  );
};
