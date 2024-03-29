import dimage from "/user.png";
import TimeSelect from "../../components/formComp/TimeSelect";
import PDoctorComp from "../../components/patientComp/PDoctorComp";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewAppoint = () => {
  const [open, setOpen] = useState(false);
  const handleSnackbar = () => {
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  // console.log(selectedDoctor);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (selectedDoctor) {
      console.log("Appoint not available");
      handleSnackbar();
    } else {
      //fetch the available doctor from backend
      //set doctor
      console.log(data);
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 h-full overflow-auto">
      <div className="text-center p-2 mb-2 text-2xl text-[#605BFF] font-medium border-b-2">
        New Appointment
      </div>
      <div className="h-[88%] overflow-auto my-4">
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:w-[500px] w-full gap-4"
          >
            <div>
              <input
                {...register("title", { required: "Title is required" })}
                className="my-2 border-b-2 border-[#605BFF] text-2xl focus:outline-none px-1 w-full"
                type="text"
                placeholder="Title..."
              />
              {errors.title && (
                <span className="text-red-500">{errors.title.message}</span>
              )}
            </div>
            <div>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="my-2 border-b-2 border-[#605BFF] text-xl focus:outline-none px-1 w-full"
                type="text"
                rows={1}
                placeholder="Description"
              />
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div>
              <input
                {...register("date", { required: "Date is required" })}
                type="date"
                className="my-2 border-b-2 border-[#605BFF] focus:outline-none px-1 w-full"
              />
              {errors.date && (
                <span className="text-red-500">{errors.date.message}</span>
              )}
            </div>
            <TimeSelect register={register} errors={errors} />
            <div className="h-[200px] bg-[#EFEEFF] p-3 overflow-auto grid grid-cols-1 md:grid-cols-1 gap-4">
              {Array.from({ length: 100 }, (_, i) => (
                <PDoctorComp
                  onClick={setSelectedDoctor}
                  dname="Praharsh"
                  dqualify="M.D"
                  key={i}
                />
              ))}
            </div>
            <div className="my-2 flex gap-4 bg-white p-2 rounded-md border border-[#605BFF]">
              <img className="size-12" src={dimage} alt="" />
              <div>
                <div className="font-medium">Praharsh</div>
                <div className="text-slate-400">M.D</div>
              </div>
            </div>
            <button
              type="submit"
              className="my-4 bg-[#605BFF] text-white p-2 rounded-md"
            >
              {selectedDoctor ? "Book Appointment" : "Check Availability"}
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="Success"
      >
        <Alert severity="success">
          Appointment Booked
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NewAppoint;
