"use client";

import { checkSession, getMe } from "@/lib/api/clientApi";
import { useAuth } from "@/lib/store/authStore";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const setAuth = useAuth((state) => state.setAuth);
  const clearAuth = useAuth((state) => state.clearAuth);

  useEffect(() => {
    const fetchSession = async () => {
      const isAuthRes = await checkSession();
      if (isAuthRes) {
        const user = await getMe();
        setAuth(user);
      } else {
        clearAuth();
      }
    };
    fetchSession();
  }, [setAuth, clearAuth]);
  return children;
};

export default AuthProvider;
