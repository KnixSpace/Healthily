import userImg from "/user.png";
import backDrop from "/doctorBack.jpg";
import Text from "../../components/Text";
import { useState } from "react";
import UpdatePatientForm from "./UpdatePatientForm";

const PatientProfile = ({ user }) => {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div className="h-full overflow-auto">
        {edit ? (
          <>
            <UpdatePatientForm
              user={user}
              onClickSet={() => {
                setEdit(false);
              }}
            />
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2 h-[85%] overflow-auto">
              <div className="w-full bg-[#efeeff] h-[200px] overflow-hidden object-cover rounded-md">
                <img src={backDrop} alt="" className="w-full" />
              </div>
              <div className="px-8">
                <img
                  src={user?.image}
                  alt=""
                  className="size-24 mt-[-5%] border-4 border-white rounded-full"
                />
              </div>
              <div className="flex-grow flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="px-8 pt-2 text-3xl font-semibold text-[#605bff]">
                    {user?.name}
                  </div>
                  <div className="px-8">
                    <button
                      onClick={() => {
                        setEdit(true);
                      }}
                      className="px-8 py-2 rounded-md text-white bg-[#605bff]"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
                <div className="px-8 text-2xl font-medium text-slate-500">
                  Patient
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
                <div className="px-8 text-lg font-medium text-slate-500">
                  <Text label={"Birth Date"} value={"12 March 2003"} />
                </div>
                <div className="px-8 text-lg font-medium text-slate-500">
                  <Text label={"Blood Group"} value={"O+ Ve"} />
                </div>
                <div className="px-8 text-lg font-medium text-slate-500">
                  <Text
                    label={"Address"}
                    value={"H-404, Balaji Park, Navsari"}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default PatientProfile;
