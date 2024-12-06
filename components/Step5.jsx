"use client";
import React, { useState } from "react";
const time = [
  "6 - 6:30 AM",
  "6:30 - 7 AM",
  "7 - 7:30 AM",
  "7:30 - 8 AM",
  "8 - 8:30 AM",
  "8:30 - 9 AM",
  "9 - 9:30 AM",
  "9:30 - 10 AM",
  "10 - 10:30 AM",
  "10:30 - 11 AM",
  "11 - 11:30 AM",
];

const Step5 = ({ updateFields, formData }) => {
  const [activeTime, setActiveTime] = useState(formData.slot);
  return (
    <>
      <div className="text-[22px] sm:text-[24px] font-extrabold font-spartan mx-auto">
        Your car is all set to blush!
      </div>
      <div className="w-fit mx-auto font-montserrat text-[14px] mt-10">
        Please select your daily cleaning time slot?
      </div>
      <div className="w-full sm:w-1/2 mx-auto mt-10 grid grid-cols-3 gap-4 pt-4 text-[14px] sm:text-[16px]">
        {time.map((t) => {
          return (
            <button
              key={t}
              className={`text-black rounded-lg h-12  sm:h-8
                    ${
                      activeTime === t
                        ? "bg-[#ffd994]"
                        : "bg-[#d9d9d9] hover:bg-[#b6b4b4]"
                    }
                    `}
              onClick={() => {
                setActiveTime(t);
                updateFields("slot", t);
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Step5;
