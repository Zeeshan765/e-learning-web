import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
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
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    height: "100%", // make all cards the same height
  },
  content: {
    flexGrow: 1,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "auto",
  },
});

const CourseMediaCard = ({ courseCategory, onClick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={() => onClick(courseCategory.id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={courseCategory.category}
          image={courseCategory.img_url}
          title={courseCategory.category}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {courseCategory.category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {courseCategory.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <FontAwesomeIcon icon={faLayerGroup} />
        <span
          style={{
            marginLeft: "10px",
            color: "#66615B",
            fontSize: "15px",
          }}
        >
          {courseCategory?.courses?.length} courses
        </span>
      </CardActions>
    </Card>
  );
};

export default CourseMediaCard;
