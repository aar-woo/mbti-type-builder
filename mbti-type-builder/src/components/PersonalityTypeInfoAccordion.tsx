import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const AccordionHeader = styled(Typography)`
  font-weight: bold;
`;

const InfoAccordion = styled(Accordion)`
  width: 600px;
`;

type PersonaltiyTypeInfoAccordionProps = {
  title: string;
  details: string[];
};

const PersonalityTypeInfoAccordion = ({
  title,
  details,
}: PersonaltiyTypeInfoAccordionProps) => {
  return (
    <InfoAccordion sx={{ width: "600px" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionHeader>{title}</AccordionHeader>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {details.map((detail) => (
            <ListItem key={detail}>
              <ListItemText>- {detail}</ListItemText>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </InfoAccordion>
  );
};

export default PersonalityTypeInfoAccordion;
