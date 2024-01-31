import Avatar from '@element/Avatar';

interface ActivityItemProps {
  message: string;
  since: string;
  src?: string;
}

export default function ActivityItem({
  message,
  since,
  src
}: ActivityItemProps) {
  return (
    <div className='p-1 flex items-start gap-2'>
      <Avatar src={src} size={24} />
      <div>
        <div className='text-sm overflow-hidden whitespace-nowrap overflow-ellipsis w-44'>
          {message}
        </div>
        <div className='text-xs opacity-40'>{since}</div>
      </div>
    </div>
  );
}
