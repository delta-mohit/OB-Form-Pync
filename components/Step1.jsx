import React from "react";
import UserDetailsForm from "./UserDetailsForm";

const societies = [
  "Akme harmony (AH)",
  "Bren Zahara (BZ)",
  "Brigade Parkside View (BPV)",
  "Prestige - Kew Gardens (PKG)",
  "Purva Skywood (PSW)",
  "Purva Sunshine (PS)",
  "SJR Redwood (SJRR)",
  "SJR Watermark (SJRW)",
  "Sobha Palladian (SP)",
  "Springfields Apartments (SF)",
  "Rohan Jharoka Phase 1 (RJ-1)",
  "Prestige Ferns Residency (PF)",
  "SNN Raj Etternia (SNNRE)",
  "Purva Riviera (PR)",
  "Purva Whitehall (PW)",
  "SJR Verity (SJRV)",
  "SCW Villaments (SCWV)",
  "Buildafina Lumos (BL)",
  "Bhuvana Greens (BG)",
  "Emmanuel Heights (EH)",
  "Estella Maple Square (EMS)",
  "Rohan Jharoka Phase 2 (RJ-2)",
  "Astro Green Park Regency (AGP)",
  "SCW Towers (SCWT)",
  "Confident Phoenix (CP)",
  "Purva Skydale (PSD)",
  "Rohan Iksha (RI)",
  "DSR Eden Greens",
  "Bren Edge Waters (BEW)",
  "Purva Fountain Square (PFS)",
  "Royal Avenue Residency (RA)",
  "Salarpuria Sanctity (SS)",
  "ND Passion (NDP)",
  "Haryanvi Orchid Lake View (HG)",
  "Adarsh Palm Retreat (APR)",
  "DSR Woodwinds (DSRW)",
  "VRR Fortuna (VRRF)",
  "Sobha Royal Pavilion (SRP)",
  "Mythri Sapphire",
  "SJR Palazza City",
  "Shobha Cinnamon and Saffron",
  "Mahaveer Seasons",
  "Other",
];

const options = societies.map((society) => {
  const value = society
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .toLowerCase(); // Convert to lowercase
  return { value: value, label: society };
});

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
