import React from "react";
import { CourseCard } from "../../components";
import { Grid, Typography } from "@mui/material";

function CompletedCourses({ courses }) {
  console.log("hfsdfsdfsdf", courses)
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: 5,
        boxSizing: "border-box",
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography
          variant="h5"
          sx={{
            color: "#68B3C8",
            fontFamily: "revert",
            padding: 2,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          Your completed courses...
        </Typography>
      </Grid>
      {courses?.map((course) => (
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <CourseCard key={course.id} course={course.course} buttonText="Review" />
        </Grid>
      ))}
    </Grid>
  );
}

export default CompletedCourses;
