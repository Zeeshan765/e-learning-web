import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Done } from "@mui/icons-material";
// improt fontawesome icon
import "@fortawesome/fontawesome-free";
import { MyLearningCard, NewCoursesLearning } from "../components";
import {
  faCertificate,
  faGraduationCap,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const cardData = [
  {
    id: 1,
    icon: faGraduationCap,
    title: "My Courses",
    description:
      "Continue your learning journey or review your previous learning",
  },
  {
    id: 2,
    icon: faCertificate,
    title: "My Certificates",
    description: "Admire your success and upload any new ones here",
  },
  {
    id: 3,
    icon: faHistory,
    title: "My CPD",
    description: "See what you've learned and when you did it",
  },
];

function MyLearning() {
  const navigate = useNavigate();
  const handleCardClick = (title) => {
    switch (title) {
      case "My Courses":
        navigate("/dashboard/my-courses");
        break;
      case "My Certificates":
        navigate("/dashboard/certificates");
        break;

      default:
        alert("Coming soon " + title);
        break;
    }
  };
  return (
    <>
      <Card
        sx={{
          margin: 2,
          padding: 2,
          backgroundColor: "#FFFFFF",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e0e0e0",
          borderRadius: "5px",
        }}
      >
        <CardContent>
          <Grid container spacing={2} margin="20px">
            <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
              <Typography variant="h6">Your Status</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={10}>
              <Typography
                variant="h6"
                sx={{
                  color: "green",
                }}
              >
                <Done style={{ color: "green", fontSize: "30px" }} /> &nbsp; All
                Good
              </Typography>
            </Grid>
          </Grid>
          <Divider />

          <Grid container spacing={2} margin="20px">
            <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
              <Typography variant="h6">So far you've done...</Typography>
            </Grid>
            <Grid xs={12} sm={12} md={9} lg={9} xl={10}>
              <Grid
                item
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                color="#68B8D4"
              >
                <Grid item>
                  <Typography textAlign="center" marginRight="30px">
                    00 Mins <br /> of CPD in the last 7 Days
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography textAlign="center" marginRight="30px">
                    20 Mins <br /> of CPD in the last 30 Days
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography textAlign="center" marginRight="30px">
                    40 Mins <br /> of CPD since the beginning
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />

          <Grid container spacing={2} margin="20px">
            <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
              <Typography variant="h6">And you've got...</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={10}>
              <Grid
                item
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                color="#68B8D4"
              >
                <Grid item>
                  <Typography
                    textAlign="center"
                    marginRight="30px"
                    color="#7AC29A"
                  >
                    2 <br /> Current Certificates
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    textAlign="center"
                    marginRight="30px"
                    color="#EB5E28"
                  >
                    0 <br /> Expired Certificates
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography textAlign="center" marginRight="30px">
                    <span style={{ color: "#000000" }}>
                      {" "}
                      Your SSSC status is{" "}
                    </span>
                    <br /> <span style={{ color: "#7AC29A" }}>Registered</span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
            <MyLearningCard
              card={card}
              onClick={(title) => handleCardClick(title)}
            />
          </Grid>
        ))}
      </Grid>

      <Typography
        sx={{
          margin: 2,
          padding: 2,
          backgroundColor: "#FFFFFF",
          color: "#66615B",
          borderRadius: "5px",
          textAlign: "center",
          fontSize: "25px",
          fontFamily: "revert",
        }}
      >
        New Courses
      </Typography>
      {/* <Divider
          sx={{
            opacity: 0.5,
          }}
        /> */}
      <NewCoursesLearning />
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <Button
          sx={{
            backgroundColor: "#68B3C8",
            color: "white",
            padding: "15px 50px",
            borderRadius: "1px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
            height: "50px",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          View More Courses
        </Button>
      </Box>
    </>
  );
}

export default MyLearning;
