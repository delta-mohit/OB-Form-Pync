import React from "react";
import UserDetailsForm from "./UserDetailsForm";

const options = [
  { value: "whitefield", label: "White Field" },
  { valye: "rajajinagar", label: "Rajaji Nagar" },
  { value: "habbal", label: "Habbal" },
];
const defaultName = "Society";
const data = { options, defaultName };
const Step1 = ({ goToIndex, updateFields, formData }) => {
  return (
    <>
      <div className="text-[22px] sm:text-[24px] font-extrabold font-spartan sm:mx-auto">
        Let&apos;s get you onboarded!
      </div>
      <div className="sm:mx-auto text-[14px] text-gray-800 my-6 font-montserrat">
        <div>Please fill in your details and your society.</div>
        <div className="italic">We are currently operational in Bengaluru</div>
      </div>
      <UserDetailsForm
        data={data}
        updateFields={updateFields}
        formData={formData}
      />
      <div className="mx-auto text-sm font-montserrat text-gray-800 mb-5 flex flex-col">
        <div>Already enrolled and want us to onboard</div>
        <div className="mx-auto">
          another vehicle?{" "}
          <a
            className="text-[#1733eb] font-extrabold underline hover:cursor-pointer"
            onClick={() => goToIndex(2)}
          >
            Click here
          </a>
        </div>
      </div>
    </>
  );
};

export default Step1;
