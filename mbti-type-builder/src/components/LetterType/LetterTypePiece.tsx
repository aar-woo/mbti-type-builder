import { Dichotomy, LetterInfo, LetterType } from "../../types/letterTypes";
import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
  Tooltip,
  TooltipProps,
} from "@mui/material";
import { letterTheme } from "../../colors";
import { motion } from "framer-motion";

const LetterCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 110px;
  border: 1px solid gray;
`;

const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding: 12px 0;
`;

const LetterSpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const CardText = styled(Typography)`
  text-transform: none;
  font-size: 0.8rem;
`;

const TooltipContent = styled(Box)({
  "& .tooltip-title": {
    fontWeight: 600,
    fontSize: "1rem",
    marginBottom: "4px",
    color: "black",
  },
  "& .tooltip-subtext": {
    fontSize: "0.875rem",
    color: "rgba(0, 0, 0, 0.6)",
  },
});
type LetterTypePieceProps = {
  letterInfo: LetterInfo;
  isSelected: boolean;
  handleClick: (dichotomy: Dichotomy, letter: LetterType) => void;
  tooltipPlacement?: TooltipProps["placement"];
};

const LetterTypePiece = ({
  letterInfo,
  isSelected,
  handleClick,
  tooltipPlacement = "top",
}: LetterTypePieceProps) => {
  return (
    <Tooltip
      placement={tooltipPlacement}
      enterDelay={800}
      title={
        <TooltipContent>
          <Typography className="tooltip-title">{letterInfo.title}</Typography>
          <Typography className="tooltip-subtext">{letterInfo.info}</Typography>
        </TooltipContent>
      }
      slotProps={{
        tooltip: {
          sx: {
            backgroundColor: "white",
            padding: "12px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          },
        },
      }}
    >
      <motion.div whileHover={{ scale: 1.07 }}>
        <CardActionArea
          onClick={() => {
            handleClick(letterInfo.dichotomy, letterInfo.letter);
          }}
        >
          <LetterCard
            style={{
              borderColor: isSelected
                ? letterTheme.palette[letterInfo.dichotomy].main
                : undefined,
              backgroundColor: isSelected
                ? letterTheme.palette[letterInfo.dichotomy].light
                : undefined,
            }}
          >
            <CardContentContainer>
              <LetterSpan
                style={{
                  color: letterTheme.palette[letterInfo.dichotomy].main,
                }}
              >
                {letterInfo.letter}
              </LetterSpan>
            </CardContentContainer>
            <CardContentContainer>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardText sx={{ fontWeight: "bold" }}>
                  {letterInfo.title}
                </CardText>
                <CardText>{letterInfo.subtext}</CardText>
              </Box>
            </CardContentContainer>
          </LetterCard>
        </CardActionArea>
      </motion.div>
    </Tooltip>
  );
};

export default LetterTypePiece;
