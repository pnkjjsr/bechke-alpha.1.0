import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/libs/firebase";
import { logout } from "@/utils/sessions";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [profile, setProfile] = useState(null);

  const value = { authenticated, setAuthenticated, profile, setProfile };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
        setProfile(user.providerData[0]);
      } else {
        logout();
      }
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
