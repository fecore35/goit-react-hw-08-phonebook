import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function PrivateRoute({ component }) {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);

  return <>{isAuth ? component : <Navigate to="/login" />}</>;
}
