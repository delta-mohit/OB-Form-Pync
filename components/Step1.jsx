import React from "react";
import UserDetailsForm from "./UserDetailsForm";

const societies = [
  "Adarsh Palm Retreat (APR)",
  "Akme harmony (AH)",
  "Assetz 63 Degree East (A63)",
  "Astro Green Park Regency (AGP)",
  "Bhuvana Greens (BG)",
  "Bren Edge Waters (BEW)",
  "Bren Zahara (BZ)",
  "Brigade Parkside View (BPV)",
  "Buildafina Lumos (BL)",
  "Confident Phoenix (CP)",
  "DSR Eden Greens",
  "DSR Woodwinds (DSRW)",
  "Emmanuel Heights (EH)",
  "Estella Maple Square (EMS)",
  "Haryanvi Orchid Lake View (HG)",
  "Mahaveer Seasons",
  "Mana Tropicale (MT)",
  "Mythri Sapphire",
  "ND Passion (NDP)",
  "Prestige - Kew Gardens (PKG)",
  "Prestige Ferns Residency (PF)",
  "Purva Fountain Square (PFS)",
  "Purva Riviera (PR)",
  "Purva Skydale (PSD)",
  "Purva Skywood (PSW)",
  "Purva Sunshine (PS)",
  "Purva Whitehall (PW)",
  "Rohan Iksha (RI)",
  "Rohan Jharoka Phase 1 (RJ-1)",
  "Rohan Jharoka Phase 2 (RJ-2)",
  "Royal Avenue Residency (RA)",
  "Salarpuria Sanctity (SS)",
  "SCW Towers (SCWT)",
  "SCW Villaments (SCWV)",
  "Shobha Cinnamon and Saffron",
  "SJR Palazza City",
  "SJR Redwood (SJRR)",
  "SJR Verity (SJRV)",
  "SJR Watermark (SJRW)",
  "SNN Raj Etternia (SNNRE)",
  "Sobha Palladian (SP)",
  "Sobha Royal Pavilion (SRP)",
  "Springfields Apartments (SF)",
  "VRR Fortuna (VRRF)",
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
