import ActivityItem from "./ActivityItem";

export default function Activities() {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-sm px-1 py-2">Activities</div>
      <ActivityItem message="Released a new report" since="59 minutes ago" />
      <ActivityItem message="Submitted a footprint form" since="12 hours ago" />
      <ActivityItem message="Modified A data in Page X" since="Today, 11:59 AM" />
      <ActivityItem message="Completed the carbon footprint survey from Household 14/17" since="Feb 2, 2023" />
    </div>
  );
}
