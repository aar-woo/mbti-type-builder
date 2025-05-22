import React from "react";
import { Dichotomy, LetterInfo, LetterType } from "../../types/letterTypes.tsx";
import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  PaletteColor,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";

const LetterCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 150px;
  border: 1px solid gray;
`;

const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const LetterSpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const CardText = styled(Typography)`
  text-transform: none;
  font-size: 0.8rem;
`;

type LetterTypePieceProps = {
  letterInfo: LetterInfo;
  color: PaletteColor;
  isActive?: boolean;
  handleClick: (dichotomy: Dichotomy, letter: LetterType) => void;
};

const LetterTypePiece = ({
  letterInfo,
  color,
  isActive = false,
  handleClick,
}: LetterTypePieceProps) => {
  return (
    <CardActionArea
      onClick={() => {
        handleClick(letterInfo.dichotomy, letterInfo.letter);
      }}
    >
      <LetterCard sx={{ borderColor: isActive ? "red" : null }}>
        <CardContentContainer sx={{ height: "66%" }}>
          <LetterSpan style={{ color: color.main }}>
            {letterInfo.letter}
          </LetterSpan>
        </CardContentContainer>
        <CardContentContainer sx={{ height: "33%" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardText sx={{ fontWeight: "bold" }}>{letterInfo.title}</CardText>
            <CardText>{letterInfo.subtext}</CardText>
          </Box>
        </CardContentContainer>
      </LetterCard>
    </CardActionArea>
  );
};

export default LetterTypePiece;
