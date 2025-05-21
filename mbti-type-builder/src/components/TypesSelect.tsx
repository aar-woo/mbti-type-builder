import React from "react";
import TypeLetterPiece from "./LetterType/LetterTypePiece.tsx";
import { LETTER_TYPES } from "../types/letterTypes.tsx";
import { letterTheme } from "../colors.tsx";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const LettersContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const TypesSelect = () => {
  return (
    <LettersContainer>
      <TypeLetterPiece
        letter={LETTER_TYPES.I}
        color={letterTheme.palette.red}
      />
    </LettersContainer>
  );
};

export default TypesSelect;
