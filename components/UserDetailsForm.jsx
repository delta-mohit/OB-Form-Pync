import React from "react";
import DropdownMenu from "./DropdownMenu";

const UserDetailsForm = ({ data, updateFields, formData }) => {
  return (
    <form className="w-[100%] sm:w-[60%] mx-auto font-montserrat">
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            autoComplete="off"
            value={formData.firstName}
            required
            onChange={(e) => updateFields("firstName", e.target.value)}
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-[16px] text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            value={formData.lastName}
            required
            onChange={(e) => updateFields("lastName", e.target.value)}
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-[16px] text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            value={formData.email}
            required
            onChange={(e) => updateFields("email", e.target.value)}
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-[16px] text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Email ID
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            value={formData.mobile}
            required
            onChange={(e) => updateFields("mobile", e.target.value)}
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-[16px] text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Mobile
          </label>
          <div className="text-[10px] mt-1"> Just enter the 10 digits</div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 mb-5 mx-auto">
        <DropdownMenu
          data={data}
          displayText={formData.society}
          updateFields={updateFields}
          fieldToUpdate={"society"}
        />
      </div>
    </form>
  );
};

export default UserDetailsForm;
