"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type CurrentUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: CurrentUser | null;
  setUser: (user: CurrentUser | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const defaultUser: CurrentUser = {
  name: "ROHIT CHAUHAN",
  email: "rohiitt786@gmail.com",
};

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<CurrentUser | null>(defaultUser);

  const setUser = useCallback((newUser: CurrentUser | null) => {
    setUserState(newUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
