import { createContext, useReducer, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { puser: action.payload };
    case "LOGOUT":
      return { puser: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { puser: null });

  console.log("AuthContextProvider");
  useEffect(() => {
    const puser = JSON.parse(localStorage.getItem("puser"));
    console.log("user is ", puser);

    if (puser) {
      dispatch({ type: "LOGIN", payload: puser });
    }
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
