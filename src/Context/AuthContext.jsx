import { Spinner } from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });
  const [loading, setLoading] = useState(true);
  function onAuthChanged(user) {
    if (user) {
      setUser({
        isLogin:true,
        userInfo: {
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email,
        },
      });
    } else {
      setUser({ isLogin: false, userInfo: {} });
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
