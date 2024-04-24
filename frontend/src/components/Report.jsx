import { useState } from "react";
import Text from "./Text";

const Report = () => {
  const [diagnose, setDiagnose] = useState(false);
  const [report, setReport] = useState("");
  const handleSubmit = () => {
    console.log(report);
  };
  return (
    <>
      {!diagnose && (
        <>
          <div>
            <button
              className="bg-[#605BFF] px-6 py-2 rounded-md text-white"
              onClick={() => {
                setDiagnose(true);
              }}
            >
              Diagnose
            </button>
          </div>
        </>
      )}
      {diagnose ? (
        <>
          <div className="flex items-start">
            <Text label={"Report"} />
            <div className="w-full h-[150px] overflow-y-auto">
              <textarea
                id="report"
                className="text-lg font-medium  text-slate-500 focus:outline-none px-2 w-full "
                type={"text"}
                rows={5}
                placeholder="Write Prescription"
                value={report}
                onChange={(e) => {
                  setReport(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button
              onClick={handleSubmit}
              className="bg-[#605BFF] px-8 py-2 rounded-md text-white"
            >
              Save
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Report;
