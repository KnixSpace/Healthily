import CountUp from "react-countup";
import { openPage } from "../register/RegisterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Register from "../register/Register";
import Navbar from "../navbar/Navbar";
const Home = () => {
  const dispatch = useDispatch();
  const [counts, setCounts] = useState([]);
  useEffect(() => {
    const getCount = async () => {
      const data = await fetch("http://localhost:8080/hms/api/home/count");
      const res = await data.json();
      console.log(res);
      setCounts([res, res, res]);
    };
    getCount();
  }, []);
  return (
    <>
      <section className="flex flex-col h-[500px] sm:h-[700px] bg-hero bg-[#01001f80] bg-blend-overlay bg-no-repeat  bg-bottom ">
        <Navbar />
        <section className="flex flex-col justify-center grow px-8 md:px-[200px] text-white">
          <div className="text-2xl  md:text-5xl font-semibold leading-tight mb-4">
            Empowering Health: Your Comprehensive <br /> E-Healthcare Solution
          </div>
          <div className="text-lg md:text-3xl font-medium">
            Your Health, Our Priority: <br />
            <span className="underline decoration-[#605BFF] underline-offset-4 md:underline-offset-8 decoration-2 md:decoration-4">
              Accessible Care, Anytime, Anywhere
            </span>
          </div>
          <div className="pt-4 md:mt-6 mt-2">
            <button className="bg-[#605BFF] md:px-20 px-12 py-2 md:text-xl rounded-md">Get Started</button>
          </div>
        </section>
      </section>
    </>
  );
};
export default Home;
