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
  info: string;
};

export const letterInfo: Record<LetterType, LetterInfo> = {
  I: {
    letter: LETTER_TYPES.I,
    dichotomy: DICHOTOMIES.energy,
    title: "Introvert",
    subtext: "In-depth relationships.",
    info: "Introverts are energized by spending time alone or in small, meaningful conversations. They often prefer reflection and depth over stimulation.",
  },
  E: {
    letter: LETTER_TYPES.E,
    dichotomy: DICHOTOMIES.energy,
    title: "Extrovert",
    subtext: "Energetic connections.",
    info: "Extraverts thrive in social environments and are energized by interacting with others. They tend to think out loud, enjoy collaboration, and are often seen as outgoing and expressive. ",
  },
  N: {
    letter: LETTER_TYPES.N,
    dichotomy: DICHOTOMIES.information,
    title: "Intuitive",
    subtext: "Abstract thinking.",
    info: "Intuitive types focus on patterns, possibilities, and abstract ideas. They’re future-oriented, imaginative, and often more interested in the “big picture” than immediate facts or details.",
  },
  S: {
    letter: LETTER_TYPES.S,
    dichotomy: DICHOTOMIES.information,
    title: "Sensing",
    subtext: "Concrete details.",
    info: "Sensing types trust their five senses and focus on what is real and present. They are grounded in facts, enjoy practical solutions, and often prefer familiar methods over new theories.",
  },
  T: {
    letter: LETTER_TYPES.T,
    dichotomy: DICHOTOMIES.decision,
    title: "Thinking",
    subtext: "Logical decisions.",
    info: "Thinkers make decisions using logic and objective analysis. They value fairness and consistency, often prioritizing truth over tact in their communication.",
  },
  F: {
    letter: LETTER_TYPES.F,
    dichotomy: DICHOTOMIES.decision,
    title: "Feeling",
    subtext: "Emotional awareness.",
    info: "Feelers base decisions on personal values and the impact on others. They prioritize harmony and empathy, and often seek to understand emotional nuance in relationships.",
  },
  J: {
    letter: LETTER_TYPES.J,
    dichotomy: DICHOTOMIES.orientation,
    title: "Judging",
    subtext: "Structured planning.",
    info: "Judging types prefer structure, order, and firm plans. They like making decisions, setting goals, and sticking to routines that provide a sense of control and predictability.",
  },
  P: {
    letter: LETTER_TYPES.P,
    dichotomy: DICHOTOMIES.orientation,
    title: "Perceiving",
    subtext: "Flexible approach.",
    info: "Perceivers are flexible, spontaneous, and open to new experiences. They prefer keeping options open, adapting as they go rather than locking into a rigid plan.",
  },
};
export default LetterType;
