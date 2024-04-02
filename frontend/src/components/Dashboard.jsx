import { Outlet } from "react-router-dom";
import Calendar from "./calander/Calender";
import LinkButton from "./LinkButton";

const Dashboard = ({ role }) => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-5 gap-x-12 gap-y-8 h-full">
      <div className="order-1 hidden 2xl:block divide-y-2 divide-[#605BFF]">
        <div className="flex flex-col gap-3 mb-5">
          {role === "PATIENT" ? (
            <>
              <LinkButton
                to={"new"}
                icon={"add"}
                name={"New Appointment"}
                bg={"bg-[#DFDEFF]"}
              />
              <LinkButton to={""} icon={"home"} name={"Home"} />
              <LinkButton
                to={"appointments"}
                icon={"description"}
                name={"Appointments"}
              />
            </>
          ) : role === "DOCTOR" ? (
            <>
              <LinkButton to={""} icon={"home"} name={"Home"} />
              <LinkButton
                to={"appointments"}
                icon={"description"}
                name={"Appointments"}
              />
            </>
          ) : role === "ADMIN" ? (
            <>
              <LinkButton
                to={"addDoctor"}
                icon={"add"}
                name={"Add Doctor"}
                bg={"bg-[#DFDEFF]"}
              />
              <LinkButton to={""} icon={"home"} name={"Home"} />
              <LinkButton
                to={"appointments"}
                icon={"description"}
                name={"Appointments"}
              />
              <LinkButton
                to={"doctors"}
                icon={"stethoscope"}
                name={"Doctors"}
              />
              <LinkButton
                to={"patients"}
                icon={"patient_list"}
                name={"Patients"}
              />
            </>
          ) : (
            ""
          )}
        </div>
        <div className="w-full">
          <Calendar />
        </div>
      </div>
      <div className="order-2 col-span-4 w-full h-full px-5 py-4 shadow-custom overflow-auto bg-white rounded-xl ">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
