import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Popover,
  MenuItem,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

// ----------------------------------------------------------------------

const NAV_WIDTH = 40;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(() => ({
  boxShadow: "none",
  width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  borderBottom: `1px solid #F0F0F0`,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  backgroundColor: "#FFFFFF",
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledRoot>
      <StyledToolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
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
              <FontAwesomeIcon icon={faUserTie} color="#000000"/>
              <Typography
                variant="h6"
                style={{
                  marginLeft: "10px",
                  fontFamily: "revert",
                  color: "#000000",
                }}
              >
                John Doe
              </Typography>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
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
                onClick={() => {
                  handleClose();
                  navigate("/login");
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
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
