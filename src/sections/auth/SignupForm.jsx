import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import * as Yup from "yup";

const SignupForm = ({ onSubmit, isSubmitting, onCancel }) => {
  // Initial values for the form fields
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    country: "england", // default value for radio group
    role: "user",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Box
      sx={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: { xs: "90%", sm: "600px", md: "800px", lg: "900px" },
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            marginLeft: "20px",
          }}
        >
          <Typography variant="h4" style={{ color: "#84C1D2" }}>
            Get Started
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: "#9A9A9A",
              fontFamily: "sans-serif",
              marginTop: "-10px",
            }}
          >
            Let's Create Your Account
          </Typography>
        </div>
        <hr style={{ margin: "20px 0px" }}></hr>

        {/* Formik component */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            onSubmit(values, actions);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {/* Grid container for form fields */}
              <Grid container spacing={2}>
                {/* First Name */}
                <Grid item xs={12} sm={12}>
                  <Field
                    as={TextField}
                    name="first_name"
                    label="First Name"
                    fullWidth
                    error={errors.first_name && touched.first_name}
                    helperText={
                      errors.first_name &&
                      touched.first_name &&
                      errors.first_name
                    }
                  />
                </Grid>

                {/* Last Name */}
                <Grid item xs={12} sm={12}>
                  <Field
                    as={TextField}
                    name="last_name"
                    label="Last Name"
                    fullWidth
                    error={errors.last_name && touched.last_name}
                    helperText={
                      errors.last_name && touched.last_name && errors.last_name
                    }
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                </Grid>

                {/* Password */}
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    fullWidth
                    type="password"
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                </Grid>

                {/* Country Radio Group */}
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ color: "#9A9A9A" }}>
                    Country
                  </Typography>

                  <Field name="country">
                    {({ field }) => (
                      <RadioGroup {...field} row>
                        <Box
                          sx={{
                            color: "#9A9A9A",
                            fontSize: "20px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <FormControlLabel
                            value="england"
                            control={<Radio />}
                            label="England"
                          />
                          <FormControlLabel
                            value="ireland"
                            control={<Radio />}
                            label="Ireland"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                          <FormControlLabel
                            value="scotland"
                            control={<Radio />}
                            label="Scotland"
                          />
                          <FormControlLabel
                            value="wales"
                            control={<Radio />}
                            label="Wales"
                          />
                        </Box>
                      </RadioGroup>
                    )}
                  </Field>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12} display="flex" justifyContent="flex-end">
                  <Button
                    variant="contained"
                    onClick={onCancel}
                    sx={{
                      width: "150px",
                      backgroundColor: "#FABC3D",
                      color: "white",
                      borderRadius: "5px",
                      padding: "15px",
                      fontSize: "20px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#FABC3D",
                      },
                    }}
                  >
                    Cancel
                  </Button>
                  &nbsp;&nbsp;
                  {isSubmitting ? (
                    <CircularProgress thickness={3} />
                  ) : (
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        width: "150px",
                        backgroundColor: "#7AC29A",
                        color: "white",
                        borderRadius: "5px",
                        padding: "15px",
                        fontSize: "20px",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#42A084",
                        },
                      }}
                    >
                      Next
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SignupForm;
