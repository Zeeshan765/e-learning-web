import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Post } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function LoginForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  // Define Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Initial form values
  const initialValues = {
    email: "",
    password: "",
  };

  // Handle login form submission
  const handleLogin = (values) => {
    try {
      Post(
        values,
        API_URLS.login,
        (resp) => {
          enqueueSnackbar("Login successful", { variant: "success" });
          localStorage.setItem("userId", resp.userId);
          navigate("/dashboard");
        },
        (error) => {
          enqueueSnackbar("Login failed", { variant: "error" });
        }
      );
    } catch (error) {
      enqueueSnackbar("Something went wrong", { variant: "error" });
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://s3.eu-west-2.amazonaws.com/azilositeimages/public/sign-in/sign-in-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "10vh",
          textAlign: "center",
          position: "relative",
          margin: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(124, 228, 254, 0.6)",
            width: "100%",
            fontSize: "50px",
            height: "10vh",
            padding: "30px 0",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Sign in
        </div>
      </div>
      <Card
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%", lg: "40%", xl: "30%" },
          marginTop: { xs: 6, sm: 8, md: 10, lg: 12 },
          height: "auto",
        }}
      >
        <CardHeader
          title="Sign in into your account"
          sx={{ textAlign: "center", color: "#9A9A9A" }}
        />
        <hr />
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              handleLogin(values);
            }}
          >
            {({
              values,
              handleChange,
              errors,
              touched,
              isSubmitting,
              handleSubmit,
            }) => (
              <Form>
                <label style={{ color: "#9A9A9A", fontSize: "20px" }}>
                  Email
                </label>
                <Field
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <label
                  style={{
                    color: "#9A9A9A",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Password
                </label>
                <Field
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  type="password"
                  name="password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <CardActions
                  sx={{
                    justifyContent: "flex-end",
                    marginRight: "20px",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: "#7AC29A",
                      color: "white",
                      borderRadius: "5px",
                      padding: "15px",
                      fontSize: "20px",
                      textTransform: "none",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "#42A084",
                      },
                    }}
                    onClick={handleSubmit}
                  >
                    Log in
                  </Button>
                  <a
                    href="/resetPassword"
                    style={{
                      textDecoration: "none",
                      fontSize: "20px",
                      marginTop: "10px",
                      color: "black",
                    }}
                  >
                    Forget password? Click here
                  </a>
                </CardActions>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
