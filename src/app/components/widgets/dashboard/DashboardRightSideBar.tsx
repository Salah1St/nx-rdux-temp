import Contacts from './Contacts/Contacts';
import Activities from './activities/Activities';
import Notifications from './notification/Notifications';

export default function DashboardRightSideBar() {
  return (
    <div className='w-[280px] border-l-[1px] h-screen p-6 flex flex-col gap-8'>
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
}
