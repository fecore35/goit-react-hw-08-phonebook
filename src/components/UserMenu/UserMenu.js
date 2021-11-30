import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "redux/auth";
import CustomLink from "components/CustomLink";

function UserMenu() {
  const mail = useSelector(authSelectors.getUserEmail);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <span>{mail}</span>
          <button
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
          >
            Logout
          </button>
        </>
      ) : (
        <ul>
          <li>
            <CustomLink to="/register">Register</CustomLink>
          </li>
          <li>
            <CustomLink to="/login">Login</CustomLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
