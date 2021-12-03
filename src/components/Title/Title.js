import { Stack, Typography } from "@mui/material";

export default function Title({ name, children }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      my={5}
    >
      <Typography variant="h4" gutterBottom component="div">
        {name}
      </Typography>
      {children}
    </Stack>
  );
}
