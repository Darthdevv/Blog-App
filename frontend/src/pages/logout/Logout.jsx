import { UserContext } from "../../context/userContext"
import { useNavigate } from "react-router"
import { useContext } from "react"

const Logout = () => {

  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  setCurrentUser(null);
  navigate('/login');

  return (
    <></>
  )
}

export default Logout