import { useMatch, useResolvedPath } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Button
      variant={match ? "outlined" : "text"}
      component={Link}
      to={to}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomLink;
