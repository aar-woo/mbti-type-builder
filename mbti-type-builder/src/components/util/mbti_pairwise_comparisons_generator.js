// mbti_comparisons_generator.js

const fs = require("fs");

// List of all 16 MBTI types
const mbtiTypes = [
  "INFJ",
  "INFP",
  "ENFJ",
  "ENFP",
  "INTJ",
  "INTP",
  "ENTJ",
  "ENTP",
  "ISFJ",
  "ISFP",
  "ESFJ",
  "ESFP",
  "ISTJ",
  "ISTP",
  "ESTJ",
  "ESTP",
];

// Helper: Check if letters at a position are opposite
function isOppositeLetter(letterA, letterB) {
  const opposites = {
    I: "E",
    E: "I",
    N: "S",
    S: "N",
    T: "F",
    F: "T",
    J: "P",
    P: "J",
  };
  return opposites[letterA] === letterB;
}

// Given two types, produce similarities, differences, summary, and rating
function compareTypes(type1, type2) {
  // Count overlap and track positions
  let overlapCount = 0;
  let samePrefs = [];
  let oppositeAll = true;
  for (let i = 0; i < 4; i++) {
    const a = type1[i],
      b = type2[i];
    if (a === b) {
      overlapCount++;
      samePrefs.push(a);
      oppositeAll = false;
    } else {
      // if not same, check if opposite; if any not opposite, exactOpposite=false
      if (!isOppositeLetter(a, b)) {
        oppositeAll = false;
      }
    }
  }

  // Determine compatibility rating
  let compatibility;
  if (oppositeAll) {
    compatibility = "Bad";
  } else if (overlapCount === 3) {
    compatibility = "Great";
  } else if (overlapCount === 2) {
    compatibility = "Good";
  } else if (overlapCount === 1) {
    compatibility = "Fine";
  } else {
    compatibility = "Bad";
  }

  // Build similarity sentence
  let similarities = "";
  if (samePrefs.length > 0) {
    const prefs = samePrefs.map((letter) => {
      switch (letter) {
        case "I":
          return "both are Introverted";
        case "E":
          return "both are Extraverted";
        case "N":
          return "both focus on Intuition";
        case "S":
          return "both focus on Sensing";
        case "T":
          return "both use Thinking in decisions";
        case "F":
          return "both use Feeling in decisions";
        case "J":
          return "both prefer Judging (structure)";
        case "P":
          return "both prefer Perceiving (flexibility)";
      }
    });
    similarities =
      `They share ${samePrefs.length} preference${
        samePrefs.length > 1 ? "s" : ""
      }: ` +
      prefs.join(", ") +
      ".";
  } else {
    similarities =
      "They have no letter preferences in common, making their basic approaches quite different.";
  }

  // Summary: combine
  const summary = `Because of these overlaps and contrasts, they can ${
    compatibility === "Great"
      ? "often understand each other deeply"
      : compatibility === "Good"
      ? "find common ground while needing occasional adjustment"
      : compatibility === "Fine"
      ? "get along but may need effort to bridge differences"
      : "face notable friction unless they work on understanding each other with conscious effort"
  }.`;

  return {
    types: [type1, type2],
    similarities,
    samePrefs,
    summary,
    compatibility,
  };
}

// Generate all unique pairs
let comparisons = [];
for (let i = 0; i < mbtiTypes.length; i++) {
  for (let j = i + 1; j < mbtiTypes.length; j++) {
    comparisons.push(compareTypes(mbtiTypes[i], mbtiTypes[j]));
  }
}

// Write to JSON file
fs.writeFileSync(
  "mbti_pairwise_comparisons.json",
  JSON.stringify(comparisons, null, 2),
  "utf-8"
);
console.log(
  "Generated mbti_pairwise_comparisons.json with",
  comparisons.length,
  "entries."
);
