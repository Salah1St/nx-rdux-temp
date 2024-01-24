import icons from '@/asset/icons';
import Image from 'next/image';

interface NotificationItemProps {
  message: string;
  since: string;
  src: string;
}

export default function NotificationItem({
  message,
  since,
  src
}: NotificationItemProps) {
  return (
    <div className='p-1 flex items-start gap-2'>
      <Image src={src} alt='' />
      <div>
        <div className='text-sm overflow-hidden whitespace-nowrap overflow-ellipsis w-44'>
          {message}
        </div>
        <div className='text-xs opacity-40'>{since}</div>
      </div>
    </div>
  );
}
