export const PERSONALITY_TYPES = {
  INFJ: "INFJ",
  INFP: "INFP",
  ENFJ: "ENFJ",
  ENFP: "ENFP",
  INTJ: "INTJ",
  INTP: "INTP",
  ENTJ: "ENTJ",
  ENTP: "ENTP",
  ISFJ: "ISFJ",
  ISFP: "ISFP",
  ESTJ: "ESTJ",
  ESTP: "ESTP",
  ISTJ: "ISTJ",
  ISTP: "ISTP",
  ESFJ: "ESFJ",
  ESFP: "ESFP",
} as const;

export type PersonalityType = keyof typeof PERSONALITY_TYPES;
