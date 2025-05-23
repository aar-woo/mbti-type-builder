import React, { useState } from "react";
import TypesSelect from "../components/TypesSelect.tsx";
import TypeAggregate from "../components/TypeAggregate.tsx";
import LetterType, {
  Dichotomy,
  LetterTypeDichotomies,
} from "../types/letterTypes.tsx";

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
    <div>
      <TypeAggregate />
      <TypesSelect
        dichotomies={dichotomies}
        onLetterPieceClick={handleLetterPieceClick}
      />
    </div>
  );
};

export default HomePage;
