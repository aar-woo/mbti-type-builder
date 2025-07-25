import { Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const ErrorItemsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const CodeText = styled(Typography)`
  font-size: 14rem;
  color: rgb(44, 64, 0);
  position: absolute;
  z-index: -1;
`;

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <ErrorItemsContainer>
        <img
          src="/images/infj-shrug-avatar.png"
          style={{ width: "200px", marginTop: "20px" }}
        />
        <Typography variant="h5">Page Not Found</Typography>
        <CodeText variant="h1">4&nbsp;&nbsp;&nbsp;4</CodeText>
      </ErrorItemsContainer>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </ErrorContainer>
  );
};

export default ErrorPage;
