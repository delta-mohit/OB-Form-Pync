"use client";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import Step6 from "../components/Step6";
import { IoMdArrowRoundBack } from "react-icons/io";
import useMultistepForm from "./useMultistepForm";
import { useState } from "react";

const dots = [0, 1, 2, 3, 4, 5];
const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  society: "",
  carCount: "",
  isChecked: false,
  brand: "",
  model: "",
  vehicleNumber: "",
  color: "",
  parkingType: "",
  parkingNumber: "",
  day: "",
  time: "",
  slot: "",
};

export default function Home() {
  const [formData, setFormData] = useState(INITIAL_DATA);
  function updateFields(fieldToUpdate: any, optionSelected: any) {
    setFormData((prev) => {
      return { ...prev, [fieldToUpdate]: optionSelected };
    });
  }
  const goToIndex = (index: any) => {
    goTo(index);
  };
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    goTo,
  } = useMultistepForm([
    <Step1 updateFields={updateFields} formData={formData} />,
    <Step2 updateFields={updateFields} formData={formData} />,
    <Step3 updateFields={updateFields} formData={formData} />,
    <Step4 updateFields={updateFields} formData={formData} />,
    <Step5 updateFields={updateFields} formData={formData} />,
    <Step6
      goToIndex={goToIndex}
      updateFields={updateFields}
      formData={formData}
    />,
  ]);

  return (
    <div className="h-screen w-screen">
      <div className="h-[95%] sm:h-[80%] w-[80%] sm:w-3/4 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col ">
        {step}
        <div className="w-[18rem] mx-auto flex gap-2 absolute bottom-4 left-1/2 translate-x-[-50%]">
          {!isFirstStep && (
            <button
              className="bg-[#737373] rounded-full text-white w-10 flex justify-center items-center font-spartan"
              onClick={back}
            >
              <IoMdArrowRoundBack className="size-7" />
            </button>
          )}
          <button
            className="bg-[#5f1b69] grow hover:bg-[#782385] text-white font-bold py-2 px-4 rounded-lg font-spartan"
            onClick={next}
          >
            {(() => {
              if (currentStepIndex === 4) return "Show Schedule";
              else if (isLastStep) return "Finish";
              else return "Next";
            })()}
          </button>
        </div>
        <div className="flex gap-1 absolute bottom-0 left-1/2 translate-x-[-50%]">
          {dots.map((num) => {
            return (
              <div
                key={num}
                className={`w-2 h-2 rounded-full ${
                  isLastStep && currentStepIndex === num
                    ? "bg-[#00cc00]"
                    : currentStepIndex === num
                    ? "bg-[#c811e3]"
                    : "bg-[#d9d9d9]"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
