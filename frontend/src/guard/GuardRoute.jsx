import { Navigate } from "react-router";
import { UserContext } from "../context/userContext";
import { useContext, useEffect } from "react";


function GuardRoute({ children }) {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const token = currentUser?.token

  try {
    if (token) return children;

    if (!token) {
      setCurrentUser(null);
      return <Navigate to={"/login"} />;
    }
  } catch (error) {
    console.log(error);
  }
}

export default GuardRoute;
