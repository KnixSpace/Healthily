import Branding from "../../components/branding/Branding";
const Navbar = () => {
  const googleAuth = () => {
    window.open("http://localhost:3000/auth/api/login", "_self");
  };
  return (
    <>
      <div className="flex justify-between items-center px-8 pt-8 lg:px-[200px]">
        <Branding logoColor={"text-white"}/>
        <span
          className="font-medium text-white text-xl md:text-2xl cursor-pointer"
          onClick={googleAuth}
        >
          Login
        </span>
      </div>
    </>
  );
};
export default Navbar;
