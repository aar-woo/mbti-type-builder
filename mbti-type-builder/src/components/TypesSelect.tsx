import React, { useState } from "react";
import TypeLetterPiece from "./LetterType/LetterTypePiece.tsx";
import LetterType, {
  Dichotomy,
  LETTER_TYPES,
  letterInfo,
  LetterTypeDichotomies,
} from "../types/letterTypes.tsx";
import { letterTheme } from "../colors.tsx";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const LettersContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const LetterRow = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type TypesSelectProps = {
  dichotomies: LetterTypeDichotomies;
  onLetterPieceClick: (dichotomy: Dichotomy, letter: LetterType) => void;
};

const TypesSelect = ({ dichotomies, onLetterPieceClick }: TypesSelectProps) => {
  return (
    <LettersContainer>
      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.I}
          color={letterTheme.palette.red}
          isSelected={dichotomies.energy === LETTER_TYPES.I}
          handleClick={onLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.E}
          color={letterTheme.palette.red}
          isSelected={dichotomies.energy === LETTER_TYPES.E}
          handleClick={onLetterPieceClick}
        />
      </LetterRow>
      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.N}
          color={letterTheme.palette.yellow}
          isSelected={dichotomies.information === LETTER_TYPES.N}
          handleClick={onLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.S}
          color={letterTheme.palette.yellow}
          isSelected={dichotomies.information === LETTER_TYPES.S}
          handleClick={onLetterPieceClick}
        />
      </LetterRow>

      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.T}
          color={letterTheme.palette.green}
          isSelected={dichotomies.decision === LETTER_TYPES.T}
          handleClick={onLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.F}
          color={letterTheme.palette.green}
          isSelected={dichotomies.decision === LETTER_TYPES.F}
          handleClick={onLetterPieceClick}
        />
      </LetterRow>
      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.J}
          color={letterTheme.palette.blue}
          isSelected={dichotomies.orientation === LETTER_TYPES.J}
          handleClick={onLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.P}
          color={letterTheme.palette.blue}
          isSelected={dichotomies.orientation === LETTER_TYPES.P}
          handleClick={onLetterPieceClick}
        />
      </LetterRow>
    </LettersContainer>
  );
};

export default TypesSelect;
