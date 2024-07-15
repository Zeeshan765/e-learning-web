import {
  faHome,
  faUsers,
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
    path: "/company/my-teams",
    icon: <FontAwesomeIcon icon={faUsers} size="2xl" color="#95CAD8" />,
    title: "My Teams",
  },
  {
    path: "/dashboard/logout",
    icon: <FontAwesomeIcon icon={faSignOutAlt} size="2xl" color="#95CAD8" />,
    title: "Logout",
  },
];

export default config;
