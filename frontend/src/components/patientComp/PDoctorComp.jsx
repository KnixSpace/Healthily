import dimage from "/user.png";
const PDoctorComp = ({ dname, dimg, dqualify, email, onClick }) => {
  const handleClick = () => {
    onClick({ dname, dimg, dqualify, email });
  };

  return (
    <>
      <div
        className="flex gap-4 bg-white p-2 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        <img className="size-12" src={dimage} alt="" />
        <div>
          <div className="font-medium">Praharsh</div>
          <div className="text-slate-400">M.D</div>
        </div>
      </div>
    </>
  );
};
export default PDoctorComp;
