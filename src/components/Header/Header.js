import { Outlet } from "react-router-dom";
import CustomLink from "components/CustomLink";
import UserMenu from "components/UserMenu";

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
          </ul>
        </nav>

        <UserMenu />
      </header>

      <Outlet />
    </>
  );
}

export default Header;
