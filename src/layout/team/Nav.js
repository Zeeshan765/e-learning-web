import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { Box, Drawer, Stack } from "@mui/material";

// import { useSelector } from 'react-redux';
import config from "./config";
import { useResponsive } from "../../hooks";
import { Scrollbar } from "../../components/scrollbar";
import { NavSection } from "../../components/nav-section";
// ----------------------------------------------------------------------

const NAV_WIDTH = 240;
const NAV_MINI_WIDTH = 60;
// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <NavSection data={config} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: "relative" }}
        ></Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        position: 'absolute', // Set position to absolute
        top: 0,
        left: 0,
        height: '100%',
        zIndex: 1200,
        width: isDesktop ? (isHovered ? NAV_WIDTH : NAV_MINI_WIDTH) : NAV_WIDTH,
        transition: "width 0.3s",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: isHovered ? NAV_WIDTH : NAV_MINI_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
              transition: "width 0.3s",
              position: 'absolute',
              height: '100%',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
