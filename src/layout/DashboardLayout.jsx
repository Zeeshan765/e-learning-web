import React from "react";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Layout from "./dashboard/Header";
import Nav from "./dashboard/Nav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  content: {
    flexGrow: 1,
    padding: 3,
    marginTop: "100px",
    marginLeft: "60px",
  },
}));

const DashboardLayout = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <Layout />
        <Nav />
      </div>
      <main className={classes.content}>
        <Outlet /> {/* Render child routes here */}
      </main>
    </div>
  );
};

export default DashboardLayout;
