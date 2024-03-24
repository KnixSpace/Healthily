import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [user, setUser] = useState();
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
          console.log(data);
        })
        .catch((err) => {
          console.error("Fetch error", err);
        });
    };
    getUser();
  }, []);
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
