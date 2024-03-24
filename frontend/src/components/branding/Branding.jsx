import { Link } from "react-router-dom";
import logo from "/pills.png";
const Branding = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="flex gap-5 shrink-0 items-center">
          <img src={logo} alt="health hub logo" className="w-8 sm:w-12" />
          <span className="text-xl sm:text-2xl font-medium text-white">
            Health Hub
          </span>
        </div>
      </Link>
    </>
  );
};
export default Branding;
