import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

function MyLearningCard({ card, onClick }) {
  return (
    <Card
      sx={{
        margin: 2,
        padding: 2,
        backgroundColor: "#FFFFFF",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e0e0e0",
        borderRadius: "5px",
        // make height of card same
        height: "200px",
      }}
    >
      <Box display="flex" alignItems="center">
        <FontAwesomeIcon
          icon={card.icon}
          style={{ marginRight: "5px", color: "#68B3C8" }}
        />
        <CardHeader
          title={card.title}
          sx={{
            color: "#68B3C8",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Arial",
          }}
        />
      </Box>
      <CardContent>
        <Box>
          <Typography variant="body2">{card.description}</Typography>
        </Box>
        <button
          style={{
            backgroundColor: "#68B3C8",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
            width: "100px",
            height: "40px",
            fontSize: "15px",
            fontWeight: "bold",
          }}
          onClick={() => onClick(card.title)}
        >
          More
        </button>
      </CardContent>
    </Card>
  );
}

export default MyLearningCard;
