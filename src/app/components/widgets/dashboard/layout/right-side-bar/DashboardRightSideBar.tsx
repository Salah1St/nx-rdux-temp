import Contacts from "./Contacts/Contacts";
import Activities from "./activities/Activities";
import Notifications from "./notification/Notifications";
interface props {
  show: boolean;
}
export default function DashboardRightSideBar({ show }: props) {
  return (
    <div className={`max-w-[300px] w-[300px]  h-screen  ${show ? " animate-slide-right-re " : "animate-slide-right "} `}>
      <div className="p-4 h-full overflow-scroll">
        <Notifications />
        <Activities />
        <Contacts />
        <Contacts />
      </div>
    </div>
  );
}
