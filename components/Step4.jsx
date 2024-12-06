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

const dayMap = {
  Wed: "Wednesday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const Step4 = ({ updateFields, formData }) => {
  const [activeDay, setActiveDay] = useState(formData.day);
  const [activeTime, setActiveTime] = useState(formData.time);
  return (
    <>
      <div className="text-[22px] sm:text-[24px] font-extrabold font-spartan mx-auto">
        Awesome! tell us about your timing preferences.
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-[60%] mx-auto mt-5 sm:mt-10 gap-6 sm:gap-8">
        <div className="w-full sm:w-1/2 mx-auto flex flex-col gap-5 sm:gap-10 font-montserrat text-[14px]">
          <div>When would you like us to do your interior cleaning?</div>
          <div>
            Note:{" "}
            <span className="italic">
              We only provide interior cleaning services on Wednesdays, Fridays
              and Weekends.
            </span>
          </div>
          <div className="flex justify-between text-[12px]">
            {["Wed", "Fri", "Sat", "Sun"].map((day) => (
              <button
                key={day}
                onClick={() => {
                  updateFields("day", day);
                  setActiveDay(day);
                }}
                className={`w-14 h-10 sm:w-12 sm:h-8 py-2 px-2 rounded-lg  ${
                  activeDay === day
                    ? "bg-[#1733eb] text-white" // Active button styles
                    : "bg-[#d9d9d9] text-black hover:bg-[#b6b4b4]" // Default styles
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="text-[14px] font-montserrat">
            Please choose your timing preference from the below available time
            slots on {dayMap[activeDay]}:
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 text-[11px]">
            {time.map((time) => {
              return (
                <button
                  key={time}
                  className={`text-black rounded-lg h-8
                    ${
                      activeTime === time
                        ? "bg-[#ffd994]"
                        : "bg-[#d9d9d9] hover:bg-[#b6b4b4]"
                    }
                    `}
                  onClick={() => {
                    setActiveTime(time);
                    updateFields("time", time);
                  }}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;
