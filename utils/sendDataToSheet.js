export default async function formSubmitHandler(formData) {
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
    const response = await fetch("/api/sheet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Feedback submitted successfully!");
    } else {
      console.log("Failed to submit feedback.");
    }
  } catch (error) {
    console.error("Error submitting feedback:", error);
    console.log("An error occurred. Please try again.");
  }
}
