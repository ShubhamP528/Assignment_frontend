import { useState } from "react";
import { useAuthContext } from "../GlobleContext/AuthContext";
import { useNavigate } from "react-router-dom";

export const useSignin = () => {
  const [errorL, setErrorL] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const signin = async (email, password) => {
    setErrorL(null);

    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setErrorL(json.error);
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("puser", JSON.stringify(json));
      console.log("Successfully login");
      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      navigate("/");
    }
  };

  return { signin, errorL };
};
