import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Dichotomy, LetterType } from "../../types/letterTypes.tsx";
import { letterTheme } from "../../colors.tsx";

const PieceContainer = styled(Box)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 3px solid;
`;

const PieceText = styled(Typography)`
  font-size: 1.5rem;
`;

type AggregatePieceProps = {
  letter: LetterType | null;
  dichotomy: Dichotomy;
};

const AggregatePiece = ({ letter, dichotomy }: AggregatePieceProps) => {
  return (
    <PieceContainer
      style={{
        borderColor: letter ? letterTheme.palette[dichotomy].main : "grey",
      }}
    >
      <PieceText>{letter}</PieceText>
    </PieceContainer>
  );
};

export default AggregatePiece;
