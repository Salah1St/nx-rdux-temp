import { ReactNode, ReactElement, FC, useEffect } from "react";

import { useRouter } from "next/navigation";
import { getAccessToken } from "@/utils/localStroage";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface ProtectedRouteProps {
  children: ReactElement;
}
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthen } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const token = getAccessToken();

  // useEffect(() => {
  //   // in page Login
  //   if (!isAuthen) {
  //     router.push("/login");
  //   }
  // }, [isAuthen, router]);

  // entry page with token
  if (token) {
    return children;
  } else {
    router.replace("/login");
    return null;
  }
};

export default ProtectedRoute;
