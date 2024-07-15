import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { CourseMediaCard } from "../../components";
import { Get } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
import { useSnackbar } from "notistack";

function CategoryCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const { categoryId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const c_id = parseInt(categoryId);

  const handleCoursePreview = (id) => {
    navigate(`/dashboard/course-categories/${categoryId}/course-preview/${id}`);
  };

  const getAllCoursesByCategoryId = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getAllCoursesByCategoryId.replace(":courseCategoryId", c_id),
        (resp) => {
          enqueueSnackbar("Courses fetched successfully", {
            variant: "success",
          });
          console.log(resp);
          setCourses(resp);
        },
        (error) => {
          enqueueSnackbar("Failed to fetch courses", {
            variant: "error",
          });
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to fetch courses", {
        variant: "error",
      });
    }
  }, [enqueueSnackbar, c_id]);

  useEffect(() => {
    getAllCoursesByCategoryId();
  }, [getAllCoursesByCategoryId]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginX: "15%",
        marginY: "50px",
      }}
    >
      <Grid container spacing={2}>
        {courses.length === 0 ? (
          <Typography variant="h5">No courses found</Typography>
        ) : (
          <>
            {courses.map((course, index) => (
              <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                <CourseMediaCard
                  course={course}
                  onClick={(id) => handleCoursePreview(id)}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
}

export default CategoryCourses;
