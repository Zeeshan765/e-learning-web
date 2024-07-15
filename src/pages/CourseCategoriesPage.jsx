import React, { useCallback, useEffect, useState } from "react";
import { CourseCategories } from "../sections/AllCourses";
import { Get } from "../actions/apiActions";
import { useSnackbar } from "notistack";
import { API_URLS } from "../constants/API_URLS";

function CourseCategoriesPage() {
  const [courseCategories, setCourseCategories] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const getAllCourseCategories = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getCourseCategories,
        (response) => {
          setCourseCategories(response);
          enqueueSnackbar("Course Categories fetched successfully", {
            variant: "success",
          });
        },
        (error) => {
          enqueueSnackbar("Failed to fetch Course Categories", {
            variant: "error",
          });
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to fetch Course Categories", {
        variant: "error",
      });
    }
  }, [enqueueSnackbar]);

  useEffect(() => {
    getAllCourseCategories();
  }, [getAllCourseCategories]);
  return <CourseCategories courseCategories={courseCategories} />;
}

export default CourseCategoriesPage;
