import { Container, styled } from "@mui/material";

const LayoutContainer = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const AppLayoutContainer = ({ children }) => {
  return <LayoutContainer disableGutters>{children}</LayoutContainer>;
};

export default AppLayoutContainer;
