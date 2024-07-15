import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIosRounded } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { coursesData } from "../constants/CardData";

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: -40,
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
  >
    <ArrowForwardIosRounded
      style={{
        border: "1px solid #68B3C8",
        color: "#FFFFFF",
        backgroundColor: "#68B3C8",
        borderRadius: "50%",
        padding: "5px",
      }}
    />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: -40,
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
  >
    <ArrowBackIos
      style={{
        border: "1px solid #68B3C8",
        color: "#FFFFFF",
        backgroundColor: "#68B3C8",
        borderRadius: "50%",
        padding: "5px",
      }}
    />
  </IconButton>
);

const NewCoursesLearning = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "40px", // adjust this value to control the spacing
  };

  return (
    <Box sx={{ position: "relative", padding: "0 50px" }}>
      <Slider {...settings}>
        {coursesData.map((course) => (
          <Box key={course.id} sx={{ padding: "0 10px" }}>
            <Card
              sx={{
                display: "flex",
                padding: "20px",
                boxSizing: "border-box",
                marginY: 2,
                marginX: 1,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={course.src}
                  alt={course.title}
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    {course.title}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      background: "#68B3C8",
                      ":hover": {
                        background: "#3d91a9",
                      },
                    }}
                  >
                    More
                  </Button>
                </CardContent>
              </Box>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default NewCoursesLearning;
