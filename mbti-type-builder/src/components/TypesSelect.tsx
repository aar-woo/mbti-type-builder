import React from "react";
import TypeLetterPiece from "./LetterType/LetterTypePiece.tsx";
import "./TypesSelect.css";
import { LETTER_TYPES } from "../types/letterTypes.tsx";
import COLORS from "../colors.tsx";

const TypesSelect = () => {
  return (
    <div className="letterPiecesContainer">
      <TypeLetterPiece letter={LETTER_TYPES.I} color={COLORS.RED} />
    </div>
  );
};

export default TypesSelect;
