import ContactItem from './ContactItem';

export default function Contacts() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='font-bold text-sm px-1 py-2'>
        Government Officer Contacts
      </div>
      <ContactItem name='Natali Craig' />
      <ContactItem name='Drew Cano' />
      <ContactItem name='Orlando Diggs' />
      <ContactItem name='Andi Lane' />
      <ContactItem name='Kate Morrison' />
      <ContactItem name='Koray Okumus' />
    </div>
  );
}
