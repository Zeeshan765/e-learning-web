import { faClock, faGlobeOceania } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    display: "flex",
    flexDirection: "column",
    height: "100%", // make all cards the same height
  },
  content: {
    flexGrow: 1,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: "auto",
  },
  infoRow: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  buttonRow: {
    marginTop: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    marginLeft: "10px",
    color: "#66615B",
    fontSize: "15px",
  },
});

const CourseMediaCard = ({course,onClick}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={course?.title}
          image={course?.img_url}
          title={course?.title}
        />
        <CardContent
          className={classes.content}
          onClick={() => onClick(course?.id)}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {course?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {course?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <FontAwesomeIcon icon={faGlobeOceania} />
          <span
            style={{
              marginLeft: "10px",
              color: "#66615B",
              fontSize: "15px",
            }}
          >
            {course?.location}
          </span>
          <FontAwesomeIcon icon={faClock} style={{ marginLeft: "20px" }} />
          <span
            style={{
              marginLeft: "10px",
              color: "#66615B",
              fontSize: "15px",
            }}
          >
            {course?.duration}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flx-end",
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: "12%",
          }}
        >
          <button
            style={{
              marginTop: "10px",
              color: "#66615B",
              fontSize: "20px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {course?.progress}
          </button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CourseMediaCard;
