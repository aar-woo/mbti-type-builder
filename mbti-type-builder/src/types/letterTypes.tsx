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

export type LetterType = keyof typeof LETTER_TYPES;

export default LetterType;
