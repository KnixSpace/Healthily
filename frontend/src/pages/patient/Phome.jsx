import Pappointment from "../../components/patientComp/Pappointment";
import Nodata from "../../components/NoData";

const Phome = () => {
  const data = "3";
  return (
    <div className="bg-white rounded-xl p-4 h-full overflow-auto">
      {data ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4">
          {/* {Array.from({ length: 100 }, (_, i) => (
          // <div key={i} className="p-4 bg-white rounded-md mb-4">
          //   Content {i + 1}
          // </div>
          // <Pappointment />
        ))} */}
          <Pappointment />
        </div>
      ) : (
        <Nodata />
      )}
    </div>
  );
};
export default Phome;
