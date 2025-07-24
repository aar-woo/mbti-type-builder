import { Box, Button, styled, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonalityTypeInfo from "../components/PersonalityTypeInfo";
import { PersonalityType } from "../types/personalityTypes";
import { useParams, useNavigate } from "react-router-dom";

const ExploreTypesButton = styled(Button)`
  text-decoration: none;
  margin-top: 1rem;
`;

const TypeCardPage = () => {
  const { typeParam } = useParams();
  let navigate = useNavigate();

  return (
    <Box>
      <ExploreTypesButton
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          navigate("/");
        }}
      >
        <Typography>Explore other types</Typography>
      </ExploreTypesButton>
      <PersonalityTypeInfo type={typeParam.toUpperCase() as PersonalityType} />
    </Box>
  );
};

export default TypeCardPage;
