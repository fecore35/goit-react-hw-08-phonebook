import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  getVisibleContacts,
  getError,
} from "redux/contacts/contacts-selectors";
import {
  getContactsAsync,
  deleteContactAsync,
} from "redux/contacts/contacts-operation";

function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  return (
    <>
      {error && (
        <h2 style={{ color: "red", textTransform: "uppercase" }}>
          {error.message}
        </h2>
      )}

      {visibleContacts && (
        <List dense={false}>
          {visibleContacts &&
            visibleContacts.map(({ id, name, number }) => {
              const tel = `tel:` + number.replace(/^(\+)|\D/g, "$1");
              return (
                <ListItem
                  key={id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={(e) => {
                        dispatch(deleteContactAsync(id));
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <PersonOutlineIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={name}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Phone
                        </Typography>
                        {" — "} <a href={tel}>{number}</a>
                      </>
                    }
                  />
                </ListItem>
              );
            })}
        </List>
      )}
    </>
  );
}

export default ContactList;
