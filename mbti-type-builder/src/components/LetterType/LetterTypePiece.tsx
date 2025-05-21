import React from "react";
import "./LetterTypePiece.css";
import { LetterType } from "../../types/letterTypes.tsx";

type LetterTypePieceProps = {
  letter: LetterType;
  color: string;
  isActive?: boolean;
};

const LetterTypePiece = ({
  letter,
  color,
  isActive = false,
}: LetterTypePieceProps) => {
  return (
    <button className="pieceContainer" style={{ borderColor: color }}>
      <span className="letter" style={{ color: color }}>
        {letter}
      </span>
    </button>
  );
};

export default LetterTypePiece;
