import React from "react";
import DropdownMenu from "./DropdownMenu";

const dataA = {
  options: [
    { value: "one", label: "Brand 1" },
    { value: "two", label: "Brand 2" },
    { value: "three", label: "Brand 3" },
  ],
  defaultName: "Brand",
};

const dataB = {
  options: [
    { value: "one", label: "Model 1" },
    { value: "two", label: "Model 2" },
    { value: "three", label: "Model 3" },
  ],
  defaultName: "Model",
};

const dataC = {
  options: [
    { value: "one", label: "Open parking" },
    { value: "two", label: "Basement parking" },
    { value: "three", label: "Ground floor but covered parking" },
  ],
  defaultName: "Parking Type",
};

const dataD = {
  options: [
    { value: "two", label: "2 Wheeler" },
    { value: "four", label: "4 Wheeler" },
  ],
  defaultName: "Vehicle Type",
};

const CarDetailsForm = ({ updateFields, formData }) => {
  return (
    <form className="w-full sm:w-[60%] mx-auto mt-2 sm:mt-10 font-montserrat">
      {/* <div className="grid md:grid-cols-2 md:gap-6">
        <div className="w-full mx-auto mb-1 sm:mb-5">
          <DropdownMenu
            data={dataA}
            displayText={formData.brand}
            updateFields={updateFields}
            fieldToUpdate={"brand"}
          />
        </div>
        <div className="w-full mx-auto mb-1 sm:mb-5">
          <DropdownMenu
            data={dataB}
            displayText={formData.model}
            updateFields={updateFields}
            fieldToUpdate={"model"}
          />
        </div>
      </div> */}

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-1 sm:mb-5 group">
          <input
            type="text"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            value={formData.brand}
            onChange={(e) => updateFields("brand", e.target.value)}
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-[16px] text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Brand
          </label>
        </div>
        <div className="relative z-0 w-full mb-1 sm:mb-5 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            value={formData.model}
            onChange={(e) => updateFields("model", e.target.value)}
            required
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-[16px] text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Model
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-1 sm:mb-5 group">
          <input
            type="text"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            value={formData.vehicleNumber}
            onChange={(e) => updateFields("vehicleNumber", e.target.value)}
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-[16px] text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Vehicle Number
          </label>
          <div className="text-[9px] mt-1 ">
            Please mention the complete vehicle number
          </div>
        </div>
        <div className="relative z-0 w-full mb-1 sm:mb-5 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            value={formData.color}
            onChange={(e) => updateFields("color", e.target.value)}
            required
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-[16px] text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Colour
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="w-full mx-auto mb-1 sm:mb-5">
          <DropdownMenu
            data={dataC}
            displayText={formData.parkingType}
            updateFields={updateFields}
            fieldToUpdate={"parkingType"}
          />
        </div>
        <div className="relative z-0 w-full mb-1 sm:mb-5 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            value={formData.parkingNumber}
            onChange={(e) => updateFields("parkingNumber", e.target.value)}
            required
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-[16px] text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Parking Number
          </label>
        </div>
      </div>
      <div className="w-full sm:w-1/2 mb-1 mx-auto">
        <DropdownMenu
          data={dataD}
          displayText={formData.vehicleType}
          updateFields={updateFields}
          fieldToUpdate={"vehicleType"}
        />
      </div>
    </form>
  );
};

export default CarDetailsForm;
