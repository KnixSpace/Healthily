import { useEffect, useState } from "react";
import Text from "../../components/Text";

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const dummyData = [
    {
      date: "2023-04-15",
      title: "Annual Physical Exam",
      status: "Scheduled",
      doctorEmail: "doctor1@example.com",
      patientEmail: "patient1@example.com",
    },
    {
      date: "2023-05-01",
      title: "Follow-up Appointment",
      status: "Completed",
      doctorEmail: "doctor2@example.com",
      patientEmail: "patient2@example.com",
    },
    {
      date: "2023-06-10",
      title: "Consultation for Knee Pain",
      status: "Scheduled",
      doctorEmail: "doctor1@example.com",
      patientEmail: "patient3@example.com",
    },
    {
      date: "2023-07-20",
      title: "Routine Checkup",
      status: "Pending",
      doctorEmail: "doctor3@example.com",
      patientEmail: "patient4@example.com",
    },
    {
      date: "2023-08-05",
      title: "Flu Vaccination",
      status: "Completed",
      doctorEmail: "doctor2@example.com",
      patientEmail: "patient1@example.com",
    },
  ];
  //   setAppointments(dummyData);
  //   const fetchAppointments = async () => {
  //     let url;
  //     let method;

  //     if (user.role === "PATIENT") {
  //       url = "http://localhost:8080/healthily/api/patient/appointments";
  //       method = "POST";
  //     } else if (user.role === "DOCTOR") {
  //       url = "http://localhost:8080/healthily/api/doctor/appointments";
  //       method = "POST";
  //     } else if (user.role === "ADMIN") {
  //       url = "http://localhost:8080/healthily/api/admin/appointments";
  //       method = "GET";
  //     }

  //     if (url) {
  //       try {
  //         const response = await fetch(url, {
  //           method: method,
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ email: user.email }),
  //         });
  //         const data = await response.json();
  //         setAppointments(data);
  //       } catch (error) {
  //         console.error("Error fetching appointments:", error);
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     fetchAppointments();
  //   }, [user]);

  useEffect(() => {
    setAppointments(dummyData);
  }, []);

  const filteredAppointments = appointments.filter((appointment) => {
    const {
      title,
      date,
      status,
      doctorEmail,
      patientEmail,
      doctorName,
      patientName,
    } = appointment;
    const searchKeys = [
      title,
      date,
      status,
      doctorEmail,
      patientEmail,
      doctorName,
      patientName,
    ]
      .join(" ")
      .toLowerCase();
    return searchKeys.includes(searchTerm.toLowerCase());
  });

  const handleSelectedAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  return (
    <>
      <div className="h-full overflow-auto">
        <div className="text-center p-2 mb-2 text-2xl text-[#605BFF] font-medium border-b-2">
          {selectedAppointment ? "All Appointments" : "Appointment Details"}
        </div>
        {!selectedAppointment ? (
          <>
            <input
              type="text"
              className="mt-2 w-full rounded p-2  border border-slate-300 focus:outline-[#605BFF] focus:outline-2 focus:bg-[#EFEEFF]"
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              {/* map appointment data */}
              {filteredAppointments.map((appointment, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-2 border border-[#605BFF] py-2 mr-2 rounded-md divide-x-2 divide-slate-400 mb-3 cursor-pointer"
                  onClick={() => handleSelectedAppointment(appointment)}
                >
                  <div className="col-span-1 text-center px-2">{index + 1}</div>
                  <div className="col-span-2 text-center px-2">
                    {appointment.date}
                  </div>
                  <div className="col-span-6 px-2">{appointment.title}</div>
                  <div className="col-span-3 text-center px-2">
                    {appointment.status}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <span
                className="material-symbols-rounded text-3xl text-[#605BFF] cursor-pointer"
                onClick={() => setSelectedAppointment(null)}
              >
                keyboard_backspace
              </span>
              <Text label={"Date"} value={"122"} />
              <Text label={"Time"} value={"122"} />
              <Text label={"Status"} value={"122"} />
              <Text label={"Title"} value={"122"} />
              <Text label={"Doctor"} value={"122"} />
              <Text label={"Patient"} value={"122"} />
              <Text label={"Description"} value={"122"} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default AllAppointments;
