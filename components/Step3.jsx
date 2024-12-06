import React from "react";
import CarDetailsForm from "./CarDetailsForm";

const Step3 = ({ updateFields, formData }) => {
  return (
    <>
      <div className="text-[22px] sm:text-[24px] font-extrabold font-spartan mx-auto">
        Tell us more about your car:
      </div>

      <CarDetailsForm updateFields={updateFields} formData={formData} />
      <div className="mx-auto w-full sm:w-[60%] text-[14px] font-montserrat sm:text-center text-gray-800 mt-5 flex flex-col">
        <div>
          Please mention the exact parking number of your vehicle. Also mention
          the exact basement if your society has different basements (eg. UB, LB
          or ground parking)
        </div>
      </div>
    </>
  );
};

export default Step3;
