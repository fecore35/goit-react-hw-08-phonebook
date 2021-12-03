import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomLink from "components/CustomLink";
import UserMenu from "components/UserMenu";
import { authSelectors } from "redux/auth";
import { Box } from "@mui/material";

function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <nav>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <CustomLink to="/">Home</CustomLink>
              {isLoggedIn && <CustomLink to="/contacts">Contacts</CustomLink>}
            </Box>
          </nav>

          <UserMenu />
        </Box>
      </header>

      <Outlet />
    </>
  );
}

export default Header;
