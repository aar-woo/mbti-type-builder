export const LETTER_TYPES = {
  I: "I",
  E: "E",
  N: "N",
  S: "S",
  T: "T",
  F: "F",
  J: "J",
  P: "P",
} as const;

export const letterInfo = {
  I: {
    title: "Introvert",
    subtext: "In-depth relationships.",
  },
  E: {
    title: "Extrovert",
    subtext: "Energetic connections.",
  },
  N: {
    title: "Intuitive",
    subtext: "Abstract thinking.",
  },
  S: {
    title: "Sensing",
    subtext: "Concrete details.",
  },
  T: {
    title: "Thinking",
    subtext: "Logical decisions.",
  },
  F: {
    title: "Feeling",
    subtext: "Emotional awareness.",
  },
  J: {
    title: "Judging",
    subtext: "Structured planning.",
  },
  P: {
    title: "Perceiving",
    subtext: "Flexible approach.",
  },
};

export type LetterType = keyof typeof LETTER_TYPES;

export default LetterType;
