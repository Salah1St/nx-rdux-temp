import icons from '@/asset/icons';
import Image from 'next/image';
import Dashboards from './Dashboards';
import OrganisationTeam from './OrganisationTeam';
import Supports from './Supports';
import UserInfo from './UserInfo';

export default function DashboardLeftSideBar() {
  return (
    <div className='w-[280px] bg-leftsidebarbg h-screen flex flex-col p-6 gap-8'>
      <div className='flex items-center gap-3'>
        <div className='w-[51px] h-[51px] rounded-2xl bg-[#4E5BA6]'></div>
        <div className='font-bold'>CCB Thailand</div>
      </div>

      <UserInfo />

      <Dashboards />

      <OrganisationTeam />

      <Supports />
    </div>
  );
}
