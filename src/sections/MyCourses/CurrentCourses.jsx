import React from "react";
import { CourseCard } from "../../components";
import { Grid, Typography } from "@mui/material";

function CurrentCourses({ courses, loading }) {
  console.log("hjsdgfdsfsdfd", courses);
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
          You're currently working on...
        </Typography>
      </Grid>
      {loading && (
        <p
          style={{
            textAlign: "center",
            width: "100%",
            color: "#68B3C8",
            fontFamily: "revert",
            padding: 2,
            boxSizing: "border-box",
          }}
        >
          Loading...
        </p>
      )}
      {!loading &&
        courses?.map((course) => (
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CourseCard
              key={course?.course?.id}
              course={course?.course}
              buttonText="Continue"
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default CurrentCourses;
