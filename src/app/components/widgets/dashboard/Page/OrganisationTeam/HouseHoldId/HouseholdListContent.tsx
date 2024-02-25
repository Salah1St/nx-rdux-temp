import HouseholdListDataContent from "./HouseholdListDataContent";
import HouseholdListLocation from "./HouseholdListLocation";
import HouseholdListSearchBar from "./HouseholdListSearchBar";

function HouseholdListContent() {
  const data = [
    {
      address: "Address",
      total_carbon_footprint: 1,
    },
    {
      address: "Address",
      total_carbon_footprint: 2,
    },
    {
      address: "Address",
      total_carbon_footprint: 3,
    },
    {
      address: "Address",
      total_carbon_footprint: 4,
    },
    {
      address: "Address",
      total_carbon_footprint: 5,
    },
    {
      address: "Address",
      total_carbon_footprint: 6,
    },
    {
      address: "Address",
      total_carbon_footprint: 7,
    },
    {
      address: "Address",
      total_carbon_footprint: 8,
    },
    {
      address: "Address",
      total_carbon_footprint: 8,
    },
    {
      address: "Address",
      total_carbon_footprint: 10,
    },
    {
      address: "Address",
      total_carbon_footprint: 11,
    },
    {
      address: "Address",
      total_carbon_footprint: 12,
    },
    {
      address: "Address",
      total_carbon_footprint: 13,
    },
    {
      address: "Address",
      total_carbon_footprint: 14,
    },
    {
      address: "Address",
      total_carbon_footprint: 15,
    },
    {
      address: "Address",
      total_carbon_footprint: 16,
    },
    {
      address: "Address",
      total_carbon_footprint: 17,
    },
    {
      address: "Address",
      total_carbon_footprint: 18,
    },
    {
      address: "Address",
      total_carbon_footprint: 19,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-3 px-8">
      <HouseholdListSearchBar />
      <HouseholdListLocation />
      <HouseholdListDataContent />
    </div>
  );
}

export default HouseholdListContent;
