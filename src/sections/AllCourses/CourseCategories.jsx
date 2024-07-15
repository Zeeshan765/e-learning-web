import { Box, Grid } from "@mui/material";
import React from "react";
import { CourseCategoryCard } from "../../components";
import { useNavigate } from "react-router-dom";

function CourseCategories({ courseCategories }) {
  const navigate = useNavigate();
  const handleCourseCategoryClick = (id) => {
    navigate(`/dashboard/course-categories/${id}`);
  };
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
        {courseCategories.map((courseCategory, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
            <CourseCategoryCard
              courseCategory={courseCategory}
              onClick={(id) => handleCourseCategoryClick(id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CourseCategories;
