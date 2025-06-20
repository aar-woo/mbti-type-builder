import { Box, styled, Typography } from "@mui/material";
import { PersonalityType } from "../types/personalityTypes";
import mbtiPairwiseComparisons from "../mbti_pairwise_comparisons.json";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const TypeComparisonContainer = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 25%;
  padding: 1rem;
  background-color: lightgrey;
  border-radius: 1rem;
  box-shadow: 12px 12px 12px -8px rgba(0, 0, 0, 0.75);
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

  return (
    <TypeComparisonContainer>
      <Typography variant="h4" sx={{ textDecoration: "underline" }}>
        Comparison
      </Typography>

      <Box>
        <Typography variant="h5">Similarities</Typography>
        <Typography>{comparisonData.similarities}</Typography>
      </Box>
      <Box>
        <Typography variant="h5">Differences</Typography>
        <Typography>{comparisonData.differences}</Typography>
      </Box>
      <Box>
        <Typography variant="h5">Summary</Typography>
        <Typography>{comparisonData.summary}</Typography>
      </Box>
      <Box>
        <Typography variant="h5">Compatibility</Typography>
        {compatibilityIcon()}
        <Typography>{comparisonData.compatibility}</Typography>
      </Box>
    </TypeComparisonContainer>
  );
};

export default TypeComparison;
