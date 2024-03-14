import logo from "/pills.png";
import "./branding.css";
import { NavLink} from "react-router-dom";
const Branding = () => {
  return (
    <>
      <NavLink to={"/"}>
        <div className="branding-container" onClick={() => {}}>
          <div className="branding-logo">
            <img src={logo} alt="Healthhub logo" />
          </div>
          <div>Health Hub</div>
        </div>
      </NavLink>
    </>
  );
};
export default Branding;
