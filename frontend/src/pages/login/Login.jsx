import google from "/google.png";
import logo from "/pills.png";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <img src={logo} alt="" />
        <div className="login-brand-name">HealtH Hub</div>
        <div className="login-service-name">Healthcare Managment System</div>
        <div className="login-service-slogan">
          Your Journey to Wellness Starts Here: <br />
          Register with Us Today!
        </div>
        <button>
          <img src={google} alt="" />
          <span>Continue with Google</span>
        </button>
        <Link to={"/"}>
          <div className="login-close">
            <span class="material-icons-round md-36">close</span>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Login;
