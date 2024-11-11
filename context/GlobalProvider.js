import React, { createContext, useContext, useEffect, useState } from "react";
import { Avatars } from "react-native-appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate setting a dummy user without fetching
    const dummyUser = {
      id: 1,
      name: "Onanuga Yusuf",
      email: "user@example.com",
      avatar: "https://i.pravatar.cc/150?img=1",
    };
    setIsLogged(true);
    setUser(dummyUser);
    setLoading(false);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
