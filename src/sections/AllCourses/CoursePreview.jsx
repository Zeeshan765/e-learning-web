import { Box, Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { CoursePreviewCard } from "../../components";
import { useParams } from "react-router-dom";
import { Get } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
import { useSnackbar } from "notistack";

function CoursePreview() {
  const { courseId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [course, setCourse] = useState(); // [1
  const getCourseById = useCallback(() => {
    // Fetch course by courseId
    try {
      Get(
        {},
        API_URLS.getCourseById.replace(":id", courseId),
        (response) => {
          console.log("khjdgsfdsfsdf", response);
          setCourse(response);
          enqueueSnackbar("Course fetched successfully", {
            variant: "success",
          });
        },
        (error) => {
          enqueueSnackbar("Failed to fetch course", {
            variant: "error",
          });
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to fetch course", {
        variant: "error",
      });
    }
  }, [courseId, enqueueSnackbar]);

  useEffect(() => {
    getCourseById();
  }, [getCourseById]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginX: "5%",
        marginY: "50px",
      }}
    >
      <Grid container spacing={2}>
        <CoursePreviewCard course={course || {}} />
      </Grid>
    </Box>
  );
}

export default CoursePreview;
