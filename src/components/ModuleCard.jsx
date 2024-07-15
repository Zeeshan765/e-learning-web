import { Box, Button, Card, CardContent } from "@mui/material";
import React from "react";

function ModuleCard({ card, onClick }) {
  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "80%", md: "320px" },
        margin: "20px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px #00000040",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        height: "auto",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <img
            src={card.src}
            alt="logo"
            style={{
              width: "70px",
              height: "70px",
              border: "1px solid",
              borderRadius: "50%",
              background: "#FABC3D",
              marginBottom: "20px",
            }}
          />
          <h2 style={{ marginBottom: "20px" }}>
            {card.title}{" "}
            {card.isNew && (
              <span
                style={{
                  backgroundColor: "#FC6100",
                  color: "white",
                  padding: "7px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                New
              </span>
            )}
          </h2>
          <p style={{ marginBottom: "20px" }}>{card.description}</p>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "#68B3C8",
              width: "50%",
              color: "white",
              height: "auto",
              padding: "10px 0",
            }}
            onClick={() => onClick(card.title)}
          >
            View
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ModuleCard;
