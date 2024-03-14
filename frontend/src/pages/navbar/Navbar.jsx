import { Menu, MenuItem } from "@mui/material";
import Branding from "../../components/branding/Branding";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [anchorEl, setAnchorlEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorlEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorlEl(null);
  };

  const adminHandle = () => {
    setAnchorlEl(null);
  };

  const patientHandle = () => {
    setAnchorlEl(null);
  };

  const doctorHandle = () => {
    console.log("Doctor");
    setAnchorlEl(null);
  };
  return (
    <>
      <div className="navbar-container">
        <Branding />
        {/* <div className="navbar-login">
          Login
        </div> */}
        <div
          className="navbar-login"
          id="login-button"
          aria-controls={open ? "login-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Login
        </div>
        <Menu
          id="login-menu"
          aria-label="login-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={adminHandle}>Admin</MenuItem>
          <MenuItem onClick={doctorHandle}>Doctor</MenuItem>
          <MenuItem onClick={patientHandle}>Patients</MenuItem>
        </Menu>
      </div>
    </>
  );
};
export default Navbar;
