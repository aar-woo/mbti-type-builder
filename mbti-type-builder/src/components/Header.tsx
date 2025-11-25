import { Box, styled, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { PERSONALITY_TYPES } from "../types/personalityTypes";

const HeaderText = styled(Typography)`
  display: flex;
  padding: 0.5rem;
  white-space: nowrap;
`;

const typesArr = Object.values(PERSONALITY_TYPES);

const personalityTypesHalfStart = typesArr
  .slice(Math.floor(typesArr.length / 2), typesArr.length + 1)
  .concat(typesArr.slice(0, Math.floor(typesArr.length / 2)));

const personalityTypesOffset = typesArr
  .slice(5, typesArr.length + 1)
  .concat(typesArr.slice(0, 5));

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Marquee
        direction="right"
        speed={20}
        pauseOnHover={false}
        gradient={false}
      >
        {Object.values(typesArr).map((type, index) => {
          return (
            <img
              key={`marquee-1-${type}-${index}`}
              src={`/images/${type}-avatar.png`}
              alt={`${type} personality type avatar`}
              style={{ width: "32px", margin: "0 30px 0 30px" }}
            />
          );
        })}
      </Marquee>
      <HeaderText variant="h3">MBTI Type Builder</HeaderText>
      <Marquee
        direction="right"
        speed={20}
        pauseOnHover={false}
        gradient={false}
      >
        {Object.values(personalityTypesOffset).map((type, index) => {
          return (
            <img
              key={`marquee-2-${type}-${index}`}
              src={`/images/${type}-avatar.png`}
              alt={`${type} personality type avatar`}
              style={{ width: "30px", margin: "0 30px 0 30px" }}
            />
          );
        })}
      </Marquee>
    </Box>
  );
};

export default Header;
