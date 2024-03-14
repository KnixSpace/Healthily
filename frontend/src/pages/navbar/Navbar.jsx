import Branding from "../../components/branding/Branding";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Branding />
        <div className="navbar-login">
          Login
        </div>
      </div>
    </>
  );
};
export default Navbar;
