import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginTop: "10px",
  },
  description: {
    fontSize: "1rem",
    marginTop: "10px",
  },
  video: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
}));
function SectionPreviewCard({ title, description, image, video_url }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        {/* Add back button */}
        <Button
          onClick={() => {
            window.history.back();
          }}
        >
          <ArrowBack /> Back
        </Button>
        <h1 className={classes.title}>{title}</h1>
        {image !== " " && (
          <img src={image} alt={title} className={classes.image} />
        )}
        {video_url && (
          <video controls className={classes.video}>
            <source src={video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <p className={classes.description}>{description}</p>
      </div>
    </>
  );
}

export default SectionPreviewCard;
