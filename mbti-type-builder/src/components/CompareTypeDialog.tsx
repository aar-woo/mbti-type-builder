import {
  Dialog,
  Box,
  Typography,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import styled from "@emotion/styled";
import { PERSONALITY_TYPES, PersonalityType } from "../types/personalityTypes";

const TypeListContainer = styled(List)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TypeListItemButton = styled(ListItemButton)`
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
  compareType: PersonalityType;
  onCompareTypeSelect: (type: PersonalityType) => void;
};

const CompareTypeDialog = ({
  isOpen = false,
  initialType,
  onClose,
  compareType,
  onCompareTypeSelect,
}: CompareTypeDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Select another Type</DialogTitle>
      <DialogContent>
        <TypeListContainer>
          {Object.values(PERSONALITY_TYPES).map((type) => {
            return (
              <TypeListItemButton
                disabled={
                  type === initialType || type === compareType ? true : false
                }
                sx={{
                  color:
                    type === initialType || type === compareType
                      ? "white"
                      : null,
                  backgroundColor:
                    type === initialType
                      ? "green"
                      : type === compareType
                      ? "blue"
                      : null,
                }}
                onClick={() => {
                  onCompareTypeSelect(type);
                  onClose();
                }}
                key={type}
              >
                <Typography>{type}</Typography>
              </TypeListItemButton>
            );
          })}
        </TypeListContainer>
      </DialogContent>
    </Dialog>
  );
};

export default CompareTypeDialog;
