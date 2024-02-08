import icons from "@/asset/icons";
import Avatar from "@element/Avatar";
import Image from "next/image";

interface ContactItemProps {
  src?: string;
  name: string;
}

export default function ContactItem({ src, name }: ContactItemProps) {
  return (
    <div className="p-1 flex items-start gap-2">
      <Avatar src={src} size={24} />
      <div className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis w-44">{name}</div>
    </div>
  );
}
