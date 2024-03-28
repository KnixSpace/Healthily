import { Link, Outlet } from "react-router-dom";
import Calendar from "../../components/Calender";
import { useState } from "react";

const Pdashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 2xl:grid-cols-5 gap-x-12 gap-y-8 h-full">
        <div className="order-1 divide-y-2 divide-[#605BFF]  hidden 2xl:block">
          <div className="flex flex-col gap-3 mb-5">
            <div className="flex p-3 gap-2 font-medium text-lg items-center  bg-[#DFDEFF] rounded-xl">
              <span className="material-icons-outlined pe-3 text-[#605BFF]">
                add
              </span>
              New Appointment
            </div>
            <div className="flex p-3 gap-2 font-medium text-lg items-center   rounded-xl">
              <span className="material-icons-outlined pe-3 text-[#605BFF]">
                home
              </span>
              Home
            </div>
            <div className="flex p-3 gap-2 font-medium text-lg items-center   rounded-xl">
              <span className="material-icons-outlined pe-3 text-[#605BFF]">
                description
              </span>
              Appointments
            </div>
            <div className="flex p-3 gap-2 font-medium text-lg items-center   rounded-xl">
              <span className="material-icons-outlined pe-3 text-[#605BFF]">
                fact_check
              </span>
              Reports
            </div>
          </div>
          <div className="w-full">
            <Calendar
              onDateSelect={(date) => {
                console.log(date);
              }}
            />
          </div>
        </div>
        <div className="col-span-4 order-2 w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Pdashboard;
