import icons from '@/asset/icons';
import Image from 'next/image';

interface Props {
  handleToggleLeftSideBar: () => void;
  handleToggleRightSideBar: () => void;
}

export default function DashboardHeader({
  handleToggleLeftSideBar,
  handleToggleRightSideBar
}: Props) {
  return (
    <div className='w-full h-[68px] border-b-[1px] border-opacity-10 py-5 px-7 flex items-center justify-between'>
      <div className='flex gap-2'>
        <Image onClick={handleToggleLeftSideBar} src={icons.sidebar} alt='' />
        <div className='flex'>
          <div className='p-2 opacity-40'>Dashboard</div>
          <div className='py-2'>/</div>
          <div className='p-2'>Overview</div>
        </div>
      </div>
      <div className='flex gap-2'>
        <Image src={icons.bell} alt='' />
        <Image
          onClick={handleToggleRightSideBar}
          className='scale-x-[-1]'
          src={icons.sidebar}
          alt=''
        />
      </div>
    </div>
  );
}
