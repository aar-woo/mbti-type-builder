import { styled, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { PERSONALITY_TYPES } from "../types/personalityTypes";

const HeaderText = styled(Typography)`
  padding: 1rem;
`;

const Header = () => {
  return (
    <Marquee direction="right" speed={20}>
      {Object.values(PERSONALITY_TYPES).map((type, index) => {
        if (index === 7) {
          return <HeaderText variant="h3">MBTI Type Builder</HeaderText>;
        }
        return (
          <img
            src={`/images/${type}-avatar.png`}
            style={{ width: "50px", margin: "0 30px 0 30px" }}
          />
        );
      })}
      <HeaderText variant="h3">MBTI Type Builder</HeaderText>
    </Marquee>
  );
};

export default Header;
