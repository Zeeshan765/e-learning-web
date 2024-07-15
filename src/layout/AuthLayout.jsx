import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { FacebookRounded, Google, X } from "@mui/icons-material";

export default function AuthLayout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBar
        position="sticky"
        style={{
          background: "#FFFFFF",
          boxShadow: "none",
          color: "black",
          borderBottom: "1px solid #00000040",
          height: "80px",
          marginTop: "5px",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              marginLeft: { xs: "10px", sm: "0px" },
            }}
          >
            Logo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex", color: "grey" } }}
            mt={2}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "17px",
                fontFamily: "revert",
                marginRight: "30px",
                color: "#7D7973",
              }}
              onClick={() => navigate("/signup")}
            >
              Learn More
            </button>
            <button
              style={{
                background: "transparent",
                border: "2px solid #7D7973",
                padding: "10px 20px",
                borderRadius: "30px",
                cursor: "pointer",
                fontSize: "17px",
                fontFamily: "revert",
                marginRight: "30px",
                color: "#7D7973",
              }}
              onClick={handleSignup}
            >
              Sign up
            </button>
            <button
              style={{
                background: "transparent",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "17px",
                fontFamily: "revert",
                color: "#7D7973",
                marginRight: "30px",
              }}
              onClick={handleClick}
            >
              Log in
            </button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1, // Fill remaining vertical space
          overflowY: "auto", // Allow scrolling within main content
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </Box>
      <footer
        style={{
          backgroundColor: "#252422",
          color: "white",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Logo</h1>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            >
              <FacebookRounded
                fontSize="large"
                color="primary"
                style={{
                  marginRight: "10px",
                }}
              />
              <X
                fontSize="large"
                color="primary"
                style={{
                  marginRight: "10px",
                }}
              />
              <Google
                fontSize="large"
                color="warning"
                style={{
                  marginRight: "10px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
            <Box
              display="flex"
              justifyContent="space-around"
              flexDirection="row"
              sx={{
                cursor: "pointer",
                color: "white",
                marginTop: "20px",
              }}
            >
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontFamily: "revert",
                  marginRight: "30px",
                  color: "white",
                }}
                onClick={() => navigate("/login")}
              >
                Home
              </button>
              <button
                style={{
                  background: "white",
                  border: "2px solid #7D7973",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontFamily: "revert",
                  marginRight: "30px",
                  color: "black",
                }}
                onClick={handleSignup}
              >
                Sign up
              </button>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontFamily: "revert",
                  color: "white",
                  marginRight: "30px",
                }}
                onClick={handleClick}
              >
                Log in
              </button>
            </Box>
            <hr style={{ width: "80%", color: "#252422" }} />
            <Box
              display="flex"
              justifyContent="space-around"
              flexDirection="row"
              sx={{
                cursor: "pointer",
                color: "white",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ color: "#56524D", fontSize: "20px" }}>
                © 2024 AziloTraining Hub
              </Typography>
              <div style={{ display: "flex" }}>
                <Typography
                  sx={{
                    color: "#56524D",
                    fontSize: "20px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Company Policy |{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#56524D",
                    fontSize: "20px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Terms |{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#56524D",
                    fontSize: "20px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Privacy Policy
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </footer>
    </Box>
  );
}
