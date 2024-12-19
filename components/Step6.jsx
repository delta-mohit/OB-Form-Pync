"use client";
import React from "react";

const wordToNumberMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  // Add more if needed
};

const data = [
  { day: "Monday", msg: "Week Off" },
  { day: "Tuesday", msg: "Eco-washing" },
  { day: "Wednesday", msg: "Dusting" },
  { day: "Thursday", msg: "Eco-Washing" },
  { day: "Friday", msg: "Dusting" },
  { day: "Saturday", msg: "Eco-Washing" },
  { day: "Sunday", msg: "Dusting" },
];

const dayMap = {
  Wed: "Wednesday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const Step6 = ({ goToIndex, formData, updateFields }) => {
  function clearSomeFields() {
    const fields = [
      "brand",
      "model",
      "vehicleNumber",
      "color",
      "parkingType",
      "parkingNumber",
      "vehicleType",
      "day",
      "time",
      "slot",
    ];
    fields.forEach((field) => updateFields(field, null));
  }

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
            <div key={d} className="flex sm:flex-col flex-row gap-5 sm:gap-3">
              <button
                className={`w-[120px] ${
                  dayMap[formData.day] === d.day
                    ? "bg-[#1733eb] text-white"
                    : d.day === "Monday"
                    ? "bg-[#424242]  text-white"
                    : "bg-[#d9d9d9]  text-black"
                }  text-[14px] sm:text-[15px] py-2 px-2 border rounded-lg`}
              >
                {d.day}
              </button>
              <div className="flex flex-col justify-center">
                <div className="text-[15px] sm:text-[16.6px] sm:text-center">
                  {dayMap[formData.day] === d.day ? "Deep Cleaning" : d.msg}
                </div>
                <div className="text-[10.8px] sm:text-center">
                  {dayMap[formData.day] === d.day
                    ? formData.time
                    : d.day === "Monday"
                    ? ""
                    : formData.slot}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {wordToNumberMap[formData.carCount?.value?.toLowerCase()] >
        formData.whichVehicle && (
        <div className={"grow " + (formData.isChecked ? "hidden" : "block")}>
          <button
            className="w-[18rem] absolute bottom-20 left-1/2 translate-x-[-50%] bg-[#ffd994] hover:bg-[#f3d397] text-black font-bold py-2 px-2 rounded-lg"
            onClick={() => {
              goToIndex(2);
              updateFields("whichVehicle", formData.whichVehicle + 1);
              clearSomeFields();
            }}
          >
            Add another vehicle
          </button>
        </div>
      )}
    </>
  );
};

export default Step6;
