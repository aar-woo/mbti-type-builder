import { styled, Typography } from "@mui/material";
const HeaderText = styled(Typography)`
  padding: 1rem;
`;

const Header = () => {
  return <HeaderText variant="h3">MBTI TypeBuilder</HeaderText>;
};

export default Header;
