import { Box, List, ListItem, styled, Typography } from "@mui/material";
import mbtiTypesData from "../mbti_types_data.json";
import { PersonalityType } from "../types/personalityTypes";

const PersonalityTypeContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 80%;
`;

const InfoColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
`;

const AttributeListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

type PersonalityTypeInfoProps = {
  type: PersonalityType;
};

const PersonalityTypeInfo = ({ type }: PersonalityTypeInfoProps) => {
  const typeData = mbtiTypesData[type];
  return (
    <PersonalityTypeContainer>
      <Typography variant="h5">{typeData.type}</Typography>
      <Typography variant="h4" sx={{ textDecoration: "underline" }}>
        {typeData.nickname}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        {typeData.summary}
      </Typography>
      <InfoContainer>
        <InfoColumn>
          <Typography variant="h5" sx={{ textDecoration: "underline" }}>
            Strengths
          </Typography>
          <List>
            {typeData.strengths.map((strength) => (
              <AttributeListItem key={strength}>
                <Typography>- {strength}</Typography>
              </AttributeListItem>
            ))}
          </List>
        </InfoColumn>
        <InfoColumn>
          <Typography variant="h5" sx={{ textDecoration: "underline" }}>
            Weaknesses
          </Typography>
          <List>
            {typeData.weaknesses.map((weakness) => (
              <AttributeListItem key={weakness}>
                <Typography>- {weakness}</Typography>
              </AttributeListItem>
            ))}
          </List>
        </InfoColumn>
        <InfoColumn>
          <Typography variant="h5" sx={{ textDecoration: "underline" }}>
            Famous People
          </Typography>
          <List>
            {typeData.famousPeople.map((person) => (
              <AttributeListItem key={person}>
                <Typography>- {person}</Typography>
              </AttributeListItem>
            ))}
          </List>
        </InfoColumn>
      </InfoContainer>
    </PersonalityTypeContainer>
  );
};

export default PersonalityTypeInfo;
