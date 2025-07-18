import { Box, Button, List, ListItem, styled, Typography } from "@mui/material";
import mbtiTypesData from "../mbti_types_data.json";
import { PersonalityType } from "../types/personalityTypes";
import PersonalityTypeInfoAccordion from "./PersonalityTypeInfoAccordion";
import CompareIcon from "@mui/icons-material/Compare";
import { useState } from "react";
import CompareTypeDialog from "./CompareTypeDialog";
import ClearIcon from "@mui/icons-material/Clear";

const PersonalityTypeContainer = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 50%;
  height: 100%;
  padding: 1rem;
  background-color: lightgrey;
  border-radius: 1rem;
  box-shadow: 12px 12px 12px -8px rgba(0, 0, 0, 0.75);
`;

const InfoHeaderContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const InfoHeaderTextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  max-width: 400px;
`;

const CompareButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  text-decoration: none;
`;

type PersonalityTypeInfoProps = {
  type: PersonalityType;
  compareType?: PersonalityType;
  isInitialType?: Boolean;
  onCompareTypeSelect?: (type: PersonalityType) => void;
};

const PersonalityTypeInfo = ({
  type,
  compareType,
  isInitialType,
  onCompareTypeSelect,
}: PersonalityTypeInfoProps) => {
  const typeData = mbtiTypesData[type];
  const [compareModalOpen, setCompareModalOpen] = useState<boolean>(false);

  return (
    <PersonalityTypeContainer>
      <InfoHeaderContainer>
        <img
          src={`/images/${typeData.type.toLowerCase()}-avatar.png`}
          style={{ width: "150px" }}
        />
        <InfoHeaderTextContainer>
          <Typography
            variant="h4"
            sx={{ textDecoration: "underline", margin: "1rem 0" }}
          >
            {typeData.nickname}
          </Typography>
          <Typography variant="body1">{typeData.summary}</Typography>
        </InfoHeaderTextContainer>
        {isInitialType ? (
          <CompareButton
            variant="contained"
            color="primary"
            startIcon={<CompareIcon />}
            onClick={() => setCompareModalOpen((prev) => !prev)}
          >
            Compare
          </CompareButton>
        ) : (
          <ClearIcon
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={(type) => onCompareTypeSelect(null)}
          />
        )}
      </InfoHeaderContainer>
      <Box>
        <PersonalityTypeInfoAccordion
          title="Strengths"
          details={typeData.strengths}
        />
        <PersonalityTypeInfoAccordion
          title="Challenges"
          details={typeData.weaknesses}
        />
        <PersonalityTypeInfoAccordion
          title="Famous People"
          details={typeData.famousPeople}
        />
      </Box>
      <CompareTypeDialog
        isOpen={compareModalOpen}
        initialType={type}
        compareType={compareType}
        onClose={() => setCompareModalOpen(false)}
        onCompareTypeSelect={(type) => onCompareTypeSelect(type)}
      />
    </PersonalityTypeContainer>
  );
};

export default PersonalityTypeInfo;
