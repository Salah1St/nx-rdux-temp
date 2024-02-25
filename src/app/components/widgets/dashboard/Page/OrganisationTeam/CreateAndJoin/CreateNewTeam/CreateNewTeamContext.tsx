"use client";
import { ChangeEvent, FC, FormEvent, ReactNode, createContext, useContext, useState } from "react";

interface CreateNewTeamProviderProps {
  children: ReactNode;
}

interface CreateNewTeamContextProps {
  previewFile: string | null;
  handleFileChange: (files: FileList) => void;
}

const CreateNewTeamContext = createContext<CreateNewTeamContextProps | null>(null);
const CreateNewTeamProvider: FC<CreateNewTeamProviderProps> = ({ children }) => {
  const [previewFile, setPriviewFile] = useState<string | null>(null);

  const handleFileChange = (files: FileList) => {
    if (files && files.length > 0) {
      const file = files[0];
      const img = URL.createObjectURL(file);
      setPriviewFile(img);
      console.log(file);
    }
  };
  return <CreateNewTeamContext.Provider value={{ previewFile, handleFileChange }}>{children}</CreateNewTeamContext.Provider>;
};

export const useCreateNewTeamContext = () => {
  const context = useContext(CreateNewTeamContext);
  if (!context) {
    throw new Error("useCreateNewTeamContext must be used within a CreateNewTeamProvider");
  }
  return context;
};
export default CreateNewTeamProvider;
