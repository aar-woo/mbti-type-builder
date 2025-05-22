import React from "react";
import TypeLetterPiece from "./LetterType/LetterTypePiece.tsx";
import { LETTER_TYPES, letterInfo } from "../types/letterTypes.tsx";
import { letterTheme } from "../colors.tsx";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const LettersContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const LetterRow = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TypesSelect = () => {
  return (
    <LettersContainer>
      <LetterRow>
        <TypeLetterPiece
          letter={LETTER_TYPES.I}
          color={letterTheme.palette.red}
          title={letterInfo.I.title}
          subtext={letterInfo.I.subtext}
        />
        <TypeLetterPiece
          letter={LETTER_TYPES.E}
          color={letterTheme.palette.red}
          title={letterInfo.E.title}
          subtext={letterInfo.E.subtext}
        />
      </LetterRow>
      <LetterRow>
        <TypeLetterPiece
          letter={LETTER_TYPES.N}
          color={letterTheme.palette.yellow}
          title={letterInfo.N.title}
          subtext={letterInfo.N.subtext}
        />
        <TypeLetterPiece
          letter={LETTER_TYPES.S}
          color={letterTheme.palette.yellow}
          title={letterInfo.S.title}
          subtext={letterInfo.S.subtext}
        />
      </LetterRow>

      <LetterRow>
        <TypeLetterPiece
          letter={LETTER_TYPES.T}
          color={letterTheme.palette.green}
          title={letterInfo.T.title}
          subtext={letterInfo.T.subtext}
        />
        <TypeLetterPiece
          letter={LETTER_TYPES.F}
          color={letterTheme.palette.green}
          title={letterInfo.F.title}
          subtext={letterInfo.F.subtext}
        />
      </LetterRow>
      <LetterRow>
        <TypeLetterPiece
          letter={LETTER_TYPES.J}
          color={letterTheme.palette.blue}
          title={letterInfo.J.title}
          subtext={letterInfo.J.subtext}
        />
        <TypeLetterPiece
          letter={LETTER_TYPES.P}
          color={letterTheme.palette.blue}
          title={letterInfo.P.title}
          subtext={letterInfo.P.subtext}
        />
      </LetterRow>
    </LettersContainer>
  );
};

export default TypesSelect;
