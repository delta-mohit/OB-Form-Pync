const data = {
  name: "",
  contact: "",
  address: {
    houseNumber: "none",
    societyUniqueCode: "none",
    societyName: "",
    area: "none",
    address: "none",
    city: "none",
    state: "KARNATAKA",
    pincode: "none",
    residentialAreaType: "SOCIETY",
  },
  createVehicleRequestList: [
    {
      parkingNumber: "",
      subscriptionStatus: "YET_TO_START",
      registrationNumber: "NONE",
      brand: "",
      model: "",
      vehicleType: "",
      vehicleBodyType: "OTHER",
      color: "",
    },
  ],
  acquisitionSource: "string",
  referredBy: "none",
  referredTo: "none",
};

export default async function createCustomer(formData) {
  data.name = formData?.firstName + " " + formData?.lastName;
  data.contact = formData?.mobile;
  data.address.societyName = formData?.society?.label;
  data.createVehicleRequestList[0].brand = formData?.brand || "NOT_SPECIFIED";
  data.createVehicleRequestList[0].model = formData?.model || "NOT_SPECIFIED";
  data.createVehicleRequestList[0].registrationNumber =
    formData?.vehicleNumber || "TEST02"; //registrationNumber be uppercase alphanumeric with spaces
  data.createVehicleRequestList[0].color = formData?.color || "NOT_SPECIFIED";
  data.createVehicleRequestList[0].parkingNumber =
    formData?.parkingNumber || "NOT_SPECIFIED";
  data.createVehicleRequestList[0].vehicleType =
    formData?.vehicleType?.value || "OTHER"; // OTHER, TWO_WHEELER, CAR

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "http://pync-monolith-dev.ap-south-1.elasticbeanstalk.com/api/v1/customer",
      requestOptions
    );

    if (!response.ok) {
      const error = await response.json(); // Read the error message from the response body
      throw error;
    }
    console.log("Customer created");
    // const result = await response.json(); // Parse response as JSON
    return { success: true, message: "Customer Created Successfully!!" };
  } catch (error) {
    console.error("Error in createCustomer function:", error);
    return {
      success: false,
      message: error.error.message,
    };
  }
}
