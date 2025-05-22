import React, { useState } from "react";
import TypeLetterPiece from "./LetterType/LetterTypePiece.tsx";
import LetterType, {
  Dichotomy,
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
          handleClick={handleLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.E}
          color={letterTheme.palette.red}
          handleClick={handleLetterPieceClick}
        />
      </LetterRow>
      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.N}
          color={letterTheme.palette.yellow}
          handleClick={handleLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.S}
          color={letterTheme.palette.yellow}
          handleClick={handleLetterPieceClick}
        />
      </LetterRow>

      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.T}
          color={letterTheme.palette.green}
          handleClick={handleLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.F}
          color={letterTheme.palette.green}
          handleClick={handleLetterPieceClick}
        />
      </LetterRow>
      <LetterRow>
        <TypeLetterPiece
          letterInfo={letterInfo.J}
          color={letterTheme.palette.blue}
          handleClick={handleLetterPieceClick}
        />
        <TypeLetterPiece
          letterInfo={letterInfo.P}
          color={letterTheme.palette.blue}
          handleClick={handleLetterPieceClick}
        />
      </LetterRow>
    </LettersContainer>
  );
};

export default TypesSelect;
