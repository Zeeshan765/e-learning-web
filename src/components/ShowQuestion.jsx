import React, { useState } from "react";
import { Typography, Radio, FormControlLabel, RadioGroup } from "@mui/material";

const ShowQuestion = ({ question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const handleChangeRadio = (e, option) => {
    if (option.is_correct) {
      onAnswer(true);
    } else {
      onAnswer(false);
    }
  };
  return (
    <div>
      <Typography variant="h6" textAlign="center">
        {question}
      </Typography>
      <hr />
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.option}
            control={<Radio onChange={(e) => handleChangeRadio(e, option)} />}
            label={option.option}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default ShowQuestion;
