import { useState, lazy } from "react";

/* Material UI */
import {
  Stack,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ContactList = lazy(() =>
  import("components/ContactList" /* webpackChunkName: 'contact-list' */)
);
const Filter = lazy(() =>
  import("components/Filter" /* webpackChunkName: 'filter' */)
);
const CreateView = lazy(() =>
  import("views/CreateView" /* webpackChunkName: 'create-view' */)
);

export default function ContactsView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        my={5}
      >
        <Typography variant="h4" gutterBottom component="div">
          Contact List
        </Typography>
        <Button variant="outlined" onClick={handleClickOpen}>
          Create contact
        </Button>
      </Stack>

      <Dialog open={isModalOpen} onClose={handleClose}>
        <DialogTitle>
          Create contact
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <CreateView />
        </DialogContent>
      </Dialog>

      <Filter />
      <ContactList />
    </>
  );
}
