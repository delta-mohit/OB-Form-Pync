import React, { useState } from "react";

const ForwardButton = ({ currentStepIndex, isLastStep, formData, next }) => {
  const [loading, setLoading] = useState(false);
  //API Calling Fuction - START
  async function formSubmitHandler() {
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      society: formData.society.label,
      carCount: formData.carCount.label,
      isChecked: formData.isChecked,
      brand: formData.brand.label,
      model: formData.model.label,
      vehicleNumber: formData.vehicleNumber,
      color: formData.color,
      parkingType: formData.parkingType.label,
      parkingNumber: formData.parkingNumber,
      day: formData.day, //This is day is for deep clean/ interior clean day at step 4
      time: formData.time,
      slot: formData.slot,
    };

    try {
      setLoading(true);
      const response = await fetch("/api/sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully!");
        return true;
      } else {
        console.log("Failed to submit feedback.");
        return false;
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      console.log("An error occurred. Please try again.");
      return false;
    }
  }

  //API Calling Function - END
  return (
    <button
      className="bg-[#5f1b69] grow hover:bg-[#782385] h-10 text-white font-bold py-2 px-4 rounded-lg font-spartan"
      onClick={() => {
        if (!loading) {
          if (currentStepIndex === 4) {
            const isSubmited = formSubmitHandler();
            setLoading(false);
            if (isSubmited) next();
          } else {
            next();
          }
        }
      }}
    >
      {loading ? (
        <div className="h-6 w-6 mx-auto border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        (() => {
          if (currentStepIndex === 4) return "Submit Form";
          else if (isLastStep) return "Finish";
          else return "Next";
        })()
      )}
    </button>
  );
};

export default ForwardButton;
