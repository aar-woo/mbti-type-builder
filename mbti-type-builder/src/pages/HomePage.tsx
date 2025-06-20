import { useEffect, useState } from "react";
import TypesSelect from "../components/TypesSelect.tsx";
import TypeAggregate from "../components/TypeAggregate/TypeAggregate.tsx";
import LetterType, {
  Dichotomy,
  LetterTypeDichotomies,
} from "../types/letterTypes.tsx";
import { Box } from "@mui/material";
import PersonalityTypeInfo from "../components/PersonalityTypeInfo.tsx";
import { PersonalityType } from "../types/personalityTypes.tsx";
import TypeComparison from "../components/TypeComparison.tsx";

const HomePage = () => {
  const [dichotomies, setDichotomies] = useState<LetterTypeDichotomies>({
    energy: null,
    information: null,
    decision: null,
    orientation: null,
  });
  const [personalityType, setPersonalityType] =
    useState<PersonalityType | null>(null);
  const [compareType, setCompareType] = useState<PersonalityType | null>(null);

  const handleLetterPieceClick = (dichotomy: Dichotomy, letter: LetterType) => {
    setDichotomies((dichotomies: LetterTypeDichotomies) => {
      return { ...dichotomies, [dichotomy]: letter };
    });
  };

  const handleCompareTypeSelect = (type: PersonalityType | null) => {
    setCompareType(type);
  };

  useEffect(() => {
    for (const dichotomy in dichotomies) {
      if (dichotomies[dichotomy] === null) {
        return;
      }
    }

    const type =
      dichotomies.energy +
      dichotomies.information +
      dichotomies.decision +
      dichotomies.orientation;
    setPersonalityType(type as PersonalityType);
  }, [dichotomies]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <TypeAggregate dichotomies={dichotomies} />
      <TypesSelect
        dichotomies={dichotomies}
        onLetterPieceClick={handleLetterPieceClick}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        {personalityType && (
          <PersonalityTypeInfo
            type={personalityType}
            compareType={compareType}
            isInitialType={true}
            onCompareTypeSelect={handleCompareTypeSelect}
          />
        )}
        {compareType && personalityType !== compareType && (
          <>
            <TypeComparison type={personalityType} compareType={compareType} />
            <PersonalityTypeInfo
              type={compareType}
              onCompareTypeSelect={handleCompareTypeSelect}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
