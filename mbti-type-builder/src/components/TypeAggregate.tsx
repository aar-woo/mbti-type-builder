import React from "react";
import { LetterTypeDichotomies } from "../types/letterTypes";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const TypeAggregateContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
  font-size: 4rem;
`;

type TypeAggregateProps = {
  dichotomies: LetterTypeDichotomies;
};

const TypeAggregate = ({ dichotomies }: TypeAggregateProps) => {
  return (
    <TypeAggregateContainer>
      {Object.keys(dichotomies).map((dichotomy) => {
        return (
          <Typography sx={{ fontSize: "2rem" }}>
            {dichotomies[dichotomy]}
          </Typography>
        );
      })}
    </TypeAggregateContainer>
  );
};

export default TypeAggregate;
