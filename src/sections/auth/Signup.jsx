import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Chat } from "../../images";
import SignupForm from "./SignupForm";
import { Post } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleSignup = (values, actions) => {
    try {
      setIsSubmitting(true);
      Post(
        values,
        API_URLS.signup,
        (resp) => {
          setIsSubmitting(false);
          enqueueSnackbar("Signup successful", { variant: "success" });
          navigate("/login");
        },
        (error) => {
          setIsSubmitting(false);
          enqueueSnackbar("Signup failed", { variant: "error" });
        }
      );
    } catch (error) {
      setIsSubmitting(false);
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
        padding: "1rem", // Added padding to avoid content touching the edges on small screens
        boxSizing: "border-box",
      }}
    >
      <Grid container spacing={2} justifyContent="space-around">
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                marginTop: { xs: "2rem", sm: "5rem", md: "10rem" }, // Adjusted for responsiveness
              }}
            >
              <img
                src={Chat}
                alt="logo"
                style={{
                  width: "180px",
                  height: "180px",
                  border: "5px solid #CCC5B9 ",
                  borderRadius: "50%",
                  background: "#FABC3D",
                  marginBottom: "20px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                alignItems: "center", // Center aligned for smaller screens
              }}
            >
              <Typography variant="h6" align="center">
                Steve Johnson
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#CCC5B9" }}
                align="center"
              >
                Nursery Manager
              </Typography>
            </div>
            <div
              style={{
                width: "100%", // Adjusted to be responsive
                maxWidth: "550px", // Max width for larger screens
                marginTop: "20px",
                padding: "0 1rem", // Added padding for smaller screens
                boxSizing: "border-box",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#66615B", fontFamily: "Monstserrat, sans-serif" }}
                align="center"
              >
                We've saved so much money and my staff have received much more
                training than I could have afforded before..
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <SignupForm
            onSubmit={(values, actions) => handleSignup(values, actions)}
            isSubmitting={isSubmitting}
            onCancel={() => setIsSubmitting(false)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
