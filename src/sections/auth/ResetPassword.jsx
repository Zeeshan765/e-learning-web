import React, { useState } from "react";
import { HelpOutline } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Put } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#fff",
    cursor: "pointer",
    marginTop: "3rem",
    height: "180px", // Adjust the height as needed
    padding: "16px", // You can adjust the padding as needed
    borderRadius: "4px", // You can adjust the border radius as needed
    width: "600px", // Adjust the width as needed
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease-in-out", // Smooth transition for the transform property
    transformOrigin: "center bottom", // Set the origin for the transform to the bottom center
    perspective: "1000px", // Add perspective to give a 3D effect
    "&:hover": {
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
      animation: "$moveUp 0.4s forwards", // Apply the move-up animation on hover
    },
  },
  linkContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "8px", // Adjust the margin as needed
  },
  "@keyframes moveUp": {
    "0%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(-10px)", // Adjust the move-up distance as needed
    },
  },
}));

function ResetPassword() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleResetPassword = () => {
    try {
      Put(
        {
          email,
          password,
        },
        API_URLS.resetPassword,
        (response) => {
          enqueueSnackbar("Password reset successful", { variant: "success" });
          navigate("/login");
        },
        (error) => {
          enqueueSnackbar("Password reset failed", { variant: "error" });
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
            fontSize: "48px",
            letterSpacing: "1px",
            height: "10vh",
            padding: "30px 0",
            fontFamily: "sans-serif, Rubik",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Reset your password
        </div>
      </div>
      <div style={{ marginTop: "90px" }}>
        <HelpOutline style={{ fontSize: "90px", color: "red" }} />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Typography variant="h4" sx={{ color: "#66615B" }}>
          Can't remember your password?{" "}
        </Typography>
      </div>
      <div style={{ marginTop: "10px", width: "40%" }}>
        <Typography
          variant="subTitle2"
          sx={{ color: "#ADADAC", fontSize: "30px" }}
        >
          Dont't worry! Write below your email and click on 'Reset my password'.
          Check your email inbox in a few seconds.
        </Typography>
      </div>
      {/*  a box  in center with the text field and an anchor link , having white bg color and a box shadow when user hover on the box */}

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="35vh"
      >
        <Box className={classes.container}>
          <div style={{ marginBottom: "8px" }}>
            <label style={{ fontSize: "20px" }}>Your email address</label>
          </div>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            label="Email"
            // shrink lable
            InputLabelProps={{
              shrink: true,
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            label="New Password"
            // shrink lable
            InputLabelProps={{
              shrink: true,
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box className={classes.linkContainer}>
            <Button
              onClick={handleResetPassword}
              style={{
                textDecoration: "none",
                color: "#68B3C8",
                fontSize: "20px",
              }}
            >
              Reset my password
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ResetPassword;
