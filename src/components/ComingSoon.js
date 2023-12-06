import React from "react";

const ComingSoon = (props) => {
  return (
    <div className="w-[95%] m-auto h-96 bg-[#495e57] rounded-2xl flex justify-center items-center text-2xl text-[#f4ce14] font-semibold text-center">
      {props.pageName} Page Coming Soon!
    </div>
  );
};

export default ComingSoon;
