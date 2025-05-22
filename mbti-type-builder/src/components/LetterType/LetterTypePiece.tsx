import React from "react";
import { LetterType } from "../../types/letterTypes.tsx";
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
  letter: LetterType;
  color: PaletteColor;
  title: string;
  subtext: string;
  isActive?: boolean;
};

const LetterTypePiece = ({
  letter,
  color,
  title,
  subtext,
  isActive = false,
}: LetterTypePieceProps) => {
  return (
    <CardActionArea>
      <LetterCard>
        <CardContentContainer sx={{ height: "66%" }}>
          <LetterSpan style={{ color: color.main }}>{letter}</LetterSpan>
        </CardContentContainer>
        <CardContentContainer sx={{ height: "33%" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardText sx={{ fontWeight: "bold" }}>{title}</CardText>
            <CardText>{subtext}</CardText>
          </Box>
        </CardContentContainer>
      </LetterCard>
    </CardActionArea>
  );
};

export default LetterTypePiece;
