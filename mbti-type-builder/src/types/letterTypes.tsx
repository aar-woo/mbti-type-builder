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

export const DICHOTOMIES = {
  energy: "energy",
  information: "information",
  decision: "decision",
  orientation: "orientation",
} as const;

export type LetterInfo = {
  letter: LetterType;
  title: string;
  subtext: string;
  dichotomy: Dichotomy;
};

export const letterInfo: Record<LetterType, LetterInfo> = {
  I: {
    letter: LETTER_TYPES.I,
    dichotomy: DICHOTOMIES.energy,
    title: "Introvert",
    subtext: "In-depth relationships.",
  },
  E: {
    letter: LETTER_TYPES.E,
    dichotomy: DICHOTOMIES.energy,
    title: "Extrovert",
    subtext: "Energetic connections.",
  },
  N: {
    letter: LETTER_TYPES.N,
    dichotomy: DICHOTOMIES.information,
    title: "Intuitive",
    subtext: "Abstract thinking.",
  },
  S: {
    letter: LETTER_TYPES.S,
    dichotomy: DICHOTOMIES.information,
    title: "Sensing",
    subtext: "Concrete details.",
  },
  T: {
    letter: LETTER_TYPES.T,
    dichotomy: DICHOTOMIES.information,
    title: "Thinking",
    subtext: "Logical decisions.",
  },
  F: {
    letter: LETTER_TYPES.F,
    dichotomy: DICHOTOMIES.decision,
    title: "Feeling",
    subtext: "Emotional awareness.",
  },
  J: {
    letter: LETTER_TYPES.J,
    dichotomy: DICHOTOMIES.orientation,
    title: "Judging",
    subtext: "Structured planning.",
  },
  P: {
    letter: LETTER_TYPES.P,
    dichotomy: DICHOTOMIES.orientation,
    title: "Perceiving",
    subtext: "Flexible approach.",
  },
};

export type LetterTypeDichotomies = {
  [DICHOTOMIES.energy]: typeof LETTER_TYPES.I | typeof LETTER_TYPES.E | null;
  [DICHOTOMIES.information]:
    | typeof LETTER_TYPES.N
    | typeof LETTER_TYPES.S
    | null;
  [DICHOTOMIES.decision]: typeof LETTER_TYPES.T | typeof LETTER_TYPES.F | null;
  [DICHOTOMIES.orientation]:
    | typeof LETTER_TYPES.J
    | typeof LETTER_TYPES.P
    | null;
};

export type Dichotomy = keyof typeof DICHOTOMIES;
export type LetterType = keyof typeof LETTER_TYPES;

export default LetterType;
