import Contacts from "./Contacts/Contacts";
import Activities from "./activities/Activities";
import Notifications from "./notification/Notifications";
interface props {
  show: boolean;
}
export default function DashboardRightSideBar({ show }: props) {
  return (
    <div className={` w-[280px] border-l-2 border-slate-100  h-screen  ${show ? " animate-slide-right-re " : "animate-slide-right "} `}>
      <div className="p-4 h-full overflow-scroll">
        <Notifications />
        <Activities />
        <Contacts />
        <Contacts />
      </div>
    </div>
  );
}
