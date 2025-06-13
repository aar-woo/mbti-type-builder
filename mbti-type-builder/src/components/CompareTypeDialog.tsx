import {
  Dialog,
  Box,
  Typography,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
} from "@mui/material";
import styled from "@emotion/styled";
import { PERSONALITY_TYPES, PersonalityType } from "../types/personalityTypes";

const TypeListContainer = styled(List)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TypeListItem = styled(ListItem)`
  width: 20%;
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type CompareTypeDialogProps = {
  isOpen: boolean;
  initialType: PersonalityType;
  onClose: () => void;
};

const CompareTypeDialog = ({
  isOpen = false,
  initialType,
  onClose,
}: CompareTypeDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Select another Type</DialogTitle>
      <DialogContent>
        <TypeListContainer>
          {Object.values(PERSONALITY_TYPES).map((type) => {
            return (
              <TypeListItem>
                <Typography>{type}</Typography>
              </TypeListItem>
            );
          })}
        </TypeListContainer>
      </DialogContent>
    </Dialog>
  );
};

export default CompareTypeDialog;
