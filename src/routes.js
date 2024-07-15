import { Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import { LoginForm, ResetPassword, Signup } from "./sections/auth";
import Layout from "./layout";
import ModulePage from "./pages/ModulePage";
import MyLearningPage from "./pages/MyLearningPage";
import {
  CategoryCoursesPage,
  CourseCategoriesPage,
  CoursePreviewPage,
  MyCoursesPage,
} from "./pages";
import DashboardLayout from "./layout/DashboardLayout";
import SectionPreviewPage from "./pages/SectionPreviewPage";
import QuizPage from "./pages/QuizPage";
import CPDPage from "./pages/CPDPage";
import { CertificateDetailsPage, CreateCertificatePage, MyCertificatesPage } from "./pages/certificates";
import CreateTeamPage from './pages/teams/CreateTeamPage';
import InviteStaffPage from './pages/teams/InviteStaffPage';
import TeamLayout from './layout/TeamLayout';
import UserTeamPage from './pages/teams/UserTeamPage';
import StudentProgressPage from './pages/teams/StudentProgressPage';
import { TeamListingPage } from './pages/teams';

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: "login", element: <LoginForm /> },
        { path: "signup", element: <Signup /> },
        { path: "resetPassword", element: <ResetPassword /> },
      ],
    },
    {
      path: "/home",
      element: <Layout />,
      children: [
        { element: <Navigate to="/home/app" />, index: true },
        { path: "app", element: <ModulePage /> },
      ],
    },
    {
      path: "/dashboard", // Corrected path
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/my-learning" />, index: true },
        { path: "my-learning", element: <MyLearningPage /> },
        { path: "my-courses", element: <MyCoursesPage /> },
        { path: "certificates", element: <MyCertificatesPage /> },
        {
          path: "certificates/:certificateId",
          element: <CertificateDetailsPage />,
        },
        { path: "certificates/new", element: <CreateCertificatePage /> },
        { path: "all-courses", element: <CourseCategoriesPage /> },
        {
          path: "course-categories/:categoryId",
          element: <CategoryCoursesPage />,
        },
        {
          path: "course-categories/:categoryId/course-preview/:courseId",
          element: <CoursePreviewPage />,
        },
        {
          path: "course-categories/:categoryId/course-preview/:contentId/section/:sectionId",
          element: <SectionPreviewPage />,
        },
        {
          path: "course-categories/:categoryId/course-preview/:contentId/quiz/:quizId",
          element: <QuizPage />,
        },
        {
          path: "cpds",
          element: <CPDPage />,
        },
      ],
    },
    {
      path: "/company", // Corrected path
      element: <TeamLayout />,
      children: [
        { element: <Navigate to="/company/my-teams" />, index: true },
        { path: "my-teams", element: <TeamListingPage /> },
        {
          path: "teams/new",
          element: <CreateTeamPage />,
        },
        {
          path: "teams/staff/new",
          element: <InviteStaffPage />,
        },
        {
          path: "team/:id/users",
          element: <UserTeamPage />,
        },
        {
          path: "team/:id/users/:id",
          element: <StudentProgressPage />,
        },

      ],
    },
  ]);
  return routes;
}
