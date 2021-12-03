import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "redux/auth";
import CustomLink from "components/CustomLink";
import { Box, Typography, Button } from "@mui/material";
import Logout from "@mui/icons-material/Logout";

function UserMenu() {
  const mail = useSelector(authSelectors.getUserEmail);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        marginLeft: "auto",
      }}
    >
      {isLoggedIn ? (
        <>
          <Typography mr={2} variant="caption" display="block" gutterBottom>
            {mail}
          </Typography>

          <Button
            variant="contained"
            endIcon={<Logout />}
            onClick={() => dispatch(authOperations.logOut())}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <CustomLink to="/register">Register</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
        </>
      )}
    </Box>
  );
}

export default UserMenu;
