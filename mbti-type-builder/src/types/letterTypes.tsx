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

export type LetterType = keyof typeof LETTER_TYPES;
export type Dichotomy = keyof typeof DICHOTOMIES;

export type LetterTypeDichotomies = {
  [DICHOTOMIES.energy]: Extract<LetterType, "I" | "E">;
  [DICHOTOMIES.information]: Extract<LetterType, "N" | "S">;
  [DICHOTOMIES.decision]: Extract<LetterType, "T" | "F">;
  [DICHOTOMIES.orientation]: Extract<LetterType, "J" | "P">;
};

export const LetterDichotomies: Record<Dichotomy, [LetterType, LetterType]> = {
  [DICHOTOMIES.energy]: [LETTER_TYPES.I, LETTER_TYPES.E],
  [DICHOTOMIES.information]: [LETTER_TYPES.N, LETTER_TYPES.S],
  [DICHOTOMIES.decision]: [LETTER_TYPES.T, LETTER_TYPES.F],
  [DICHOTOMIES.orientation]: [LETTER_TYPES.J, LETTER_TYPES.P],
};

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
    dichotomy: DICHOTOMIES.decision,
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

export default LetterType;
