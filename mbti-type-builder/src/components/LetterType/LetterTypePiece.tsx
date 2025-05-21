import React from "react";
import { LetterType } from "../../types/letterTypes.tsx";
import styled from "@emotion/styled";
import { Button, Card, PaletteColor } from "@mui/material";

const LetterButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 4px solid;
  border-radius: 10px;
`;

const LetterSpan = styled.span`
  font-size: 4rem;
  font-weight: bold;
`;

type LetterTypePieceProps = {
  letter: LetterType;
  color: PaletteColor;
  isActive?: boolean;
};

const LetterTypePiece = ({
  letter,
  color,
  isActive = false,
}: LetterTypePieceProps) => {
  return (
    <LetterButton style={{ borderColor: color.main }}>
      <LetterSpan style={{ color: color.main }}>{letter}</LetterSpan>
    </LetterButton>
  );
};

export default LetterTypePiece;
