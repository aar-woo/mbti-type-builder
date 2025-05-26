import { useState } from "react";
import TypesSelect from "../components/TypesSelect.tsx";
import TypeAggregate from "../components/TypeAggregate/TypeAggregate.tsx";
import LetterType, {
  Dichotomy,
  LetterTypeDichotomies,
} from "../types/letterTypes.tsx";
import { Box } from "@mui/material";

const HomePage = () => {
  const [dichotomies, setDichotomies] = useState<LetterTypeDichotomies>({
    energy: null,
    information: null,
    decision: null,
    orientation: null,
  });

  const handleLetterPieceClick = (dichotomy: Dichotomy, letter: LetterType) => {
    setDichotomies((dichotomies: LetterTypeDichotomies) => {
      return { ...dichotomies, [dichotomy]: letter };
    });
  };

  return (
    <Box>
      <TypeAggregate dichotomies={dichotomies} />
      <TypesSelect
        dichotomies={dichotomies}
        onLetterPieceClick={handleLetterPieceClick}
      />
    </Box>
  );
};

export default HomePage;
