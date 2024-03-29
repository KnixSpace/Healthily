import { Outlet } from "react-router-dom";
import Branding from "../../components/branding/Branding";
import profile from "/user.png";
import ProfileForm from "./ProfileForm";
import Pdashboard from "./Pdashboard";

const Patient = ({ user }) => {
  const d = "";
  return (
    <>
      <div className="flex flex-col h-screen bg-[#f5f6f7]">
        <nav className="flex px-6 md:px-16 lg:px-[200px] py-6 md:py-8 justify-between items-center">
          <Branding logoColor={"text-black"} />
          <div className="flex gap-5 items-center">
            <div className="hidden sm:block">
              <div className="font-medium  md:text-lg">Krupal Patel</div>
              <div className="text-[#808080] font-medium">Patient</div>
            </div>
            <img
              src={profile}
              alt="user profile image"
              className="w-8 sm:w-12"
            />
          </div>
        </nav>
        <section className="px-6 md:px-16 lg:px-[200px] py-2 flex-grow overflow-y-auto">
          {d ? <Pdashboard /> : <ProfileForm />}
        </section>
        <footer>Footer</footer>
      </div>
    </>
  );
};
export default Patient;
