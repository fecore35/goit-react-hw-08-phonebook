import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { authOperations } from "redux/auth";
import { authSelectors } from "redux/auth";

/* yup: value validation */
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Material UI */
import { Stack, Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

function LoginForm() {
  const loading = useSelector(authSelectors.getLoading);
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const onLogin = (values, { setSubmitting, resetForm }) => {
    console.log("object");

    if (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    dispatch(authOperations.logIn(values));
    setSubmitting(false);
  };

  const setValidate = yup.object({
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
      email: "",
      password: "",
    },
    validationSchema: setValidate,
    onSubmit: onLogin,
  });

  return (
    <>
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
          <LoadingButton
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            loading={loading}
            loadingIndicator="Loading..."
          >
            Login
          </LoadingButton>
        </Stack>
      </Box>
      <ToastContainer />
    </>
  );
}

export default LoginForm;
