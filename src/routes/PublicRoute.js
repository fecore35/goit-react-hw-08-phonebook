import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function PublicRoute({
  restricted = false,
  to = "/",
  component,
}) {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isAuth && restricted;

  return <>{shouldRedirect ? <Navigate to={to} /> : component}</>;
}
