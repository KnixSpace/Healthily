import { useState } from "react";

const Pappointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <div className="bg-white rounded-xl p-4 h-full overflow-auto">
        <div className="text-center p-2 mb-2 text-2xl text-[#605BFF] font-medium border-b-2">
          Upcoming Appointments
        </div>
        <input
          type="text"
          className="mt-2 w-full rounded p-2  outline outline-1 outline-slate-300 focus:outline-[#605BFF] focus:outline-2 focus:bg-[#EFEEFF]"
          placeholder="Search appointments..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="grid grid-cols-12 gap-2 py-2 mr-4 mt-4 border-t-2">
          <div className="col-span-1 text-center px-2 font-medium text-slate-500">
            Sr No
          </div>
          <div className="col-span-2 text-center px-2 font-medium text-slate-500">
            Date
          </div>
          <div className="col-span-6 text-center px-2 font-medium text-slate-500">
            Title
          </div>
          <div className="col-span-3 text-center px-2 font-medium text-slate-500">
            Status
          </div>
        </div>
        <div className="h-[78%] overflow-auto">
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-2 border border-[#605BFF] py-2 mr-2 rounded-md divide-x-2 divide-slate-400 mb-3"
            >
              <div className="px-2 text-center">{i}</div>
              <div className="col-span-2 text-center px-2">29-03-2024</div>
              <div className="col-span-6 px-2">Nose Bleeding</div>
              <div className="col-span-3 text-center px-2">Booked</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Pappointment;
