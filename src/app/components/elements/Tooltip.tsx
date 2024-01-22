import icons from "@/asset/icons";
import { useLocalization } from "@/hooks/useLocalization";
import Image from "next/image";
import { useState } from "react";
interface props {
  message: string;
}

function Tooltip(props: props) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const { t } = useLocalization();

  return (
    <>
      <div className="relative" onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
        {isTooltipVisible && (
          <div className="absolute -bottom-8 whitespace-nowrap text-xs p-5 left-14 bg-white border border-slate-200 rounded-lg shadow-xl text-black flex flex-col gap-3 kanit-table-header">
            <div className="font-bold text-start">คำอธิบายข้อผิดพลาด</div>
            <div className="text-lg text-start content-s">{t(`error.${props.message}`)}</div>
          </div>
        )}
        <Image src={icons.error} alt="" />
      </div>
    </>
  );
}

export default Tooltip;
