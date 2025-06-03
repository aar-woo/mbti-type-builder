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

const InfoBodyContainer = styled(Box)`
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
  width: 400px;
`;

type PersonalityTypeInfoProps = {
  type: PersonalityType;
};

const PersonalityTypeInfo = ({ type }: PersonalityTypeInfoProps) => {
  const typeData = mbtiTypesData[type];

  console.log(typeData.type.toLowerCase());
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
      </InfoHeaderContainer>
      <InfoBodyContainer>
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
            Challenges
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
      </InfoBodyContainer>
    </PersonalityTypeContainer>
  );
};

export default PersonalityTypeInfo;
