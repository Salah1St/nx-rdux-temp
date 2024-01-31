import icons from '@/asset/icons';
import Image from 'next/image';

export default function UserInfo() {
  return (
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
  );
}
