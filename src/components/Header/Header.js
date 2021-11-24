import { Outlet } from "react-router-dom";
import CustomLink from "components/CustomLink";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/create">Create contact</CustomLink>
            </li>
            <li>
              <CustomLink to="/register">Register</CustomLink>
            </li>
            <li>
              <CustomLink to="/login">Login</CustomLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default Header;
