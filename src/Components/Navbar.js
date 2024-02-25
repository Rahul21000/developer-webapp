import "./Navbar.css";
import SearchBar from "./SearchBar";
// import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <SearchBar />
      <div>Categories</div>
      <div>Website Builder</div>
      <div>Today's Deals</div>
    </div>
  );
}

export default Navbar;
