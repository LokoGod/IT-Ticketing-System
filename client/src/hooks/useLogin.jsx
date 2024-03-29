import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        // Not working
        if (json.error === "All fields must be filled") {
          setError("Please fill in all fields.");
        } else if (json.error === "Incorrect Email") {
          setError("Email does not exist.");
        } else if (json.error === "Incorrect Password") {
          setError("Incorrect password.");
        } else {
          setError("Login failed. Please try again.");
        }
        return;
      }

      // Storing the JWT in browser storage/local storage
      localStorage.setItem("user", JSON.stringify(json));

      // Update auth context
      dispatch({ type: "LOGIN", payload: json });

    } catch (error) {
      // Display a generic error toast for any unexpected errors
      toast.error("Log-in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
