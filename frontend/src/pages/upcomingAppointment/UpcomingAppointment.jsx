import { useEffect, useState } from "react";
import Appointment from "../../components/Appointment";
import AppointmentDetails from "../../components/AppointmentDetails";
import NoData from "../../components/NoData";
import { useSelector } from "react-redux";

const UpcomingAppointment = ({ user }) => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleBackToAppointments = () => {
    setSelectedAppointment(null);
  };

  const { selectedDate } = useSelector((store) => store.calendar);

  useEffect(() => {
    const fetchUpcomingAppointments = () => {
      let apiEndpoint, method, body;

      if (user.role === "ADMIN") {
        apiEndpoint = "http://localhost:8080/healthily/api/admin/upcoming";
        method = "GET";
      } else if (user.role === "PATIENT") {
        apiEndpoint = "http://localhost:8080/healthily/api/patient/upcoming";
        method = "POST";
        body = JSON.stringify({ userEmail: user.email });
      } else if (user.role === "DOCTOR") {
        apiEndpoint = "http://localhost:8080/healthily/api/doctor/upcoming";
        method = "POST";
        body = JSON.stringify({ userEmail: user.email });
      }

      fetch(apiEndpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body,
      })
        .then((response) => response.json())
        .then((data) => {
          setUpcomingAppointments(data);
        })
        .catch((error) => {
          console.error("Error fetching upcoming appointments:", error);
        });
    };

    const fetchAppointmentsByDate = () => {
      if (selectedDate) {
        let apiEndpoint, method, body;

        if (user.role === "ADMIN") {
          apiEndpoint = "http://localhost:8080/healthily/api/admin/date";
          method = "POST";
          body = JSON.stringify({ date: selectedDate });
        } else if (user.role === "PATIENT") {
          apiEndpoint = "http://localhost:8080/healthily/api/patient/date";
          method = "POST";
          body = JSON.stringify({ userEmail: user.email, date: selectedDate });
        } else if (user.role === "DOCTOR") {
          apiEndpoint = "http://localhost:8080/healthily/api/doctor/date";
          method = "POST";
          body = JSON.stringify({ userEmail: user.email, date: selectedDate });
        }

        fetch(apiEndpoint, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body,
        })
          .then((response) => response.json())
          .then((data) => {
            setUpcomingAppointments(data);
          })
          .catch((error) => {
            console.error("Error fetching appointments by date:", error);
          });
      }
    };

    if (selectedDate) {
      fetchAppointmentsByDate();
    } else {
      fetchUpcomingAppointments();
    }
  }, [user, selectedDate]);

  return (
    <>
      <div className="h-full overflow-auto">
        {upcomingAppointments.length > 0 ? (
          <>
            <div className="text-center p-2 mb-2 text-2xl text-[#605BFF] font-medium border-b-2">
              {!selectedAppointment
                ? "Upcoming Appointments"
                : "Appointment Details"}
            </div>
            {!selectedAppointment ? (
              <>
                <Appointment
                  role={user.role}
                  appointments={upcomingAppointments}
                  onClick={setSelectedAppointment}
                />
              </>
            ) : (
              <>
                <AppointmentDetails
                  onBackToAppointments={handleBackToAppointments}
                />
              </>
            )}
          </>
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
};
export default UpcomingAppointment;