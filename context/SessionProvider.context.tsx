"use client";
import { UserData } from "@/app/auth/types";
import React, { PropsWithChildren, SetStateAction, useState } from "react";

type SessionContextType = {
  user: UserData | undefined;
  setUserData: React.Dispatch<SetStateAction<UserData | undefined>>;
};

const SessionContext = React.createContext<SessionContextType>({} as SessionContextType);

export const useSession = () => React.useContext(SessionContext);

export default function SessionProvider(props: PropsWithChildren) {
  const [userData, setUserData] = useState<UserData>();

  return <SessionContext.Provider value={{ user: userData, setUserData }}>{props.children}</SessionContext.Provider>;
}
