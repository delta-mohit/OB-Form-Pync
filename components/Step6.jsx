"use client";
import React from "react";

const data = [
  { day: "Monday", msg: "Week Off", time: "" },
  { day: "Tuesday", msg: "Eco-washing", time: "8-8:30 AM" },
  { day: "Wednesday", msg: "Deep Clean", time: "9:30-10 AM" },
  { day: "Thursday", msg: "Eco-Washing", time: "8-8:30 AM" },
  { day: "Friday", msg: "Dusting", time: "8-8:30 AM" },
  { day: "Saturday", msg: "Eco-Washing", time: "8-8:30 AM" },
  { day: "Sunday", msg: "Dusting", time: "8-8:30 AM" },
];

const Step6 = ({ goToIndex, updateFields, formData }) => {
  return (
    <>
      <div className="text-[22px] sm:text-[24px] font-extrabold font-spartan mx-auto">
        Welcome to the Pync family!
      </div>
      <div className="w-full sm:w-[45%] sm:text-center mx-auto font-montserrat text-[14px] my-3 sm:my-10">
        Thank you for choosing us. We&apos;ll be taking care of{" "}
        <br className="hidden sm:block" /> your Jeep as per the below schedule
      </div>
      <div className="sm:-mx-20 mt-4 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between font-montserrat">
        {data.map((d) => {
          return (
            <div className="flex sm:flex-col flex-row gap-5 sm:gap-3">
              <button class="w-[120px] bg-[#d9d9d9] hover:bg-[#b6b4b4] text-black text-[14px] sm:text-[15px] py-2 px-2 border rounded-lg ">
                {d.day}
              </button>
              <div className="flex flex-col justify-center">
                <div className="text-[15px] sm:text-[16.6px] sm:text-center">
                  {d.msg}
                </div>
                <div className="text-[10.8px] sm:text-center">{d.time}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        class="w-[18rem] mx-auto mt-5 sm:mt-[70px] bg-[#ffd994] hover:bg-[#f3d397] text-black font-bold py-2 px-2 rounded-lg"
        onClick={() => goToIndex(2)}
      >
        Add another car
      </button>
    </>
  );
};

export default Step6;
