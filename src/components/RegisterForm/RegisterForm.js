import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { authOperations } from "redux/auth";

/* yup: value validation */
import * as yup from "yup";

/* Material UI */
import { Stack, Box, Button, TextField } from "@mui/material";

function RegisterForm() {
  const dispatch = useDispatch();

  const onRegister = (values, { setSubmitting }) => {
    dispatch(authOperations.register(values));
    setSubmitting(false);
  };

  const setValidate = yup.object({
    name: yup.string("Enter name").required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: setValidate,
    onSubmit: onRegister,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        spacing={2}
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
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </Stack>
    </Box>
  );
}

export default RegisterForm;
