import icons from "@/asset/icons";
import { useNotification } from "@/context/NotificationContext";
import Image from "next/image";
import { ChangeEvent, DragEvent, FormEvent, useState } from "react";
interface props {
  id: string;
  handleFile: (files: FileList) => void;
  handleSubmitFile: (e: FormEvent<HTMLFormElement>) => void;
  fileExtension: string[];
  border?: string;
}
function DropBox(props: props) {
  const { id, handleFile, fileExtension, handleSubmitFile, border } = props;
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const { notify } = useNotification();

  const internalHandleFile = (files: FileList) => {
    if (!fileExtension.includes(files[0].name.split(".")[1])) {
      notify({ message: "โปรดใช้ไฟล์ นามสกุล .xlsx หรือ .xls", type: "error" });
    } else {
      setFileName(files[0].name);
      handleFile(files);
    }
  };
  const handleDrag = function (e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = function (e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      internalHandleFile(e.dataTransfer.files);
    }
  };
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      internalHandleFile(e.target.files);
    }
  };
  return (
    <form id={id} className="relative text-center" onDragEnter={handleDrag} onSubmit={(e) => handleSubmitFile(e)}>
      <input className="hidden" type="file" name="input-file-upload" id="input-file-upload" multiple={true} onChange={handleChange} />
      <label
        htmlFor="input-file-upload"
        className={`border-4 cursor-pointer  rounded-xl h-56 w-full flex flex-col justify-center items-center ${fileName ? " border-dashed border-primary " : ""} ${
          border ? border : ""
        }`}
      >
        {fileName ? <Image src={icons.excelIcon} alt="" width={70} /> : <Image src={icons.uploadgrey} alt="" width={70} />}
        <p className="text-primary">{fileName ? fileName : "เลือกไฟล์ Excel รายชื่อคุณครู"}</p>
      </label>
      {dragActive && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 border w-full h-full "
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}
    </form>
  );
}
export default DropBox;
