import Branding from "../../components/branding/Branding";
const Navbar = () => {
  const googleAuth = () => {
    window.open("http://localhost:3000/auth/api/login", "_self");
  };
  return (
    <>
      <div className="flex justify-between items-center px-8 pt-8 md:px-[200px]">
        <Branding/>
        <span className="font-medium text-white text-xl md:text-2xl">Login</span>
      </div>
    </>
  );
};
export default Navbar;
