import Text from "./Text";

const AppointmentDetails = ({ appointmentID, onBackToAppointments }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <span
          className="material-symbols-rounded text-3xl text-[#605BFF] cursor-pointer"
          onClick={onBackToAppointments}
        >
          keyboard_backspace
        </span>
        <Text label={"Date"} value={"122"} />
        <Text label={"Time"} value={"122"} />
        <Text label={"Status"} value={"122"} />
        <Text label={"Title"} value={"122"} />
        <Text label={"Doctor Name"} value={"122"} />
        <Text label={"Patient Name"} value={"122"} />
        <Text label={"Description"} value={"122"} />
      </div>
    </>
  );
};
export default AppointmentDetails;
