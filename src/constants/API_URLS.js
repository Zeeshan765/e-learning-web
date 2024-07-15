// const baseUrl = "http://localhost:5000";
// production url
const baseUrl = "https://learning-web-backend-production.up.railway.app";

export const API_URLS = {
  // Auth APIs
  login: `${baseUrl}/users/login`,
  signup: `${baseUrl}/users/register`,
  resetPassword: `${baseUrl}/users/resetPassword`,

  // course Categories
  getCourseCategories: `${baseUrl}/course_categories/getAll`,

  // courses
  getAllCoursesByCategoryId: `${baseUrl}/courses/getAllCoursesByCategoryId/:courseCategoryId`,
  getCourseById: `${baseUrl}/courses/getCourseById/:id`,

  // Contents
  getContentsByCourseId: `${baseUrl}/contents/checkIfAllSectionsCompleted/:courseId`,
  // course sections
  getSectionByCourseId: `${baseUrl}/sections/getSectionsByCourseId/:courseId`,
  getSectionById: `${baseUrl}/sections/getSectionById/:sectionId`,
  markSectionComplete: `${baseUrl}/sections/markSectionComplete/:contentId/:sectionId`,
  getCpdHours: `${baseUrl}/sections/getCpdHours`,

  // Enrollments
  enrollCourse: `${baseUrl}/enrollments/enroll/:courseId/:userId`,
  checkExistingEnrollment: `${baseUrl}/enrollments/checkExistingEnrollment/:courseId/:userId`,
  getUserEnrolledCourses: `${baseUrl}/enrollments/getUserEnrolledCourses/:userId`,
  markCourseComplete: `${baseUrl}/enrollments/markCourseComplete/:courseId/:userId`,

  // Quiz
  getQuizzezByContentId: `${baseUrl}/quizzez/getQuizzezByContentId/:contentId`,

  // Results
  saveResult: `${baseUrl}/results/create`,

  // Certificates
  addCertificate: `${baseUrl}/certificates/addCertificate`,
  getUserCertificates: `${baseUrl}/certificates/getCertificatesByUserId/:userId`,
  deleteCertificateById: `${baseUrl}/certificates/deleteCertificateById/:id`,
  getCertificateById: `${baseUrl}/certificates/getCertificateById/:certificateId`,

  // Teams
  createTeam: `${baseUrl}/teams/create`,
  getAllTeamsWithoutPagination: `${baseUrl}/teams/getAllTeamsWithoutPagination`,
  getAllTeamsWithPagination: `${baseUrl}/teams/getAllTeamsWithPagination`,
  sendInvite: `${baseUrl}/teams/sendInvite`,
  checkInvitationStatus: `${baseUrl}/teams/checkInvitationStatus/:teamId/:userId`,
  acceptInvitation: `${baseUrl}/teams/acceptInvitation/:teamId/:userId`,
  rejectInvitation: `${baseUrl}/teams/rejectInvitation/:teamId/:userId`,
  getTeamMembers: `${baseUrl}/teams/getTeamMembers/:teamId`,

  // Team Members
  addTeamMember: `${baseUrl}/teamMembers/add`,
  removeTeamMember: `${baseUrl}/teamMembers/remove`,
  changeRole: `${baseUrl}/teamMembers/changeRole`,
  leaveTeam: `${baseUrl}/teamMembers/leave`,
};
