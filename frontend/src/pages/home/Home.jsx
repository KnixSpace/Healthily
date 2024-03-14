import CountUp from "react-countup";
import Navbar from "../navbar/Navbar";
import "./home.css";
import { useEffect, useState } from "react";
const Home = () => {
  const [counts, setCounts] = useState([]);
  useEffect(() => {
    const getCount = async () => {
      const data = await fetch("http://localhost:8080/hms/api/count");
      const res = await data.json();
      console.log(res);
      setCounts([res, res, res]);
    
    };
    getCount();
  }, []);
  return (
    <>
      <div className="home-container">
        <div className="home-landing">
          <Navbar />
          <section className="home-text">
            <section className="home-headline">
              Empowering Healthcare: <br />
              Your Comprehensive Solution for
              <br />
              Modern Medical Management
            </section>
            <section className="home-tagline">
              Transforming Healthcare Together: Where Wellness Meets Innovation.
            </section>
            <button className="get-started-btn">Get Started</button>
            <section className="home-stats">
              <div className="home-stats-1">
                <CountUp end={counts[0]+100} duration={1} />+<div>Patients</div>
              </div>
              <div className="home-stats-2">
                <CountUp end={counts[1]+100} duration={1} />+<div>Doctors</div>
              </div>
              <div className="home-stats-3">
                <CountUp end={counts[2]+100} duration={1} />+<div>Appointments</div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
