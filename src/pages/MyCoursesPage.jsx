import React, { useCallback, useEffect, useState } from "react";
import { CompletedCourses, CurrentCourses } from "../sections/MyCourses";
import { useSnackbar } from "notistack";
import { API_URLS } from "../constants/API_URLS";
import { Get } from "../actions/apiActions";

function MyCoursesPage() {
  const userId = parseInt(localStorage.getItem("userId"));
  const [courses, setCourse] = useState();
  const [completedCourses, setCompletedCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const getUserEnrolledCourses = useCallback(() => {
    try {
      setLoading(true);
      // Fetch courses by userId
      Get(
        {},
        API_URLS.getUserEnrolledCourses.replace(":userId", userId),
        (response) => {
          // current courses
          const currentCourses = response.filter(
            (course) => course.status === "enrolled"
          );
          // completed courses
          const completedCourses = response.filter(
            (course) => course.status === "completed"
          );
          setCourse(currentCourses);
          setCompletedCourses(completedCourses);
          setLoading(false);
        },
        (error) => {
          enqueueSnackbar("Failed to fetch courses", {
            variant: "error",
          });
          setLoading(false);
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to fetch courses", {
        variant: "error",
      });
      setLoading(false);
    }
  }, [userId, enqueueSnackbar]);

  useEffect(() => {
    getUserEnrolledCourses();
  }, [getUserEnrolledCourses]);

  return (
    <>
      <CurrentCourses courses={courses} loading={loading} />
      <CompletedCourses courses={completedCourses} />
    </>
  );
}

export default MyCoursesPage;
