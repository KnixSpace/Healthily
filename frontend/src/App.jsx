import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { useEffect, useState } from "react";
import Patient from "./pages/patient/Patient";
import Phome from "./pages/patient/Phome";
import NewAppoint from "./pages/patient/NewAppoint";

function App() {
  const location = useLocation();
  const [user, setUser] = useState("l");
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3000/auth/api/login/success", {
        method: "GET",
        credentials: "include",
      })
        .then((res) => {
          if (res.ok) {
            console.log("res okk");
            return res.json();
          }
        })
        .then((data) => {
          setUser(data);
          // console.log(data);
          // console.log("rol" + data?.role);
        })
        .catch((err) => {
          console.error("Fetch error", err);
        });
    };
    getUser();
  }, []);
  const PrivateRoute = ({ role, children }) => {
    return user && user.role === role ? children : <Navigate to="/" replace />;
  };

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            user ? (
              user.role === "PATIENT" ? (
                <Navigate to="/patient" />
              ) : user.role === "DOCTOR" ? (
                <Navigate to="/doctor" />
              ) : user.role === "ADMIN" ? (
                <Navigate to="/admin" />
              ) : (
                ""
              )
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/patient"
          element={
            <PrivateRoute role="PATIENT">
              <Patient user={user} />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Phome />} />
          <Route path="new" element={<NewAppoint />} />
        </Route>
        <Route
          path="/doctor"
          element={
            <PrivateRoute role="DOCTOR">
              {/* Add Doctor component and routes */}
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute role="ADMIN">
              {/* Add Admin component and routes */}
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
