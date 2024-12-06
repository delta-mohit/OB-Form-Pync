import React from "react";
import DropdownMenu from "./DropdownMenu";
import CheckBox from "./CheckBox";
const options = [
  {
    value: "one",
    label: "1 Car",
  },
  { value: "two", label: "2 Car" },
  { value: "three", label: "3 Car" },
];
const defaultName = "No. of Cars";
const data = { options, defaultName };
const Step2 = ({ updateFields, formData }) => {
  return (
    <>
      <div className="text-[24px] font-extrabold mx-auto font-spartan">
        Great! We&apos;d love to know you more.
      </div>
      <div className="w-fit mx-auto">
        <div className="text-[14px] text-gray-800 my-6 font-montserrat">
          <div>How many cars would you like to onboard with us:</div>
        </div>

        {/* No. of cars selection form */}

        <div className="w-full sm:w-3/4 mx-auto mb-5">
          <DropdownMenu
            data={data}
            displayText={formData.carCount}
            updateFields={updateFields}
            fieldToUpdate={"carCount"}
          />
        </div>

        <div className="text-[14px] text-gray-800 mt-4 mb-12 flex flex-col font-montserrat">
          <div>We&apos;d need details and timing preferences for your</div>
          <div>car or cars in the next sections of this form.</div>
        </div>
        <div className="text-[14px] text-gray-800 mb-10 flex flex-col font-montserrat">
          <div>If you&apos;ve more cars but would like to see our services</div>
          <div>for one first, please select the check-box below.</div>
        </div>

        <CheckBox isChecked={formData.isChecked} updateFields={updateFields} />
      </div>
    </>
  );
};

export default Step2;
