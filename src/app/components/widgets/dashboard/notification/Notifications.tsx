import icons from '@/asset/icons';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='font-bold text-sm px-1 py-2'>Notification</div>
      <NotificationItem
        message='You have a bug that needs to be fixed.'
        since='Just now'
        src={icons.bug}
      />
      <NotificationItem
        message='New user registered'
        since='59 minutes ago'
        src={icons.avatar}
      />
      <NotificationItem
        message='You have a bug that needs to be fixed.'
        since='12 hours ago'
        src={icons.bug}
      />
      <NotificationItem
        message='You have a bug that needs to be fixed.'
        since='Today, 11:59 AM'
        src={icons.broadcast}
      />
    </div>
  );
}
