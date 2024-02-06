import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../GlobleContext/AuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    // remove user form local storage
    localStorage.removeItem("puser");
    console.log("Successfully logout");
    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return { logout };
};
