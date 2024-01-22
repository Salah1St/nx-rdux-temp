import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import i18n from "i18next";

export function useLocalization() {
  const language = useSelector((state: RootState) => state.language.language);
  const t = (key: string, values?: Record<string, any>) => {
    return i18n.t(key, { lng: language, ...values }) as string;
  };
  return { t };
}
