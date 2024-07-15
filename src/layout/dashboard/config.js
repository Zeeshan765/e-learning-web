import {
  faCertificate,
  faGraduationCap,
  faHistory,
  faHome,
  faList,
  faSignOutAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const config = [
  {
    path: "/home",
    icon: <FontAwesomeIcon icon={faHome} size="2xl" color="#95CAD8" />,
    title: "Home",
  },
  {
    path: "/dashboard/my-learning",
    icon: <FontAwesomeIcon icon={faTachometerAlt} size="2xl" color="#95CAD8" />,
    title: "My Learning",
  },
  {
    path: "/dashboard/my-courses",
    icon: <FontAwesomeIcon icon={faGraduationCap} size="2xl" color="#95CAD8" />,
    title: "My Courses",
  },
  {
    path: "/dashboard/all-courses",
    icon: <FontAwesomeIcon icon={faList} size="2xl" color="#95CAD8" />,
    title: "All Courses",
  },
  {
    path: "/dashboard/cpds",
    icon: <FontAwesomeIcon icon={faHistory} size="2xl" color="#95CAD8" />,
    title: "MY CPD",
  },
  {
    path: "/dashboard/certificates",
    icon: <FontAwesomeIcon icon={faCertificate} size="2xl" color="#95CAD8" />,
    title: "Certificates",
  },
  {
    path: "/dashboard/logout",
    icon: <FontAwesomeIcon icon={faSignOutAlt} size="2xl" color="#95CAD8" />,
    title: "Logout",
  },
];

export default config;
