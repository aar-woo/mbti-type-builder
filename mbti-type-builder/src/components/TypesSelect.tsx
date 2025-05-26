import LetterTypePiece from "./LetterType/LetterTypePiece";
import LetterType, {
  Dichotomy,
  LETTER_TYPES,
  letterInfo,
  LetterTypeDichotomies,
} from "../types/letterTypes";
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
        <LetterTypePiece
          letterInfo={letterInfo.I}
          isSelected={dichotomies.energy === LETTER_TYPES.I}
          handleClick={onLetterPieceClick}
        />
        <LetterTypePiece
          letterInfo={letterInfo.E}
          isSelected={dichotomies.energy === LETTER_TYPES.E}
          handleClick={onLetterPieceClick}
        />
      </LetterRow>
      <LetterRow>
        <LetterTypePiece
          letterInfo={letterInfo.N}
          isSelected={dichotomies.information === LETTER_TYPES.N}
          handleClick={onLetterPieceClick}
        />
        <LetterTypePiece
          letterInfo={letterInfo.S}
          isSelected={dichotomies.information === LETTER_TYPES.S}
          handleClick={onLetterPieceClick}
        />
      </LetterRow>

      <LetterRow>
        <LetterTypePiece
          letterInfo={letterInfo.T}
          isSelected={dichotomies.decision === LETTER_TYPES.T}
          handleClick={onLetterPieceClick}
        />
        <LetterTypePiece
          letterInfo={letterInfo.F}
          isSelected={dichotomies.decision === LETTER_TYPES.F}
          handleClick={onLetterPieceClick}
        />
      </LetterRow>
      <LetterRow>
        <LetterTypePiece
          letterInfo={letterInfo.J}
          isSelected={dichotomies.orientation === LETTER_TYPES.J}
          handleClick={onLetterPieceClick}
        />
        <LetterTypePiece
          letterInfo={letterInfo.P}
          isSelected={dichotomies.orientation === LETTER_TYPES.P}
          handleClick={onLetterPieceClick}
        />
      </LetterRow>
    </LettersContainer>
  );
};

export default TypesSelect;
