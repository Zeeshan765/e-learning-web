import { AccountBoxOutlined, ArrowDropDown } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles"; // Ensure this import is correct
import {  Outlet, useNavigate } from "react-router-dom"; // Import Outlet from react-router-dom

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 2,
  },
  footer: {
    textAlign: "right",
    padding: 2,
    margin: 20,
  },
}));

export default function Layout() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          padding: "10px",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          <div>
            {/* Show icon and person logged-in name with dropdown */}
            <Box
              display="flex"
              alignItems="center"
              onClick={handleMenu}
              sx={{
                cursor: "pointer",
              }}
            >
              <AccountBoxOutlined fontSize="small" />
              <Typography
                variant="h6"
                style={{
                  marginLeft: "10px",
                  fontFamily: 'revert',
                }}
              >
                John Doe
              </Typography>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <ArrowDropDown />
              </IconButton>
            </Box>
            {/* Popover for Settings and Logout */}
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                width: "200px",
                "& .MuiPaper-root": {
                  width: "80%",
                },
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  "&:hover": {
                    backgroundColor: "#7CE4FF",
                  },
                }}
              >
                Settings
              </MenuItem>
              <MenuItem
                onClick={()=>{
                  handleClose();
                  navigate('/login')
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#7CE4FF",
                  },
                }}
              >
                Logout
              </MenuItem>
            </Popover>
          </div>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet /> {/* Render child routes here */}
      </main>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.footer}>
          Want to say hi? <a href="/">Contact Us</a> | © 2020, made with by Azilo | Privacy
          Policy
        </Grid>
      </Grid>
    </div>
  );
}
