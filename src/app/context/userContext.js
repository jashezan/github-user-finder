"use client";
import { createContext, useState } from "react";
import { data } from "../data/github-profile";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState(data);

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
}

