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

const TypesSelect = () => {
  const [dichotomies, setDichotomies] = useState<LetterTypeDichotomies>({
    energy: null,
    information: null,
    decision: null,
    orientation: null,
  });

  const handleLetterPieceClick = (dichotomy: Dichotomy, letter: LetterType) => {
    setDichotomies((prev) => {
      return { ...prev, [dichotomy]: letter };
    });
  };

  return (
    <LettersContainer>
      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.I}
          color={letterTheme.palette.red}
          isSelected={dichotomies.energy === LETTER_TYPES.I}
          handleClick={handleLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.E}
          color={letterTheme.palette.red}
          isSelected={dichotomies.energy === LETTER_TYPES.E}
          handleClick={handleLetterPieceClick}
        />
      </LetterRow>
      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.N}
          color={letterTheme.palette.yellow}
          isSelected={dichotomies.information === LETTER_TYPES.N}
          handleClick={handleLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.S}
          color={letterTheme.palette.yellow}
          isSelected={dichotomies.information === LETTER_TYPES.S}
          handleClick={handleLetterPieceClick}
        />
      </LetterRow>

      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.T}
          color={letterTheme.palette.green}
          isSelected={dichotomies.decision === LETTER_TYPES.T}
          handleClick={handleLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.F}
          color={letterTheme.palette.green}
          isSelected={dichotomies.decision === LETTER_TYPES.F}
          handleClick={handleLetterPieceClick}
        />
      </LetterRow>
      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.J}
          color={letterTheme.palette.blue}
          isSelected={dichotomies.orientation === LETTER_TYPES.J}
          handleClick={handleLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.P}
          color={letterTheme.palette.blue}
          isSelected={dichotomies.orientation === LETTER_TYPES.P}
          handleClick={handleLetterPieceClick}
        />
      </LetterRow>
    </LettersContainer>
  );
};

export default TypesSelect;
