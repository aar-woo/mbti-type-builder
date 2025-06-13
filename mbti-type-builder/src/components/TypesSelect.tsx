import LetterTypePiece from "./LetterType/LetterTypePiece";
import LetterType, {
  Dichotomy,
  LetterDichotomies,
  letterInfo,
  LetterTypeDichotomies,
} from "../types/letterTypes";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import HeightIcon from "@mui/icons-material/Height";
import { letterTheme } from "../colors";

const LettersContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const LetterRow = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

type TypesSelectProps = {
  dichotomies: LetterTypeDichotomies;
  onLetterPieceClick: (dichotomy: Dichotomy, letter: LetterType) => void;
};

const TypesSelect = ({ dichotomies, onLetterPieceClick }: TypesSelectProps) => {
  return (
    <LettersContainer>
      {Object.entries(LetterDichotomies).map(([dichotomy, letters]) => (
        <LetterRow>
          <LetterTypePiece
            letterInfo={letterInfo[letters[0]]}
            isSelected={dichotomies[dichotomy as Dichotomy] === letters[0]}
            handleClick={onLetterPieceClick}
            tooltipPlacement="top"
          />
          <HeightIcon fontSize="small" sx={{ color: "black" }} />
          <LetterTypePiece
            letterInfo={letterInfo[letters[1]]}
            isSelected={dichotomies[dichotomy as Dichotomy] === letters[1]}
            handleClick={onLetterPieceClick}
            tooltipPlacement="bottom"
          />
        </LetterRow>
      ))}
    </LettersContainer>
  );
};

export default TypesSelect;
