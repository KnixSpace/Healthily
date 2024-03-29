import PAppointComp from "../../components/patientComp/PAppointComp";
import Nodata from "../../components/NoData";

const Phome = () => {
  const data = "3";
  return (
    <div className="bg-white rounded-xl p-4 h-full overflow-auto">
      {data ? (
        <>
          <div className="text-center p-2 mb-2 text-2xl text-[#605BFF] font-medium border-b-2">
            Upcoming Appointments
          </div>
          <div className="h-[88%] overflow-auto my-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 pr-3">
              {Array.from({ length: 100 }, (_, i) => (
                <PAppointComp key={i} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Nodata />
      )}
    </div>
  );
};
export default Phome;
