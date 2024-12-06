import React from "react";
import Select from "react-select";

const DropdownMenu = ({ data, displayText, updateFields, fieldToUpdate }) => {
  return (
    <Select
      components={{
        IndicatorSeparator: () => null, // Removes the separator line
      }}
      className="font-montserrat"
      placeholder={data.defaultName}
      isSearchable={false}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          borderBottom: "2px solid #d1d5db",
          borderRadius: "none",
          boxShadow: "none",
          "&:hover": {
            borderBottom: "2px solid #d1d5db",
            cursor: "pointer",
          },
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "white",
          border: "1px solid black",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused
            ? "#E5E4E2	" // Customize focus background color
            : state.isSelected
            ? "#E5E4E2	" // Customize selected background color
            : "white",
          color: "black",
          "&:active": {
            backgroundColor: "#D3D3D3", // Prevent blue background on active state
          },
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "black", // Change dropdown icon color
          "&:hover": {
            color: "black", // Optional: hover color for the icon
          },
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: "gray", // Change placeholder text color
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          paddingLeft: "0", // Adjust padding around the placeholder/content
          paddingTop: "10px",
          paddingBottom: "10px",
        }),
      }}
      options={data.options}
      value={displayText}
      onChange={(optionSelected) => updateFields(fieldToUpdate, optionSelected)} // Updates state on option change
    />
  );
};

export default DropdownMenu;
