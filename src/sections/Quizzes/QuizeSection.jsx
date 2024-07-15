import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Get, Post } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
import { useSnackbar } from "notistack";
import { ShowQuestion } from "../../components";
import { Button, Card, CardContent } from "@mui/material";

function QuizeSection() {
  const { contentId, quizId } = useParams();
  const userId = parseInt(localStorage.getItem("userId"));
  const { enqueueSnackbar } = useSnackbar();
  const [mcqs, setMcqs] = useState([]);
  const [score, setScore] = useState(0);
  const getQuizzezByContentId = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getQuizzezByContentId.replace(":contentId", contentId),
        (resp) => {
          setMcqs(resp[0].mcq);
        },
        (error) => {
          enqueueSnackbar("Failed to fetch quizzes", {
            variant: "error",
          });
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to fetch quizzes", {
        variant: "error",
      });
    }
  }, [contentId, enqueueSnackbar]);

  useEffect(() => {
    getQuizzezByContentId();
  }, [getQuizzezByContentId]);

  const handleSubmitResult = () => {
    const payload = {
      score: score,
      total: mcqs.length,
      percentage: (score / mcqs.length) * 100,
      status: (score / mcqs.length) * 100 > 60 ? "pass" : "fail",
      userId: userId,
      quezId: quizId,
    };

    Post(
      payload,
      API_URLS.saveResult,
      payload,
      (resp) => {
        enqueueSnackbar("Result submitted successfully", {
          variant: "success",
        });
        setScore(0);
        // redirect to 1 page back
        window.history.back();
      },
      (error) => {
        enqueueSnackbar("Failed to submit result", {
          variant: "error",
        });
      }
    );
  };

  return (
    <Card
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "20px",
        height: "100vh",
        marginLeft: "25%",
        marginRight: "25%",
        overflowY: "auto",
      }}
    >
      <CardContent>
        {mcqs.map((mcq, index) => {
          const correctAnswer = mcq.options.find(
            (option) => option.is_correct
          )?.option;
          return (
            <div key={index} style={{ width: "100%" }}>
              {/* <Typography variant="h6">Question {index + 1}</Typography> */}
              <ShowQuestion
                question={mcq.question}
                options={mcq.options}
                correctAnswer={correctAnswer}
                onAnswer={(isCorrectAnswer) => {
                  if (isCorrectAnswer) {
                    setScore(score + 1);
                  }
                }}
              />
              <br />
            </div>
          );
        })}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7AC29A",
            '&:hover': {
              backgroundColor: "#8AC29A",
            },
            color: "white",
            marginTop: "20px",
            borderRadius: "0px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",

          }}
          onClick={() => handleSubmitResult()}
        >
          Submit Answers
        </Button>
      </CardContent>
    </Card>
  );
}

export default QuizeSection;
