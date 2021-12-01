import { useFormik } from "formik";

import { useSelector, useDispatch } from "react-redux";
import { getContacts, getError } from "../../redux/contacts/contacts-selectors";
import { addContactAsync } from "redux/contacts/contacts-operation";

/* yup: value validation */
import * as yup from "yup";

/* Material UI */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function ContactForm() {
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const onSaveContact = (values, { setSubmitting, resetForm }) => {
    const newContactName = values.name.toUpperCase();
    const knownContactToName = contacts.find(
      ({ name }) => name.toUpperCase() === newContactName
    );

    if (knownContactToName) {
      setSubmitting(false);
      return alert(`${newContactName} is already in contacts.`);
    }

    dispatch(addContactAsync(values));
    resetForm();
    setSubmitting(false);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const setValidate = yup.object({
    name: yup.string("Enter name").required("Name is required"),
    number: yup
      .string("Enter Phone number")
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: setValidate,
    onSubmit: onSaveContact,
  });

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="number"
          name="number"
          label="Phone number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </Box>

      {error && (
        <h2 style={{ color: "red", textTransform: "uppercase" }}>
          {error.message}
        </h2>
      )}
    </>
  );
}

export default ContactForm;
