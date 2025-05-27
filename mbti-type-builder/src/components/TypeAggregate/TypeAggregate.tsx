import { LetterTypeDichotomies } from "../../types/letterTypes";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import AggregatePiece from "./AggregatePiece";
import { Dichotomy } from "../../types/letterTypes";

const TypeAggregateContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
  font-size: 4rem;
  gap: 4px;
`;

type TypeAggregateProps = {
  dichotomies: LetterTypeDichotomies;
};

const TypeAggregate = ({ dichotomies }: TypeAggregateProps) => {
  return (
    <TypeAggregateContainer>
      {Object.keys(dichotomies).map((dichotomy) => {
        return (
          <AggregatePiece
            letter={dichotomies[dichotomy]}
            dichotomy={dichotomy as Dichotomy}
          />
        );
      })}
    </TypeAggregateContainer>
  );
};

export default TypeAggregate;
