import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center bg-orange-600 items-center md:h-28 h-20 sticky top-0">
      <Link to="/">
        <img src={logo} className="md:w-28 w-24"></img>
      </Link>
    </div>
  );
};

export default Header;
