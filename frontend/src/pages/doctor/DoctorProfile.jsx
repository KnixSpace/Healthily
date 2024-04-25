import userImg from "/user.png";
import backDrop from "/doctorBack.jpg";
import Text from "../../components/Text";
import { useEffect, useState } from "react";

const DoctorProfile = ({ user }) => {
  const [doctor, setDoctor] = useState();
  const times = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
  ];

  useEffect(() => {
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDoctor(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="h-full overflow-auto">
        <div className="flex flex-col h-[90%] overflow-auto">
          <div className="w-full bg-[#efeeff] h-[200px] overflow-hidden object-cover rounded-md shrink-0">
            <img src={backDrop} alt="" className="w-full" />
          </div>
          <div className="px-8 shrink-0">
            <img
              src={user?.image}
              alt=""
              className="size-24 mt-[-5%] border-4 border-white bg-white rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="px-8 pt-2 text-3xl font-semibold text-[#605bff]">
                {user?.name}
              </div>
              <div className="px-8">
                
                <button
                  // onClick={handelRemoveClick}
                  className="px-8 py-2 rounded-md text-white bg-[#605bff]"
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="px-8 text-2xl font-medium text-slate-500">
              Orthologist
            </div>
            <div className="px-8 text-lg font-medium text-slate-500">
              <Text label={"Email Id"} value={"kruplgp2003@gmail.com"} />
            </div>
            <div className="px-8 text-lg font-medium text-slate-500">
              <Text label={"Contact"} value={"9662517364"} />
            </div>
            <div className="px-8 text-lg font-medium text-slate-500">
              <Text label={"Aadhar-card"} value={"1111-258-1421-9521"} />
            </div>
          </div>
          <div className="mt-4 py-4 px-8 flex gap-3 w-full border-t-2">
            <div className="text-lg font-medium text-[#605BFF] w-[150px]">
              Slots :
            </div>
            <div className="text-lg font-medium text-slate-500 grid grid-cols-6 gap-2 w-full">
              <div className="grid grid-cols-1 gap-1">
                <div>Time</div>
                {times.map((time, key) => (
                  <div className="" key={key}>
                    {time}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-1 justify-items-center">
                {/* update this with map */}
                <div>Monday</div>
                {times.map((index, key) => (
                  <div>
                    {index && (
                      <>
                        <span className="material-symbols-rounded text-green-500">
                          check
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div>Tuesday</div>
              <div>Wednesday</div>
              <div>Thursday</div>
              <div>Friday</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DoctorProfile;
