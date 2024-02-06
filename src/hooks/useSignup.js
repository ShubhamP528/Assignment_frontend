import { useState } from "react";
import { useAuthContext } from "../GlobleContext/AuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const signup = async (username, email, password) => {
    setError(null);

    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("puser", JSON.stringify(json));
      console.log("Successfully login with signup");
      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      navigate("/");
    }
  };

  return { signup, error };
};
