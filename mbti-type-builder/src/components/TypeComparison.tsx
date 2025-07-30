import { Box, styled, Typography } from "@mui/material";
import { PersonalityType } from "../types/personalityTypes";
import mbtiPairwiseComparisons from "../mbti_pairwise_comparisons.json";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import BoltIcon from "@mui/icons-material/Bolt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { letterTheme } from "../colors";
import LetterType from "../types/letterTypes";

const TypeComparisonContainer = styled(Box)`
  position: relative;
  margin-top: 1rem;
  width: 25%;
  align-self: flex-start;

  overflow: hidden;
  padding: 1rem 0.7rem 1rem 0.7rem;
  background-color: lightgrey;
  border-radius: 1rem;
  box-shadow: 12px 12px 12px -8px rgba(0, 0, 0, 0.75);
  font-size: 12px;
`;

const ComparisonScrollContainer = styled(Box)`
  height: 100%;
  max-height: 527px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: grey transparent;
`;

const CompareSubHeader = styled(Typography)`
  text-decoration: underline;
`;

const CompareText = styled(Typography)`
  font-size: 0.8rem;
`;

type TypeComparisonProps = {
  type: PersonalityType;
  compareType: PersonalityType;
};

const TypeComparison = ({ type, compareType }: TypeComparisonProps) => {
  let comparisonData;

  for (const comparison of mbtiPairwiseComparisons) {
    if (
      comparison.types.includes(type) &&
      comparison.types.includes(compareType)
    ) {
      comparisonData = comparison;
    }
  }

  const compatibilityIcon = () => {
    switch (comparisonData.compatibility) {
      case "Great":
        return <SentimentVerySatisfiedIcon fontSize="large" />;
      case "Good":
        return <SentimentSatisfiedIcon fontSize="large" />;
      case "Fine":
        return <SentimentNeutralIcon fontSize="large" />;
      case "Bad":
        return <SentimentDissatisfiedIcon fontSize="large" />;
    }
  };

  let diffPrefs = [];
  for (let i = 0; i < 4; i++) {
    const a = type[i],
      b = compareType[i];
    if (a !== b) {
      diffPrefs.push({ pos: i, pair: [a, b] });
    }
  }

  let differencesParts = diffPrefs.map((dp) => {
    const [a, b] = dp.pair;

    switch (dp.pos) {
      case 0:
        return `${type} is ${
          a === "I" ? "introverted" : "extraverted"
        } while ${compareType} is ${b === "I" ? "introverted" : "extraverted"}`;
      case 1:
        return (
          `${type} ${
            a === "N" ? "prefers abstract ideas" : "prefers concrete details"
          }, ` +
          `${compareType} ${
            b === "N" ? "prefers abstract ideas" : "prefers concrete details"
          }`
        );
      case 2:
        return (
          `${type} makes decisions based on ${
            a === "T" ? "logic" : "values/empathy"
          }, ` +
          `${compareType} based on ${b === "T" ? "logic" : "values/empathy"}`
        );
      case 3:
        return (
          `${type} leans toward a ${
            a === "J" ? "structured" : "spontaneous"
          } lifestyle, ` +
          `${compareType} tends to be ${
            b === "J" ? "structured" : "spontaneous"
          }`
        );
    }
  });
  const differences = differencesParts.join("; ") + ".";

  const dichotomyIcons = (dichotomyLetter: LetterType) => {
    switch (dichotomyLetter) {
      case "I":
      case "E":
        return (
          <BoltIcon
            fontSize="large"
            sx={{ color: letterTheme.palette.energy.dark }}
          />
        );
      case "N":
      case "S":
        return (
          <PsychologyIcon
            fontSize="large"
            sx={{ color: letterTheme.palette.information.main }}
          />
        );
      case "T":
      case "F":
        return (
          <CallSplitIcon
            fontSize="large"
            sx={{ color: letterTheme.palette.decision.main }}
          />
        );
      case "J":
      case "P":
        return (
          <EmojiPeopleIcon
            fontSize="large"
            sx={{ color: letterTheme.palette.orientation.main }}
          />
        );
    }
  };

  return (
    <TypeComparisonContainer>
      <ComparisonScrollContainer>
        <Typography variant="h4" sx={{ textDecoration: "underline" }}>
          Comparison
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src={`/images/${type.toLowerCase()}-avatar.png`}
            style={{ width: "60px" }}
          />
          <CompareArrowsIcon />
          <img
            src={`/images/${compareType.toLowerCase()}-avatar.png`}
            style={{ width: "60px" }}
          />
        </Box>
        <Box>
          <CompareSubHeader variant="h5">Similarities</CompareSubHeader>
          <Box>
            {comparisonData.samePrefs.map((pref) => {
              return dichotomyIcons(pref);
            })}
          </Box>
          <CompareText>{comparisonData.similarities}</CompareText>
        </Box>
        <Box>
          <CompareSubHeader variant="h5">Differences</CompareSubHeader>
          {diffPrefs.map((pref) => {
            return dichotomyIcons(pref.pair[0]);
          })}
          <CompareText>{differences}</CompareText>
        </Box>
        <Box>
          <CompareSubHeader variant="h5">Summary</CompareSubHeader>
          <CompareText>{comparisonData.summary}</CompareText>
        </Box>
        <Box>
          <CompareSubHeader variant="h5">Compatibility</CompareSubHeader>
          {compatibilityIcon()}
          <CompareText>{comparisonData.compatibility}</CompareText>
        </Box>
      </ComparisonScrollContainer>
    </TypeComparisonContainer>
  );
};

export default TypeComparison;
