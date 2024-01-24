import icons from '@/asset/icons';
import Image from 'next/image';

export default function DashboardLeftSideBar() {
  return (
    <div className='w-[280px] bg-[#F8F9FC] h-screen flex flex-col p-6 gap-8'>
      <div className='flex items-center gap-3'>
        <div className='w-[51px] h-[51px] rounded-2xl bg-[#4E5BA6]'></div>
        <div className='font-bold'>CCB Thailand</div>
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <div className='w-6 h-6 bg-[#D5D9EB] rounded-lg font-bold text-center'>
            P
          </div>
          <div className='font-bold'>Pimchan Prasert</div>
        </div>
        <div className='w-6 h-6 flex justify-center items-center'>
          <Image src={icons.downVector} alt='' />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='text-gray-400 font-bold text-xs'>Dashboards</div>
        <div className='flex gap-2 px-[6px] py-1 bg-[#EAECF5] rounded-lg'>
          <div className='w-6 h-6 flex justify-center items-center'>
            <Image src={icons.rightVector} alt='' />
          </div>
          <div className='text-[#56915D] font-bold flex items-center'>
            Overview
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='text-gray-400 font-bold text-xs'>Organisation Team</div>
        <div className='flex gap-2 px-[6px] py-1'>
          <div className='w-6 h-6 flex justify-center items-center'>
            <Image src={icons.plus} alt='' />
          </div>
          <div className='text-gray-400 font-bold flex-grow flex items-center'>
            Create/Join Team
          </div>
          <div className='w-6 h-6 flex justify-center items-center'>
            <Image src={icons.helpCircle} alt='' />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='text-gray-400 font-bold text-xs'>Supports</div>
        <div className='flex gap-2 px-[6px] py-1'>
          <div className='w-6 h-6 flex justify-center items-center'>
            <Image src={icons.rightVector} alt='' />
          </div>
          <div className='text-gray-600 font-bold flex items-center'>
            Learn About Carbon
          </div>
        </div>
      </div>
    </div>
  );
}
